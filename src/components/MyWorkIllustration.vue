<template>
  <section
    class="position-relative pa-4 d-flex align-center"
    aria-label="My Work"
  >
    <ul class="display">
      <li class="my-4">Ateneo SALT</li>
      <li class="my-4">Fight the Power</li>
      <li class="my-4">Cura</li>
      <li class="my-4">Metronome</li>
    </ul>
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
  color: var(--text-light);
}

.my-work {
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: 0 0 -600px;
}

ul{
  font-size 4.5rem
}
</style>