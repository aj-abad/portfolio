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
    <div class="about-content h-100 flex-grow-1 py-16 px-16">
      <v-row>
        <v-col class="col-8">
          <h1
            class="display mb-6 not-in-view"
            data-scroll
            data-scroll-class="in-view"
            data-scroll-offset="12.5%"
          >
            Who Am I?
          </h1>
          <p class="not-in-view" data-scroll data-scroll-class="in-view" data-scroll-offset="12.5%" style="transition-delay: 0.4s">
            I'm AJ, a full-stack web developer based in the Philippines. With
            over {{ experience }} years of experience, I have worked with all
            sorts of clients using a wide variety of tools and techniques.
          </p>
          <p>I am currently an information systems student working freelance.</p>
        </v-col>
      </v-row>
    </div>
    <h4 class="display" id="my-approach">My Approach</h4>
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
      return date.getFullYear() - 2016;
    },
  },
};
</script>

<style lang="stylus" scoped>
.not-in-view {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.6s, transform 0.6s;
}

.in-view {
  transform: none !important;
  opacity: 1 !important;
}

#about-me-illustration {
  min-width: calc(100vw / 12 * 4);
}

@media (max-width: 1600px) {
  #about-me-illustration {
    min-width: calc(100vw / 12 * 6);
  }
}

#my-approach{
  position absolute
  top 0
  right 0
  transform: rotate(-90deg)
}
</style>