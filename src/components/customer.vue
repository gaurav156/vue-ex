<template>
  <div class="div">
    <h1>Customers</h1><hr>
    <p>List of Customers:</p>
    <div class="tableDiv">
      <table class="table">
        <thead>
          <tr>
            <td class="tableHeaderData">Customer ID</td>
            <td class="tableHeaderData">Customer Name</td>
            <td class="tableHeaderData">Membership Date</td>
            <td class="justifyCenter tableHeaderData">Books</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.customerID">
            <td class="justifyCenter tableBodyData">{{item.customerID}}</td>
            <td class="tableBodyData">{{item.customerName}}</td>
            <td class="tableBodyData memDate">{{item.membershipDate}}</td>
            <td class="justifyCenter tableBodyData"><button type="button" @click.prevent="onOpenDialog(); getBookID(item.bookID)" class="viewButton">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <dialogViewBook v-if="openDialog" :bookIDListDialog="this.bookIDList">
    <button @click.prevent="openDialog=false" class="closeButton">X</button>
  </dialogViewBook>
</template>

<script>
import dialogViewBook from './dialogViewBook.vue'
export default {
  name: "customerLib",
  components: {
    dialogViewBook,
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
.table{
  border: 1px solid rgb(0, 61, 153);
}
table td{
  /* border: 1px solid rgb(0, 61, 153); */
  padding: 10px;
}
.memDate{
  padding-left: 28px;
}
</style>