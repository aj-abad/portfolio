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
        data-scroll
        data-scroll-id="myApproachIllustration"
      />
      <my-approach />
      <my-work />
    </div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/views/WelcomeHeader";
import AboutMe from "@/views/About/AboutMe";
import MyApproach from "@/views/About/MyApproach";
import MyWork from "./MyWork/MyWork.vue";
import MyApproachIllustration from "../components/MyApproachIllustration.vue";
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
      introAnimationDone: false,
      aboutProgress: 0,
      myApproachProgress: 0
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
      this.aboutProgress = e.currentElements.about?.progress;
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