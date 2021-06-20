<template>
  <section
    class="position-relative d-flex align-center justify-center"
    aria-label="About Me"
  >
    <div class="w-100 position-absolute" style="top: 0; left: 0">
      <span class="display secondary--text">01</span>
    </div>

    <about-me-vector id="about-me-vector" :progress="progress" />
    <div class="w-100 position-absolute text-right" style="bottom: 0; left: 0;">
      <span class="display secondary--text">01</span>
    </div>

  </section>
</template>

<script>
import AboutMeVector from "@/components/AboutMeVector";
export default {
  name: "AboutMeIllustration",
  props: {
    progress: Number,
  },
  components: {
    AboutMeVector,
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-color: #31332F;
  border-left: 1px solid black;
  border-right: @border-left;
  overflow: hidden;
}

.position-absolute {
  font-size: 1.5rem;
  padding: 1rem 2rem;
}

#about-me-vector {
  width: 100%;
  margin: 2rem;
  z-index: 10;
}
</style>