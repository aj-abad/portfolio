<template>
  <div id="app">
    <custom-cursor />
    <v-app id="wrapper">
      <button id="nav-btn">
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
      </button>
      <router-view id="view" />
    </v-app>
    <preloader />
  </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor";
import Preloader from "./views/Preloader.vue";
export default {
  name: "App",
  components: {
    CustomCursor,
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
  z-index 100
  display flex
  justify-content center
  align-items flex-end
  flex-direction column
  mix-blend-mode difference

  .menu-bar{
    width 100%
    height 2px
    background white
    opacity 0.87
    &:first-of-type{
      margin-bottom 12px 
    }
    &:last-of-type{
      width: 75%
    }
  }
}
</style>
