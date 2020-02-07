<template>
  <header class="mp-headerproject">
    <div class="mp-headerproject__colored-band">
      <div class="row mp-headerproject__wrapper">
        <div class="mp-headerproject__text col-xs-12 col-md-8">
          <TextProject :year-text="this.yearText" :title-text="this.titleText"></TextProject>
        </div>
        <div class="mp-headerproject__img-wrapper col-xs-12 col-md-4">
          <div class="mp-headerproject__img" :class="'mp-headerproject__img-' + this.nameImg"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { EventBus } from '../eventbus.js'
import TextProject from '@/elements/TextProject.vue'
export default {
  name: 'HeaderProject',
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
      required: true
    },
    titleText: {
      type: String,
      required: true
    },
    nameImg: {
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
  @import '../scss/04_layout/mp.headerproject.scss';
</style>
