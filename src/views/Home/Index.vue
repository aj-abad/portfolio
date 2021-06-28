<template>
  <main>
    <div id="scroll-container" style="width: 10000vw">
      <welcome-header
        v-if="!introAnimationDone"
        @animationdone="introAnimationDoneHandler()"
      />
      <about-me :aboutProgress="aboutProgress" />
      <my-approach-illustration
        style="height: 200vh; width: auto; border-left: 1px solid black"
        class="px-6 pr-10"
        :scrollSpeed="scrollSpeed"
      />
      <section
        id="sticky-scroll"
        style="width: 300vw; height: 100vh; display: flex; position: relative"
      >
        <my-approach :activeColumn="myApproach" />
        <my-work-illustration
          :progress="theresMoreProgress"
          style="position-absolute; top: 0"
        />
        <div
          class="secondary w-100vw h-100vh position-relative"
          style="margin-left: 100vw; z-index: 2"
        >
          <my-work :progress="myWorkProgress" />
        </div>
      </section>
      <project-details />
    </div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/views/WelcomeHeader";
import AboutMe from "@/views/About/AboutMe";
import MyApproach from "@/views/About/MyApproach";
import MyWork from "@/views/MyWork/MyWork";
import MyApproachIllustration from "@/components/MyApproachIllustration";
import MyWorkIllustration from "@/components/MyWorkIllustration";
import ProjectDetails from "../MyWork/ProjectDetails.vue";
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
      introAnimationDone: false,
      scrollSpeed: 0,
      aboutProgress: 0,
      myApproach: 0,
      theresMoreProgress: 0,
      myWorkProgress: 0,
    };
  },
  components: {
    WelcomeHeader,
    AboutMe,
    MyApproach,
    MyWork,
    MyApproachIllustration,
    MyWorkIllustration,
    ProjectDetails,
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#scroll-container"),
        getSpeed: true,
        getDirection: true,
        multiplier: 1,
        lerp: 0.08,
        direction: "horizontal",
        smooth: true,
      });

      this.scroll.on("scroll", this.scrollHandler);
    }, 100);
  },
  methods: {
    scrollHandler(e) {
      this.aboutProgress = e.currentElements.about?.progress ?? 0;
      this.theresMoreProgress = e.currentElements.theresMore?.progress ?? 0;
      this.myWorkProgress = e.currentElements.myWork?.progress ?? 0;
      this.scrollSpeed = e.speed;

      if (
        e.currentElements.deployColumn?.progress > 0.45 &&
        this.myApproach < 3
      ) {
        this.myApproach = 3;
      } else if (
        e.currentElements.developColumn?.progress > 0.45 &&
        this.myApproach < 2
      ) {
        this.myApproach = 2;
      } else if (
        e.currentElements.designColumn?.progress > 0.45 &&
        this.myApproach < 1
      ) {
        this.myApproach = 1;
      }
    },
    introAnimationDoneHandler() {
      // this.scroll.scrollTo(window.innerWidth);
    },
  },
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>