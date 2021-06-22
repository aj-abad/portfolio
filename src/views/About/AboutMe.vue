<template>
  <section
    class="secondary h-100vh w-100vw d-flex align-center position-relative"
    data-scroll
    data-scroll-id="about"
    style="z-index: 2"
  >
    <AboutMeIllustration
      id="about-me-illustration"
      class="h-100"
      :progress="aboutProgress"
    />
    <div class="about-content h-100 flex-grow-1 py-8 px-16">
      <v-row>
        <v-col class="col-8">
          <div
            class="not-in-view"
            data-scroll
            data-scroll-class="in-view"
            data-scroll-offset="12.5%"
          >
            <h1 class="display mb-6">Who Am I?</h1>
            <p style="transition-delay: 0.4s">
              I'm AJ, a full-stack web developer based in the Philippines. With
              over {{ experience }} years of experience, I have learned all
              sorts of technologies for just about any kind of project.
            </p>
            <p style="transition-delay: 0.8s">
              I am currently an information systems student working freelance.
            </p>
          </div>
        </v-col>
      </v-row>
      <div></div>
      <div></div>
      <div>
        <p>
          Seen enough already?
          <br />
          <a class="display" href="resume" style="font-weight: bold">
            Download my résumé ->
          </a>
          <br />
            <a class="display" href="resume" style="font-weight: bold">
            Talk to me ->
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeIllustration from "@/components/AboutMeIllustration";
export default {
  name: "AboutMe",
  props: {
    aboutProgress: Number,
  },
  components: {
    AboutMeIllustration,
  },
  computed: {
    experience() {
      const date = new Date();
      return date.getFullYear() - 2019;
    },
  },
};
</script>

<style lang="stylus" scoped>
.not-in-view > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s, transform 0.6s;
}

.in-view > * {
  transform: none !important;
  opacity: 1 !important;
}

#about-me-illustration {
  min-width: calc(100vw / 12 * 4);
}

@media (max-width: 1600px) {
  #about-me-illustration {
    min-width: calc(100vw / 12 * 4);
  }
}

.about-content {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}
</style>