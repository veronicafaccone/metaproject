<template>
  <div class="home">
    <HeaderHome :background="headerHome.background"></HeaderHome>
    <main>
      <section>
        <IntroText :background="introText.background"></IntroText>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import IntroText from '@/components/IntroText.vue'
import data from '../assets/data.json'
export default {
  name: 'home',
  components: {
    HeaderHome,
    IntroText
  },
  computed: {
    headerHome () {
      return data.headerHome
    },
    introText () {
      return data.introText
    }
  }
}
</script>
