<template>
  <footer class="mp-footer">
    <div class="mp-footer__container">
      <h2 v-html="this.titleText"></h2>
      <h3 v-html="this.subtitleText"></h3>
      <div class="mp-footer__contact">
        <h4 class="mp-h4--with-line" v-html="this.contact.title"></h4>
        <div class="row">
          <div v-for="(contact, index) in this.contact.items" :key="index" class="mp-footer__contact-item col-xs-12 col-sm-4">
              <p><span v-html="contact.name"></span></p>
              <p v-html="contact.position"></p>
              <a :href="'mailto:' + contact.email" v-html="contact.email"></a>
              <p v-html="contact.number"></p>
          </div>
        </div>
      </div>
      <p class="mp-footer__copyright" v-html="this.copyright"></p>
    </div>
  </footer>
</template>

<script>
import { EventBus } from '../eventbus.js'
export default {
  name: 'Footer',
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
    titleText: {
      type: String,
      required: false
    },
    subtitleText: {
      type: String,
      required: false
    },
    contact: {
      type: Object,
      required: true
    },
    copyright: {
      type: String,
      required: false
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
  @import '../scss/04_layout/mp.footer.scss';
</style>
