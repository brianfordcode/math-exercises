<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/findthenumber">Find The Number</router-link>
    <router-link to="/selectthecircle">Select The Circle</router-link>
    <!-- <router-link to="/findtheshape">Find The Shape</router-link> -->
    <router-link to="/jsonuserdata">JSON User Data</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: left;
  /* border: 1px solid blue; */
  margin-bottom: 50px;
  box-shadow: 0px 0px 33px -20px #000000;
}

#nav a {
  font-weight: bold;
  margin-right: 30px;
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(10, 10, 163);
}
</style>