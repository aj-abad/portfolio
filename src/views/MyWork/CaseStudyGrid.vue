<template>
  <section class="h-100vh w-100vw py-8 px-16">
    <div class="h-100 case-study-grid">
      <div class="problem-solution">
        <div class="pa-8" style="border-bottom: 2px solid var(--bg-dark)">
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
      <div class="links">
        <router-link to="/" class="link d-flex justify-center align-center">
          <h6>
            Case Study
            <svg viewBox="0 0 11 11" class="arrow right">
              <polygon
                points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
              />
            </svg>
          </h6>
        </router-link>
        <a target="_blank" rel="noopener" href="/" class="link d-flex justify-center align-center">
          <h6>
            Live Site
            <svg viewBox="0 0 11 11" class="arrow">
              <polygon
                points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
              />
            </svg>
          </h6>
        </a>
        <a target="_blank" rel="noopener" href="/" class="link d-flex justify-center align-center">
          <h6>
            GitHub Repo
            <svg viewBox="0 0 11 11" class="arrow">
              <polygon
                points="3 0 3 2 7.59 2 0.64 8.95 2.05 10.36 9 3.41 9 8 11 8 11 0 3 0"
              />
            </svg>
          </h6>
        </a>
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
  display: grid;
  grid-template: rows;
  grid-template-columns: 50% 50%;
  overflow hidden
}

.problem-solution {
  display: grid;
  grid-template-rows: 50% 50%;
  border-right: 2px solid var(--bg-dark)
}

.links {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.link {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none !important;
  display: block;
  text-transform: uppercase;

  &:not(:last-of-type) {
    border-bottom: 2px solid var(--bg-dark);
  }

  &:hover{
    background var(--bg-dark)
    color var(--text-light)
    & svg {
      opacity 1
      & polygon{
        fill var(--text-light)
      }      
    }
  }
}

.arrow {
  height: 0.6em;
  opacity: 0.87;

  &.right {
    transform: rotate(45deg);
  }
}
</style>