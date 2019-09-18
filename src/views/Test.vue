<template>
  <v-item-group class="mb-12">
    <v-container v-for="(test, index ) in tests" :key="index">
      <blockquote class="blockquote font-weight-bold"><vue-mathjax :formula="test.body"></vue-mathjax></blockquote>
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.a)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                <vue-mathjax :formula="test.a"></vue-mathjax>
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.b)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                {{ test.b }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.c)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                {{ test.c }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.d)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2 ">
                {{ test.d }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn class="ma-2" width="50%" outlined color="indigo" @click="submit">Submit</v-btn>
    </div>
    <v-overlay 
        :absolute="absolute"
        class="text-center"
        v-if="overlay">
      
      <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
    {{ value }}
    </v-progress-circular>
    <v-divider></v-divider>
    <v-btn color=" deep-purple accent-4 mx-4"
      rounded
      to="/"
      dark>
      Bosh saxifaga o'tish
    </v-btn>
    </v-overlay>
  </v-item-group>
</template>
<script>
import {VueMathjax} from 'vue-mathjax'
export default {
    data() {
        return {
          tests: [],
          options: [],
          overlay: false,
          value: 0,
          absolute: false
        }
    },
    beforeCreate() {
      if( !this.$store.state.name ) {
        this.$router.push('/signIn')
      }
    },
    created() {
      this.$store.dispatch('getTests')
      this.tests = this.$store.state.tests
      console.log(this.tests)
    },
    methods: {
      check( payload, payload1 ) {
        let b = 0
        let c = 0
        let option = {
          id: payload,
          opt: payload1
        }
        if(this.options.length == 0) {
          this.options.push(option)
        }
        for(let i in this.options) {
          if(this.options[i].id == option.id) {
            ++b
          } else {
            ++c
          }
          if( b > 0) {
            this.options[i].opt = option.opt
          }
        }
        if( b == 0 ) {
          this.options.push(option)
        }
      },
      submit() {
        let b = 0
        for( let i in this.options ) {
          for( let a in this.tests ) {
            if( this.options[i].id == this.tests[a].id) {
            console.log('optttt',this.options[i].opt)
            console.log('testttt',this.tests[a].ans)
              if(this.options[i].opt == this.tests[a].ans){
                console.log('+++aaa')
                ++b
              }
              console.log('sasdsadsa',b)
            }
          }
        }
        let data = {
          name: this.$store.state.name,
          result: b,
          topicId: this.$store.state.currentTopic
        }
        this.$store.dispatch('storeResult', data)
        this.overlay = true
        b = b/20*100
        setInterval(() => {
          if(this.value !== b && this.value < b){
            this.value++
          }
        }, 10)
      }
    },
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>