<template>
  <div>

    <v-tabs 
    v-model="tab" 
    background-color="deep-purple accent-4" 
    class="elevation-2" dark 
    :grow="grow">
      <v-tabs-slider></v-tabs-slider>

      <v-tab 
      :href="`#tab-${1}`">
        O'quvchilar royhati
      </v-tab>

      <v-tab 
      :href="`#tab-${2}`">
        Test boshlash
      </v-tab>

      <v-tab 
      :href="`#tab-${3}`">
        Test natijalari
      </v-tab>

      <v-tab-item 
      :value="'tab-' + 1">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">secoondName</th>
              <th class="text-left">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.name">
              <td>{{ student.name }}</td>
              <td>{{ student.secondName }}</td>
              <td>{{ student.password }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-tab-item>
      <v-tab-item 
      :value="'tab-' + 2">
        <v-card 
        tile>
          <v-container 
          id="dropdown-example-3">
            <v-overflow-btn
      class="my-2"
      :items="topics"
      label="Mavzuni tanlash"
      counter
      item-value="text"
      v-model="currentTopic"
    ></v-overflow-btn>
              <v-chip class="deep-purple accent-4" outlined ><span>Kod: {{ password }}</span></v-chip>
              <v-card-actions>
                <v-btn color="deep-purple accent-4" outlined @click="Start">Kod aktivatsiya</v-btn>
                <v-btn color="deep-purple accent-4" outlined @click="deletePassword">Kodni O'chirish</v-btn>
                <v-btn color="deep-purple accent-4" outlined @click="StartTest">Boshlash</v-btn>
              </v-card-actions>
          </v-container>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item 
      :value="'tab-' + 3">
        <v-data-table :headers="headers" :items="studentResults" class="elevation-1">
          <template v-slot:item.calories="{ item }">
            <v-chip :color="getColor(item.calories)" dark>{{20- item.calories }}</v-chip>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Start from '../components/admin/startTest'
  export default {
    data () {
      return {
        students: [],
        studentResults: [],
        currentTopic: '',
        dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') },
        ],
        tab: null,
        grow: true,
        password: '',
        topics: '',
        headers: [
          {
            text: 'Ismi',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: "Notog'ri javoblar soni", value: 'calories' },
          { text: "Tog'ri javoblar soni", value: 'fat' },
          { text: "Notog'ri javoblar", value: 'carbs' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
          },
        ],
      }
    },
    components: {
      Start
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
      Start() {
        let a = Math.random()*1000000
        let b = a%1
        a = a-b
        this.password = a
      },
      StartTest() {
        const data = {
          password: this.password,
          currentTopic: this.currentTopic
        }
        this.$store.dispatch('createPassword', data)
      },
      deletePassword() {
        this.$store.dispatch('deletePassword', this.password)
      }
    },
    created() {
      this.students = this.$store.state.students
      this.$store.dispatch('getTopics')
      this.topics = this.$store.state.topics
      this.$store.dispatch('getResults')
      this.studentResults = this.$store.state.adminResults
      console.log(this.studentResults)
    }
  }
</script>