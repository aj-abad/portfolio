<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 667.15 494.91"
  >
    <defs>
      <clipPath id="aboutme-a">
        <rect y="466.43" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-b">
        <rect y="437.95" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-c">
        <rect y="409.48" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-d">
        <rect y="381" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-e">
        <rect y="339.43" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-f">
        <rect y="310.95" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-g">
        <rect y="282.48" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-h">
        <rect y="254" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-i">
        <rect y="212.43" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-j">
        <rect y="183.95" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-k">
        <rect y="155.48" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-l">
        <rect y="127" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-m">
        <rect y="85.43" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-n">
        <rect y="56.95" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-o">
        <rect y="28.48" width="667.15" height="29" style="fill: none" />
      </clipPath>
      <clipPath id="aboutme-p">
        <rect width="667.15" height="29" style="fill: none" />
      </clipPath>
    </defs>

    <g>
      <g style="clip-path: url(#aboutme-p)">
        <text x="54.75" y="109.97" :style="computeStyle(0)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-o)">
        <text x="54.75" y="109.97" :style="computeStyle(1)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-n)">
        <text x="54.75" y="109.97" :style="computeStyle(2)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-m)">
        <text x="54.75" y="109.97" :style="computeStyle(3)">About Me</text>
      </g>
    </g>
    <g>
      <g style="clip-path: url(#aboutme-l)">
        <text x="54.75" y="236.97" :style="computeStyle(4)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-k)">
        <text x="54.75" y="236.97" :style="computeStyle(5)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-j)">
        <text x="54.75" y="236.97" :style="computeStyle(6)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-i)">
        <text x="54.75" y="236.97" :style="computeStyle(7)">About Me</text>
      </g>
    </g>
    <g>
      >
      <g style="clip-path: url(#aboutme-h)">
        <text x="54.75" y="363.97" :style="computeStyle(8)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-g)">
        <text x="54.75" y="363.97" :style="computeStyle(9)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-f)">
        <text x="54.75" y="363.97" :style="computeStyle(10)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-e)">
        <text x="54.75" y="363.97" :style="computeStyle(11)">About Me</text>
      </g>
    </g>
    <g>
      <g style="clip-path: url(#aboutme-d)">
        <text x="54.75" y="490.97" :style="computeStyle(12)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-c)">
        <text x="54.75" y="490.97" :style="computeStyle(13)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-b)">
        <text x="54.75" y="490.97" :style="computeStyle(14)">About Me</text>
      </g>
      <g style="clip-path: url(#aboutme-a)">
        <text x="54.75" y="490.97" :style="computeStyle(15)">About Me</text>
      </g>
    </g>
    <g>
      <text x="54.75" y="282.48" style="fill: red">About Me</text>
    </g>
  </svg>
</template>
<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "AboutMeVector",
  props: {
    progress: Number,
  },
  data() {
    return {
      timeline: null,
      sineMultiplier: 1000,
      opacity: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      this.timeline = anime.timeline({
        autoplay: true,
        duration: 1000,
      });
      this.timeline.add({
        targets: this,
        sineMultiplier: 0,
        duration: 400,
        easing: "easeInOutElastic(1,1)",
      });
      this.timeline.add(
        {
          targets: this,
          opacity: 0,
          duration: 400,
          easing: "easeInSine",
        },
        "+=400"
      );
    }, 1000);
  },
  methods: {
    computeStyle(i) {
      const translate = (this.sineMultiplier * Math.sin(i - 8) * Math.PI) / 32;
      const transform = `transform: translateX(${translate}px)`;
      return transform;
    },
  },
  computed: {
    phase2Opacity() {
      const THRESHOLD_START = 0.25;
      const THRESHOLD_END = 0.5;
      if (this.progress < THRESHOLD_START) return `opacity: 1`;
      if (this.progress > THRESHOLD_END) return `opacity: 0`;
      const timeline = THRESHOLD_END - THRESHOLD_START;
      const progress = (this.progress / timeline) * 100 - 100;
      return `opacity: ${Math.abs(1 - progress / 100)}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
text {
  font-size: 132px;
  font-family: 'ivy mode';
  font-weight: normal;
  fill: hsl(40deg, 4, 214);
  user-select: none;
  transform-origin: 50% 50%;
}
</style>