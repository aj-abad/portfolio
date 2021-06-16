<template>
  <section
    class="secondary h-100vh w-100vw d-flex align-center"
    data-scroll
    data-scroll-id="myWork"
    style="z-index: 2"
  >
   <MyWorkIllustration
      id="my-work-illustration"
      class="h-100"
      style="width: 50vw"
    />
  </section>
</template>

<script>
import MyWorkIllustration from "@/components/MyWorkIllustration"
export default {
  name: "MyWork",
  components:{
    MyWorkIllustration
  }
};
</script>

<style lang="stylus" scoped>

</style>