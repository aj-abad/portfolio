<template>
  <section
    class="h-100vh w-100vw d-flex align-center"
    data-scroll
    data-scroll-id="about"
    style="z-index: 2"
  >
    <AboutMeIllustration
      style="height: 100vh; width: calc(100vh * 2 / 3)"
      :progress="aboutProgress"
    />

    <div class="about-content h-100 flex-grow-1 pl-16 py-16">
      <h1 class="display mb-6">Who Am I?</h1>
      <p>
        I'm AJ, a full-stack web developer based in the Philippines. Yeah boi
      </p>
      <p>I</p>
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
};
</script>

<style lang="stylus" scoped>
.about-content {
  background: #161616;
}
</style>