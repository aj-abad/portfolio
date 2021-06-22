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
        <tspan v-for="(i, index) in 5" x="0" :y="112 * index" :key="index">
          <tspan
            v-for="(char, j) in text"
            :key="j"
            :class='getCharClass(index,j)'
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
      textClassMatrix: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
    };
  },
  methods:{
    getCharClass(i,j){
      if (j === 2) return null
      const index = j > 2 ? j - i : j
      return {
        "stroke-only": this.textClassMatrix[i][index] === 1,
        "no-fill": this.textClassMatrix[i][index] === 2
      }
    }
  },
  mounted(){
    for (let i = 0; i < this.textClassMatrix.length; ++i){
      for (let j = 0; j < this.textClassMatrix[i].length; ++j){
        const rnd = Math.floor(Math.random() * 3);

        this.$set(this.textClassMatrix[i], j, rnd)
      }
    }
  }
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