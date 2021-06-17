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
    <path v-if="phase1.phase1Done" :d="computedPath" :style="phase2Style" />
  </svg>
</template>
<script>
import anime from "animejs/lib/anime.es";
export default {
  name: "MyApproachIcon",
  data() {
    return {
      phase1: {
        strokeWidth: 10,
        showPhase1Path: false,
        phase1Done: false,
      },
      phase2: {
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
    phase2Style(){
      return `transform-origin: 50% 50%; transform: rotate(${-this.phase2.rotate}deg)`
    }
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
            easing: "easeOutQuad",
            delay: 200,
            duration: 800,
            complete() {
              deez.phase1.showPhase1Path = false;
              deez.phase1.phase1Done = true;
            },
          });
        },
      });
    },
    animatePhase2() {
      anime({
        targets: this.phase2,
        rotate: 180,
        duration: 1200,
       easing: "easeInOutQuad",
      })
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
        easing: "easeInElastic(1, .6)",
        duration: 1000,
      });
    },
  },
  mounted() {
    setTimeout(() => this.animatePhase1(), 2000);
    setTimeout(() => this.animatePhase2(), 4000);
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
</style>