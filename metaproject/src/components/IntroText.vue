<template>
  <div class="mp-introtext">
    <div class="mp-introtext__container">
      <div class="mp-introtext__header">
        <h2 v-html="this.titleText"></h2>
        <h3 v-html="this.subtitleText"></h3>
      </div>
      <div class="mp-introtext__body">
        <p v-for="(paragraph, index) in this.paragraphsText" :key="index" v-html="paragraph"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
export default {
  name: 'IntroText',
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
    titleText: {
      type: String,
      required: false
    },
    subtitleText: {
      type: String,
      required: false
    },
    paragraphsText: {
      type: Array,
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
  @import '../scss/04_layout/mp.introtext.scss';
</style>
