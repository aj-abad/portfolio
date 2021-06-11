<template>
  <div id="app">
    <v-app id="wrapper">
      <router-view id="view" />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
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
