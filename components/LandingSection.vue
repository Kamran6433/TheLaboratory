<template>
  <v-container
    fluid
    class="max-width-1600 py-24 px-4 px-lg-12"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center"
      >
        <div class="landing-hero text-black pa-6 rounded-xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Get into your dream University
          </h1>
          <p class="text-xl md:text-2xl mb-4">
            A*/A guaranteed with our expert tutors.
          </p>
          <div class="d-flex justify-center">
            <v-btn
              to="/sign-up"
              size="x-large"
              color="#a3eeff"
              variant="elevated"
              elevation="0"
              prepend-icon="mdi-checkbox-marked-circle"
              class="px-6 py-3 rounded-xl"
            >
              <p class="text-lg md:text-xl">
                Sign up for Free
              </p>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <!-- Placeholder for hero image -->
        <img
          src="~/assets/3d_images/landing.png"
          alt="Landing Image"
          class="max-w-full h-auto object-contain"
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card
          elevation="0"
          class="landing-cards h-full rounded-xl text-center pa-6"
        >
          <v-card-title class="mb-4 justify-center">
            <h1 class="text-3xl md:text-4xl font-bold">
              For
              <router-link
                to="/tutoring"
                class="underline text-inherit"
              >
                Parents
              </router-link>
            </h1>
          </v-card-title>
          <v-card-text>
            <p class="text-xl md:text-2xl">
              Safe and secure tutoring for your child. Our tutors are background-checked and experienced in teaching.
            </p>
            <!-- Placeholder for creator image -->
            <img
              src="~/assets/3d_images/Saly-7.png"
              alt="Landing Image"
              class="max-w-full max-h-full object-contain"
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card
          elevation="0"
          class="landing-cards h-full rounded-xl text-center pa-6"
        >
          <v-card-title class="mb-4 justify-center">
            <h1 class="text-3xl md:text-4xl font-bold">
              For
              <router-link
                to="/admissions"
                class="underline text-inherit"
              >
                Students
              </router-link>
            </h1>
          </v-card-title>
          <v-card-text>
            <p class="text-xl md:text-2xl">
              Effective admissions support to get into your dream University. 1-to-1 turtoring for many subjects.
            </p>
            <!-- Placeholder for hodler image -->
            <img
              src="~/assets/3d_images/Saly-17.png"
              alt="Landing Image"
              class="max-w-full max-h-full object-contain"
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style scoped>
.landing-hero {
  background-color: #ffc3b6;
}

.text-decoration-underline {
  text-decoration: underline;
}

.text-inherit {
  color: inherit;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 2rem;
}
</style>