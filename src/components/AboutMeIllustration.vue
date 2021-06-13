<template>
  <section class="position-relative d-flex justify-end align-end pa-4">
    <h1 class="display" :style="`bottom: ${offset}px`">
      <span v-for="i in 10" :key="i">About Me &nbsp;&nbsp;</span>
    </h1>
    <span class="display" aria-hidden="true">
      01
    </span>
  </section>
</template>

<script>
export default {
  name: "AboutMeIllustration",
  props: {
    progress: Number,
  },
  computed: {
    offset() {
      const offset = (500 * this.progress * 2) - 1000;
      return offset
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-color: #ff0000;
  background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 85%, 93%, 1) 0, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0, transparent 50%), radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0, transparent 50%), radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0, transparent 50%);
  border-left: 1px solid black;
  border-right @border-left
  overflow hidden
}
span.display{
  font-size 4rem
  color white 
  opacity 1
  mix-blend-mode difference
}

h1{
  font-size 8rem
  font-weight bold
  white-space nowrap
  position absolute
  left 0
  z-index 10
  transform-origin 0 50%
  transform rotate(-90deg) translateY(50%)
}
</style>