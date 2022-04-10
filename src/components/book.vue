<template>
  <div>
    <p v-if="username">Hi {{ username }}, Welcome!</p>
    <h1>Books</h1>
    <!-- <p>List of Books coming Soon...</p> -->
    <p>List of Books:</p>
    <div>
      <table class="table">
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Book Title</td>
            <td>ISSN No.</td>
            <td>Customer</td>
          </tr>
        </thead>
        <!-- <tbody>
          <tr>
            <td class="justifyCenter">1</td>
            <td>Harry Potter and Dungeon</td>
            <td >12112</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
          <tr>
            <td class="justifyCenter">2</td>
            <td>Harry Potter and Dumbledore</td>
            <td>23232</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
        </tbody> -->
        <tbody>
          <tr v-for="item in books" :key="item.bookID">
            <td class="justifyCenter">{{item.bookID}}</td>
            <td>{{item.bookTitle}}</td>
            <td>{{item.issnNo}}</td>
            <td class="justifyCenter"><button type="button" @click.prevent="onOpenDialog()">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <dialogView v-if="openDialog">
    <button @click.prevent="openDialog=false">Close</button>
  </dialogView>
  <!-- <loginLib :getUser="getUserName"/> -->
  <!-- <loginLib :getUser="username"/> -->
  <!-- <loginLib /> -->
</template>

<script>
// import loginLib from './login.vue'
import dialogView from './dialogView.vue'

export default {
  name: "bookLib",
  components: {
    // loginLib,
    dialogView,
  },
  data() {
    return {
      username: localStorage.getItem("user-info"),
      books: [
        {
          bookID: '1',
          bookTitle: 'Harry Potter and Dungeo',
          issnNo: '12112',
          customerID: ['1','2']
        },
        {
          bookID: '2',
          bookTitle: 'Harry Potter and Dumbledore',
          issnNo: '23232',
          customerID: ['2']
        }
      ],
      openDialog: false,
      // welcomeMsg: false,
    };
  },
  // props:{
  //   username: String
  // }
  methods:{
    onOpenDialog(){
      this.openDialog=true;
    }
  }
};
</script>

<style scoped>
h1 {
  color: rgb(0, 61, 153);
  padding: 10px;
}
p {
  padding: 10px;
}
div {
  padding: 10px;
  margin: 10px;
}
.table{
  border: 1px solid rgb(0, 61, 153);
}
table td{
  border: 1px solid rgb(0, 61, 153);
  padding: 10px;
}
</style>