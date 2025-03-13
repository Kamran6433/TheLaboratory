<template>
  <v-container
    class="max-width-1600 py-12 px-4 px-lg-12"
    fluid
  >
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-weight-bold mb-4">
        Stay on track with our teaching methods
      </h1>
      <p
        class="text-xl md:text-2xl mx-auto"
        style="max-width: 800px;"
      >
        Our comprehensive approach combines expert tutoring, continuous assessment, and personalised learning plans 
        to ensure every student reaches their full potential in their chosen subjects.
      </p>
    </div>

    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="feature-item"
      >
        <div class="blur-effect h-100 text-center pa-4 rounded-xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            Personalised Learning Plans
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Our tutors create customised study plans tailored to your learning style and academic goals. 
            We identify areas for improvement and develop strategies to enhance your understanding and performance
            in each subject.
          </p>
          <img
            src="~/assets/3d_images/Saly-4.png"
            alt="Personalized Learning"
            class="feature-image mx-auto"
          >
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
        class="feature-item"
      >
        <div class="blur-effect h-100 text-center pa-4 rounded-xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            Regular Progress Monitoring
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Track your academic journey with continuous assessment and feedback. Our tutors provide detailed 
            progress reports and adjust teaching methods to ensure you're consistently improving and meeting 
            your academic targets.
          </p>
          <img
            src="~/assets/3d_images/Saly-5.png"
            alt="Progress Monitoring"
            class="feature-image mx-auto"
          >
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
        class="feature-item"
      >
        <div class="blur-effect h-100 text-center pa-4 rounded-xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            Interactive Learning Experience
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Engage in dynamic, technology-enhanced learning sessions that make complex concepts easier to understand. 
            Our interactive approach combines traditional teaching methods with modern digital tools for optimal learning outcomes.
          </p>
          <img
            src="~/assets/3d_images/Saly-6.png"
            alt="Interactive Learning"
            class="feature-image mx-auto"
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style scoped>
.blur-effect {
  background-color: #fafafacc !important;
  backdrop-filter: blur(5px);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.feature-image {
  max-height: 250px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-top: 2rem;
}
</style>