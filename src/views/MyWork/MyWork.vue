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
      @project-change="projectChangeHandler"
    />
    <div class="h-100 flex-grow-1 py-8 px-16 d-flex align-center">
      <div class="w-100 position-relative">
        <div class="img-holder">
          <a target="_blank" href="#">
            <div
              class="text-parallax stroke"
              data-scroll
              data-scroll-speed="1.5"
            >
              <project-name
                :progress="progress"
                :word1="activeProject.words[0]"
                :word2="activeProject.words[1]"
                :strokeOnly="true"
              />
            </div>

            <div class="img-inner">
              <div class="noise"></div>
              <div
                id="project-photo"
                :style="`background-image: url('img/projects/${
                  activeProject.photo
                }'); left: ${-250 + 250 * progress}px`"
              ></div>
            </div>
          </a>
        </div>
        <div class="text-parallax" data-scroll data-scroll-speed="1.5">
          <project-name
            :progress="progress"
            :word1="activeProject.words[0]"
            :word2="activeProject.words[1]"
            :strokeOnly="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "@/assets/projects"
import ProjectList from "@/views/MyWork/ProjectList";
import ProjectName from "@/components/ProjectName";
export default {
  name: "MyWork",
  props: {
    progress: Number,
  },
  data() {
    return {
      activeProject: projects[0],
    };
  },
  components: {
    ProjectList,
    ProjectName,
  },
  methods:{
    projectChangeHandler(project){
      this.activeProject = project
    }
  }
};
</script>

<style lang="stylus" scoped>
.img-holder {
  position: relative;
  width: 100%;
  padding-top: calc((100% * 2 / 3));
  overflow: hidden;
  z-index: 12;
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
}

#project-photo {
  position: relative;
  height: 120%;
  width: calc(100% + 250px);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
  transition: transform 0.4s, height 0.4s;
}

.img-holder:hover #project-photo {
  transform: scale(1);
}

.text-parallax {
  position: absolute;
  bottom: -10vh;
  left: 12.5%;
  z-index: 2;
}

.project-description {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>