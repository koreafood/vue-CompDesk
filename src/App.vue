<template>
  <div id="app">
    <GridBase msg="param text" />
    <VueBase msg="param text" />
    <HelloWorld msg="param text" />
    <FancyTree msg="param text" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import VueBase from './components/VueBase.vue';
import GridBase from './components/GridBase.vue';
import FancyTree from './components/FancyTree.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    VueBase,
    GridBase,
    FancyTree,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
