<template>
  <NavBar />
  <v-container id="error-container" class="text-center py-15">
    <div class="mb-10 py-15">
      <div v-if="error.statusCode === 404">
        <h1>Page not found :(</h1>
        <p>We're sorry, this page is not available. Error 404.</p>
      </div>

      <div v-else>
        <h1>Something weird happened</h1>
        <p>We will fix this.</p>
      </div>
    </div>
    <span>Go back to <NuxtLink to="/">Home page</NuxtLink></span>
  </v-container>
  <MainFooter />
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