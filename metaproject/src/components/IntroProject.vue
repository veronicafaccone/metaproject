<template>
  <div class="mp-introproject">
    <div class="mp-introproject__wrapper-text">
      <h4 class="mp-h4--with-line" v-html="this.introProject.title"></h4>
      <p v-html="this.introProject.description"></p>
    </div>
    <div class="mp-introproject__wrapper-numbers"></div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
export default {
  name: 'IntroProject',
  data () {
    return {
      bgComponent: this.background
    }
  },
  props: {
    background: {
      type: String,
      required: true
    },
    introProject: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)

      this.handleScroll()
    })
  },
  methods: {
    emitBgComponent () {
      var elementPosition = this.$el.getBoundingClientRect().top - 30
      var windowHeight = -(window.innerHeight)
      if (elementPosition <= 0 && elementPosition >= windowHeight) {
        EventBus.$emit('i-check-bg', this.bgComponent)
      }
    },
    handleScroll (event) {
      this.emitBgComponent()
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/01_utilities/01_mp.utilities.scss';
  @import '../scss/04_layout/mp.introproject.scss';
</style>
