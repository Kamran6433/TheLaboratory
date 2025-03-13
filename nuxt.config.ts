// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from 'fs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_TITLE = "Your App Name";
const DEFAULT_DESCRIPTION = `Your app description goes here.`;
const DEFAULT_LOGO = "assets/main_images/logo.png";
const DEFAULT_IMAGE = "assets/main_images/logo.png";
const DEFAULT_URL = "https://yourdomain.com";
const httpsConfig = process.env.NODE_ENV === 'development' && fs.existsSync(path.resolve(__dirname, 'localhost.pem')) ? {
  key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
} : undefined;
const getFirebaseAdminCredentials = () => {
  try {
    if (process.env.FIREBASE_ADMIN_CREDENTIALS_PATH) {
      return JSON.parse(
        readFileSync(process.env.FIREBASE_ADMIN_CREDENTIALS_PATH, 'utf-8')
      );
    }
    return undefined;
  } catch (error) {
    console.warn('Failed to load Firebase admin credentials:', error);
    return undefined;
  }
};

export default defineNuxtConfig({
  alias: {
    '~/': './'
  },

  modules: [
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    "@nuxt/image",
    '@nuxt/content',
    '@vite-pwa/nuxt',
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    "@formkit/auto-animate",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    "@nuxtjs/stylelint-module",
    "@nuxt/content",
    "nuxt-security",
    "@vee-validate/nuxt",
    "vuetify-nuxt-module",
    '@unlok-co/nuxt-stripe',
  ],

  router: {
    middleware: ['auth']  // Global middleware
  },

  stripe: {
    server: {
      key: process.env.STRIPE_SECRET_KEY,
    },
    client: {
      key: process.env.STRIPE_PUBLISHABLE_KEY,
    }
  },

  app: {
    head: {
      title: DEFAULT_TITLE,
      titleTemplate: '%s | Your App',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: DEFAULT_DESCRIPTION },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'Your keywords here' },
        { name: 'author', content: 'Your Company' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: DEFAULT_URL },
        { property: 'og:title', content: DEFAULT_TITLE },
        { property: 'og:description', content: DEFAULT_DESCRIPTION },
        { property: 'og:image', content: DEFAULT_LOGO },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: DEFAULT_LOGO },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
      ]
    },
    baseURL: '/',
  },

  runtimeConfig: {
    private: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
      FIREBASE_ADMIN_CREDENTIALS: getFirebaseAdminCredentials(),
    },
    public: {
      STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
      APP_DOMAIN: process.env.APP_DOMAIN,
    }
  },

  nitro: {
    externals: {
      inline: ['~/utils/firebase', 'firebase-admin']
    },
    routeRules: {
      '/api/**': { cors: true, headers: { 'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE' } },
      '/api/stripe-webhook': { 
        cors: false,
        headers: {
          'Access-Control-Allow-Origin': 'https://api.stripe.com',
          'Access-Control-Allow-Headers': 'stripe-signature',
        },
      },
    },
    preset: 'node-server',
  },

  performance: {
    gzip: true
  },

  build: {
    transpile: ['vuetify', 'firebase', '@stripe/stripe-js'],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  eslint: {
    lintOnStart: false,
    overrideConfigFile: '.eslintrc.cjs'
  },

  stylelint: {
    lintOnStart: false,
    overrideConfigFile: '.stylelintrc.cjs'
  },

  devtools: { enabled: true },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify'],
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  },

  pwa: {
    manifest: {
      name: 'Your App Name',
      short_name: 'YourApp',
      lang: 'en'
    }
  },

  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/css/style.css'],

  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/firebase-auth.client.js',
  ],

  render: {
    csp: {
      policies: {
        'frame-src': ['https://firebasestorage.googleapis.com', 'https://js.stripe.com', 'https://hooks.stripe.com'],
        'script-src': ["'self'", 'https://js.stripe.com'],
      }
    }
  },

  server: {
    waitForRestart: 5000,
    https: httpsConfig
  },

  compatibilityDate: '2024-09-30',

  sourcemap: {
    server: true,
    client: true
  },

  generate: {
    static: false
  },

  ssr: true,
})