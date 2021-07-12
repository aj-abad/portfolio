<template>
  <div id="_preloader" aria-hidden="true">
    <img aria-hidden="true" style="width: 1px; position absolute" :src="`img/projects/${project.photo}`" v-for="(project, i) in projects" :key="i" :alt="`${project.name}`">
  </div>
</template>

<script>
import projects from "@/assets/projects"
export default {
  name: "Preloader",
  data() {
    return {projects}
  }
}
</script>

<style lang="stylus" scoped>
#_preloader{
  position fixed
  height 1px
  width 1px
  top: -10px
  left @top
  position fixed
  background red
}
</style>