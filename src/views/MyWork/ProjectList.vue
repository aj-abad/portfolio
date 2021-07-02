<template>
  <section
    class="position-relative pa-4 d-flex flex-column justify-center"
    aria-label="My Work"
    style="border-left: 2px solid black; border-right: 2px solid black"
  >
    <div class="w-100 position-absolute" style="top: 0; left: 0">
      <span class="display">01</span>
    </div>
    <ul class="display">
      <li
        class="position-relative my-6"
        :class="{ 'project-selected': activeProject === i }"
        v-for="(project, i) in projects"
        :key="i"
        @mouseenter="setActiveProject(i)"
        @mouseleave="setActiveProject(-1)"
        data-scroll
        :data-scroll-delay="`${i * 100}`"
      >
        <button class="project-name w-100 text-left" @click="selectProject(project)">{{ project.name }}</button>

        <span
          class="project-name-active"
          aria-hidden="true"
          :style="`left: -${spanTranslate}px`"
        >
          <span
            :data-project="j === 1 ? `project-${i}` : null"
            v-for="j in 10"
            :key="j"
            >{{ project.name }}&nbsp;&nbsp;·&nbsp;&nbsp;</span
          >
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProjectList",
  props:{
    projects: Array
  },
  data() {
    return {
      activeProject: -1,
      spanWidth: 0,
      spanTranslate: 0,
      selectedProject: 0,
    };
  },
  methods: {
    setActiveProject(i) {
      this.activeProject = i;
      if (i < 0) return false;

      this.spanTranslate = 0;
      const el = document.querySelector(`span[data-project=project-${i}]`);
      this.spanWidth = el.clientWidth;
      this.animateSpan();
    },
    animateSpan() {
      if (this.activeProject < 0) return false;
      this.spanTranslate += 0.5;
      if (this.spanTranslate > this.spanWidth) this.spanTranslate = 0;
      window.requestAnimationFrame(() => this.animateSpan());
    },
    selectProject(project){
      this.$emit("project-change", project)
    }
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-color: var(--bg-dark);
  overflow: hidden;
  color: var(--text-light);
}

ul {
  font-size: 3rem;
}

.project-selected {
  .project-name {
    opacity: 0;
  }

  .project-name-active {
    opacity: 1;
  }
}

.project-name, .project-name-active {
  display: inline-block;
  transition: opacity 0.2s;
}

.project-name-active {
  opacity: 0;
  white-space: nowrap;
  position: absolute;
  left: 0;
  font-style: italic;
  transform: translateX(calc(-10% + 6px));
  user-select: none;
  pointer-events none
}

.project-name-active span {
  display: inline-block;
}
</style>