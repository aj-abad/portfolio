<template>
  <section
    class="h-100vh d-flex position-relative secondary"
    style="z-index: 2"
  >
    <div class="secondary d-flex h-100 align-center project-caption">
      <p class="mb-0 mr-8 text-justify">
        Kixothermic is a small web store that sells sneakers, streetwear, and
        luxury apparel.
      </p>
      <arrow style="min-width: 6rem; max-width: 6rem; display: inline-block" />
    </div>
    <case-study-grid />
  </section>
</template>

<script>
import Arrow from "@/components/Arrow";
import CaseStudyGrid from "./CaseStudyGrid.vue";
export default {
  name: "ProjectDetails",
  components: {
    Arrow,
    CaseStudyGrid,
  },
};
</script>
<style lang="stylus" scoped>
.project-caption {
  width: calc(100vw / 12 * 4);
}
</style>