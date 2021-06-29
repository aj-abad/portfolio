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
    <svg style="overflow: visible" viewBox="0 0 738 529">
      <text transform="translate(-4.63 79.15)">
        <tspan
          class="move-to-center"
          v-for="(i, index) in 5"
          x="0"
          :y="112 * index"
          :key="index"
        >
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
import matrixKeyframes from "@/assets/matrixkeyframes";
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
        [2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2],
      ],
      matrixKeyframes,
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
      const start = 0.125;
      const end = 0.5;
      if (this.progress < start) return false;
      const animationProgress = ((this.progress-start) / (end - start)) * 100;
      if (animationProgress > 100) return false;
      const step = Math.floor(
        (animationProgress / 100) * this.matrixKeyframes.length
      );
      for (let i = 0; i < this.textClassMatrix.length; ++i) {
        for (let j = 0; j < this.textClassMatrix[i].length; ++j) {
          this.$set(
            this.textClassMatrix[i],
            j,
            this.matrixKeyframes[step][i][j]
          );
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
  transition: 0.2s;
}

.stroke-only {
  fill: transparent;
}

.no-fill {
  fill: transparent;
  stroke: transparent;
}
</style>