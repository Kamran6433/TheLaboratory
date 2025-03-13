<template>
  <div class="full-width">
    <section class="past-paper-selector">
      <v-container
        fluid
        class="pa-0"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <PastPaperSelection />
      </v-container>
    </section>

    <section>
      <v-container
        fluid
        class="pa-0"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <FAQ />
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
  </div>
</template>

<script setup>
import PastPaperSelection from '~/components/PastPaperSelection.vue';
import FAQ from '~/components/FAQ.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => !!userStore.getUser);
</script>

<style scoped>
.past-paper-selector {
  background-image: url('@/assets/main_images/past-paper-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>