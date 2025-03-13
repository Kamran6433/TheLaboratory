<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { useNuxtApp, useRouter } from '#app';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import { signOut } from 'firebase/auth';

const nuxtApp = useNuxtApp();
const userStore = useUserStore();
const { getUser } = storeToRefs(userStore);
const router = useRouter();

const drawer = ref(false);
const profileMenu = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const userLoggedIn = computed(() => !!getUser.value);

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Contact', link: '/contact' },
];

const redirect = (path) => {
  router.push(path);
};

const logout = async () => {
  if (process.client) {
    const auth = nuxtApp.$firebaseAuth;
    try {
      await signOut(auth);
      userStore.clearUser();
      profileMenu.value = false;
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="navbar-wrapper">
    <v-app-bar
      id="navbar"
      app
      fixed
      elevation="0"
      height="90"
      :class="['blur-effect', { 'scrolled': isScrolled }]"
    >
      <div class="max-width-1600 w-100">
        <v-container
          class="width-100 max-width-1600 px-4"
          fluid
        >
          <v-row
            no-gutters
          >
            <v-col cols="auto">
              <nuxt-link
                to="/"
                class="logo"
              >
                <img
                  src="~/assets/main_images/logo.png"
                  alt="Logo"
                  class="logo-image"
                >
              </nuxt-link>
            </v-col>
            <v-spacer />
            <v-col
              cols="auto"
              class="d-flex justify-end"
            >
              <div class="toolbar flex">
                <v-toolbar-items class="flex justify-between items-center hidden-sm-and-down">
                  <v-chip
                    v-for="item in menuItems"
                    :key="item.title"
                    size="large"
                    color="black"
                    variant="text"
                    :to="item.link"
                    class="m-4"
                  >
                    <p class="text-lg">
                      {{ item.title }}
                    </p>
                  </v-chip>
                  <v-chip
                    v-if="!userLoggedIn" 
                    size="large"
                    color="black"
                    variant="outlined"
                    class="m-4"
                    @click="redirect('login')"
                  >
                    <p class="text-lg">
                      Login
                    </p>
                  </v-chip>
                  <v-menu
                    v-else
                    v-model="profileMenu"
                    :offset="[40, 35]"
                    transition="slide-y-transition"
                  >
                    <template #activator="{ props }">
                      <v-chip
                        v-bind="props"
                        size="large"
                        color="black"
                        variant="outlined"
                        class="m-4"
                      >
                        <p class="text-lg">
                          Profile
                        </p>
                      </v-chip>
                    </template>

                    <v-list>
                      <v-list-item>
                        <v-list-item-title class="d-flex justify-center">
                          <v-chip
                            to="/profile/user" 
                            size="large"
                            color="black"
                            variant="outlined"
                            class="mb-2"
                            @click="profileMenu = false"
                          >
                            <p class="text-lg">
                              View Profile
                            </p>
                          </v-chip>
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title class="d-flex justify-center">
                          <v-chip
                            size="large"
                            color="black"
                            variant="outlined"
                            @click="logout"
                          >
                            <p class="text-lg">
                              Logout
                            </p>
                          </v-chip>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-toolbar-items>
              </div>
              <v-app-bar-nav-icon
                class="hidden-md-and-up"
                width="50"
                tile
                :ripple="false"
                :flat="true"
                :active-color="undefined"
                :base-color="undefined"
                :elevation="0"
                variant="plain"
                @click.stop="drawer = !drawer"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
  </header>

  <v-dialog
    v-model="drawer"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card
      class="d-flex flex-column"
      style="background-color: #f5f5f5; height: 100%;"
    >
      <v-list
        class="pa-6 d-flex flex-column"
        style="height: 100%;"
      >
        <div class="d-flex justify-space-between mb-10">
          <nuxt-link
            to="/"
            class="logo"
          >
            <img
              src="~/assets/main_images/logo.png"
              alt="Logo"
              class="logo-image"
            >
          </nuxt-link>
          <v-btn
            icon
            @click.stop="drawer = !drawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      
        <div
          class="d-flex flex-column align-center"
          style="margin-top: 5%;"
        >
          <v-chip
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            size="large"
            color="black"
            variant="text"
            class="mb-4"
            @click.stop="drawer = !drawer"
          >
            <p class="text-lg">
              {{ item.title }}
            </p>
          </v-chip>
        </div>
            
        <div class="d-flex flex-column align-center">
          <v-chip
            v-if="!userLoggedIn"
            to="/login"
            size="large"
            color="black"
            variant="outlined"
            class="mb-4"
            @click.stop="drawer = !drawer"
          >
            <p class="text-lg">
              Login
            </p>
          </v-chip>
        
          <v-chip
            v-else
            to="/profile/user"
            size="large"
            color="black"
            variant="outlined"
            class="mb-4"
            @click.stop="drawer = !drawer"
          >
            <p class="text-lg">
              View Profile
            </p>
          </v-chip>
        
          <v-chip
            v-if="userLoggedIn"
            size="large"
            color="black"
            variant="outlined"
            class="mb-4"
            @click="logout"
            @click.stop="drawer = !drawer"
          >
            <p class="text-lg">
              Logout
            </p>
          </v-chip>
        </div>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.blur-effect {
  background-color: #fafafacc !important;
  backdrop-filter: blur(10px);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.blur-effect.scrolled {
  box-shadow: 0 4px 6px #0000001a;
}

#navbar {
  width: 100%;
  background-color: #fafafa;
  border-bottom: #0000001f 1px solid;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.toolbar {
  height: 100%;
  width: 100%;
}

.v-toolbar-items {
  max-width: 100%;
}

.v-app-bar-nav-icon {
  transition: none !important;
  width: 100%;
  height: 100%;
}
</style>