<template>
  <header class="mp-headerhome__bg">
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
