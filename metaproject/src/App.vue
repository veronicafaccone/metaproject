<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import './scss/01_utilities/01_mp.utilities.scss';
  @import './scss/02_base/mp.common.fonts.scss';
  @import './scss/02_base/mp.reset.scss';
  @import './scss/main.scss';
</style>
