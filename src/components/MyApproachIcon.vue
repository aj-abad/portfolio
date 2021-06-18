<template>
  <svg viewBox="0 0 512 512" style="overflow: visible">
    <defs>
      <clipPath id="a">
        <path
          d="M256,0C115,0,0,115.1,0,256S115.1,512,256,512,512,397,512,256,397,0,256,0Z"
          style="fill: none"
        />
      </clipPath>
    </defs>
    <g style="clip-path: url(#a)">
      <path
        fill-rule="nonzero"
        :class="{ 'path-hidden': !phase1.showPhase1Path }"
        id="my-approach-stroke-circle"
        :d="computedPath"
        :style="phase1Style"
      />
    </g>
    <path
      class="orbit"
      :class="{ 'path-hidden': !phase3.strokeAnimStarted }"
      d="M340.27,171.73c138.23,138.22,212.55,288,166,334.55s-196.27,-27.78,-334.54,-166.01s-212.55,-288.01,-166.01,-334.55s196.33,27.78,334.55,166.01z"
    />
    <path
      class="orbit"
      :class="{ 'path-hidden': !phase3.strokeAnimStarted }"
      d="M340.27,340.27c-138.22,138.23,-288,212.55,-334.55,166s27.78,-196.27,166.01,-334.54s288,-212.55,334.55,-166s-27.78,196.32,-166.01,334.54z"
    />
    <path v-if="phase1.phase1Done" :d="computedPath" :style="phase2Style" />
  </svg>
