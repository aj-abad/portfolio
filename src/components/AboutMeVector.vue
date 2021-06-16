<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 331 561"
    style="overflow: visible"
  >
    <rect
      x="24.74"
      y="68.64"
      width="282.52"
      height="423.78"
      rx="141.26"
      class="rect"
    />
    <path
      d="M166,280.53h0l-1.83-86.27h3.66Zm-31.32-80.41-3.39,1.4,34.71,79h0Zm-28.4,18.1-2.59,2.59L166,280.53h0ZM87,245.81l-1.41,3.39L166,280.53h0ZM79.7,278.69v3.67l86.3-1.83h0Zm5.86,33.17,1.4,3.39,79-34.72h0Zm18.11,28.41,2.59,2.59L166,280.53h0Zm27.6,19.31,3.39,1.41L166,280.53h0Zm32.9,7.22h3.66L166,280.53h0Zm33.15-5.86,3.39-1.4-34.71-79h0Zm28.4-18.1,2.59-2.6L166,280.53h0ZM245,315.25l1.41-3.39L166,280.53h0Zm7.28-32.89v-3.67L166,280.53h0Zm-5.86-33.17L245,245.8l-79,34.73h0Zm-18.11-28.4-2.59-2.59L166,280.53h0Zm-27.6-19.32-3.39-1.4L166,280.53h0Z"
    />
    <path
      id="about-me-text-path-1"
      d="M166,512.42c-88.92,0-161.26-72.34-161.26-161.26V209.9C4.74,121,77.08,48.64,166,48.64S327.26,121,327.26,209.9V351.16C327.26,440.08,254.92,512.42,166,512.42Z"
      class="text-path"
    />
    <path
      id="about-me-text-path-2"
      d="M166,512.42c-88.92,0-161.26-72.34-161.26-161.26V209.9C4.74,121,77.08,48.64,166,48.64S327.26,121,327.26,209.9V351.16C327.26,440.08,254.92,512.42,166,512.42Z"
      class="text-path"
      style="transform-origin: 50% 50%; transform: rotate(180deg)"
    />
    <text width="100%">
      <textPath
        alignment-baseline="top"
        xlink:href="#about-me-text-path-1"
        :startOffset="offset"
        id="text"
        class="text"
      >
        About Me
      </textPath>
    </text>
    <text letter-spacing="-1" width="100%">
      <textPath
        alignment-baseline="top"
        xlink:href="#about-me-text-path-2"
        :startOffset="offset"
        id="text"
        class="text"
      >
        About Me
      </textPath>
    </text>
  </svg>
</template>
<script>
export default {
  name: "AboutMeVector",
  props: {
    progress: Number,
  },
  computed: {
    offset() {
      const offset = 310 + 100 * this.progress * 4;
      return offset;
    },
  },
};
</script>

<style lang="stylus" scoped>
.rect {
  fill: none;
  stroke: black;
  stroke-width: 1.5;
  stroke-miterlimit: 10;
}

.text {
  font-size: 56.93px;
  font-family: 'ivy mode';
  font-weight: bold;
}

.text-path {
  fill: none;
  stroke: none;
}
</style>