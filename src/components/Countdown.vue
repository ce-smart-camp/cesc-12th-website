<template>
  <div class='timer'>

      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
   
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    passed_date: Number,
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  computed: {
    date () {
      return Math.trunc(Date.parse(this.passed_date) / 1000)
    },
    seconds() {
      return (this.date - this.now) % 60;
    },
    minutes () {
      return Math.trunc((this.date - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  }
}
</script>

<style scoped>
.digit{
  padding: 15px;
  display: inline;
  font-family: 'Orbitron' ,sans-serif;
  font-size: 32px;
}
.text{
  padding: 15px;
  display: inline;
  font-family: 'Orbitron' ,sans-serif;
  font-size: 16px;
}
</style>
