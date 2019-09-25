<template>
  <div>
    <template>
      <v-simple-table height="300px">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">To'ri javoblar soni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        centered: true,
        grow: true,
        tabs: 3,
        desserts: [{
            name: 'Kasrlar ustida amallar',
            calories: 25,
          },
          {
            name: 'Kvadrat tenglamalar',
            calories: 27,
          },
        ],
      }
    },
  }
</script>