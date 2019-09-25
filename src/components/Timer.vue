<template>
    <section id="app" class="hero is-info is-fullheight is-bold">
<div class="hero-body">
<div class="container has-text-centered">
  
  
  <div id="timer">
    <span id="minutes">{{ minutes }}</span>
    <span id="middle">:</span>
    <span id="seconds">{{ seconds }}</span>
  </div>

  <div id="buttons">
<!--     Start TImer -->
    <!-- <button 
      id="start" 
      class="button is-dark is-large" 
      v-if="!timer"
      @click="startTimer">
        Start
    </button> -->
<!--     Pause Timer -->
    <!-- <button 
      id="stop" 
      class="button is-dark is-large" 
      v-if="timer"
      @click="stopTimer">
        Stop
    </button> -->
<!--     Restart Timer -->
    <!-- <button 
      id="reset" 
      class="button is-dark is-large" 
      v-if="resetButton"
      @click="resetTimer">
        Reset
    </button> -->
  </div>
  
</div>
</div>
</section>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
    totalTime: (60 * 60),
    resetButton: false,
    time: 0
        }
    },
    created() {
        setInterval(() => {
            if(this.$store.state.start) {
                this.time ++
                if(this.time == 1) {

                    this.timer = setInterval(() => this.countdown(), 1000)
                    this.resetButton = true
                }
            }
        }, 1000)
    //     if(this.$store.state.start) {
    //         this.timer = setInterval(() => this.countdown(), 1000);
    //   this.resetButton = true;
    //     }
    },
    methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (60 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime >= 1){
        this.totalTime--;
      } else{
        this.totalTime = 0;
        this.$store.commit('setEnd', true)
        this.resetTimer()
      }
    }
  },
  // ========================
  computed: {
      
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
}
</script>

<style  scoped>
/* #message {
  color: #DDD;
  font-size: 50px;
  margin-bottom: 20px;
}

#timer {
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
} */
</style>