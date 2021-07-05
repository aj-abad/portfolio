<template>
  <Home v-if="!isMobile" />
  <HomeMobile v-else />
</template>

<script>
import Home from "@/views/Home/Index";
import HomeMobile from "@/views/_Mobile/Index";
export default {
  name: "Index",
  props: {
    isMobile: Boolean,
  },
  components: {
    Home,
    HomeMobile,
  },
};
</script>