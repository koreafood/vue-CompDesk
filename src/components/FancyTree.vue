<template>
  <div class="page">
    <p>FancyTree --> {{ msg }}</p>
  </div>
</template>

<script>
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
