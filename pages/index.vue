<script>
import FirebaseAuthentication from '~/components/FirebaseAuthentication.vue';
import LandingSection from './components/LandingSection.vue'
import BookTuition from './components/BookTuition.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import FAQ from './components/FAQ.vue'
import Fact1 from './components/Fact1.vue'
import CallToAction from '~/components/CallToAction.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useUserStore } from '~/stores/user';

export default {
  setup() {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    const authDialogVisible = ref(false);
    const backgroundImage = ref('')

    const updateBackgroundImage = () => {
      const width = window.innerWidth
      if (width < 640) {
        backgroundImage.value = '/assets/main_images/landing-small.png'
      } else if (width < 1280) {
        backgroundImage.value = '/assets/main_images/landing-medium.png'
      } else {
        backgroundImage.value = '/assets/main_images/landing-large.png'
      }
    }

    const showAuthDialog = () => {
      authDialogVisible.value = true;
    };

    const closeAuthDialog = () => {
      authDialogVisible.value = false;
    };

    onMounted(() => {
      updateBackgroundImage()
      window.addEventListener('resize', updateBackgroundImage)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateBackgroundImage)
    })

    return {
      isLoggedIn,
      authDialogVisible,
      showAuthDialog,
      closeAuthDialog,
      backgroundImage,
      updateBackgroundImage,
    };
  },
  data() {
    return {
      platform: "web",
      facts: [
        { value: "50%", description: "Higher change of getting an offer when using Topgrad" },
        { value: "200+", description: "Student opportunities added every month" },
        { value: "98%", description: "Students satisfied with the Topgrad experience" }
      ],
    }
  },

}
</script>

<template>
  <div class="full-width">
    <section class="landing">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div class="content-wrapper">
          <LandingSection />
        </div>
      </v-container>
    </section>

    <v-dialog
      v-model="authDialogVisible"
      max-width="600px"
      @click:outside="closeAuthDialog"
    >
      <FirebaseAuthentication 
        @close="closeAuthDialog" 
        @click="showAuthDialog('signup')"
      />
    </v-dialog>

    <section class="one-to-one">
      <v-container
        class="pa-0"
        fluid
      >
        <div class="content-wrapper">
          <BookTuition />
        </div>
      </v-container>
    </section>

    <section class="why-choose-us">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <WhyChooseUs />
      </v-container>
    </section>

    <!-- <section class="">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <Fact1 />
      </v-container>
    </section> -->

    <section v-if="!isLoggedIn">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div class="content-wrapper">
          <CallToAction />
        </div>
      </v-container>
    </section>

    <section class="">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <FAQ />
      </v-container>
    </section>

    <section class="">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <GetInTouch />
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.landing {
  background-color: #ffb4a3;
  width: 100%;
  margin: 0;
  padding: 0;
}

.why-choose-us {
  background-image: url('@/assets/main_images/squiggle.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
