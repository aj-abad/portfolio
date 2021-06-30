<template>
  <section class="h-100vh w-100vw py-8 px-16">
    <div class="h-100 d-flex case-study-grid" ref="grid">
      <div class="problem-solution half">
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
      <div class="half">
        <h1>test</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseStudyGrid",
};
</script>

<style lang="stylus" scoped>
.case-study-grid {
  border: 2px solid var(--bg-dark);
}

.half {
  width calc(100vw / 12 * 6);
}

.third {
  width calc(100vw / 12 * 4);
}

.quarter{
    width calc(100vw / 12 * 3);
}

.problem-solution {
  display: grid;
  grid-template-rows: 50% 50%;
  border-right: 2px solid var(--bg-dark);
}

.approach-section-header {
  // background: black;
  // color: var(--bg);
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-100%);
  border-bottom: 2px solid var(--bg-dark);
}

</style>