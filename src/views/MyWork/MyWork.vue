<template>
  <section
    class="secondary h-100vh w-100vw d-flex align-center"
    data-scroll
    data-scroll-id="myWork"
    style="z-index: 2"
  >
    <svg style="display: none">
      <filter id="turbulence" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          id="sea-filter"
          numOctaves="1"
          seed="2424"
          :baseFrequency="`${frequency.x} ${frequency.y}`"
        ></feTurbulence>
        <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
      </filter>
    </svg>
    <ProjectList
      id="project-list"
      class="h-100"
      style="min-width: calc(100vw / 12 * 4)"
      :projects="projects"
      :locked="locked"
      @project-change="projectChangeHandler"
    />
    <div class="h-100 flex-grow-1 py-8 px-16 d-flex align-center">
      <div class="w-100 position-relative">
        <div class="project-img-container">
          <a target="_blank" :href="`${projects[activeProject].links.site}`">
            <div
              class="text-parallax stroke"
              data-scroll
              data-scroll-speed="1.5"
            >
              <project-name
                :progress="progress"
                :word1="projects[activeProject].words[0]"
                :word2="projects[activeProject].words[1]"
                :strokeOnly="true"
              />
            </div>

            <div class="img-inner">
              <div class="noise"></div>

              <div
                id="project-photo-container"
                class="h-100 w-100 position-absolute"
                style="top: 0; left: 0; z-index: 1"
                :style="` -webkit-clip-path: polygon(0 ${this.clip}%, 100% ${this.clip}%, 100% 100%, 0 100%)`"
              >
                <div id="project-photo" :style="projectPhotoStyle"></div>
              </div>

              <div
                id="old-project-photo"
                v-show="animating"
                :style="`background-image: url('img/projects/${oldPhoto}'); left: ${
                  -250 + 250 * progress
                }px`"
              ></div>
            </div>
          </a>
        </div>
        <div class="text-parallax" data-scroll data-scroll-speed="1.5">
          <project-name
            :progress="progress"
            :word1="projects[activeProject].words[0]"
            :word2="projects[activeProject].words[1]"
            :strokeOnly="false"
            @animationdone="locked = false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "@/assets/projects";
import ProjectList from "@/views/MyWork/ProjectList";
import ProjectName from "@/components/ProjectName";
import anime from "animejs/lib/anime.es";
export default {
  name: "MyWork",
  props: {
    progress: Number,
  },
  data() {
    return {
      projects,
      activeProject: 0,
      animating: false,
      locked: false,
      oldPhoto: "",
      clip: 0,
      frequency: {
        x: 0.0,
        y: 0.0,
      },
    };
  },
  computed: {
    projectPhotoStyle() {
      return `background-image: url('img/projects/${
        this.projects[this.activeProject].photo
      }'); 
      left: ${-250 + 250 * this.progress}px; `;
    },
  },
  components: {
    ProjectList,
    ProjectName,
  },
  methods: {
    projectChangeHandler(i) {
      this.activeProject = i;
    },
  },
  watch: {
    activeProject(newVal, oldVal) {
      newVal;
      this.oldPhoto = this.projects[oldVal].photo;
      this.locked = true;
      this.animating = true;
      anime.set(this, { clip: 100 });
      const deez = this;
      anime({
        targets: ".img-inner",
        scale: 1.025,
        duration: 400,
        easing: "easeInQuad",
        complete() {
          anime({
            targets: ".img-inner",
            scale: 1,
            duration: 400,
            easing: "easeOutQuad",
          });
        },
      });

      anime({
        targets: this.frequency,
        x: 0.002,
        y: 0.005,
        duration: 400,
        easing: "easeInQuad",
        complete() {
          anime({
            targets: deez.frequency,
            x: 0.0,
            y: 0.0,
            duration: 400,
            easing: "easeOutQuad",
          });
        },
      });

      anime({
        targets: this,
        clip: 0,
        duration: 800,
        easing: "cubicBezier(0.85,0,0.15,1)",
        complete() {
          deez.animating = false;
        },
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.project-img-container {
  position: relative;
  width: 100%;
  padding-top: calc((100% * 2 / 3));
  overflow: hidden;
  z-index: 12;
  // filter: url('#turbulence');
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
  z-index: 3;
}

.project-name {
  height: 61vw;
}

#project-photo, #old-project-photo {
  position: absolute;
  height: 120%;
  width: calc(100% + 250px);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
  transition: transform 0.4s, height 0.4s;
}

.project-img-container:hover #project-photo {
  transform: scale(1);
}

.text-parallax {
  position: absolute;
  bottom: -10vh;
  left: 12.5%;
  z-index: 5;

  &.stroke {
    z-index: 20;
  }
}

.project-description {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>