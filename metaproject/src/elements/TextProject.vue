<template>
  <div class="mp-textproject">
    <div class="mp-textproject__header">
      <p><span v-html="this.yearText"></span></p>
      <h2 v-html="this.titleText"></h2>
    </div>
    <div class="mp-textproject__body">
      <p v-for="(paragraph, index) in this.paragraphsText" :key="index" v-html="paragraph"></p>
    </div>
    <ButtonCta :cta="this.cta"></ButtonCta>
  </div>
</template>

<script>
import ButtonCta from '@/elements/ButtonCta.vue'
export default {
  name: 'IntroText',
  components: {
    ButtonCta
  },
  props: {
    yearText: {
      type: String,
      required: false
    },
    titleText: {
      type: String,
      required: false
    },
    paragraphsText: {
      type: Array,
      required: true
    },
    cta: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/01_utilities/01_mp.utilities.scss';
  @import '../scss/03_components/mp.textproject.scss';
</style>
