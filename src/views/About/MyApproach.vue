<template>
  <section
    class="secondary h-100vh d-flex align-center position-relative"
    data-scroll
    data-scroll-id="myApproach"
    style="z-index: 2; min-width: 100vw; max-width: 100vw"
  >
    <div ref="iconContainer" class="icon-container position-absolute" style="pointer-events: none">
      <div
        class="
          icon-placer
          position-relative
          h-100
          d-flex
          justify-center
          pt-12
          pb-16
        "
        style="width: calc(100% / 3); transition: left 0.4s"
      >
        <my-approach-icon :activeColumn="activeColumn" class="h-100" />
      </div>
    </div>
    <v-row>
      <v-col
        ref="col"
        class="col-4 py-8 px-8"
        data-scroll
        data-scroll-id="designColumn"
      >
        <h1 ref="heading">
          <span
            class="watermark"
            aria-hidden="true"
            data-scroll
            data-scroll-speed="0.1"
            >01</span
          >
          Design
        </h1>
        <div class="spacer"></div>
        <p class="mt-6">
          <strong>Let's come up with something.</strong>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </v-col>
      <v-col class="col-4 py-8 px-8" data-scroll data-scroll-id="developColumn">
        <h1>
          <span
            class="watermark"
            aria-hidden="true"
            data-scroll
            data-scroll-speed="0.1"
            >02</span
          >
          Develop
        </h1>
        <div class="spacer"></div>
        <p class="mt-6">
          <strong>Let's bring your idea to life.</strong> Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text.
        </p>
      </v-col>
      <v-col class="col-4 py-8 px-8" data-scroll data-scroll-id="deployColumn">
        <h1>
          <span
            class="watermark"
            aria-hidden="true"
            data-scroll
            data-scroll-speed="0.1"
            >03</span
          >
          Deploy
        </h1>
        <div class="spacer"></div>
        <p class="mt-6">
          <strong>Let's get your thing online.</strong>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import anime from "animejs/lib/anime.es";
import MyApproachIcon from "@/components/MyApproachIcon";
export default {
  name: "MyApproach",
  props: {
    activeColumn: Number,
  },
  components: { MyApproachIcon },
  mounted() {
    let padding = window
      .getComputedStyle(this.$refs.col, null)
      .getPropertyValue("padding-left");
    padding = parseInt(padding.substring(0, padding.length - 1));
    const headerHeight = this.$refs.heading.clientHeight;
    this.$refs.iconContainer.style.marginTop = `${headerHeight + padding}px`;
  },
  watch: {
    activeColumn() {
      if (this.activeColumn > 1) {
        anime({
          targets: this.$refs.iconContainer,
          left: `${(100 / 3) * (this.activeColumn - 1)}%`,
          duration: 1600,
          easing: "easeInOutElastic(1, .6)",
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.row {
  margin: 0;
  height: 100%;
}

.col {
  height: 100%;
  border-left: 1px solid black;
}

.col:last-of-type {
  border-right: 1px solid black;
}

h1 .watermark {
  display: inline-block;
  position: absolute;
  font-size: 0.5em;
  transform: translateX(-25%);
  z-index: -1;
  opacity: 0.5;
  user-select: none;
}

.spacer {
  height: 37.5vh;
}

.icon-container {
  height: 37.5vh;
  width: 100%;
  top: 0;
  left: 0;
}
</style>