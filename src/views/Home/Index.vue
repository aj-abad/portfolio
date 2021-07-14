<template>
  <main>
    <custom-cursor/>
    <div id="scroll-container" style="width: 10000vw">
      <welcome-header
        v-if="!introAnimationDone"
        @animationdone="introAnimationDoneHandler()"
      />
      <about-me :aboutProgress="aboutProgress" />
      <my-process-illustration :scrollSpeed="scrollSpeed" />
      <section
        id="sticky-scroll"
        style="width: 300vw; height: 100vh; display: flex; position: relative"
      >
        <my-process :activeColumn="myProcess" />
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
      <contact-illustration :contactIllustrationProgress="contactIllustrationProgress" :contactProgress="contactProgress" />
      <div style="min-width: 100vw" data-scroll data-scroll-id="contactSpacer">
        <contact :contactProgress="contactProgress" />
      </div>
    </div>
  </main>
</template>

<script>
import CustomCursor from "@/components/CustomCursor"
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/views/WelcomeHeader";
import AboutMe from "@/views/About/AboutMe";
import MyProcess from "@/views/About/MyProcess";
import MyWork from "@/views/MyWork/MyWork";
import MyProcessIllustration from "@/components/MyProcessIllustration";
import MyWorkIllustration from "@/components/MyWorkIllustration";
import ProjectDetails from "../MyWork/ProjectDetails.vue";
import Contact from "../Contact/Contact.vue";
import ContactIllustration from "../../components/ContactIllustration.vue";
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
      introAnimationDone: false,
      scrollSpeed: 0,
      aboutProgress: 0,
      myProcess: 0,
      theresMoreProgress: 0,
      myWorkProgress: 0,
      contactIllustrationProgress: 0,
      contactProgress: 0,
    };
  },
  components: {
    CustomCursor,
    WelcomeHeader,
    AboutMe,
    MyProcess,
    MyWork,
    MyProcessIllustration,
    MyWorkIllustration,
    ProjectDetails,
    Contact,
    ContactIllustration,
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

    // setTimeout(() => {
    //   document.addEventListener("keydown", (e) => {
    //     if (e.key === "Escape") {
    //       this.scroll.scrollTo(1000, { duration: 0, disableLerp: true });
    //     }
    //   });
    // }, 200);
  },
  methods: {
    scrollHandler(e) {
      this.aboutProgress = e.currentElements.about?.progress ?? 0;
      this.theresMoreProgress = e.currentElements.theresMore?.progress ?? 0;
      this.myWorkProgress = e.currentElements.myWork?.progress ?? 0;
      this.contactProgress = e.currentElements.contactSpacer?.progress ?? 0;
       this.contactIllustrationProgress = e.currentElements.contactIllustration?.progress ?? 0;
      this.scrollSpeed = e.speed;

      if (
        e.currentElements.deployColumn?.progress > 0.45 &&
        this.myProcess < 3
      ) {
        this.myProcess = 3;
      } else if (
        e.currentElements.developColumn?.progress > 0.45 &&
        this.myProcess < 2
      ) {
        this.myProcess = 2;
      } else if (
        e.currentElements.designColumn?.progress > 0.45 &&
        this.myProcess < 1
      ) {
        this.myProcess = 1;
      }
    },
    introAnimationDoneHandler() {
      // this.scroll.scrollTo(window.innerWidth);
    },
  },
  computed:{
    lock(){
      return this.$store.getters.getLockStatus
    }
  },
  watch:{
    lock(){
      if (this.lock){
        this.scroll.stop()
      }
      else{
        this.scroll.start()
      }
    }
  },
  beforeDestroy(){
    this.scroll.destroy();
    this.scroll = null
  }
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>