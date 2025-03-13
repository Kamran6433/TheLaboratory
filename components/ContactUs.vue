<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import FirebaseAuthentication from '~/components/FirebaseAuthentication.vue'; // Adjust the path as needed

const userStore = useUserStore();
const { getIsAuthenticated, getUser } = storeToRefs(userStore);

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const queryType = ref([]);
const queryTypes = [
  { label: "I need help with payment", value: "payment_help" },
  { label: "I need help with my account", value: "account_help" },
  { label: "Report an issue regarding Studybyte's services", value: "service_issue" },
  { label: "This is a bug report", value: "bug_report" }
];

const handleSubmit = async () => {
  await sendMessage();
};

const sendMessage = async () => {
  try {
    const messageData = {
      name: getUser.value ? getUser.value.name : name.value,
      email: getUser.value ? getUser.value.email : email.value,
      phone: getUser.value ? getUser.value.number : phone.value,
      message: message.value,
      queryTypes: queryType.value
    };

    if (getIsAuthenticated.value && getUser.value.uid) {
      messageData.userId = getUser.value.uid;
    }

    console.log('Sending message data:', messageData);

    const response = await fetch('/api/users/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Server response:', result);

    if (result.success) {
      message.value = '';
      queryType.value = [];
      alert('Message sent successfully!');
    } else {
      throw new Error(result.message || 'Unknown error occurred');
    }
  } catch (error) {
    console.error('Detailed error:', error);
    alert(`Failed to send message: ${error.message}`);
  }
};
</script>

<!-- <template>
  <v-container
    class="bg-gray-100 py-16"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <v-card class="contact-us pa-8 rounded-xl bg-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            Contact Us
          </h2>
          <v-form
            v-if="!getIsAuthenticated"
            class="space-y-4"
            @submit.prevent="handleSubmit"
          >
            <v-text-field
              v-model="name"
              label="Full Name"
              required
              :rules="[v => !!v || 'Name is required']"
              variant="outlined"
              class="text-base md:text-lg"
            />
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              required
              :rules="[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid'
              ]"
              variant="outlined"
              class="text-base md:text-lg"
            />
            <v-text-field
              v-model="phone"
              label="Phone Number"
              required
              :rules="[v => !!v || 'Phone number is required']"
              variant="outlined"
              class="text-base md:text-lg"
            />
            <v-card-text class="pa-0 mb-4">
              <p class="text-lg md:text-xl font-medium mb-2">
                How can we help you?
              </p>
              <v-checkbox
                v-for="(item, index) in queryTypes"
                :key="index"
                v-model="queryType"
                :label="item.label"
                :value="item.value"
                class="mb-2 text-base md:text-lg"
                hide-details
              />
            </v-card-text>
            <v-textarea
              v-model="message"
              label="Message"
              required
              :rules="[v => !!v || 'Message is required']"
              variant="outlined"
              rows="4"
              class="text-base md:text-lg mb-6"
            />
            <v-btn
              type="submit"
              color="primary"
              block
              height="48"
              class="text-base md:text-lg font-bold py-3"
            >
              Send Message
            </v-btn>
          </v-form>
          <div
            v-else
            class="space-y-6"
          >
            <p class="text-xl md:text-2xl font-medium mb-4">
              Please leave your message below:
            </p>
            <v-card-text class="pa-0 mb-4">
              <p class="text-lg md:text-xl font-medium mb-2">
                How can we help you?
              </p>
              <v-checkbox
                v-for="(item, index) in queryTypes"
                :key="index"
                v-model="queryType"
                :label="item.label"
                :value="item.value"
                class="mb-2 text-base md:text-lg"
                hide-details
              />
            </v-card-text>
            <v-textarea
              v-model="message"
              label="Message"
              required
              :rules="[v => !!v || 'Message is required']"
              variant="outlined"
              rows="4"
              class="text-base md:text-lg mb-6"
            />
            <v-btn
              color="primary"
              block
              height="48"
              class="text-base md:text-lg font-bold py-3"
              @click="sendMessage"
            >
              Send Message
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<template>
  <v-container
    fluid
    class="max-width-1600 py-16 px-4 px-lg-12 d-flex align-center min-height-100"
  >
    <v-card
      class="contact-card pa-6 rounded-xl w-100"
    >
      <v-card-title>
        <h1 class="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h1>
      </v-card-title>
      <v-card-text>
        <!-- Your existing form code -->
        <v-form
          v-if="!getIsAuthenticated"
          class="space-y-4"
          @submit.prevent="handleSubmit"
        >
          <v-text-field
            v-model="name"
            label="Full Name*"
            required
            :rules="[v => !!v || 'Name is required']"
            variant="outlined"
            class="mb-4"
            dense
          />
          <v-text-field
            v-model="email"
            label="Email*"
            type="email"
            required
            :rules="[
              v => !!v || 'Email is required',
              v => /.+@.+\..+/.test(v) || 'Email must be valid'
            ]"
            variant="outlined"
            class="mb-4"
            dense
          />
          <v-text-field
            v-model="phone"
            label="Phone Number"
            variant="outlined"
            class="mb-4"
            dense
          />
              
          <p class="text-lg font-medium mb-4">
            How can we help you?
          </p>
          <div class="checkbox-group mb-4">
            <v-checkbox
              v-for="(item, index) in queryTypes"
              :key="index"
              v-model="queryType"
              :label="item.label"
              :value="item.value"
              class="mb-2"
              hide-details
              dense
            />
          </div>
              
          <v-textarea
            v-model="message"
            label="Message*"
            required
            :rules="[v => !!v || 'Message is required']"
            variant="outlined"
            rows="4"
            class="mb-6"
            dense
          />
              
          <v-btn
            type="submit"
            color="#7C3AED"
            block
            x-large
            class="mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
          >
            Send Message
          </v-btn>
        </v-form>

        <div
          v-else
          class="space-y-6"
        >
          <p class="text-xl font-medium mb-4">
            Please leave your message below:
          </p>
              
          <p class="text-lg font-medium mb-4">
            How can we help you?
          </p>
          <div class="checkbox-group mb-4">
            <v-checkbox
              v-for="(item, index) in queryTypes"
              :key="index"
              v-model="queryType"
              :label="item.label"
              :value="item.value"
              class="mb-2"
              hide-details
              dense
            />
          </div>
              
          <v-textarea
            v-model="message"
            label="Message"
            required
            :rules="[v => !!v || 'Message is required']"
            variant="outlined"
            rows="4"
            class="mb-6"
            dense
          />
              
          <v-btn
            color="#7C3AED"
            block
            x-large
            class="mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
            @click="sendMessage"
          >
            Send Message
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.contact-card {
  box-shadow: 0 4px 6px #0000001a;
}
</style>