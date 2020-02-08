<template>
  <div class="mp-sliderproject">
    <div class="mp-sliderproject__wrapper-text">
      <h4 class="mp-h4--with-line" v-html="this.sliderProject.title"></h4>
      <p v-html="this.sliderProject.description"></p>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <div class="mp-sliderproject__img"></div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sliderProject',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      bgComponent: this.background,
      swiperOption: {
        loop: false,
        updateOnWindowResize: true
      },
      swiperSlides: this.sliderProject.slides
    }
  },
  props: {
    background: {
      type: String,
      required: true
    },
    sliderProject: {
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
  @import '../scss/04_layout/mp.sliderproject.scss';
</style>
