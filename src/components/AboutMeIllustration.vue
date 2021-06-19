<template>
  <section
    class="position-relative d-flex align-center justify-center"
    aria-label="About Me"
  >
    <about-me-vector id="about-me-vector" :progress="progress" />
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

span.display {
  font-size: 4rem;
  color: white;
  opacity: 1;
  mix-blend-mode: difference;
}

h1 {
  font-size: 8rem;
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 10;
  transform-origin: 0 50%;
}

h1:first-of-type {
  left: 0;
  transform: rotate(-90deg) translateY(60%);
}

h1:nth-of-type(2) {
  left: 0;
  transform: rotate(-90deg) translateY(250%);
}

#about-me-vector {
  width: 100%;
  margin: 2rem;
  z-index: 10;
}
</style>