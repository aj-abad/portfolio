<template>
  <section
    class="position-relative d-flex align-center justify-center"
    aria-label="My Work"
  >
  <h1 class="my-work" v-for="(i,j) in 20" :key="i" :style="`transform: rotateX(${j * 18}deg); opacity: ${1 - j/20}`">
    TEST
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
  background-color: #b999ff;
  border-left: 1px solid black;
  border-right: @border-left;
  overflow: hidden;
  perspective 1000px
}

.my-work{
  position: absolute
  transform-style preserve-3d
  transform-origin 0 0 -300px
}
</style>