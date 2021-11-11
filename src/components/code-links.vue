<template>
  <div >
      <div v-if="!isHome" class="link" @click="linkToCode">This Exercise's Code</div>
  </div>
</template>

<script>
export default {
    methods: {
        linkToCode() {
            console.log('click')
            if (this.$route.name === 'findthenumber') {
                window.open('https://github.com/brianfordcode/math-exercises/blob/main/src/views/find-the-number.vue', '_blank');
            }
            if (this.$route.name === 'findtheshape') {
                window.open('https://github.com/brianfordcode/math-exercises/blob/main/src/views/find-the-shape.vue', '_blank');
            }
            if (this.$route.name === 'selectthecircle') {
                window.open('https://github.com/brianfordcode/math-exercises/blob/main/src/views/select-the-circle.vue', '_blank');
            }
            if (this.$route.name === 'jsonuserdata') {
                window.open('https://github.com/brianfordcode/math-exercises/blob/main/src/views/json-user-data.vue', '_blank');
            }
            
            else {
                alert("code not linked!")
            }
        },
        
        
    },
    computed: {
        isHome() {
            return this.$route.name === 'Home'
        }
    }
}
</script>

<style scoped>
.link {
    border: 1px solid black;
    width: 150px;
    padding: 10px;
    margin: 100px auto;

}

.link:hover {
    cursor: pointer;
    transform: scale(1.1);
}



</style>