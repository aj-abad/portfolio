<template>
  <section
    class="secondary h-100vh w-100vw position-relative px-16 py-8"
    :style="`overflow: hidden; border-bottom: 2px solid var(--bg-dark) !important; left: ${offset}vw; top: ${offset}vh; z-index: 300;`"
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
              hint="This is required"
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
              auto-grow
              label="Your Message"
              class="restrict-height"
            />
          </div>
          <v-btn
            elevation="0"
            x-large
            block
            style="style: border-radius: 0; background: var(--bg-dark)"
            dark
            >Send</v-btn
          >
        </div>
      </v-col>
      <v-col class="col-6 pl-8">
        <div
          class="h-100"
          style="border: 2px solid var(--bg-dark);display: grid; grid-template-columns: 50% 50%; grid-template-rows: 50% 50%"
        >
          <a
            target="_blank"
            rel="noopener"
            class="link pa-4 d-flex  align-center justify-center"
          >
            <h6>
              EMAIL
              <svg viewBox="0 0 11 11" class="arrow">
                <polygon
                  points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
                />
              </svg>
            </h6>
          </a>

            <a
            target="_blank"
            rel="noopener"
            class="link pa-4 d-flex align-center justify-center"
          >
            <h6>
              LINKEDIN
              <svg viewBox="0 0 11 11" class="arrow">
                <polygon
                  points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
                />
              </svg>
            </h6>
          </a>

            <a
            target="_blank"
            rel="noopener"
            class="link pa-4 d-flex align-center justify-center"
          >
            <h6>
              GITHUB
              <svg viewBox="0 0 11 11" class="arrow">
                <polygon
                  points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
                />
              </svg>
            </h6>
          </a>

            <a
            target="_blank"
            rel="noopener"
            class="link pa-4 d-flex justify-center align-center"
          >
            <h6>
              BEHANCE
              <svg viewBox="0 0 11 11" class="arrow">
                <polygon
                  points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
                />
              </svg>
            </h6>
          </a>
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
    },
    focusOutHandler() {
      this.$store.commit("toggleLock", { locked: false });
    },
  },
};
</script>

<style lang="stylus" scoped>
.contact-content {
  border-bottom: 2px solid var(--bg-dark);
}


.link {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none !important;
  display: block;
  text-transform: uppercase;

  &:nth-of-type(odd) {
    border-right: 2px solid var(--bg-dark);
  }

  &:first-of-type{
    border-bottom: 2px solid var(--bg-dark)
  }
  &:nth-of-type(2){
    border-bottom: 2px solid var(--bg-dark)
  }



  &:hover {
    background: var(--bg-dark);
    color: var(--text-light);

    & svg {
      opacity: 1;

      & polygon {
        fill: var(--text-light);
      }
    }
  }
}

.arrow {
  height: 0.6em;
  opacity: 0.87;

  &.right {
    transform: rotate(45deg);
  }
}
</style>