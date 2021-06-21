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
      <my-approach :activeColumn="myApproach" />
      <my-work />
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
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
      introAnimationDone: false,
      scrollSpeed: 0,
      aboutProgress: 0,
      myApproach: 0,
    };
  },
  components: {
    WelcomeHeader,
    AboutMe,
    MyApproach,
    MyWork,
    MyApproachIllustration,
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