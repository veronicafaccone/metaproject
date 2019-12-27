<template>
  <nav>
    <div class="mp-navbar__container">
      <div class="mp-navbar__logo">metaproject · unconventional didactic</div>
      <div class="mp-navbar__hamburger" :class="isOpened" @click="openHamburger()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mp-navbar__link">
        <router-link to="/">home</router-link>
        <router-link to="/2020">2020</router-link>
        <router-link to="/2019">2019</router-link>
        <router-link to="/2018">2018</router-link>
        <router-link to="/about">about</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      hamburgerOpened: false
    }
  },
  computed: {
    isOpened () {
      var classes = []

      if (this.hamburgerOpened) {
        classes.push('open')
      }

      return classes
    }
  },
  methods: {
    openHamburger () {
      this.hamburgerOpened = !this.hamburgerOpened
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/01_utilities/mp.utilities.scss';
  @import '../scss/03_components/mp.navbar.scss';
</style>
