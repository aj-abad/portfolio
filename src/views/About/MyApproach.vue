<template>
  <section
    class="secondary h-100vh w-100vw d-flex align-center"
    data-scroll
    data-scroll-id="myApproach"
    style="z-index: 2"
  >
    <v-row>
      <v-col class="py-8 px-8">
        <h1 data-content="01">Design</h1>
        <div class="spacer"></div>
        <p>
          Let's come up with something.
        </p>
      </v-col>
      <v-col class="py-8 px-8">
        <h1 data-content="02">Develop</h1>
        <div class="spacer"></div>
        <p>
          Let's bring your idea to life.
        </p>
      </v-col>
      <v-col class="py-8 px-8">
        <h1 data-content="03">Deploy</h1>
        <div class="spacer"></div>
        <p>
          Let's 
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "MyApproach"
};
</script>

<style lang="stylus" scoped>
.row{
  height 100%
}
.col {
  height: 100%;
  border-left: 1px solid black;
}

.col:last-of-type{
  border-right: 1px solid black
}


h1::before{
  content: attr(data-content)
  position absolute
  font-size 0.5em
  transform translateX(-25%)
  z-index -1
  opacity 0.5
}

.spacer{
  height 37.5vh
}
</style>