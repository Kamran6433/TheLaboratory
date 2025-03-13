<template>
  <div class="max-width-1600">
    <section class="box3 hero">
      <v-container class="box1 pa-2" data-aos="fade-up" data-aos-duration="300">
        <v-row class="box5 py-20" justify="center" justify-md="space-between" justify-xl="center" align="center" align-lg="start" no-gutters>
          <StripePayment />
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import StripePayment from '~/components/StripePayment.vue';
definePageMeta({
  middleware: ['auth']
})
</script>