<template>
  <header class="mp-headerhome__bg">
    <div class="mp-headerhome__wrapper-video">
      <video loop muted autoplay class="fullscreen-bg__video fullscreen-bg__video--desktop">
          <source src="../assets/video/welcome_video.mp4" type="video/mp4">
      </video>
      <video loop muted autoplay class="fullscreen-bg__video fullscreen-bg__video--mobile">
          <source src="../assets/video/welcome_video_mobile.mp4" type="video/mp4">
      </video>
    </div>
    <IconMouseScroll></IconMouseScroll>
  </header>
</template>

<script>
import { EventBus } from '../eventbus.js'
import IconMouseScroll from '@/elements/IconMouseScroll.vue'
export default {
  name: 'HeaderHome',
  components: {
    IconMouseScroll
  },
  data () {
    return {
      bgComponent: this.background
    }
  },
  props: {
    background: {
      type: String,
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
      var elementPosition = (this.$el.getBoundingClientRect().top) - 30
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
  @import '../scss/04_layout/mp.headerhome.scss';
</style>
