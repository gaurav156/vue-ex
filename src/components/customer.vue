<template>
  <div>
    <h1>Customers</h1>
    <p>List of Customers coming Soon...</p>
    <div>
      <table class="table">
        <thead>
          <tr>
            <td>Customer ID</td>
            <td>Customer Name</td>
            <td>Membership Date</td>
            <td class="justifyCenter">Books</td>
          </tr>
        </thead>
          <!-- <tr>
            <td class="justifyCenter">1</td>
            <td>Somnath</td>
            <td>01-Dec-2020</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
          <tr>
            <td class="justifyCenter">2</td>
            <td>Pravin</td>
            <td>01-Dec-2022</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr> -->
        <tbody>
          <tr v-for="item in customers" :key="item.customerID">
            <td class="justifyCenter">{{item.customerID}}</td>
            <td>{{item.customerName}}</td>
            <td>{{item.membershipDate}}</td>
            <td class="justifyCenter"><button type="button" @click.prevent="onOpenDialog(); getBookID(item.bookID)">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <dialogView v-if="openDialog" :bookIDListDialog="this.bookIDList">
    <button @click.prevent="openDialog=false">Close</button>
  </dialogView>
</template>

<script>
import dialogView from './dialogView.vue'
export default {
  name: "customerLib",
  components: {
    dialogView,
  },
  data(){
    return{
      customers: [
        {
          customerID: '1',
          customerName: 'Somnath',
          membershipDate: '01-Dec-2020',
          bookID: ['1']
        },
        {
          customerID: '2',
          customerName: 'Pravin',
          membershipDate: '01-Dec-2022',
          bookID: ['1','2']
        }
      ],
      openDialog: false,
      bookIDList: [],
    }
  },
  methods:{
    onOpenDialog(){
      this.openDialog=true;
    },
    getBookID(BID){
      this.bookIDList=BID;
      console.log(BID);
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