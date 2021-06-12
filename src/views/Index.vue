<template>
  <main>
    <div id="scroll-container" style="width: 10000vw">
      <welcome-header />

      <section
        class="pa-16 h-100vh w-100vw d-flex align-center"
        data-scroll
        data-scroll-id="about"
      >
        <div class="h-100 d-flex align-center mr-16" style="min-width: 50vmin">
          <AboutMeIllustration
            style="width: 100%; height: auto"
            :progress="aboutProgress"
          />
        </div>
        <div class="h-100 flex-grow-1 pl-16 py-16">
          <h1 class="display mb-6">Who Am I?</h1>
          <p>
            I'm AJ, a full-stack web developer based in the Philippines. I am an
            Information Systems graduate of De La Salle-College of Saint Benilde.
          </p>
          <p>
            I 
          </p>
        </div>
      </section>
      <section class="h-100vh w-100vw">
        <h1>test</h1>
      </section>
    </div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/views/WelcomeHeader";
import AboutMeIllustration from "@/components/AboutMeIllustration";
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
      aboutProgress: 0,
    };
  },
  components: {
    WelcomeHeader,
    AboutMeIllustration,
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#scroll-container"),
        getSpeed: true,
        multiplier: 1,
        direction: "horizontal",
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      this.scroll.on("scroll", this.scrollHandler);
    }, 100);
  },
  methods: {
    scrollHandler(e) {
      this.aboutProgress = e.currentElements.about?.progress;
    },
  },
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>