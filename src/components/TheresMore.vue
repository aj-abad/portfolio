<template>
  <section
    class="
      secondary
      h-100vh
      w-100vw
      position-absolute
      d-flex
      align-center
      justify-center
    "
    data-scroll
    data-scroll-sticky
    data-scroll-target="#sticky-scroll"
    data-scroll-id="theresMore"
  >
    <svg style="overflow: visible" viewBox="0 0 745 529">
      <text transform="translate(-4.63 79.15)" style="">
        <tspan>MY WORK</tspan>
        <tspan v-for="i in 4" x="0" :y="112 * i" :key="i">MY WORK</tspan>
      </text>
    </svg>
  </section>
</template>

<script>
export default {
  name: "TheresMore",
  data() {
    return {
      text: "WANT,PROOF?",
      translate: {
        1: [0, 0],
        2: [0, 0],
        3: [0, 0],
        4: [0, 0],
        5: [0, 0],
        6: [0, 0],
        7: [0, 0],
        8: [0, 0],
        9: [0, 0],
      },
    };
  },
  mounted() {
    for (let i = 0; i < 9; i++) {
      return;
    }
  },
};
</script>


<style lang="stylus" scoped>
svg {
  height: 95vh;
}

text {
  font-size: 117px;
  opacity: 0.87;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  font-family: RocGrotesk-WideBold, Roc Grotesk;
  font-weight: 700;
}
</style>