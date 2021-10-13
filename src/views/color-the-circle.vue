<template>
  <h1>color the circle</h1>


    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle"
          v-for="(circle, index) in circles"
          :key="index"
          @click="circle.fill = circle.fill === 'black' ? 'orange' : 'black'"
          :cx="circle.x"
          :cy="circle.y"
          :r="circle.r"
          :fill="circle.fill"
          stroke="black"
          stroke-width="3"
        />
    </svg>


</template>

<script>
export default {
    data() {
        const nCircles = 5
        const circles = []
        const width = 300
        const r = 20
        const spacing = width/nCircles
        for (let i=0; i < nCircles; i++) {
            circles.push({
                x: spacing * (i + 0.5),
                y: 50,
                r,
                fill: 'orange'
            })
        }
        return {
            circles
        }
    },
    methods: {
    }

}
</script>

<style>

.circle {
    cursor: pointer;
}

</style>