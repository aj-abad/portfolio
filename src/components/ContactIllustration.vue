<template>
  <section class="position-relative" aria-hidden="true">
    <h1 class="display" :style="`bottom: ${offset}px`">
      <span v-for="i in 10" :key="i">Contact&nbsp;&nbsp;</span>
    </h1>
    <h1 class="display" :style="`bottom: ${-offset - 1000}px`">
      <span v-for="f in 10" :key="f">Contact&nbsp;&nbsp;</span>
    </h1>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    progress: Number,
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
  pointer-events: none
  background-color:#b999ff;
  background-image: radial-gradient(at 78% 56%, hsla(193,74%,78%,1) 0, transparent 41%), radial-gradient(at 26% 72%, hsla(352,82%,69%,1) 0, transparent 49%), radial-gradient(at 68% 9%, hsla(99,81%,64%,1) 0, transparent 50%), radial-gradient(at 42% 83%, hsla(125,80%,79%,1) 0, transparent 51%), radial-gradient(at 21% 0%, hsla(23,84%,77%,1) 0, transparent 45%), radial-gradient(at 24% 17%, hsla(247,63%,69%,1) 0, transparent 58%), radial-gradient(at 61% 24%, hsla(31,98%,77%,1) 0, transparent 53%);
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
    opacity: 0.25;
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
</style>