<script setup>
import AboutUs from '~/components/AboutUs.vue';
import ContactUs from '~/components/ContactUs.vue';
import HowWeStarted from '~/components/HowWeStarted.vue';
</script>

<template>
  <div class="full-width">
    <section class="">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <AboutUs />
      </v-container>
    </section>

    <section class="">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <HowWeStarted />
      </v-container>
    </section>

    <section class="">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <ContactUs />
      </v-container>
    </section>

    <section class="">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <CallToAction
          start-color="#cf9d7d"
          end-color="#d1c5c7"
        />
      </v-container>
    </section>
  </div>
</template>