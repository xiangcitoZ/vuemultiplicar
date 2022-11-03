<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MenuComponent/>
  <TablaMultiplicar/>
</template>

<script>

import MenuComponent from './components/MenuComponent.vue'
import TablaMultiplicar from './components/TablaMultiplicar.vue'

export default {
  name: 'App',
  components: {
     MenuComponent, TablaMultiplicar
  }
}
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