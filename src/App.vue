<template>

<navigation/>

<router-view/>

<codeLink/>

</template>

<script>
import navigation from "./components/navigation.vue"
import codeLink from "./components/code-links.vue"

export default{
  components: { navigation, codeLink
  }
}
</script>


<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  min-height: 100vh;
}

</style>
