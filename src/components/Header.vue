<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      width="100%"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Individ</v-toolbar-title> -->

      <div class="flex-grow-1"></div>
      <Timer />
      <span>{{ this.$store.state.name }}</span>
      <v-btn dark outlined rounded to="/signUp" class="mx-2" v-if="!this.$store.state.name">Ro'yxatdan o'tish</v-btn>
      <v-btn dark outlined rounded to="/signIn" class="mx-2" v-if="!this.$store.state.name">Kirish</v-btn>
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
  </div>
</template>
<script>
import Timer from './Timer'
export default {
  data() {
    return {}
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