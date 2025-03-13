<template>
  <v-app>
    <NavBar />
    <v-main class="pa-0">
      <slot />
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue' 
import MainFooter from '~/components/MainFooter.vue'

export default {
  components: {
    NavBar, MainFooter
  }
}
</script>

<style>
.v-app {
  background-color: #fafafa;
}

.max-width-1600 {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}
</style>