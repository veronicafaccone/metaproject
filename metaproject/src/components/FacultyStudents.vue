<template>
  <div class="mp-facultystudents row">
    <div class="col-xs-12 col-md-5 mp-facultystudents__wrapper-text">
      <h4 class="mp-h4--with-line" v-html="this.faculty.title"></h4>
      <p v-html="this.faculty.description"></p>
      <div class="row mp-facultystudents--faculty">
        <div class="col-xs-12 mp-facultystudents--items" v-for="(item, index) in this.faculty.names"  :key="index">
          <p>{{item.name}} – {{item.profession}}</p>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-6 col-md-offset-1 col-lg-5 col-lg-offest-2 mp-facultystudents__wrapper-text">
      <h4 class="mp-h4--with-line" v-html="this.students.title"></h4>
      <p v-html="this.students.description"></p>
      <div class="row mp-facultystudents--students">
        <div class="col-xs-6 col-md-4 mp-facultystudents--items" v-for="(item, index) in this.students.names"  :key="index">
          <p>{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus.js'
export default {
  name: 'FacultyStudents',
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
    faculty: {
      type: Object,
      required: true
    },
    students: {
      type: Object,
      required: true
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
  @import '../scss/04_layout/mp.facultystudents.scss';
</style>
