<template>
  <v-item-group class="mb-12">
    <v-container v-for="(test, index ) in tests" :key="index">
      <blockquote class="blockquote font-weight-bold">{{ test.index }}. <vue-mathjax :formula="test.body"></vue-mathjax></blockquote>
      <v-row>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.a, index + 1)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                Sizning javobingiz :
                <vue-mathjax :formula="test.opt"></vue-mathjax>
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <v-item v-slot:default="{ active, toggle }">
            <div @click="check(test.id, test.b, index + 1)">
            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" height="auto" width="auto"
              @click="toggle" fab>
              <span class="flex-grow-1 text-center py-2">
                Tog'ri javob:
                <vue-mathjax :formula="test.ans"></vue-mathjax>
              </span>
            </v-card>
            </div>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-btn class="my-12" width="50%" outlined color="indigo">Endi tushundim!!!</v-btn>
    </div>
  </v-item-group>
</template>
<script>
import {VueMathjax} from 'vue-mathjax'
export default {
    data() {
        return {
          tests: [],
        }
    },
    beforeCreate() {
      if( !this.$store.state.name ) {
        this.$router.push('/signIn')
      }
    },
    created() {
       this.tests = this.$store.state.afterTest
       
    },
    methods: {
      
    },
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>