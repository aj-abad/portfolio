<template>
  <nav
    class="position-relative w-100 pa-8 d-flex"
    data-scroll-target="#sticky-target"
    data-scroll
    data-scroll-sticky
  >
    <img src="img/logo.svg" class="mr-16" style="width: 16rem" />
    <ul class="d-flex flex-grow-1 align-center justify-around">
      <li class="nav-list-item mb-6 mr-8">
        <a href="#" class="nav-link black--text text-uppercase"> About </a>
      </li>
      <li class="nav-list-item mb-6 mr-8">
        <a href="#" class="nav-link black--text text-uppercase"> Work </a>
      </li>
      <li class="nav-list-item mb-6 mr-8">
        <a href="#" class="nav-link black--text text-uppercase"> Contact </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="stylus" scoped>
nav {
  font-size: 2rem;
}

a{
  text-decoration none
}
</style>