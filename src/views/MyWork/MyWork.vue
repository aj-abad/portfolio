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
    <div class="h-100 flex-grow-1 py-8 px-16 d-flex align-center">
      <div class="w-100 position-relative">
        <project-name :words="words" :strokeOnly="false" />
        <div class="img-holder">
          <project-name :words="words" :strokeOnly="true" />
          <div class="img-inner">
            <div
              id="project-photo"
              :style="`background-image: url('img/projects/${
                activeProject.photo
              }'); left: ${-250 + 250 * progress}px`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectList from "@/views/MyWork/ProjectList";
import ProjectName from "@/components/ProjectName";
export default {
  name: "MyWork",
  props: {
    progress: Number,
  },
  data() {
    return {
      words: ["HALLYU-", "LATOR"],
      activeProject: {
        photo: "hallyulator.png",
      },
    };
  },
  components: {
    ProjectList,
    ProjectName,
  },
};
</script>

<style lang="stylus" scoped>
.img-holder {
  position: relative;
  width: 100%;
  padding-top: calc((100% * 2 / 3));
}

.img-inner {
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  right: 0;
}

.img-inner::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--bg-dark);
  opacity: 0.25;
  z-index: 1;
}

.project-name {
  height: 125vh;
  position: absolute;
  bottom: -10vh;
  left: 12.5%;
}

#project-photo {
  position: relative;
  height: 100%;
  width: calc(100% + 250px);
  background-size: cover;
  background-position: center;
}
</style>