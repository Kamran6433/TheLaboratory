<template>
  <div class="full-width">
    <section class="">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <EmailVerification />
      </v-container>
    </section>
  </div>
</template>

<script>
import EmailVerification from '~/components/EmailVerification.vue';

definePageMeta({
  middleware: ['auth']
});
</script>

