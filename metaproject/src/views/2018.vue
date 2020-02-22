<template>
  <div class="2018">
    <HeaderProject :background="header.background" :year-text="header.year" :title-text="header.title" :name-img="header.nameImg"></HeaderProject>
    <main>
      <section>
        <IntroProject :background="intro.background" :intro-project="intro"></IntroProject>
      </section>
      <section>
        <SliderProject :background="sliderProject.background" :slider-project="sliderProject"></SliderProject>
      </section>
       <section>
        <Partners :background="partners.background" :partners="partners"></Partners>
      </section>
      <section>
        <Footer :background="footer.background" :title-text="footer.title" :subtitle-text="footer.subtitle" :contact="footer.contact" :copyright="footer.copyright"></Footer>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderProject from '@/components/HeaderProject.vue'
import IntroProject from '@/components/IntroProject.vue'
import SliderProject from '@/components/SliderProject.vue'
import Partners from '@/components/Partners.vue'
import Footer from '@/components/Footer.vue'
import data from '../assets/data.json'
export default {
  name: 'anno2018',
  components: {
    HeaderProject,
    IntroProject,
    SliderProject,
    Partners,
    Footer
  },
  computed: {
    header () {
      return data.anno2018.header
    },
    intro () {
      return data.anno2018.intro
    },
    sliderProject () {
      return data.anno2018.sliderProject
    },
    partners () {
      return data.anno2018.partners
    },
    footer () {
      return data.footer
    }
  }
}
</script>
