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
      style="min-width: calc(100vw / 12 * 4)"
    />
    <div class="h-100 flex-grow-1 py-8 px-16" data-scroll data-scroll-speed="-0.5">
      <div class="img-holder">
        <!-- <img
          class="w-100"
          src="img/projects/salt.png"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
import ProjectList from "@/views/MyWork/ProjectList";
export default {
  name: "MyWork",
  components: {
    ProjectList,
  },
};
</script>

<style lang="stylus" scoped>
// .img-holder::before {
//   content: '';
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;
//   background: var(--bg-dark);
//   opacity 0.35
//   z-index: 1;
// }


.image-holder{
  width 100%
  padding-top 100%
  background red
}

</style>