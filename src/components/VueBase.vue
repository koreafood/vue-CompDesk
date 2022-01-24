<template>
  <div class="page">
    <p>VueBase --> {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueBase',
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
