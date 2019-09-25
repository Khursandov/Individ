<template>
  <v-item-group class="mb-12" multiple>
    <v-container v-for="(test, index ) in tests" :key="index">

      <div :id="'test' + index"></div>
      <blockquote  class="blockquote font-weight-bold">{{ index + 1 }}. <vue-mathjax :formula="test.body"></vue-mathjax></blockquote>
      <v-row>
        <v-col cols="12" md="2" sm="6" >
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.a, index + 1, test.ans, test.body)">
            <v-card 
            :color="active ? 'primary' : ''" 
            class="d-flex align-center"
             height="auto" 
             width="auto"
              @click="toggle" fab
              >
              <span class="flex-grow-1 text-center py-2">
                {{ test.a }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.b, index + 1, test.ans, test.body)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                {{ test.b }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.c, index + 1, test.ans, test.body)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                {{ test.c }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.d, index + 1, test.ans, test.body )">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2 ">
                {{ test.d }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.e, index + 1, test.ans, test.body)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2 ">
                {{ test.e }}
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn class=" my-12" width="50%" outlined color="indigo" @click="submit">Submit</v-btn>
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
      light
    >
    {{ value }}%
    </v-progress-circular>
    <v-divider></v-divider>
    <div>
    <span>Tori javoblar soni - {{ answers }}</span>

    </div>
    <v-btn color="  mx-4"
    light
      rounded
      to="/yani"
      dark>
      Ya'ni
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
          absolute: false,
          answers: '',
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
      setTimeout(() => {
        setInterval(() => {
          if(this.$store.state.end) {
            this.submit()
          }
        })
      },3600)
    },
    methods: {
      check( payload, payload1, index1, payload2, testBody ) {
        let b = 0
        let c = 0
        let option = {
          id: payload,
          index: index1,
          opt: payload1,
          ans: payload2,
          body: testBody
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
        this.$store.commit('setStart', false)
        let b = 0
        for( let i in this.options ) {
          let rr = 0
          for( let a in this.tests ) {
            if( this.options[i].id == this.tests[a].id) {
            // console.log('optttt',this.options[i].opt)
            // console.log('testttt',this.tests[a].ans)
              if(this.options[i].opt == this.tests[a].ans){
                ++b
                this.options.splice(i,1)
                console.log(this.options[i])
              } else {
                rr = 1
              }
            }
          }
          this.$store.commit('setAfterTest', this.options[i])

        }
          console.log(this.options)
        let data = {
          name: this.$store.state.name,
          result: b,
          topicId: this.$store.state.currentTopic,
        }
        this.$store.dispatch('storeResult', data)
        this.answers = b
        this.overlay = true
        b = b/30*100
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