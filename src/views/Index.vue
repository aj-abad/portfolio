<template>
  <main>
    <div id="scroll-container" style="width: 10000vw">
      <welcome-header />
      <div id="sticky-target" class="d-flex" style="width: 200vw">
        <section class="h-100vh w-100vw">
          <Navbar/>
        </section>
        <section class="h-100vh w-100vw pa-16">
          <h1 v-for="i in 100" :key="i">Test</h1>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import WelcomeHeader from "@/components/WelcomeHeader";
import Navbar from "@/components/Navbar"
export default {
  name: "Home",
  data() {
    return {
      scroll: null,
    };
  },
  components: {
    WelcomeHeader, Navbar
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector("#scroll-container"),
        getSpeed: true,
        multiplier: 1,
        direction: "horizontal",
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
    }, 100);
  },
};
</script>

<style lang="stylus" scoped>
#scroll-container {
  display: flex;
}
</style>