<template>
  <div class="2017">
    <HeaderProject :background="header.background" :year-text="header.year" :title-text="header.title" :name-img="header.nameImg"></HeaderProject>
    <main>
      <section>
        <IntroProject :background="intro.background" :intro-project="intro"></IntroProject>
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
import Footer from '@/components/Footer.vue'
import data from '../assets/data.json'
export default {
  name: 'anno2017',
  components: {
    HeaderProject,
    IntroProject,
    Footer
  },
  computed: {
    header () {
      return data.anno2017.header
    },
    intro () {
      return data.anno2017.intro
    },
    footer () {
      return data.footer
    }
  }
}
</script>
