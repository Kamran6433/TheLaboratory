<script setup>
import LogIn from '~/components/LogIn.vue';
definePageMeta({
  middleware: ['guest']
});
</script>

<template>
  <div class="full-width">
    <section class="auth-section">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <LogIn />
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.auth-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
}
</style>