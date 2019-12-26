<template>
  <div id="nav">
      <div class="mp-navbar">
        <router-link to="/">home</router-link>
        <router-link to="/2020">2020</router-link>
        <router-link to="/2019">2019</router-link>
        <router-link to="/2018">2018</router-link>
        <router-link to="/about">about</router-link>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/01_utilities/mp.variables.scss';
  @import '../scss/01_utilities/mp.mixin.scss';
  @import '../scss/03_components/mp.navbar.scss';
</style>
