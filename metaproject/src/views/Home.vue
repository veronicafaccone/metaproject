<template>
  <div class="home">
    <HeaderHome :background="headerHome.background"></HeaderHome>
    <main>
      <section>
        <IntroText :background="introText.background" :title-text="introText.title" :subtitle-text="introText.subtitle" :paragraphs-text="introText.paragraphs"></IntroText>
      </section>
      <section>
        <CurrentYear :background="currentYear.background" :year-text="currentYear.year" :title-text="currentYear.title" :paragraphs-text="currentYear.paragraphs" :cta="currentYear.cta"></CurrentYear>
      </section>
      <section>
        <Slider :background="slider.background" :slides="slider.slides"></Slider>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import IntroText from '@/components/IntroText.vue'
import CurrentYear from '@/components/CurrentYear.vue'
import Slider from '@/components/Slider.vue'
import data from '../assets/data.json'
export default {
  name: 'home',
  components: {
    HeaderHome,
    IntroText,
    CurrentYear,
    Slider
  },
  computed: {
    headerHome () {
      return data.headerHome
    },
    introText () {
      return data.introText
    },
    currentYear () {
      return data.currentYear
    },
    slider () {
      return data.slider
    }
  }
}
</script>
