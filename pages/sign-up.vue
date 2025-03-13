<script setup>
import SignUp from '~/components/SignUp.vue';
definePageMeta({
  middleware: ['guest']
});
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
        <SignUp />
      </v-container>
    </section>
  </div>
</template>