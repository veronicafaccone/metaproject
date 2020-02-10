<template>
  <div class="mp-partners">
    <div class="row">
      <div class="col-xs-12 col-md-3 mp-partners__wrapper-text">
        <h4 class="mp-h4--with-line" v-html="this.partners.title"></h4>
        <p v-html="this.partners.description"></p>
      </div>
      <div class="col-xs-12 col-md-9">
        <div class="row">
          <div class="col-xs-6 col-md-4" v-for="(item, index) in this.partners.partners" :key="index">
            <div class="mp-partners__logo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
export default {
  name: 'Partners',
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
    partners: {
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
  @import '../scss/04_layout/mp.partners.scss';
</style>
