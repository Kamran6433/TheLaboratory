<template>
  <v-container class="max-width-1600 py-24 px-4 px-lg-12">
    <v-row
      align="center"
      justify="space-between"
      class="mb-12"
      no-gutters
    >
      <v-col
        cols="12"
        md="5"
        order="md1"
        order-md="2"
        class="text-center mb-6 mb-md-0"
      >
        <img
          src="~/assets/3d_images/Saly-4.png"
          alt="Tutoring session"
          class="rounded-circle max-width-100"
        >
      </v-col>
      <v-col
        cols="12"
        md="6"
        order="md2"
        order-md="1"
        class="admission-info rounded-xl pa-8 text-center text-md-right"
      >
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Exciting learning experiences
        </h1>
        <p class="text-base md:text-lg">
          Our tutoring experience focuses on fostering curiosity and engagement. We strive to create ideal matches between students and educators to maximize learning potential.
        </p>
        <!-- <v-btn
          color="primary"
          x-large
          to="/admissions"
        >
          Get Started
        </v-btn> -->
      </v-col>
    </v-row>

    <v-divider class="my-12" />

    <v-row
      align="center"
      justify="space-between"
      class="mb-12"
      no-gutters
    >
      <v-col
        cols="12"
        md="5"
        class="text-center mb-6 mb-md-0"
      >
        <img
          src="~/assets/3d_images/Saly-9.png"
          alt="Happy students"
          class="max-width-100"
        >
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="admission-info rounded-xl pa-8 text-center text-md-left"
      >
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Educational Institutions
        </h1>
        <p class="text-base md:text-lg">
          Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner.
        </p>
        <!-- <v-btn
          color="primary"
          x-large
          to="/admissions"
        >
          Get Started
        </v-btn> -->
      </v-col>
    </v-row>

    <v-divider class="my-0" />

    <v-row
      align="center"
      justify="space-between"
      no-gutters
    >
      <v-col
        cols="12"
        md="5"
        order="md1"
        order-md="2"
        class="text-center mb-6 mb-md-0"
      >
        <img
          src="~/assets/3d_images/Saly-10.png"
          alt="Happy students"
          class="max-width-100"
        >
      </v-col>
      <v-col
        cols="12"
        md="6"
        order="md2"
        order-md="1"
        class="admission-info rounded-xl pa-8 text-center text-md-right"
      >
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Educational Institutions
        </h1>
        <p class="text-base md:text-lg">
          Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner.
        </p>
        <!-- <v-btn
          color="primary"
          x-large
          to="/admissions"
        >
          Get Started
        </v-btn> -->
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    rating: 4.5,
  }),
}
</script>

<style scoped>
.admission-info {
  background-color: white;
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 3rem;
}
</style>