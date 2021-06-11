<template>
  <div class="position-absolute pointer-events-none">
    <div
      class="position-absolute"
      style="z-index: 10; width: 25vmin; height: 25vmin"
      :style="slowFollowCursor"
    >
      <div class="h-100 w-100 spinner-container">
        <spinner class="w-100 h-100" />
      </div>
    </div>

    <svg
      id="cursor"
      :class="{ 'on-link': isOnLink }"
      aria-hidden="true"
      ref="cursor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      :style="followCursor"
    >
      <circle cx="32" cy="32" r="32" fill="white" />
    </svg>
  </div>
</template>
<script>
import Spinner from "./Spinner.vue";
import gsap from "gsap";
export default {
  name: "CustomCursor",
  components: {
    Spinner,
  },
  data() {
    return {
      center: 0,
      delta: {
        x: 0,
        y: 0,
      },
      mouse: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      slowPosition: {
        x: 0,
        y: 0,
      },
      isOnLink: false,
    };
  },
  mounted() {
    this.center = this.$refs.cursor.clientWidth / 2;
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
      this.isOnLink = e.path.filter((el) => el.tagName === "BUTTON").length > 0;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      this.position.x += (this.mouse.x - this.position.x) * dt;
      this.position.y += (this.mouse.y - this.position.y) * dt;
      const slowDelta = 1.0 - Math.pow(1.0 - 0.125, gsap.ticker.deltaRatio());
      this.slowPosition.x += (this.mouse.x - this.slowPosition.x) * slowDelta;
      this.slowPosition.y += (this.mouse.y - this.slowPosition.y) * slowDelta;
    });
  },
  computed: {
    followCursor() {
      return `transform: translateX(${
        this.position.x - this.center
      }px) translateY(${this.position.y - this.center}px)`;
    },
    slowFollowCursor() {
      return `transform: translateX(${
        this.slowPosition.x - this.center
      }px) translateY(${this.slowPosition.y - this.center}px)`;
    },
  },
};
</script>

<style lang="stylus" scoped>
#cursor {
  height: 4.5vmin;
  width: @height;
  mix-blend-mode: difference;
  position: absolute;
  z-index: 9999999;
}

.spinner-container {
  transform: translateX(calc(-50% + 4.5vmin/2)) translateY(calc(-50% + 4.5vmin/2));
}
</style>