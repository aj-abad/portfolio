<template>
  <div data-scroll data-scroll-id="myApproachIllustration">
    <MyApproachVector
      :translate="translate1"
      id="my-approach-1"
      class="mr-12"
    />
    <MyApproachVector :translate="translate2" id="my-approach-2" />
  </div>
</template>

<script>
import MyApproachVector from "@/components/MyApproachVector";
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
      if (!this.isReverse) {
        this.translate1 += 0.5;
        this.translate2 -= 0.5;
      } else {
        this.translate1 -= 0.5;
        this.translate2 += 0.5;
      }

      if (
        this.translate1 > 750.97 ||
        (this.translate1 < 0 && this.translate1 < -750.97)
      ) {
        this.translate1 = 0;
      }
      if (
        this.translate2 > 750.97 ||
        (this.translate2 < 0 && this.translate2 < -750.97)
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
  height: 200vh;
  width: auto;
  transform: translateY(-50vh);
}
</style>