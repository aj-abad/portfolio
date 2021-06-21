<template>
  <section
    class="position-relative d-flex align-center justify-center"
    aria-label="My Work"
  >
  <h1 class="my-work display" v-for="(i,j) in 36" :key="i" :style="`transform: rotateX(${j * 10}deg); backface-visibility: hidden`">
    My Work
  </h1>
  </section>
</template>

<script>
export default {
  name: "MyWorkIllustration",
};
</script>

<style lang="stylus" scoped>
section {
  background-color: var(--bg-dark);
  border-left: 1px solid black;
  border-right: @border-left;
  overflow: hidden;
  perspective 1000px
}

.my-work{
  position: absolute
  transform-style preserve-3d
  transform-origin 0 0 -600px
}
</style>