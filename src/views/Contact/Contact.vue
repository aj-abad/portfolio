<template>
  <section
    class="secondary h-100vh w-100vw position-relative"
    :style="`left: ${left}vw; top: ${top}vh; z-index: 300;`"
  >
    <div class="w100 h-100 px-16 py-8 contact-content">
      <v-row>
        <v-col class="col-6">
          <h1 class="display mb-4">Contact</h1>
          <p class="mb-8">
            I'm always down to work with new people. Tell me about your project
            by sending me a message.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="col-6 pr-8"
          style="border-right: 2px solid var(--bg-dark)"
        >
          <div class="anti-spam-form">
            <div class="mb-2">
              <v-text-field class="mb-0" outlined label="Your Name" />
            </div>
            <div class="mb-2">
              <v-text-field outlined label="Your Email" />
            </div>
            <div class="mb-2">
              <v-textarea outlined label="Your Message" />
            </div>
            <div class="mb-2">
              <v-text-field outlined label="Verification: what's 60 + 9?" />
            </div>
            <v-btn>Send</v-btn>
          </div>
        </v-col>
        <v-col class="col-6 pl-8">
          <span> LinkedIn </span>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactProgress: Number,
  },
  computed: {
    left() {
      const p = (this.contactProgress / 0.5) * 100;
      return p - 100;
    },
    top() {
      const p = (this.contactProgress / 0.5) * 100;
      return p - 100;
    },
  },
};
</script>

<style lang="stylus" scoped>
.contact-content {
  border-bottom: 2px solid var(--bg-dark);
}
</style>