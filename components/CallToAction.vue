<!-- <template>
  <div
    class="cta-container py-36 px-4 md:px-12"
    :style="gradientStyle"
  >
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="mb-8 md:mb-0 md:mr-12">
        <img
          src="~/assets/main_images/logo.png"
          alt="Tutoring session"
          class="-my-16"
          style="width: 100%; max-width: 400px;"
        >
      </div>
      <div class="text-content text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">
          Sign-up to Studybyte today for FREE
        </h2>
        <p class="text-lg md:text-xl mb-6">
          Rethink and revamp the ways your learning journey operates to create new and improved solutions
        </p>
        <v-btn
          to="/sign-up"
          size="x-large"
          color="#000000"
          variant="elevated"
          elevation="0"
          prepend-icon="mdi-checkbox-marked-circle"
          class="px-6 py-3 text-lg font-semibold rounded-xl"
        >
          Sign up for Free
        </v-btn>
      </div>
    </div>
  </div>
</template> -->

<template>
  <v-container
    fluid
    :style="gradientStyle"
    class="px-4 md:px-12"
  >
    <v-row
      align="center"
      justify="center"
      class="max-width-1600 mx-auto"
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <img
          src="~/assets/main_images/logo.png"
          alt="Tutoring session"
          class="max-w-full h-auto object-contain"
          style="max-width: 400px;"
        >
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center mb-8"
      >
        <h1 class="text-3xl md:text-4xl font-bold text-black mb-4">
          Sign-up to Studybyte today for FREE
        </h1>
        <p class="text-lg md:text-xl mb-6">
          We are here to help you get the best grades and achieve your academic goals.
        </p>
        <v-btn
          to="/sign-up"
          size="x-large"
          color="#000000"
          variant="elevated"
          elevation="0"
          prepend-icon="mdi-checkbox-marked-circle"
          class="px-6 py-3 text-lg font-semibold rounded-xl align-self-start"
        >
          Sign up for Free
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  startColor: {
    type: String,
    default: '#ffc3b6'
  },
  endColor: {
    type: String,
    default: '#fa9066'
  }
});

const gradientStyle = computed(() => ({
  background: `linear-gradient(to right, ${props.startColor}, ${props.endColor})`
}));
</script>

<style scoped>
.cta-container {
  text-align: center;
}

/* .py-36 {
  padding-top: 6rem;
  padding-bottom: 6rem;
} */
</style>