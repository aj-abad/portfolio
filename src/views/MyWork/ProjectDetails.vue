<template>
  <section
    class="h-100vh d-flex position-relative secondary"
    style="z-index: 2; border-right: 2px solid var(--bg-dark) !important"
  >
    <div class="secondary d-flex h-100 align-center project-caption">
      <p
        id="project-description"
        class="mb-0 mr-8 text-justify"
        v-html="description"
      ></p>
      <arrow style="min-width: 6rem; max-width: 6rem; display: inline-block" />
    </div>
    <case-study-grid :project="project" />
  </section>
</template>

<script>
import projects from "@/assets/projects";
import Arrow from "@/components/Arrow";
import CaseStudyGrid from "./CaseStudyGrid.vue";
export default {
  name: "ProjectDetails",
  data() {
    return {
      projects,
    };
  },
  components: {
    Arrow,
    CaseStudyGrid,
  },
  computed: {
    project() {
      const i = this.$store.getters.getProject;
      return this.projects[i];
    },
    description() {
      return this.project.content.description;
    },
  },
};
</script>
<style lang="stylus" scoped>
.project-caption {
  width: calc(100vw / 12 * 4);
}
</style>