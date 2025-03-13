<template>
  <v-container
    class="max-width-1600 py-24 px-4 px-lg-12"
    fluid
  >
    <div>
      <h1 class="text-3xl md:text-5xl font-bold text-center mb-10">
        What Studybyte will provide...
      </h1>
      <v-row
        justify="center"
      >
        <v-col
          v-for="(item, index) in services"
          :key="index"
          cols="12"
          md="4"
          class="mb-4 md:mb-0"
        >
          <v-card
            class="service-card blur-effect h-100 d-flex flex-column pa-6 rounded-xl"
          >
            <v-card-title class="d-flex align-center pb-0">
              <v-avatar
                :color="item.iconColor"
                size="48"
                class="mr-4"
              >
                <v-icon dark>
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
              <h1
                class="text-lg md:text-xl font-semibold"
              >
                {{ item.title }}
              </h1>
            </v-card-title>
            <v-card-text class="flex-grow-1 mt-4">
              <p class="text-base md:text-lg">
                {{ item.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- <v-divider class="my-12" /> -->
      
      <v-row
        align="center"
        justify="space-between"
      >
        <v-col
          cols="12"
          md="6"
          class="service-card-second blur-effect pa-6 rounded-xl"
        >
          <p class="text-base md:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime iste velit mollitia perferendis dolore, tempora debitis pariatur facere expedita voluptatibus ipsum, voluptatem veniam recusandae. Veritatis sit quas perspiciatis nemo.
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <img
            src="~/assets/3d_images/Saly-11.png"
            alt="Tutoring session"
            class="rounded-circle max-width-100 -my-16"
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
const services = [
  {
    icon: 'mdi-school',
    iconColor: '#2196F3',
    title: 'Academic Guidance Sessions',
    description: 'Connect with our education specialists to explore your academic path options. We offer insights into various courses and institutions, highlighting key differences. Our team covers a wide range of disciplines, providing comprehensive knowledge about educational opportunities.'
  },
  {
    icon: 'mdi-compass-outline',
    iconColor: '#9C27B0',
    title: 'Admission Support 2024',
    description: "Receive expert guidance on the 2024 admission process, including strategies for dealing with unexpected results. We'll help you navigate your options and find the best path forward, regardless of your current academic standing."
  },
  {
    icon: 'mdi-rocket-launch',
    iconColor: '#FF9800',
    title: 'Boost Your Academic Potential',
    description: 'Our personalized approach offers you a customized roadmap for your academic journey. Get step-by-step guidance on application processes and targeted advice on achieving your required grades, enhancing your chances of success.'
  }
];
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px #0000001a;
}

.service-card-second {
  background-color: white
}

.blur-effect {
  background-color: #fafafacc !important;
  backdrop-filter: blur(5px);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 3rem;
}
</style>