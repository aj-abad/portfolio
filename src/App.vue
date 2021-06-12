<template>
  <div id="app">
    <custom-cursor />
    <v-app id="wrapper">
      <router-view id="view" />
      <nav
        class="pa-8 position-absolute h-100 d-flex align-end justify-center flex-column"
        style="right: 0; top: 0"
      >
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </nav>
    </v-app>
  </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor";
export default {
  name: "App",
  components: {
    CustomCursor,
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

nav {
  hei;
}
</style>
