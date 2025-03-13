<!-- <template>
  <v-container
    class="features max-width-1600 px-4 px-lg-12 py-16"
    fluid
  >
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Why choose our service?
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </v-col>
    </v-row>
    
    <v-row
      justify="center"
      class="mx-n4"
    >
      <v-col
        v-for="feature in features"
        :key="feature.title"
        cols="12" 
        sm="6" 
        md="4" 
        class="feature-card pa-4 ma-4 rounded-xl blur-effect"
      >
        <div class="p-6 h-full">
          <v-img
            :src="feature.icon"
            class="feature-icon mb-4"
            width="40"
            height="40"
          />
          <h3 class="text-lg md:text-xl font-semibold mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm md:text-base text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<template>
  <v-container
    fluid
    class="features max-width-1600 px-4 px-lg-12 py-16"
  >
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Why choose our service?
        </h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </v-col>
    </v-row>
    
    <v-row class="justify-center">
      <v-col
        v-for="feature in features"
        :key="feature.title"
        cols="12" 
        sm="6" 
        md="4"
        class="px-4"
      >
        <v-card
          class="feature-card h-100 rounded-xl"
        >
          <v-card-text class="pa-4">
            <div class="feature-icon-wrapper mb-4">
              <v-img
                :src="feature.icon"
                class="feature-icon"
                width="40"
                height="40"
                contain
              />
            </div>
            <h1 class="text-2xl md:text-3xl font-bold mb-3">
              {{ feature.title }}
            </h1>
            <p class="text-base md:text-lg">
              {{ feature.description }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cashIcon from '~/assets/design_images/cash.svg';
import chartLineIcon from '~/assets/design_images/chart-line.svg';
import checkboxIcon from '~/assets/design_images/checkbox.svg';
import moodHappyIcon from '~/assets/design_images/mood-happy.svg';
import rocketIcon from '~/assets/design_images/rocket.svg';
import vocabularyIcon from '~/assets/design_images/vocabulary.svg';

export default {
  data() {
    return {
      features: [
        {
          icon: moodHappyIcon,
          title: 'Friendly',
          description: 'Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non.'
        },
        {
          icon: checkboxIcon,
          title: 'Reliable',
          description: 'Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.'
        },
        {
          icon: vocabularyIcon,
          title: 'Experienced',
          description: 'Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.'
        },
        {
          icon: rocketIcon,
          title: 'Fast',
          description: 'Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.'
        },
        {
          icon: cashIcon,
          title: 'Affordable',
          description: 'Reprehenderit fugiat elit in do ipsum ut pariatur.'
        },
        {
          icon: chartLineIcon,
          title: 'Scalable',
          description: 'Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.features {
  text-align: center;
}

.features-subtitle {
  color: #4a90e2;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.features-description {
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #666;
}

.feature-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px #0000001a;
  text-align: left;
}

.feature-icon {
  width: 40px;  
  height: 40px; 
  margin-bottom: 1rem;
}
</style>