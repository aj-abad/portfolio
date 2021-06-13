<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 331 561"
    overflow="visible"
  >
    <defs>
      <clipPath id="a">
        <rect
          x="24.74"
          y="68.64"
          width="282.52"
          height="423.78"
          rx="141.26"
          style="fill: none; stroke: #000; stroke-miterlimit: 10"
        />
      </clipPath>
    </defs>
    <rect
      x="24.74"
      y="68.64"
      width="282.52"
      height="423.78"
      rx="141.26"
      style="fill: none; stroke: #000; stroke-width:2; stroke-miterlimit: 10"
    />
    <path
      id="text-path"
      d="M8.13,212.2V201.59A157.87,157.87,0,0,1,166,43.72h0A157.87,157.87,0,0,1,323.87,201.59V359.46A157.88,157.88,0,0,1,166,517.34h0A157.88,157.88,0,0,1,8.13,359.46V212.2"
      style="fill: none; stroke: none"
    />
    <text
      letter-spacing="-1"
      width="100%"
      style="
        white-space: pre;
        transform: translate3d(0, 0, 0);
        font-size: 56.93000030517578px;
        font-family: IvyMode-Regular, Ivy Mode;
      "
    >
      <textPath
        style="transform: translate3d(0, 0, 0)"
        alignment-baseline="top"
        xlink:href="#text-path"
        :startOffset="offset"
        id="text"
      >
        About Me
        <tspan v-for="i in 36" :key="i">&nbsp;</tspan>
        About Me
      </textPath>
    </text>
    <path
      d="M166,280.53h0l-1.83-86.27h3.66Zm-31.32-80.41-3.39,1.4,34.71,79h0Zm-28.4,18.1-2.59,2.59L166,280.53h0ZM87,245.81l-1.41,3.39L166,280.53h0ZM79.7,278.69v3.67l86.3-1.83h0Zm5.86,33.17,1.4,3.39,79-34.72h0Zm18.11,28.41,2.59,2.59L166,280.53h0Zm27.6,19.31,3.39,1.41L166,280.53h0Zm32.9,7.22h3.66L166,280.53h0Zm33.15-5.86,3.39-1.4-34.71-79h0Zm28.4-18.1,2.59-2.6L166,280.53h0ZM245,315.25l1.41-3.39L166,280.53h0Zm7.28-32.89v-3.67L166,280.53h0Zm-5.86-33.17L245,245.8l-79,34.73h0Zm-18.11-28.4-2.59-2.59L166,280.53h0Zm-27.6-19.32-3.39-1.4L166,280.53h0Z"
    />
  </svg>
</template>
<script>
export default {
  name: "AboutMeVector",
  props:{
    progress: Number
  },
  computed:{
    offset(){
      return 0
    }
  }
}
</script>