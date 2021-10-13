<template>

    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle"
          v-for="(circle, index) in circles"
          :key="index"
          @click="circle.fill = circle.fill === 'red' ? 'green' : 'red', colorIn(index)"
          :cx="circle.x"
          :cy="circle.y"
          :r="circle.r"
          :fill="circle.fill"
        />
    </svg>

    <button @click="getNewNumber">Get a Number!</button>

    <h1 v-if="gameStart">Select circle<span>{{ randNum }}</span></h1>

</template>

<script>
import Swal from "sweetalert2";

const generateCircles = nCircles => {
    const circles = []
    const width = 300
    const r = 20
    const spacing = width/nCircles
    for (let i=0; i < nCircles; i++) {
        circles.push({
            x: spacing * (i + 0.5),
            y: 50,
            r,
            fill: 'green'
        })
    }
    return circles
}

export default {
    data() {
        const randNum = Math.floor(Math.random() * 5) + 1
        return {
            circles: generateCircles(5),
            randNum,
            gameStart: false,
        }
    },
    methods: {
        colorIn(index) {
            let selectedNum = index + 1
            if (this.gameStart) {
                if (selectedNum === this.randNum) {
                    Swal.fire("Correct!");
                    this.circles = generateCircles(5)
                    this.randNum = Math.floor(Math.random() * 5) + 1
                } else {
                    Swal.fire("Try Again!");
                }
            }
        },
        getNewNumber() {
            this.gameStart = true
            this.randNum = Math.floor(Math.random() * 5) + 1
        },
    }

}
</script>

<style scoped>

.circle {
    cursor: pointer;
}

button {
  outline: none;
  border: none;
  color: white;
  background-color: darkblue;
  padding: 20px;
  margin: 0 20px;
  cursor: pointer;
}
button:active {
  transform: scale(0.95);
}

h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
}

span {
    padding-left: 10px;
    font-size: 50px;
}

</style>