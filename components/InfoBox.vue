<template>
  <v-container
    fluid
    class="max-width-1600 py-24 px-4 px-lg-12"
  >
    <v-row
      class="mb-12"
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <img
          src="~/assets/3d_images/Saly-14.png"
          alt="Subject Illustration"
          class="max-w-full h-auto object-contain"
          style="max-width: 400px"
        >
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center"
      >
        <div class="landing text-black pa-6 rounded-xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Expert tutoring in your chosen subjects
          </h1>
          <p class="text-xl md:text-2xl">
            Our experienced, background-checked tutors specialise in key academic subjects and exam preparation.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">
          We teach
        </h1>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mb-12"
    >
      <v-col
        v-for="(level, index) in academicLevels"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card
          class="subjects"
          :class="['level-card pa-6 rounded-xl text-center h-100', level.bgClass]"
        >
          <v-icon
            size="48"
            class="mb-4"
          >
            {{ level.icon }}
          </v-icon>
          <h1 class="text-2xl font-bold mb-2">
            {{ level.name }}
          </h1>
          <p class="text-base md:text-lg">
            {{ level.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Subjects
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(subject, index) in subjects"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          class="subjects"
          :class="['subject-card pa-4 rounded-xl text-center', subject.bgClass]"
        >
          <v-icon
            size="36"
            class="mb-2"
          >
            {{ subject.icon }}
          </v-icon>
          <h1 class="text-xl font-semibold">
            {{ subject.name }}
          </h1>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const academicLevels = [
  {
    name: 'A-Levels',
    icon: 'mdi-school',
    description: 'Advanced level qualifications for university entry',
    bgClass: 'bg-light-blue-lighten-5'
  },
  {
    name: 'GCSE',
    icon: 'mdi-book-open-variant',
    description: 'General Certificate of Secondary Education preparation',
    bgClass: 'bg-purple-lighten-5'
  },
];

const subjects = [
  { name: 'Mathematics', icon: 'mdi-calculator', bgClass: 'bg-pink-lighten-5' },
  { name: 'Chemistry', icon: 'mdi-flask', bgClass: 'bg-amber-lighten-5' },
  { name: 'Physics', icon: 'mdi-atom', bgClass: 'bg-blue-lighten-5' },
  { name: 'Biology', icon: 'mdi-dna', bgClass: 'bg-green-lighten-5' },
  { name: 'English', icon: 'mdi-book', bgClass: 'bg-deep-purple-lighten-5' },
  { name: 'Computer Science', icon: 'mdi-laptop', bgClass: 'bg-cyan-lighten-5' },
  { name: 'Economics', icon: 'mdi-chart-line', bgClass: 'bg-orange-lighten-5' },
  { name: 'History', icon: 'mdi-clock-time-four', bgClass: 'bg-brown-lighten-5' }
];
</script>
<style scoped>
.landing {
  background-color: #caffb1;
}

.subjects {
  box-shadow: 0 4px 6px #0000001a;
  border: 1px solid #00000020;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 2rem;
}

.bg-light-blue-lighten-5 { background-color: #e1f5fe; }
.bg-purple-lighten-5 { background-color: #f3e5f5; }
.bg-yellow-lighten-5 { background-color: #fffde7; }
.bg-pink-lighten-5 { background-color: #fce4ec; }
.bg-amber-lighten-5 { background-color: #fff8e1; }
.bg-blue-lighten-5 { background-color: #e3f2fd; }
.bg-green-lighten-5 { background-color: #e8f5e9; }
.bg-deep-purple-lighten-5 { background-color: #ede7f6; }
.bg-cyan-lighten-5 { background-color: #e0f7fa; }
.bg-orange-lighten-5 { background-color: #fff3e0; }
.bg-brown-lighten-5 { background-color: #efebe9; }
</style>