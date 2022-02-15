<template>
  <div class="page">
    <p>FancyTree --> {{ msg }}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import jQuery from 'jquery';
//const fancytree = require('jquery.fancytree');
import fancytree from 'jquery.fancytree';

export default {
  name: 'FancyTree',
  props: {
    msg: String,
  },
  created() {},
  mounted() {},
  methods: {
    data() {},
  },
};
</script>
<style scoped>
.page {
  color: #42b983;
}
</style>
