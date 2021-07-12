<template>
  <svg
    class="project-name"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 345 965"
    style="overflow: visible"
    :style="strokeOnly ? 'z-index: 10' : null"
  >
    <g id="word-1-container">
      <text
        :x="getX(1) - firstWordDelay"
        y="0"
        :class="{ 'stroke-only': strokeOnly }"
        transform="translate(133.07 964.58) rotate(-90)"
      >
        <tspan v-if="!animating">{{ word1 }}</tspan>
        <tspan v-else>{{ oldWord1 }}</tspan>
      </text>
    </g>
    <g id="word-2-container">
      <text
        :x="getX(-1) + secondWordDelay"
        y="0"
        :class="{ 'stroke-only': strokeOnly }"
        transform="translate(343.05 964.58) rotate(-90)"
      >
      
        <tspan v-if="!animating">{{ word2 }}</tspan>
        <tspan v-else>{{ oldWord2 }}</tspan>
      </text>
    </g>
  </svg>
</template>

<script>
import anime from "animejs/lib/anime.es";
const duration = 400;
export default {
  name: "ProjectName",
  data() {
    return {
      animating: false,
      oldWord1: "",
      oldWord2: "",
      secondWordDelay: 0
    };
  },
  mounted(){
    this.secondWordDelay = (8 - this.word2.length) * 50
  },
  props: {
    word1: String,
    word2: String,
    progress: Number,
    strokeOnly: Boolean,
  },
  methods: {
    getX(i) {
      return (this.progress - 0.5) * 200 * i;
    },
  },
  computed: {
    firstWordDelay() {
      return 50;
    },
  },
  watch: {
    word1(newWord, oldWord) {
      const deez = this;
      newWord;
      this.animating = true;
      this.oldWord1 = oldWord;
      anime({
        targets: "#word-1-container",
        translateY: -window.innerHeight * 1.5,
        duration,
        easing: "easeInQuad",
        complete() {
          anime.set("#word-1-container", {
            translateY: window.innerHeight * 1.5,
          });
          deez.animating = false;
          anime({
            targets: "#word-1-container",
            translateY: 0,
            duration,
            easing: "easeOutQuad",
            complete() {
              deez.$emit("animationdone");
            },
          });
        },
      });
    },
    word2(newWord, oldWord) {
      newWord;
      const deez = this;
      this.oldWord2 = oldWord;
      anime({
        targets: "#word-2-container",
        translateY: window.innerHeight * 1.5,
        duration,
        easing: "easeInQuad",
        complete() {
          anime.set("#word-2-container", {
            translateY: -window.innerHeight * 1.5,
          });
          deez.animating = false;
          deez.secondWordDelay = (8 - deez.word2.length) * 50
          anime({
            targets: "#word-2-container",
            translateY: 0,
            duration,
            easing: "easeOutQuad",
          });
        },
      });
    },
  },
};
</script>


<style lang="stylus" scoped>
text {
  font-size: 200px;
  fill: #1f201d;
  stroke: #1f201d;
  stroke-miterlimit: 10;
  stroke-width: 2.5px;
  font-family: 'roc grotesk wide';
}

.stroke-only {
  fill: transparent;
}

.animating {
  opacity: 0;
  user-select: none;
}
</style>