<template>
  <div id="app">
    <v-app id="wrapper">
      <button id="nav-btn">
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
      </button>
      <router-view id="view" :isMobile="isMobile" />
    </v-app>
    <preloader />
  </div>
</template>

<script>
import Preloader from "./views/Preloader.vue";
const BREAKPOINT = 1280;
export default {
  name: "App",
  data() {
    return {
      isMobile: window.innerWidth < BREAKPOINT,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < BREAKPOINT;
    });
  },
  components: {
    Preloader,
  },
};
</script>
<style lang="stylus">
#app, #view, #wrapper {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

#nav-btn {
  height: 32px;
  width: 64px;
  position: fixed;
  top: 32px;
  right: @top;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  mix-blend-mode: difference;

  .menu-bar {
    width: 100%;
    height: 2px;
    background: white;
    opacity: 0.87;

    &:first-of-type {
      margin-bottom: 12px;
    }

    &:last-of-type {
      width: 75%;
    }
  }
}
</style>
