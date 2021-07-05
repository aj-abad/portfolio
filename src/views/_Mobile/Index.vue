<template>
  <main style="overflow-y: auto">
   <welcome-header/>

   <h1 v-for="i in 100" :key="i">
     test
   </h1>
  </main>
</template>

<script>
import WelcomeHeader from '../WelcomeHeader.vue'
export default {
  components: { WelcomeHeader },
  name:"Home"
}
</script>

<style lang="stylus" scoped>

</style>