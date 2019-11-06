<template>
  <div>
    <div class="container">
      <modal />
      <p>{{ loremIpsum }}</p>
    </div>
    <!-- /.container -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import loremIpsum from './lorem-ipsum'
import Modal from './components/Modal.vue'
import Component from 'vue-class-component'

@Component({
  components: { Modal },
})
export default class Demo extends Vue {
  private loremIpsum = loremIpsum
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background-color: #f4f7fd;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 15px;
}
</style>
