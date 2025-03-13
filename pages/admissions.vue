<script setup>
import FAQ from '~/components/FAQ.vue';
import PaymentCard from './components/PaymentCard.vue';
import GetInTouch from '~/components/GetInTouch.vue';
import AdmissionsServices from '~/components/AdmissionsServices.vue';
import AdmissionsInfo from '~/components/AdmissionsInfo.vue';
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
        <div class="content-wrapper px-4">
          <AdmissionsServices />
        </div>
      </v-container>
    </section>

    <section class="payment">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <PaymentCard />
      </v-container>
    </section>

    <section class="info">
      <v-container
        class="box1 pa-0"
        fluid
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <AdmissionsInfo />
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
          <CallToAction startColor="#ffefd4" endColor="#ffe1ae"/>
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
  background-image: url('@/assets/main_images/admissions-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.payment {
  background-image: url('@/assets/main_images/payment-admissions.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.info {
  background-image: url('@/assets/main_images/admissions-info.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>