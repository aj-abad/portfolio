<template>
  <section
    class="secondary h-100vh w-100vw d-flex align-center"
    data-scroll
    data-scroll-id="myWork"
    style="z-index: 2"
  >
   <ProjectList
      id="project-list"
      class="h-100"
      style="width: calc(100vw /12 * 4)"
    />
  </section>
</template>

<script>
import ProjectList from "@/views/MyWork/ProjectList"
export default {
  name: "MyWork",
  components:{
    ProjectList
  }
};
</script>

<style lang="stylus" scoped>

</style>