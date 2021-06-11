<template>
  <div id="app">
    <custom-cursor/>
    <v-app id="wrapper">
      <router-view id="view" />
    </v-app>
  </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor"
export default {
  name: "App",
  components:{
    CustomCursor
  }
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
</style>
