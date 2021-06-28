<template>
  <section
    class="position-relative pa-4 d-flex flex-column justify-center"
    aria-label="My Work"
  >
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
        <span class="project-name">
          <button>{{ project.name }}</button>
        </span>
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
import projects from "@/assets/projects";
export default {
  name: "ProjectList",
  data() {
    return {
      projects,
      activeProject: -1,
      spanWidth: 0,
      spanTranslate: 0,
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
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-color: var(--bg-dark);
  border-left: 1px solid black;
  border-right: @border-left;
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
}

.project-name-active span {
  display: inline-block;
}
</style>