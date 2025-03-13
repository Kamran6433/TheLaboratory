<template>
  <v-container>
    <v-card
      class="fact-card pa-2 "
      color="#68ec4d"
      rounded="xl"
    >
      <v-row align="center">
        <v-col cols="auto">
          <v-avatar
            color="#D3FFD3"
            size="64"
            class="mx-2"
          >
            <v-icon
              color="#006400"
              size="32"
            >
              mdi-chart-bar
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col>
          <div class="text-h1 font-weight-bold dark-green-text">
            8h
          </div>
        </v-col>
        <v-col
          cols="12"
          sm
        >
          <div class="text-body-1 dark-green-text">
            It takes just 8 hours of tutoring to move up one 
            <v-icon
              small
              color="#006400"
            >
              mdi-book-open-variant
            </v-icon> GCSE grade.
          </div>
          <div class="text-caption dark-green-text mt-2">
            (On average)
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.fact-card {
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 6px #0000001a;
}

.dark-green-text {
  color: #11463a !important;
}
</style>