<template>
  <div class="max-width-1600 py-0 py-lg-8">
    <section class="box3 hero">
      <v-container
        class="box1 pa-2"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <UserProfile />
      </v-container>
    </section>
  </div>
</template>

<script setup>
import UserProfile from '~/components/UserProfile.vue';
definePageMeta({
  middleware: ['verified']
});
</script>