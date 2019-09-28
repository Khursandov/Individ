<template>

<v-container grid-list-xs12>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <v-card
    class="mx-auto mb-12"
    max-width="320"
  >  
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-end fill-height">Matematika</v-card-title>
    </v-img>

    <v-card-text>
      <span>Test soni 20</span><br>
      <span class="text--primary">
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        outlined
        color="indigo"
        @click="checkUser"
      >
        Boshlash
      </v-btn>
    </v-card-actions>
  </v-card> 
  <v-card
    class="mx-auto my-12"
    max-width="320"
  >  
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-end fill-height">Kimyo</v-card-title>
    </v-img>

    <v-card-text>
      <span>Test soni 20</span><br>
      <span class="text--primary">
        <!-- <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span> -->
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        outlined
        color="indigo"
        @click="checkUser"
      >
        Boshlash
      </v-btn>
    </v-card-actions>
  </v-card> 
        </v-row>
      </v-col>
    </v-row>
    <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
        <v-form @submit.prevent="enterToTest">
      <v-row>
        <v-text-field
          name="name"
          label="Enter your password"
          v-model="verPassword"
        ></v-text-field>
      </v-row>
      </v-form>
          <v-btn
            color=" deep-purple accent-4 mx-4"
            rounded
            dark
            @click="overlay = false"
          >
            Bekor qilish
          </v-btn>
          <v-btn
            color=" deep-purple accent-4 mx-4"
            rounded
            dark
            type="submit"
            @click="enterToTest"
          >
            Testni boshlash
          </v-btn>
        </v-overlay>
</v-container>

</template>

<script>
import Timer from '../components/Timer'
import { log } from 'util'
  export default {
    data () {
      return {
        alignment: 'center',
        justify: 'center',
        absolute: true,
        verPassword: '',
        overlay: false
      }
    },
    components: {Timer},
    beforeCreate() {
      
    },
    methods: {
      enterToTest() {
        this.$store.dispatch('getPassword')
        let data = this.$store.state.currentDatas
        console.log('current',data)
        if ( data.password == this.verPassword ) {
          this.$router.push('/start-test')
        }
      },
      checkUser() {
        if( !this.$store.state.name ) {
        this.$router.push('/signIn')
        } else {
          this.overlay = !this.overlay
          this.$store.commit('setStart', true)
          // this.$router.push('./start-test')
        }
      }
    }
  }
</script>