<template>

  <div class="container">
    <div class="grid">
      <span 
        @click="selectNumber(val)"
        v-for="val in logArray"
        :key="val">{{val}}
      </span>
    </div>

    <button @click="startGame">Get a Number!</button>
    <h1 v-if="gameStart">
      Find Number <span>{{ number }}</span>
    </h1>
  </div>

</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      gameStart: false,
      number: null,
      mysteryNum: null,
    };
  },
  computed: {
    logArray() {
      let oneToHundredArray = [];

      for (var i = 1; i <= 100; i++) {
        oneToHundredArray.push(i);
      }
      return oneToHundredArray;
    },
  },
  methods: {
    selectNumber(num) {
      if (this.gameStart) {
        if (num === this.number) {
          Swal.fire("Correct!");
          let randNum = Math.floor(Math.random() * 100) + 1;
          this.number = randNum;
        } else {
          Swal.fire("Try Again!");
        }
      }
    },
    startGame() {
      let randNum = Math.floor(Math.random() * 100) + 1;
      this.number = randNum;
      return (this.gameStart = true);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.grid {
  border: 1px solid black;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: min-content;
}

.grid span {
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15px;
  padding: 10px;
}

.grid span:hover {
  background-color: grey;
}

button {
  outline: none;
  border: none;
  color: white;
  background-color: darkblue;
  padding: 20px;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

h1 {
  padding: 20px 0;
}
h1 span {
  color: purple;
}



</style>