<template>
  <v-container
    fluid
    class="max-width-1600 py-24 px-4 px-lg-12"
  >
    <div class="text-center mb-8">
      <div class="blur-effect pa-6 rounded-xl text-white mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Past Papers Selection
        </h1>
        <p
          class="text-lg md:text-xl mb-12 mx-auto"
          style="max-width: 800px"
        >
          Access our comprehensive collection of past papers from leading examination boards, 
          covering all major subjects at both GCSE and A-Level standards.
        </p>
    
        <v-btn-toggle
          v-model="level"
          mandatory
          class="level-toggle pa-2 rounded-xl bg-gray-100 d-inline-flex"
        >
          <v-btn
            v-for="lvl in ['gcse', 'alevel']"
            :key="lvl"
            :value="lvl"
            class="text-lg font-semibold px-8 py-3 rounded-lg"
            :color="level === lvl ? 'primary' : ''"
            variant="flat"
          >
            {{ lvl === 'gcse' ? 'GCSE' : 'A-Level' }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <v-row class="mb-4">
      <v-col
        cols="12"
        class="text-white pa-6"
      >
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
            class="blur-effect rounded-xl pa-6"
          >
            <h1 class="text-2xl md:text-3xl font-bold mb-4">
              {{ level === 'gcse' ? 'GCSE Past Papers' : 'A-Level Past Papers' }}
            </h1>
            <p class="text-lg mb-6">
              {{ 
                level === 'gcse' 
                  ? 'Prepare for your GCSE exams with our extensive collection of past papers, mark schemes, and examiner reports.'
                  : 'Get ready for your A-Level examinations with comprehensive past papers and detailed marking guidelines.'
              }}
            </p>
            <div class="stats d-flex gap-6">
              <div class="stat">
                <h1 class="text-3xl font-bold mb-1">
                  12+
                </h1>
                <p class="text-white">
                  Subjects
                </p>
              </div>
              <div class="stat">
                <h1 class="text-3xl font-bold mb-1">
                  5+
                </h1>
                <p class="text-white">
                  Exam Boards
                </p>
              </div>
              <div class="stat">
                <h1 class="text-3xl font-bold mb-1">
                  200+
                </h1>
                <p class="text-white">
                  Papers
                </p>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center"
          >
            <img
              src="~/assets/3d_images/Saly-16.png"
              alt="Level Image"
              style="width: 100%; max-width: 400px;"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="subject in subjects"
        :key="subject"
        cols="12"
        sm="6"
        md="4"
        class="mb-6"
      >
        <v-card
          class="subject-card h-100 rounded-xl"
          :class="`border-${subjectColors[subject]}`"
        >
          <div
            class="subject-header pa-6"
            :style="{ backgroundColor: `${subjectColors[subject]}15` }"
          >
            <h1
              class="text-xl font-bold"
              :style="{ color: subjectColors[subject] }"
            >
              {{ subject }}
            </h1>
          </div>

          <v-card-text class="pa-6">
            <v-chip-group
              v-model="selectedTypes[subject]"
              class="mb-4 justify-center"
              column
            >
              <v-chip
                v-for="type in getSubjectTypes(subject)"
                :key="type"
                :value="type"
                :color="subjectColors[subject]"
                variant="outlined"
                class="ma-1"
                filter
              >
                <p>
                  {{ type }}
                </p>
              </v-chip>
            </v-chip-group>

            <div
              v-if="selectedTypes[subject]"
              class="selected-content"
            >
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="board in getExamBoards(subject, selectedTypes[subject])"
                  :key="board.name"
                >
                  <v-expansion-panel-title>
                    <h1>
                      {{ board.name }}
                    </h1>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="paper-list">
                      <div
                        v-for="paper in board.papers"
                        :key="paper"
                        class="paper-item pa-3 d-flex justify-space-between align-center"
                      >
                        <p>{{ paper }}</p>
                        <v-btn
                          :color="subjectColors[subject]"
                          variant="text"
                          density="comfortable"
                          @click="openPastPaper(level, subject, selectedTypes[subject], board.name, paper)"
                        >
                          View Paper
                        </v-btn>
                      </div>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { gcseSubjects, aLevelSubjects } from '~/subjectData.js';

const router = useRouter();
const level = ref('gcse');
const selectedTypes = reactive({});
const selectedBoards = reactive({});

const subjectColors = computed(() => ({
  Biology: '#4CAF50',
  Chemistry: '#2196F3',
  Physics: '#FF9800',
  'Combined Science': '#9C27B0',
  'Computer Science': '#00BCD4',
  Maths: '#F44336',
  'English Language': '#3F51B5',
  'English Literature': '#009688',
  Economics: '#FFC107',
  Geography: '#4CAF50',
  History: '#2196F3',
  Psychology: '#FF9800',
}));

const subjects = computed(() => {
  return level.value === 'gcse' ? Object.keys(gcseSubjects) : Object.keys(aLevelSubjects);
});

const getSubjectTypes = (subject) => {
  const subjectData = level.value === 'gcse' ? gcseSubjects[subject] : aLevelSubjects[subject];
  return subjectData.map(type => type.name);
};

const getExamBoards = (subject, type) => {
  const subjectData = level.value === 'gcse' ? gcseSubjects[subject] : aLevelSubjects[subject];
  const typeData = subjectData.find(t => t.name === type);
  return typeData ? typeData.examBoards : [];
};

const onTypeSelect = (subject) => {
  selectedTypes[subject] = selectedTypes[subject];
};

const openPastPaper = (level, subject, type, board, paper) => {
  const id = `${level}-${subject}-${type}-${board}-${paper}`.toLowerCase().replace(/\s+/g, '-');
  router.push(`/pastpapers/${id}`);
};
</script>

<style scoped>
.landing-card {
  background: #f6f5ff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px #0000001a;
}

.subject-card {
  box-shadow: 0 4px 6px #0000001a;
  transition: all 0.3s ease;
}

.subject-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px #0000001a;
}

.chip-group-center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.paper-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.paper-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.blur-effect {
  background-color: #fafafa3a !important;
  backdrop-filter: blur(10px);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 2rem;
}
</style>