<template>
  <div
    class="
      h-100vh
      w-100vw
      position-relative
      pa-16
      d-flex
      justify-center
      align-center
    "
    style="background: var(--bg-dark)"
    :style="`left: ${left}vw;`"
    data-scroll
    data-scroll-id="contactIllustration"
  >
    <div class="position-relative" :style="`left: calc(${(progress - 1) * 50}vw + ${offset}px);`">
      <h1 class="display w-100">
        <span :style="`margin-left: ${0 * progress}vw`">Let's</span>
      </h1>
      <h1 class="display w-100">
        <span :style="`margin-left: ${12.5 * progress}vw`">Work</span>
      </h1>
      <h1 class="display w-100">
        <span :style="`margin-left: ${25 * progress}vw`">Together</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactIllustration",
  props: {
    contactProgress: Number,
    contactIllustrationProgress: Number,
  },
  computed: {
    left() {
      return (this.contactProgress / 0.5) * 100;
    },
    progress() {
      let progress = Math.pow(this.contactIllustrationProgress / 0.5, 1 / 2);
      progress = progress > 1 ? progress - ((progress - 1) * 3/4) : progress;
      return progress;
    },
    offset(){
      if (this.progress < 1) return 0
      return Math.pow((this.progress - 1) * 250, 2) * -1
    }
  },
};
</script>

<style lang="stylus" scoped>
h1 {
  color: var(--text-light);
  font-size: 10vw;

  & span {
    display: inline-block;
  }
}
</style>