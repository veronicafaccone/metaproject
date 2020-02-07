<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <div class="mp-slider row">
         <div class="mp-slider__img col-xs-12 col-md-6 col-lg-5" :class="'mp-slider__img' + index"></div>
         <div class="mp-slider__text col-xs-12 col-md-offset-1 col-md-5 col-lg-offset-1 col-lg-6">
           <TextProject :year-text="slide.year" :title-text="slide.title" :paragraphs-text="slide.paragraphs" :cta="slide.cta"></TextProject>
         </div>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev">
      <div></div>
    </div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { EventBus } from '../eventbus.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import TextProject from '@/elements/TextProject.vue'
export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide,
    TextProject
  },
  data () {
    return {
      bgComponent: this.background,
      swiperOption: {
        loop: true,
        speed: 600,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      },
      swiperSlides: this.slides
    }
  },
  props: {
    background: {
      type: String,
      required: true
    },
    slides: {
      type: Array,
      required: true
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
  @import '../scss/04_layout/mp.slides.scss';
</style>
