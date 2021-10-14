<template>

    <!-- <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle"
          v-for="(circle, index) in circles"
          :key="index"
          @click="circle.fill = circle.fill === 'red' ? 'green' : 'red', colorIn(index)"
          :cx="circle.x"
          :cy="circle.y"
          :r="circle.r"
          :fill="circle.fill"
        />
    </svg> -->

<h1>Work In Progress</h1>

<svg @click="handleClick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path class="nonagon" stroke="black" stroke-width="2" fill="white" d="M 98 50L 86.77013326971095 80.85380526495388L 58.33511252801266 97.27077214458598L 26.00000000000001 91.56921938165306L 4.894754202276403 66.4169668796321L 4.8947542022763955 33.5830331203679L 25.99999999999998 8.430780618346951L 58.33511252801264 2.7292278554140097L 86.77013326971093 19.1461947350461 z"/>
</svg>
<svg viewBox="0 0 100 100">
    <circle class="circle" stroke="black" stroke-width="2" fill="white" cx="50" cy="50" r="48"/>
</svg>
<svg viewBox="0 0 100 100">
    <path class="triangle" d="M 50 5 95 97.5 5 97.5 z" fill="white" stroke="black" stroke-width="2"/>
</svg>
<svg viewBox="0 0 100 100">
    <rect width="100" height="100" fill="white" stroke="black" stroke-width="4"/>
</svg>









    <!-- <button @click="getNewNumber">Get a Number!</button> -->

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
        handleClick() {
            console.log('click')
        }
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
    padding-bottom: 50px;
}

span {
    padding-left: 10px;
    font-size: 50px;
}

svg {
    cursor: pointer;
    width: 200px;
    /* border: 2px solid black; */
}



</style>