</template>
<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "MyApproachIcon",
  props: {
    activeColumn: Number,
  },
  data() {
    return {
      phase1: {
        strokeWidth: 10,
        showPhase1Path: false,
        phase1Done: false,
      },
      phase2: {
        phase2Done: false,
        rotate: 0,
        pathObj: {
          1: -141,
          2: 0,
          3: -256,
          4: 115.1,
          5: -256,
          6: 256,
          7: 0,
          8: 141,
          9: 115.1,
          10: 256,
          11: 256,
          12: 256,
          13: 141,
          14: 0,
          15: 256,
          16: -115,
          17: 256,
          18: -256,
          19: 0,
          20: -141,
          21: -115,
          22: -256,
          23: -256,
          24: -256,
        },
        pathToObj: {
          1: 0,
          2: 150.5,
          3: -105.5,
          4: 256,
          5: -256,
          6: 256,
          7: 150.5,
          8: 0,
          9: 256,
          10: 105.5,
          11: 256,
          12: 256,
          13: 0,
          14: -150.5,
          15: 105.5,
          16: -256,
          17: 256,
          18: -256,
          19: -150.5,
          20: 0,
          21: -256,
          22: -105.5,
          23: -256,
          24: -256,
        },
      },
      phase3: {
        strokeAnimStarted: false,
        pathToObj: {
          1: 0,
          2: 189.5,
          3: -66.5,
          4: 256,
          5: -256,
          6: 256,
          7: 189.5,
          8: 0,
          9: 256,
          10: 66.5,
          11: 256,
          12: 256,
          13: 0,
          14: -189.5,
          15: 66.5,
          16: -256,
          17: 256,
          18: -256,
          19: -189.5,
          20: 0,
          21: -256,
          22: -66.5,
          23: -256,
          24: -256,
        },
        scale: 1,
      },
    };
  },
  computed: {
    computedPath() {
      const x = `M256,0
      ${this.renderPath(0)}${this.renderPath(1)}${this.renderPath(
        2
      )}${this.renderPath(3)}z`;
      return x;
    },
    phase1Style() {
      return `stroke-width: ${this.phase1.strokeWidth}px;transform-origin: 50% 50%; transform: scaleX(-1)`;
    },
    phase2Style() {
      return `transform-origin: 50% 50%; transform: rotate(${this.phase2.rotate}deg) scale(${this.phase3.scale})`;
    },
  },
  methods: {
    renderPath(point) {
      let path = "c";
      for (let i = 0; i < 6; ++i) {
        path += this.phase2.pathObj[1 + i + point * 6];
        path += ",";
      }
      return path;
    },
    animatePhase1() {
      this.phase1.showPhase1Path = true;
      const deez = this;
      anime({
        targets: "#my-approach-stroke-circle",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInQuad",
        duration: 800,
        complete() {
          anime({
            targets: deez.phase1,
            strokeWidth: 513,
            easing: "easeInQuad",
            delay: 200,
            duration: 400,
            complete() {
              deez.phase1.showPhase1Path = false;
              deez.phase1.phase1Done = true;
            },
          });
        },
      });
    },
    animatePhase2() {
      const deez = this;
      anime({
        targets: this.phase2,
        rotate: 180,
        duration: 1600,
        easing: "easeInOutElastic(1, .6)",
      });
      anime({
        targets: this.phase2.pathObj,
        1: this.phase2.pathToObj[1],
        2: this.phase2.pathToObj[2],
        3: this.phase2.pathToObj[3],
        4: this.phase2.pathToObj[4],
        5: this.phase2.pathToObj[5],
        6: this.phase2.pathToObj[6],
        7: this.phase2.pathToObj[7],
        8: this.phase2.pathToObj[8],
        9: this.phase2.pathToObj[9],
        10: this.phase2.pathToObj[10],
        11: this.phase2.pathToObj[11],
        12: this.phase2.pathToObj[12],
        13: this.phase2.pathToObj[13],
        14: this.phase2.pathToObj[14],
        15: this.phase2.pathToObj[15],
        16: this.phase2.pathToObj[16],
        17: this.phase2.pathToObj[17],
        18: this.phase2.pathToObj[18],
        19: this.phase2.pathToObj[19],
        20: this.phase2.pathToObj[20],
        21: this.phase2.pathToObj[21],
        22: this.phase2.pathToObj[22],
        23: this.phase2.pathToObj[23],
        24: this.phase2.pathToObj[24],
        duration: 1600,
        easing: "easeInOutElastic(1, .6)",
        complete() {
          deez.phase2.phase2Done = true;
        },
      });
    },
    animatePhase3() {
      const deez = this;
      anime({
        targets: this.phase2,
        rotate: 360,
        duration: 1600,
        easing: "easeInOutElastic(1, .6)",
        update(anim) {
          if (anim.progress >= 60 && !deez.phase3.strokeAnimStarted) {
            deez.phase3.strokeAnimStarted = true;
            anime({
              targets: ".orbit",
              strokeDashoffset: [anime.setDashoffset, 0],
              delay: anime.stagger(400),
              easing: "easeOutQuad",
              duration: 800,
            });
          }
        },
      });
      anime({
        targets: this.phase3,
        scale: 0.45,
        duration: 1600,
        easing: "easeInOutElastic(1, .6)",
      });
      anime({
        targets: this.phase2.pathObj,
        1: this.phase3.pathToObj[1],
        2: this.phase3.pathToObj[2],
        3: this.phase3.pathToObj[3],
        4: this.phase3.pathToObj[4],
        5: this.phase3.pathToObj[5],
        6: this.phase3.pathToObj[6],
        7: this.phase3.pathToObj[7],
        8: this.phase3.pathToObj[8],
        9: this.phase3.pathToObj[9],
        10: this.phase3.pathToObj[10],
        11: this.phase3.pathToObj[11],
        12: this.phase3.pathToObj[12],
        13: this.phase3.pathToObj[13],
        14: this.phase3.pathToObj[14],
        15: this.phase3.pathToObj[15],
        16: this.phase3.pathToObj[16],
        17: this.phase3.pathToObj[17],
        18: this.phase3.pathToObj[18],
        19: this.phase3.pathToObj[19],
        20: this.phase3.pathToObj[20],
        21: this.phase3.pathToObj[21],
        22: this.phase3.pathToObj[22],
        23: this.phase3.pathToObj[23],
        24: this.phase3.pathToObj[24],
        duration: 1000,
        easing: "easeInOutElastic(1, .6)",
      });
    },
  },
  watch: {
    activeColumn() {
      if (this.activeColumn === 1) {
        this.animatePhase1();
      }
      if (this.activeColumn === 2) {
        this.animatePhase2();
      }
      if (this.activeColumn === 3) {
        this.animatePhase3();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
#my-approach-stroke-circle {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
}

.path-hidden {
  opacity: 0;
}

.orbit {
  fill: none;
  stroke-width: 3.5px;
  stroke: black;
  transform-origin: 50% 50%;
  animation: rotate 32s linear infinite;
}

.orbit:last-of-type{
  animation-duration: 16s
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>