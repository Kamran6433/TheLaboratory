<template>
  <v-container
    class="max-width-1600 py-12 px-4 px-lg-12"
    fluid
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <img
          src="~assets/3d_images/Saly-3.png"
          aspect-ratio="16/9"
          class="rounded-lg"
        >
        <template #placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-4"
            />
          </v-row>
        </template>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          How we started
        </h1>
        <p class="text-lg md:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, vero eligendi error odit eius accusantium expedita impedit perspiciatis fuga soluta doloremque aspernatur quas architecto, dicta labore id perferendis iste quam.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>