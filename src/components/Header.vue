<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      width="100%"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <!-- <v-toolbar-title>Individ</v-toolbar-title> -->

      <div class="flex-grow-1"></div>
      <Timer />
      <span>{{ this.$store.state.name }}</span>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="logOut"
          >
            <v-list-item-title>Tizimdan chiqish</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app  src="https://media.idownloadblog.com/wp-content/uploads/2019/01/blue-sound-wave-wallpaper-wallsbyjfl.png">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title ">
                Individ
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/signIn"  v-if="!this.$store.state.name">
          <v-list-item-icon>
            <v-icon class="">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="t">
              Tizimga  kirish
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/signUp"  v-if="!this.$store.state.name">
          <v-list-item-icon>
            <v-icon class="">mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="">
              Royxatdan o'tish
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/account"  v-if="this.$store.state.name">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/results"  v-if="this.$store.state.name">
          <v-list-item-icon>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Natijalar
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list>
        <template v-slot:append>
        <div class="pa-2 ">
          <v-btn block class="" light @click="logOut"  >Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>  
  </div>
</template>
<script>
import Timer from './Timer'
export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {Timer},
  methods: {
    logOut() {
      let payload = {
        name: '',
        seconName: '',
        password: ''
      }
      this.$store.commit('setUser', payload)
    }
  }
}
</script>