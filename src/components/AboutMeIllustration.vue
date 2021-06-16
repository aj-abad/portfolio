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
  computed: {
    offset() {
      const offset = 500 * this.progress * 2 - 900;
      return offset;
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-color: #ff0000;
  background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 85%, 93%, 1) 0, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0, transparent 50%), radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0, transparent 50%), radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0, transparent 50%);
  border-left: 1px solid black;
  border-right: @border-left;
  overflow: hidden;

  &::before {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: var(--bg);
    opacity: 0.5;
    mix-blend-mode: color-dodge;
    z-index: 1;
  }
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
  margin: 6rem;
  z-index: 10;
}
</style>