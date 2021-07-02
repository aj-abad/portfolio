<template>
  <svg
    class="project-name"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 345 965"
    style="overflow: visible"
    :style="strokeOnly ? 'z-index: 10' : null"
  >
    <g>
      <text
        :x="getX(1) - firstWordDelay"
        y="0"
        :class="{ 'stroke-only': strokeOnly }"
        transform="translate(133.07 964.58) rotate(-90)"
      >
        {{ word1 }}
      </text>
    </g>
    <g>
      <text
        :x="getX(-1) + secondWordDelay"
        y="0"
        :class="{ 'stroke-only': strokeOnly }"
        transform="translate(343.05 964.58) rotate(-90)"
      >
        {{ word2 }}
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ProjectName",
  data() {
    return {
      debugBool: false,
    };
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
    firstWordDelay(){
      return 50
    },
    secondWordDelay(){
      return (8 - this.word2.length) * 50
    }
  }
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
</style>