<template>
  <v-container
    fluid
    class="max-width-1600 py-12 px-4 px-lg-12"
  >
    <h1 class="text-center text-3xl md:text-4xl font-bold mb-6">
      Frequently Asked Questions
    </h1>
    <p class="text-center text-base md:text-lg mb-8">
      Feel free to reach out if your question is not answered here.
    </p>
    
    <v-expansion-panels 
      multiple 
      variant="popout"
      collapse-icon="mdi-minus" 
      expand-icon="mdi-plus"
      elevation="0"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h1 class="text-lg md:text-xl">
            What do I get with this?
          </h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <h1 class="text-lg md:text-xl">
            Is it easy to setup?
          </h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <h1 class="text-lg md:text-xl">
            Bla bla bla?
          </h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <h1 class="text-lg md:text-xl">
            I have other questions!
          </h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-base md:text-lg">
            We're here to help! Please reach out to our support team for any additional questions or concerns.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<style>
.v-expansion-panel-title {
  font-weight: bold;
}

.v-expansion-panel {
  /* background-color: #defcd1; */
  box-shadow: 0 4px 6px #0000001a;
  border-radius: 20px;
}

.v-expansion-panels {
  background: transparent;
}
</style>