<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFirebaseStorage } from '~/composables/useFirebaseStorage';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => !!userStore.getUser);
const route = useRoute();
const router = useRouter();
const { listPapers, getPDFUrl } = useFirebaseStorage();

const activeTab = ref('foundation');
const foundationPapers = ref([]);
const higherPapers = ref([]);
const isLoading = ref(true);
const error = ref(null);

const subjectName = computed(() => {
  const params = route.params.id.split('-');
  if (params.length < 2) return 'Unknown Subject';
  const [subject, board] = params;
  return `${subject.charAt(0).toUpperCase() + subject.slice(1)} (${board.toUpperCase()})`;
});

const processPapers = (papers) => {
  const processedPapers = {};
  papers.forEach(paper => {
    const date = paper.split(' ')[1];
    const type = paper.includes('MS') ? 'ms' : 'qp';
    if (!processedPapers[date]) {
      processedPapers[date] = { date };
    }
    processedPapers[date][type] = paper;
  });
  return Object.values(processedPapers);
};

const selectPaper = async (paper, level) => {
  if (!paper) return; // Guard clause in case the paper doesn't exist
  try {
    const params = route.params.id.split('-');
    const [education, subject, type, board, examPaper, examPaperNumber] = params;
    const path = `${education}/${subject}/${type}/${board}/${examPaper}${examPaperNumber}/${level}/${paper}`;
    const pdfUrl = await getPDFUrl(path);
    
    // Open the PDF in a new window automatically
    window.open(pdfUrl, '_blank');
  } catch (error) {
    console.error("Error loading PDF: ", error);
    alert("Failed to load the PDF. Please try again.");
  }
};

onMounted(async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const params = route.params.id.split('-');
    if (params.length < 6) throw new Error('Invalid paper ID');
    const [education, subject, type, board, examPaper, examPaperNumber] = params;
    
    // Fetch foundation papers
    const foundationPath = `${education}/${subject}/${type}/${board}/${examPaper}${examPaperNumber}/foundation`;
    const foundationPapersRaw = await listPapers(foundationPath);
    foundationPapers.value = processPapers(foundationPapersRaw);

    // Fetch higher papers
    const higherPath = `${education}/${subject}/${type}/${board}/${examPaper}${examPaperNumber}/higher`;
    const higherPapersRaw = await listPapers(higherPath);
    higherPapers.value = processPapers(higherPapersRaw);
  } catch (err) {
    console.error("Error in onMounted:", err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="past-paper-background">
    <v-container
      fluid
      class="max-width-1600 py-24 px-4 px-lg-12"
    >
      <!-- Header Section -->
      <div class="text-center mb-8">
        <div class="blur-effect pa-6 rounded-xl text-white mx-auto">
          <v-btn
            color="white"
            variant="flat"
            class="mb-6"
            prepend-icon="mdi-arrow-left"
            @click="$router.push('/past-papers-selector')"
          >
            Back to Selection
          </v-btn>

          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ subjectName }} Past Papers
          </h1>
        </div>
      </div>

      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="d-flex justify-center align-center py-12"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        />
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="text-center py-12"
      >
        <v-alert
          type="error"
          class="mb-6"
        >
          {{ error }}
        </v-alert>
        <v-btn
          color="primary"
          @click="$router.push('/pastpapersselector')"
        >
          Return to paper selection
        </v-btn>
      </div>

      <!-- Content -->
      <template v-else>
        <v-card
          class="papers-card rounded-xl overflow-hidden"
        >
          <v-tabs
            v-model="activeTab"
            color="primary"
            grow
            class="papers-tabs"
          >
            <v-tab
              value="foundation"
              class="text-lg font-semibold"
            >
              Foundation
            </v-tab>
            <v-tab
              value="higher"
              class="text-lg font-semibold"
            >
              Higher
            </v-tab>
          </v-tabs>

          <v-window v-model="activeTab">
            <v-window-item
              v-for="type in ['foundation', 'higher']"
              :key="type"
              :value="type"
            >
              <v-card-text class="pa-6">
                <v-list
                  v-if="type === 'foundation' ? foundationPapers.length : higherPapers.length"
                  class="papers-list"
                >
                  <v-list-item
                    v-for="paper in (type === 'foundation' ? foundationPapers : higherPapers)"
                    :key="paper.date"
                    class="paper-item mb-4 rounded-lg"
                  >
                    <template #prepend>
                      <v-icon
                        size="large"
                        color="primary"
                        class="mr-4"
                      >
                        mdi-file-document-outline
                      </v-icon>
                    </template>

                    <v-list-item-title class="text-h6 font-weight-bold mb-2">
                      {{ paper.date }}
                    </v-list-item-title>

                    <template #append>
                      <div class="d-flex gap-2">
                        <v-btn
                          v-if="paper.qp"
                          color="primary"
                          variant="outlined"
                          @click="selectPaper(paper.qp, type)"
                        >
                          Question Paper
                        </v-btn>
                        <v-btn
                          v-if="paper.ms"
                          color="success"
                          variant="outlined"
                          @click="selectPaper(paper.ms, type)"
                        >
                          Mark Scheme
                        </v-btn>
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
                <v-alert
                  v-else
                  type="info"
                  class="mt-4"
                >
                  No {{ type }} papers available.
                </v-alert>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </template>
    </v-container>
  </section>

  <section v-if="!isLoggedIn">
    <v-container
      class="pa-0"
      fluid
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <div class="content-wrapper">
        <CallToAction
          start-color="#0f172a"
          end-color="#f6f6ff"
        />
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.past-paper-background {
  background-image: url('@/assets/main_images/past-paper-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.blur-effect {
  background-color: #fafafa3a !important;
  backdrop-filter: blur(10px);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.papers-card {
  background: white;
  box-shadow: 0 4px 6px #0000001a;
  border: 1px solid #e5e7eb;
}

.papers-tabs {
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}

.paper-item {
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.paper-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px #0000001a;
  background-color: #f8fafc;
}

.max-width-1600 {
  max-width: 1600px;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 2rem;
}
</style>