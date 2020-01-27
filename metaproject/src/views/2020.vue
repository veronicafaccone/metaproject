<template>
  <div class="2020">
    <HeaderProject :background="header.background" :year-text="header.year" :title-text="header.title" :name-img="header.nameImg"></HeaderProject>
    <main>
      <section>
        <Footer :background="footer.background" :title-text="footer.title" :subtitle-text="footer.subtitle" :contact="footer.contact" :copyright="footer.copyright"></Footer>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderProject from '@/components/HeaderProject.vue'
import Footer from '@/components/Footer.vue'
import data from '../assets/data.json'
export default {
  name: '2020',
  components: {
    HeaderProject,
    Footer
  },
  computed: {
    header () {
      return data.anno2020.header
    },
    footer () {
      return data.footer
    }
  }
}
</script>
