<template>
  <main>
    <div id="scroll-container" style="width: 10000vw">
      <welcome-header />
      <div id="sticky-target" class="d-flex" style="width: 200vw">
        <section class="h-100vh w-100vw">
          <nav
            class="position-relative w-100 pa-8 d-flex"
            data-scroll-target="#sticky-target"
            data-scroll
            data-scroll-sticky
          >
            <img src="img/logo.svg" class="mr-16" style="width: 16rem" />
            <ul class="d-flex flex-grow-1 align-center justify-around">
              <li class="nav-list-item mb-6 mr-8">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-list-item mb-6 mr-8">
                <a href="#" class="nav-link">
                  Work
                </a>
              </li>
              <li class="nav-list-item mb-6 mr-8">
                <a href="#" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
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
nav{
  font-size 2rem
}
</style>