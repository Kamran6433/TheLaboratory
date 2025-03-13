<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => !!userStore.getUser);
</script>

<template>
  <div class="full-width">
    <section class="landing">
      <v-container
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
                Welcome to Your App
              </h1>
              <p class="text-xl md:text-2xl mb-4">
                A powerful and flexible platform for your needs.
              </p>
              <div class="d-flex justify-center">
                <v-btn
                  to="/sign-up"
                  size="x-large"
                  color="primary"
                  variant="elevated"
                  elevation="0"
                  prepend-icon="mdi-checkbox-marked-circle"
                  class="px-6 py-3 rounded-xl"
                >
                  <p class="text-lg md:text-xl">
                    Get Started
                  </p>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center align-center"
          >
            <!-- Replace with your own hero image -->
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              class="max-w-full h-auto object-contain"
            >
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <v-col
            v-for="(feature, index) in features"
            :key="index"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card
              class="feature-card h-100 rounded-xl pa-6"
            >
              <v-icon
                size="48"
                :color="feature.color"
                class="mb-4"
              >
                {{ feature.icon }}
              </v-icon>
              <h1 class="text-2xl font-bold mb-4">
                {{ feature.title }}
              </h1>
              <p class="text-lg">
                {{ feature.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section v-if="!isLoggedIn" class="cta-section">
      <v-container
        class="max-width-1600 py-16 px-4 px-lg-12"
      >
        <v-row
          align="center"
          justify="center"
          class="bg-primary pa-12 rounded-xl"
        >
          <v-col
            cols="12"
            md="8"
            class="text-center"
          >
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h1>
            <p class="text-lg md:text-xl text-white mb-6">
              Join us today and discover how our platform can help you achieve your goals.
            </p>
            <v-btn
              to="/sign-up"
              size="x-large"
              color="white"
              variant="elevated"
              elevation="0"
              class="px-6 py-3 text-lg font-semibold rounded-xl"
            >
              Sign up for Free
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'mdi-shield-check',
          color: 'primary',
          title: 'Secure',
          description: 'Your data is protected with industry-standard security protocols and encryption.'
        },
        {
          icon: 'mdi-rocket-launch',
          color: 'success',
          title: 'Fast',
          description: 'Optimized performance ensures quick load times and responsive user experience.'
        },
        {
          icon: 'mdi-responsive',
          color: 'info',
          title: 'Responsive',
          description: 'Access our platform from any device with a seamless experience across all screen sizes.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.landing {
  background-color: #f5f8ff;
}

.landing-hero {
  background-color: #ffffff;
  box-shadow: 0 4px 6px #0000001a;
}

.feature-card {
  background-color: #ffffff;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.cta-section {
  background-color: #f8f9fa;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
</style>