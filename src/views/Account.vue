<template>
<v-container grid-list-xs12>
    
  <v-card
    class="overflow-hidden"
    light

  >
    <v-toolbar
      flat
      light
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn
        color="indigo white--text"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
        :value=" this.$store.state.name "
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="secondName"
        :value=" this.$store.state.secondName "
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Password"
        :value=" this.$store.state.password "
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
      }
    },
    beforeCreate() {
      if( !this.$store.state.name ) {
        this.$router.push('/signIn')
      }
    },
    methods: {
      customFilter (item, queryText, itemText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>