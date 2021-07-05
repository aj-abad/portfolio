<template>
  <Home v-if="!isMobile" />
</template>

<script>
const BREAKPOINT = 1280
import Home from "@/views/Home/Index";
export default {
  name: "Index",
  data(){
    return{
      isMobile: window.innerWidth < BREAKPOINT
    }
  },
  components: {
    Home,
  },
  mounted(){
    window.addEventListener("resize", ()=>{
      this.isMobile = window.innerWidth < BREAKPOINT
    })
  }
};
</script>