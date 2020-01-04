<template>
  <router-link :to="'/' + this.cta.link" class="mp-buttoncta">
      <p class="mp-buttoncta__text">{{this.cta.before}}</p>
      <div class="mp-buttoncta__line"></div>
      <p class="mp-buttoncta__text">{{this.cta.after}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonCta',
  props: {
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
  @import '../scss/03_components/mp.buttoncta.scss';
</style>
