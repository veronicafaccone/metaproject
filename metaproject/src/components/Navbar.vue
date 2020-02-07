<template>
  <nav>
    <div class="mp-navbar__container" :class="colorNav()">
      <div class="mp-navbar__logo">{{navbar.titleLogo}}</div>
      <div class="mp-navbar__logo--mobile" :class="isOpened">{{navbar.titleLogoMobile}}</div>
      <div class="mp-navbar__hamburger" :class="isOpened" @click="openHamburger()">
        <span></span>
        <span></span>
      </div>
      <div class="mp-navbar__overlay" :class="isOpened" >
        <div class="mp-navbar__link" @click="closeHamburgerMenu()">
          <router-link v-for="(link, index) in navbar.link.text" :key="index" :to="'/' + navbar.link.href[index]">{{link}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import data from '../assets/data.json'
import { EventBus } from '../eventbus.js'
export default {
  name: 'Navbar',
  data () {
    return {
      hamburgerOpened: false,
      windowWidth: 0,
      currentBgComponent: ''
    }
  },
  created () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)

      this.handleScroll()
    })
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
      } else if (this.hamburgerOpened === 'false') {
      }

      return classes
    }
  },
  methods: {
    checkBackground () {
      EventBus.$on('i-check-bg', bgComponent => {
        this.currentBgComponent = bgComponent
      })
    },
    colorNav () {
      var classes = []
      if (this.currentBgComponent === 'dark') {
        classes = []
        classes.push('light')
      } else {
        classes = []
        classes.push('dark')
      }
      return classes
    },
    handleScroll (event) {
      this.checkBackground()
      this.colorNav()
    },
    openHamburger () {
      this.hamburgerOpened = !this.hamburgerOpened
      if (this.hamburgerOpened) {
        document.querySelector('html').style = 'overflow: hidden'
      } else {
        document.querySelector('html').style = 'overflow: auto'
      }
    },
    closeHamburgerMenu () {
      if (this.windowWidth < 767) {
        this.hamburgerOpened = !this.hamburgerOpened
      }
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
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  @import '../scss/01_utilities/01_mp.utilities.scss';
  @import '../scss/04_layout/mp.navbar.scss';
</style>
