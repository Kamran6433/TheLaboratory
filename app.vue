<template>
  <v-app>
    <v-main>
      <NuxtLayout>
        <NuxtPage
          :transition="{
            name: 'page',
            mode: 'out-in'
          }"
        />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>

<style>
.v-main {
background-color: #fafafa;
}
</style>