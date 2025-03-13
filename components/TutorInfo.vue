<template>
  <v-container
    class="max-width-1600 py-24 px-4 px-lg-12"
    fluid
  >
    <div>
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-10">
        Learn safely with handpicked and highly-rated tutors.
      </h1>
      <p class="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto">
        As well as performing background checks and getting references, we monitor all our tutors based on reviews, ratings, repeat bookings and more - to keep quality high.
      </p>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in features"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="tutoring-card h-100 d-flex flex-column pa-6 rounded-xl">
            <v-avatar
              :color="item.color"
              size="48"
              class="mb-6"
            >
              <v-icon dark>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            <h1 class="text-xl md:text-2xl font-bold mb-6">
              {{ item.title }}
            </h1>
            <p class="text-lg md:text-xl">
              {{ item.description }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'mdi-shield-check',
          color: 'purple',
          title: 'Enhanced DBS background checks',
          description: 'We conduct thorough background checks and identity verification for all our tutors to ensure the safety and security of our students.'
        },
        {
          icon: 'mdi-account-group',
          color: 'light-green',
          title: 'Two references required',
          description: 'Each tutor must provide two references from past students or parents, ensuring a track record of successful teaching experiences.'
        },
        {
          icon: 'mdi-eye',
          color: 'yellow darken-2',
          title: 'AI-based quality monitoring',
          description: 'Our advanced AI system continuously monitors tutor performance, analyzing reviews, ratings, and booking patterns to maintain high-quality standards.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tutoring-card {
  background-color: #edf3f8;
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 3rem;
}
</style>