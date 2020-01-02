<template>
  <nav>
    <div class="mp-navbar__container">
      <div class="mp-navbar__logo">{{navbar.titleLogo}}</div>
      <div class="mp-navbar__hamburger" :class="isOpened" @click="openHamburger()">
        <span></span>
        <span></span>
      </div>
      <div class="mp-navbar__overlay" :class="isOpened" >
        <div class="mp-navbar__link">
          <router-link v-for="(link, index) in navbar.link.text" :key="index" :to="'/' + navbar.link.href[index]">{{link}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import data from '../assets/data.json'
export default {
  name: 'Navbar',
  data () {
    return {
      hamburgerOpened: false,
      windowWidth: 0
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)

      this.getWindowWidth()
    })
  },
  computed: {
    navbar () {
      return data.navbar
    },
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
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth

      if (this.windowWidth > 767) {
        this.hamburgerOpened = false
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<style lang="scss">
  @import '../scss/01_utilities/01_mp.utilities.scss';
  @import '../scss/03_components/mp.navbar.scss';
</style>
