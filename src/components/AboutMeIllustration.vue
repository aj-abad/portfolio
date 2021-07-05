<template>
  <section
    class="position-relative d-flex align-center justify-center"
    aria-label="About Me"
  >
    <div class="w-100 position-absolute" style="top: 0; left: 0">
      <span class="display">01</span>
    </div>

    <about-me-vector id="about-me-vector" :progress="progress" />
    <div class="w-100 position-absolute text-right" style="bottom: 0; left: 0">
      <span class="display">01</span>
    </div>
    <div
      class="line"
      ref="line"
      :style="`transform: rotate(${angle}deg)`"
      aria-hidden="true"
    ></div>
  </section>
</template>

<script>
import AboutMeVector from "@/components/AboutMeVector";
export default {
  name: "AboutMeIllustration",
  props: {
    progress: Number,
  },
  components: {
    AboutMeVector,
  },
  data() {
    return {
      angle: 0,
    };
  },
  methods: {
    setAngle() {
      const w = document.querySelector("#about-me-illustration").clientWidth;
      const h = document.querySelector("#about-me-illustration").clientHeight;
      const angle = (Math.atan(h / w) * 180) / Math.PI;
      this.angle = angle;
    },
  },
  mounted() {
    this.setAngle();
    window.addEventListener("resize", this.setAngle, true );
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.setAngle, true );
  }
};
</script>

<style lang="stylus" scoped>
section {
  background-color: var(--bg-dark);
  overflow: hidden;
}

.position-absolute {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  color: #e3e3e3;
  user-select: none;
}

.line {
  position: absolute;
  width: 120%;
  height: 1.5px;
  background: #e3e3e3;
  z-index: 10;
  opacity: 0.5;
}

#about-me-vector {
  width: 100%;
  margin: 2rem;
  z-index: 10;
}
</style>