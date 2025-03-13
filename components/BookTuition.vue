<!-- <template>
  <v-container
    class="max-width-1600 py-12 px-4 px-lg-12"
    fluid
  >
    <div>
      <h1 class="banner-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        Book one-to-one tuition with our hand-picked and highly-qualified tutors.
      </h1>
      <h2 class="banner-subtext text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
        Help your child achieve their full potential.
      </h2>
    </div>
  </v-container>
</template>

<style scoped>
.banner-text {
  color: #fe753f;
}

.banner-subtext {
  color: #fe753f;
  opacity: 0.7;
}
</style> -->

<template>
  <v-container
    fluid
    class="max-width-1600 pt-12 pb-6 px-4 px-lg-12"
  >
    <v-row>
      <v-col
        cols="12"
        md="7"
        class="d-flex flex-column justify-center"
      >
        <h1 class="banner-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Book one-to-one tuition with our highly-qualified tutors.
        </h1>
        <p class="banner-subtext text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-6">
          Help your child achieve their full potential.
        </p>
        <v-btn
          to="/tutoring"
          color="#ca7ad4"
          x-large
          elevation="0"
          class="align-self-start px-6 rounded-xl mb-4"
        >
          <p class="text-lg md:text-xl">
            Get Started
          </p>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="5"
        class="d-flex justify-center align-center"
      >
        <img
          src="~/assets/3d_images/Saly-15.png"
          alt="Tutoring session"
          class="-my-16"
          style="width: 100%; max-width: 400px;"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.banner-text {
  color: black;
}

.banner-subtext {
  color: black;
  opacity: 0.8;
}

.banner-card {
  background-color: white;
  height: 100%;
}
</style>