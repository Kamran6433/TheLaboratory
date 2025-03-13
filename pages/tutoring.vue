<script setup>
import SubscriptionCard from '~/components/SubscriptionCard.vue';
import FAQ from '~/components/FAQ.vue';
import GetInTouch from '~/components/GetInTouch.vue';
import TutorInfo from '~/components/TutorInfo.vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => !!userStore.getUser);
</script>

<template>
  <div class="full-width">
    <section class="landing">
      <v-container
        class="pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <TutorInfo />
      </v-container>
    </section>

    <section class="payment">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <v-row
          class="box5 py-20"
          justify="center"
          justify-md="space-between"
          justify-xl="center"
          align="center"
          align-lg="start"
          no-gutters
        >
          <SubscriptionCard />
        </v-row>
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
          <CallToAction startColor="#edf3f8" endColor="#dceefd"/>
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
.landing {
  background-image: url('@/assets/main_images/tutoring-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.payment {
  background-image: url('@/assets/main_images/payment-tutoring.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>