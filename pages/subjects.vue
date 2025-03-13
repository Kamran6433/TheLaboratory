<script setup>
import InfoBox from '~/components/InfoBox.vue';
import SubjectItems from '~/components/SubjectItems.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => !!userStore.getUser);
</script>

<template>
  <div class="full-width">
    <section class="info-box">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div class="content-wrapper">
          <InfoBox />
        </div>
      </v-container>
    </section>

    <section class="one-to-one">
      <v-container
        class="pa-0"
        fluid
      >
        <div class="content-wrapper">
          <BookTuition />
        </div>
      </v-container>
    </section>

    <section class="subject-items">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div class="content-wrapper">
          <SubjectItems />
        </div>
      </v-container>
    </section>

    <section v-if="!isLoggedIn">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div class="content-wrapper">
          <CallToAction
            start-color="#dffcd2"
            end-color="#caffb1"
          />
        </div>
      </v-container>
    </section>

    <section class="">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <FAQ />
      </v-container>
    </section>

    <section class="">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <GetInTouch />
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.info-box {
  background-color: #ebfee2;
}

.subject-items {
  background-image: url('@/assets/main_images/squiggle2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>