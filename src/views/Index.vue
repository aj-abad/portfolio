<template>
  <main>
    <div id="scroll-container" style="width: 200vw">
      <welcome-header />
      <welcome-header />
    </div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/components/WelcomeHeader";
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
    };
  },
  components: {
    WelcomeHeader,
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#scroll-container"),
        getSpeed: true,
        multiplier: 1 ,
        direction: "horizontal",
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
    }, 1);
  },
};
</script>

<style lang="stylus" scoped>
#scroll-container > * {
  display: inline-block;
}
</style>