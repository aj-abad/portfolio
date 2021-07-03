<template>
  <section
    class="secondary h-100vh w-100vw position-relative"
    :style="`left: ${left}vw; top: ${top}vh; z-index: 300`"
  >
   <div class="w100 h-100 contact-content">
     <h1>
       Contact
     </h1>
   </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactProgress: Number,
  },
  computed: {
    left() {
      const p = this.contactProgress / 0.5 * 100;
      return p - 100;
    },
    top(){
     const p = this.contactProgress / 0.5 * 100;
      return p - 100;
    }
  },
};
</script>

<style lang="stylus" scoped>
.contact-content{
  border-bottom 2px solid var(--bg-dark)
}
</style>