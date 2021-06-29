<template>
  <section class="h-100vh py-8 px-16">
    <div class="h-100 d-flex case-study-grid">
      <div class="h-100 problem-solution">
        <div class="pa-8" style="border-bottom: 2px solid black">
          <h4>The Goal</h4>
          <p class="mb-8">
           We wanted to create a small shop.
          </p>
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
        <div ref="theApproach">
        <h6>
          Design
        </h6>
        </div>
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
  border: 2px solid black;
}





.problem-solution {
  width: calc(100vw / 12 * 4);
  display: grid;
  grid-template-rows: 50% 50%;
  border-right: 2px solid black;
}
</style>