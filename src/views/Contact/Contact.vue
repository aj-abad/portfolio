<template>
  <section
    class="secondary h-100vh w-100vw position-relative px-16 py-8"
    :style="`border-bottom: 2px solid var(--bg-dark) !important; left: ${offset}vw; top: ${offset}vh; z-index: 300;`"
  >
    <v-row>
      <v-col class="col-6">
        <h1 class="display mb-4">Contact</h1>
        <p class="mb-8">
          I'm always looking to work with amazing people. Hit me up to tell me
          about your project or just say hi.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-6 pr-8" style="border-right: 2px solid var(--bg-dark)">
        <div class="anti-spam-form">
          <div class="mb-2">
            <v-text-field
              @focus="focusHandler()"
                 @focusout="focusOutHandler()"
              class="mb-0"
              outlined
              label="Your Name"
            />
          </div>
          <div class="mb-2">
            <v-text-field
              @focus="focusHandler()"
              @focusout="focusOutHandler()"
              outlined
              label="Your Email"
            />
          </div>
          <div class="mb-2">
            <v-textarea
              @focus="focusHandler()"
              @focusout="focusOutHandler()"
              outlined
              label="Your Message"
            />
          </div>
          <v-btn>Send</v-btn>
        </div>
      </v-col>
      <v-col class="col-6 pl-8">
        <div>
          <p>Email</p>
        </div>
        <div>
          <p>LinkedIn</p>
        </div>
        <div>
          <p>GitHub</p>
        </div>
        <div>
          <p>Dribbble</p>
        </div>
        <div>
          <p>Behance</p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactProgress: Number,
  },
  computed: {
    offset() {
      const p = (this.contactProgress / 0.5) * 100;
      return p - 100;
    },
  },
  methods: {
    focusHandler() {
      this.$store.commit("toggleLock", { locked: true });
      console.log(document.activeElement);
    },
    focusOutHandler() {
      this.$store.commit("toggleLock", { locked: false });
      console.log(document.activeElement);
    },
  },
};
</script>

<style lang="stylus" scoped>
.contact-content {
  border-bottom: 2px solid var(--bg-dark);
}
</style>