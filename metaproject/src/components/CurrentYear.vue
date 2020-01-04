<template>
  <div class="mp-currentyear__bg">
    <div class="mp-currentyear__text col-xs-12 col-sm-6">
      <TextProject :year-text="this.yearText" :title-text="this.titleText" :paragraphs-text="this.paragraphsText" :cta="this.cta"></TextProject>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
import TextProject from '@/elements/TextProject.vue'
export default {
  name: 'CurrentYear',
  components: {
    TextProject
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
    },
    yearText: {
      type: String,
      required: false
    },
    titleText: {
      type: String,
      required: false
    },
    paragraphsText: {
      type: Array,
      required: true
    },
    cta: {
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
  @import '../scss/04_layout/mp.currentyear.scss';
</style>
