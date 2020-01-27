<template>
  <div class="mp-textproject">
    <div class="mp-textproject__header">
      <p><span v-html="this.yearText"></span></p>
      <h2 v-html="this.titleText"></h2>
    </div>
    <div v-if="this.paragraphsText !== ''" class="mp-textproject__body">
      <p v-html="this.paragraphsText"></p>
    </div>
    <ButtonCta v-if="this.cta !== ''" :cta="this.cta"></ButtonCta>
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
      required: true
    },
    titleText: {
      type: String,
      required: true
    },
    paragraphsText: {
      type: String,
      required: false
    },
    cta: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/01_utilities/01_mp.utilities.scss';
  @import '../scss/03_components/mp.textproject.scss';
</style>
