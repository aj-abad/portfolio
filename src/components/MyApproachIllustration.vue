<template>
  <div
    style="border-left: 2px solid var(--bg-dark)"
    class="px-6"
    data-scroll
    data-scroll-id="myApproachIllustration"
  >
    <MyApproachVector
      :translate="translate1"
      id="my-approach-1"
      class="mr-8"
    />
    <MyApproachVector :translate="translate2" id="my-approach-2" />
  </div>
</template>

<script>
import MyApproachVector from "@/components/MyApproachVector copy";
export default {
  name: "MyApproachIllustration",
  props: {
    scrollSpeed: Number,
  },
  data() {
    return {
      translate1: 0,
      translate2: 0,
      isReverse: false,
    };
  },
  components: {
    MyApproachVector,
  },
  mounted() {
    window.requestAnimationFrame(() => this.animateMarquee());
  },
  methods: {
    animateMarquee() {
      const textLength = 1172
      if (!this.isReverse) {
        this.translate1 += 0.5;
        this.translate2 -= 0.5;
      } else {
        this.translate1 -= 0.5;
        this.translate2 += 0.5;
      }

      if (
        this.translate1 > textLength ||
        (this.translate1 < 0 && this.translate1 < -textLength)
      ) {
        this.translate1 = 0;
      }
      if (
        this.translate2 > textLength ||
        (this.translate2 < 0 && this.translate2 < -textLength)
      ) {
        this.translate2 = 0;
      }
      window.requestAnimationFrame(() => this.animateMarquee());
    },
  },
  watch: {
    scrollSpeed() {
      this.isReverse = this.scrollSpeed < 0;
      this.translate1 += this.scrollSpeed * 0.5;
      this.translate2 -= this.scrollSpeed * 0.5;
    },
  },
};
</script>

<style lang="stylus" scoped>
#my-approach-1, #my-approach-2 {
  height: 300vh;
  width: auto;
  transform: translateY(-50vh);
}
</style>