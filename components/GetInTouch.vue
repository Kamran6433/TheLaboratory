<template>
  <v-container
    class="max-width-1600 py-12 px-4 px-lg-12"
    fluid
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-card class="help-card pa-4">
          <v-card-text class="d-flex flex-column justify-center align-center text-center">
            <h1 class="text-lg md:text-xl font-bold">
              Have any questions?
              <span
                class="font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300"
                @click="getInTouch"
              >
                Get in Touch
              </span>
            </h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const getInTouch = () => {
  router.push('/company');
};
</script>

<style scoped>
.help-card{
  background: #fff;
  border-radius: 50px;
  padding: 2rem;
  box-shadow: 0 4px 6px #0000001a;
  text-align: left;
  transition: border 0.3s ease; 
  border: 2px solid transparent;
}

.help-card:hover {
  border: 2px solid #8C5896;
}
</style>