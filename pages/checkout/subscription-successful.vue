<template>
  <div class="subscription-successful">
    <h1>Subscription Successful!</h1>
    <p>Thank you for subscribing. Your subscription was successful.</p>
    <router-link to="/">
      Go to Home Page
    </router-link>
  </div>
</template>

<style scoped>
.subscription-successful {
  text-align: center;
  margin-top: 50px;
}

.subscription-successful h1 {
  color: #4CAF50;
}

.subscription-successful p {
  font-size: 18px;
  margin: 20px 0;
}

.subscription-successful a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>