<template>
  <v-footer>
    <v-container class="width-100 max-width-1600 py-12">
      <v-divider class="my-4 border-opacity-100" />

      <v-row>
        <v-col
          cols="12"
          md="3"
          class="mb-6 d-flex justify-center justify-md-start"
        >
          <nuxt-link to="/">
            <img
              style="width: 108px"
              src="~/assets/main_images/logo.png"
              alt="Logo"
            >
          </nuxt-link>
        </v-col>

        <v-col
          cols="6"
          md="2"
        >
          <h1 class="text-lg md:text-xl font-weight-bold mb-4">
            Company
          </h1>
          <v-list
            density="compact"
            nav
            class="transparent pa-0"
          >
            <v-list-item
              v-for="item in companyLinks"
              :key="item.title"
              :to="item.link"
              link
              class="pa-0"
            >
              <p class="text-sm md:text-base">
                {{ item.title }}
              </p>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="6"
          md="2"
        >
          <h1 class="text-lg md:text-xl font-weight-bold mb-4">
            Resources
          </h1>
          <v-list
            density="compact"
            nav
            class="pa-0 transparent"
          >
            <v-list-item
              v-for="item in resourceLinks"
              :key="item.title"
              :to="item.link"
              link
              class="pa-0"
            >
              <p class="text-sm md:text-base">
                {{ item.title }}
              </p>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="6"
          md="2"
        >
          <h1 class="text-lg md:text-xl font-weight-bold mb-4">
            Legal
          </h1>
          <v-list
            density="compact"
            nav
            class="pa-0 transparent"
          >
            <v-list-item
              v-for="item in legalLinks"
              :key="item.title"
              :to="item.link"
              link
              class="pa-0"
            >
              <p class="text-sm md:text-base">
                {{ item.title }}
              </p>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="6"
          md="2"
        >
          <h1 class="text-lg md:text-xl font-weight-bold mb-4">
            Connect With Us
          </h1>
          <p class="mb-4 text-sm md:text-base">
            contact@yourdomain.com
          </p>
          <div class="d-flex">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.title"
              icon
              class="mr-2 white--text"
            >
              <a
                :href="icon.link"
                target="_blank"
              >
                <v-icon>{{ icon.title }}</v-icon>
              </a>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4 border-opacity-100" />

      <v-row
        align="center"
        justify="space-between"
      >
        <v-col
          cols="12"
          md="auto"
        >
          <p class="text-xs md:text-sm text-center text-md-left mb-0">
            © {{ new Date().getFullYear() }} Your Company. All Rights Reserved
          </p>
        </v-col>
        <v-col
          cols="12"
          md="auto"
        >
          <p class="text-xs md:text-sm text-center text-md-right mb-0">
            Made with <v-icon
              color="red"
              small
            >
              mdi-heart
            </v-icon> by Your Team
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    companyLinks: [
      { title: 'About', link: '/about' },
      { title: 'Services', link: '/services' },
      { title: 'Contact', link: '/contact' }
    ],
    resourceLinks: [
      { title: 'Blog', link: '/blog' },
      { title: 'Help Center', link: '/help' },
      { title: 'FAQ', link: '/faq' },
    ],
    legalLinks: [
      { title: 'Privacy Policy', link: '/privacy-policy' },
      { title: 'Terms & Conditions', link: '/terms-and-conditions' },
    ],
    socialIcons: [
      { title: 'mdi-facebook', link: 'https://facebook.com' },
      { title: 'mdi-twitter', link: 'https://x.com' },
      { title: 'mdi-linkedin', link: 'https://linkedin.com' },
    ]
  }),
}
</script>

<style scoped>
.v-list {
  background-color: transparent
}

.v-list-item {
  min-height: 32px;
}

.v-footer {
  width: 100%;
  background-color: #fafafa;
}
</style>