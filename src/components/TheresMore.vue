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
      <text transform="translate(-4.63 79.15)">
        <tspan v-for="(i, index) in 5" x="0" :y="112 * index" :key="index">
          <tspan
            v-for="(char, jindex) in text"
            :key="jindex"
            :class="getCharClass(index, jindex)"
          >{{ char }}</tspan>
        </tspan>
      </text>
    </svg>
  </section>
</template>

<script>
import _ from "lodash";
export default {
  name: "TheresMore",
  props: {
    progress: Number,
  },
  data() {
    return {
      text: ["M", "Y", " ", "W", "O", "R", "K"],
      finalRows: [0, 1, 2, 3, 4],
      textClassMatrix: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      counter: 0,
    };
  },
  methods: {
    getCharClass(i, j) {
      if (j === 2) return null;
      const jindex = j >= 3 ? j - 1 : j;
      return {
        "stroke-only": this.textClassMatrix[i][jindex] === 1,
        "no-fill": this.textClassMatrix[i][jindex] === 2,
      };
    },
  },
  mounted() {
    const row = Math.floor(Math.random() * 5);
    this.finalRows.push(row);
    this.finalRows = _.shuffle(this.finalRows);
  },
  watch: {
    progress() {
      // for (let i = 0; i < this.textClassMatrix.length; ++i) {
      //   for (let j = 0; j < this.textClassMatrix[i].length; ++j) {
      //     if (this.finalRows[j] !== i) {
      //       this.$set(
      //         this.textClassMatrix[i],
      //         j,
      //         Math.floor(Math.random() * 3)
      //       );
      //     }
      //   }
      // }

      const end = 0.4;
      const animationProgress = (this.progress / end) * 100;

      if (animationProgress > 100) return null;
      console.log(animationProgress);

      const step = Math.floor((animationProgress / 100) * 14);
      console.log(step);

      const length = this.textClassMatrix.length;
      for (let i = 0; i < length; ++i) {
        if (step < i) break;
        for (let j = 0; j < length; ++j) {
          if (j < length - i) break;
          this.$set(this.textClassMatrix[i], j, Math.floor(Math.random() * 3));
        }
      }
    },
  },
};
</script>


<style lang="stylus" scoped>
svg {
  height: calc(100vh - 1rem * 2);
}

text {
  font-size: 117px;
  opacity: 0.87;
  stroke-miterlimit: 10;
  stroke: black;
  stroke-width: 2px;
  font-family: 'roc grotesk wide';
}

tspan {
  transition: 0.1s;
}

.stroke-only {
  fill: transparent;
}

.no-fill {
  fill: transparent;
  stroke: transparent;
}
</style>