<template>
  <div class="div">
    <p v-if="username">Hi {{ username }}, Welcome!</p>
    <h1>Books</h1><hr>
    <!-- <p>List of Books coming Soon...</p> -->
    <p>List of Books:</p>
    <div class="tableDiv">
      <table class="table">
        <thead>
          <tr>
            <td class=" justifyCenter tableHeaderData">Book ID</td>
            <td class="tableHeaderData">Book Title</td>
            <td class=" justifyCenter tableHeaderData">ISSN No.</td>
            <td class="tableHeaderData">Customer</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.bookID">
            <td class="justifyCenter tableBodyData">{{item.bookID}}</td>
            <td class="tableBodyData">{{item.bookTitle}}</td>
            <td class="tableBodyData issn">{{item.issnNo}}</td>
            <td class="justifyCenter tableBodyData"><button type="button" @click.prevent="onOpenDialog(); getCustomerID(item.customerID)" class="viewButton">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <dialogViewCustomer v-if="openDialog" :customerIDListDialog="this.customerIDList">
    <button @click.prevent="openDialog=false" class="closeButton">X</button>
  </dialogViewCustomer>
</template>

<script>
import dialogViewCustomer from './dialogViewCustomer.vue'

export default {
  name: "bookLib",
  components: {
    dialogViewCustomer,
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
      customerIDList: [],
    };
  },
  methods:{
    onOpenDialog(){
      this.openDialog=true;
    },
    getCustomerID(CID){
      this.customerIDList=CID;
      console.log(CID);
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
.table{
  border: 1px solid rgb(0, 102, 255);
}
table td{
  /* border: 1px solid rgb(0, 61, 153); */
  padding: 10px;
}
.issn{
  padding-left: 35px;
}
</style>