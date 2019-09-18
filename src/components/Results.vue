<template>
<v-container grid-list-xs12>
    
  <v-card
    class="mt-4 mx-auto mt-12"
    max-width="100%"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last 10  Test</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
  <Tabs />
</v-container>
</template>

<script>
import Tabs from './Tabs'
  export default {
    data: () => ({
      labels: [
        '30%',
        '35%',
        '34%',
        '30%',
        '30%',
        '60%',
        '30%',
        '30%',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        1000,
      ],
    }),
    beforeCreate() {
      if( !this.$store.state.name ) {
        this.$router.push('/signIn')
      }
    },
    components: {
        Tabs
    }
  }
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>