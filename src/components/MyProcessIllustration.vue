<template>
  <div
    style="border-left: 2px solid var(--bg-dark)"
    class="px-8"
    data-scroll
    data-scroll-id="myProcessIllustration"
  >
    <MyProcessVector :translate="translate" id="my-process-1" class="mr-12" />
    <MyProcessVector :translate="translate * -1" id="my-process-2" />
  </div>
</template>

<script>
import MyProcessVector from "@/components/MyProcessVector";
export default {
  name: "MyProcessIllustration",
  props: {
    scrollSpeed: Number,
  },
  data() {
    return {
      translate: 0,
      isReverse: false,
    };
  },
  components: {
    MyProcessVector,
  },
  mounted() {
    window.requestAnimationFrame(() => this.animateMarquee());
  },
  methods: {
    animateMarquee() {
      const textLength = 1172;
      if (!this.isReverse) {
        this.translate += 0.5;
      } else {
        this.translate -= 0.5;
      }

      if (Math.abs(this.translate) > textLength) this.translate = 0;

      window.requestAnimationFrame(() => this.animateMarquee());
    },
  },
  watch: {
    scrollSpeed() {
      this.isReverse = this.scrollSpeed < 0;
      this.translate += this.scrollSpeed * 0.5;
    },
  },
};
</script>

<style lang="stylus" scoped>
#my-process-1, #my-process-2 {
  height: 300vh;
  width: auto;
  transform: translateY(-50vh);
}
</style>