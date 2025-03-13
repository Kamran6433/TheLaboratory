<template>
  <div class="full-width">
    <section>
      <v-container class="max-width-1600 py-24 px-4 px-lg-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-10 text-center">
          Contact Us
        </h1>
        
        <v-row justify="center">
          <v-col
            cols="12"
            md="8"
            lg="6"
          >
            <v-card class="contact-card pa-6 rounded-xl">
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="form.name"
                  label="Full Name*"
                  required
                  variant="outlined"
                  class="mb-4"
                />
                
                <v-text-field
                  v-model="form.email"
                  label="Email*"
                  type="email"
                  required
                  variant="outlined"
                  class="mb-4"
                />
                
                <v-text-field
                  v-model="form.phone"
                  label="Phone"
                  variant="outlined"
                  class="mb-4"
                />
                
                <v-textarea
                  v-model="form.message"
                  label="Message*"
                  required
                  variant="outlined"
                  rows="4"
                  class="mb-6"
                />
                
                <v-btn
                  type="submit"
                  color="primary"
                  block
                  size="large"
                  class="px-6 py-3 text-lg font-semibold rounded-xl"
                >
                  Send Message
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      // Add your form submission logic here
      
      // Reset form after submission
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      
      // Show success message (implement as needed)
      alert('Message sent successfully!');
    }
  }
}
</script>

<style scoped>
.contact-card {
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}
</style>