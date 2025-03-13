<script setup>
import { defineProps, computed, toRef } from 'vue';

const props = defineProps({
  messages: {
    type: Array, 
    required: true
  }  
});

const messagesRef = toRef(props, 'messages'); 

const splitMessages = computed(() => {
  return messagesRef.value.map((x) => {
    const paymentIntentRe = /(pi_(\S*)\b)/
    const paymentIntentMatch = x.match(paymentIntentRe)
    return {
      ...(paymentIntentMatch && {paymentIntent: paymentIntentMatch[0]}),
      content: x.replace(paymentIntentRe, '') || x
    }
  });
})

const addDashboardLinks = (paymentIntent) => {
  return `https://dashboard.stripe.com/test/payments/${paymentIntent}`;
};
</script>

<template>
  <div
    id="messages"
    role="alert"
    class="stripe-messages"
  >
    <span
      v-for="message in splitMessages"
      :key="message.content"
      class="message-item"
    >
      > {{ message.content }}
      <a
        v-if="message.paymentIntent"
        :href="addDashboardLinks(message.paymentIntent)"
        target="_blank"
        rel="noopener noreferrer"
        class="payment-link"
      >{{ message.paymentIntent }}</a>
      <br>
    </span>
  </div>
</template>

<style scoped>
.stripe-messages {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-family: monospace;
  max-height: 200px;
  overflow-y: auto;
}

.message-item {
  display: block;
  margin-bottom: 0.5rem;
}

.payment-link {
  color: #6772e5;
  text-decoration: underline;
  margin-left: 0.25rem;
}
</style>