<template>
  <section class="h-100vh py-8 px-16">
    <div class="h-100 d-flex case-study-grid" ref="grid">
      <div class="h-100 problem-solution">
        <div class="pa-8" style="border-bottom: 2px solid black">
          <h6>The Goal</h6>
          <p class="mb-8">We wanted to create a small shop.</p>
        </div>
        <div class="pa-8">
          <h6>The Solution</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deleniti commodi culpa repellendus suscipit, similique veniam magni
            nesciunt eius tempora accusamus. Cum, laboriosam. Consequatur sed,
            harum praesentium corrupti voluptates quisquam.
          </p>
        </div>
      </div>
      <div class="h-100">
        <div
          class="approach-section-header px-8"
          :style="`width: ${sectionHeight}px;}`"
        >
          <svg viewBox="0 0 512 512" style="height: calc(3.5rem * 0.5)">
            <path
              d="M256,0C115,0,0,115.1,0,256S115.1,512,256,512,512,397,512,256,397,0,256,0Z"
              style="opacity: 0.87"
            />
          </svg>
          <span class="approach-section"> Design </span>
        </div>
        <div
          class="approach-section-content pa-8"
          style="margin-left: calc(3.5em)"
        >
          <h6>Logo Design</h6>
          <p>
            Kixothermic's design process started with coming up with a cool logo
            and shit.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseStudyGrid",
  data() {
    return {
      sectionHeight: 0,
    };
  },
  mounted() {
    this.setSectionHeight();
    window.addEventListener("resize", () => this.setSectionHeight());
  },
  methods: {
    setSectionHeight() {
      this.sectionHeight = this.$refs.grid.clientHeight;
    },
  },
};
</script>

<style lang="stylus" scoped>
.case-study-grid {
  border: 2px solid black;
}

.approach-section {
  font-weight: bold;
  font-size: calc(3.5rem * 0.75);
}

.problem-solution {
  width: calc(100vw / 12 * 6);
  display: grid;
  grid-template-rows: 50% 50%;
  border-right: 2px solid black;
}

.approach-section-header {
  // background: black;
  // color: var(--bg);
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-100%);
  border-bottom: 2px solid black;
}

.approach-section-content {
  width: calc(100vw / 12 * 4);
}
</style>