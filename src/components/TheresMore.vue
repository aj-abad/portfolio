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
  <div class="position-absolute w-100" style="top: 0; left: 0">02</div>
    <svg style="overflow: visible" viewBox="0 0 738 529">
      <text transform="translate(-4.63 79.15)" style="">
        <tspan>MY WORK</tspan>
        <tspan v-for="i in 4" x="0" :y="112 * i" :key="i">
          <tspan
            v-for="(char, j) in text"
            :key="j"
            :class="{
              'stroke-only': rnd[i][j] === 1,
              'no-fill': rnd[i][j] === 2,
            }"
          >{{ char }}</tspan>
        </tspan>
      </text>
    </svg>
  </section>
</template>

<script>
export default {
  name: "TheresMore",
  data() {
    return {
      text: ["M", "Y", " ", "W", "O", "R", "K"],
      rnd: [
        [0, 1, 2, 0, 0, 1, 1],
        [0, 2, 1, 0, 2, 0, 0],
        [0, 1, 2, 0, 1, 0, 2],
        [0, 1, 1, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2],
        [0, 1, 0, 0, 0, 1, 0],
      ],
    };
  },
};
</script>


<style lang="stylus" scoped>
svg {
  height: 95vmin;
}

text {
  font-size: 117px;
  opacity: 0.87;
  stroke-miterlimit: 10;
  stroke: black;
  stroke-width: 2px;
  font-family: 'roc grotesk wide';
}

.stroke-only {
  fill: transparent;
}

.no-fill {
  fill: transparent;
  stroke: transparent;
}
</style>