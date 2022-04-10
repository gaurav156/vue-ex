<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <p>Hi, it is dialog box!</p>
    <slot></slot>
    <!-- <table class="table">
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Book Title</td>
            <td>ISSN No.</td>
            <td>Customer</td>
          </tr>
        </thead> -->
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
    <!-- <tbody>
          <tr v-for="item in books" :key="item.bookID">
            <td class="justifyCenter">{{item.bookID}}</td>
            <td>{{item.bookTitle}}</td>
            <td>{{item.issnNo}}</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
        </tbody>
      </table> -->

    <table class="table">
      <thead>
        <tr>
          <td>Book Title</td>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="item in customers" :key="item.customerID"> -->
        <!-- <td class="justifyCenter">{{item.bookID}}</td> -->
        <!-- <td  v-if="item.customerID===customerIDListDialog[item-1]">{{item.customerName }}</td>
        </tr> -->
  
        <tr v-for="item in resultFinalBook" :key="item">
          <td>{{item}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <p v-for="item in customerIDListDialog" :key="item">{{ item }}</p> -->
    <!-- <p>{{customerIDlistDialog}}</p> -->
    <!-- <button v-on:click="test()">test</button>
    <p>{{ customers }}</p> -->
    <!-- <button v-on:click="createView()">create</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dialogViewBook",
  props: {
    // booksDialog: [],
    // customersDialog: [],
    bookIDListDialog: [],
    customerIDListDialog: [],
  },
  data() {
    return {
      displayTableCustomer: [],
      displayTableBook: [],
      resultFinalCustomer: [],
      resultFinalBook: [],
      books: [
        {
          bookID: "1",
          bookTitle: "Harry Potter and Dungeo",
          issnNo: "12112",
          customerID: ["1", "2"],
        },
        {
          bookID: "2",
          bookTitle: "Harry Potter and Dumbledore",
          issnNo: "23232",
          customerID: ["2"],
        },
      ],
      customers: [
        {
          customerID: "1",
          customerName: "Somnath",
          membershipDate: "01-Dec-2020",
          bookID: ["1"],
        },
        {
          customerID: "2",
          customerName: "Pravin",
          membershipDate: "01-Dec-2022",
          bookID: ["1", "2"],
        },
      ],
      //   customerIDlistDialog: [],
    };
  },
//   methods: {
//     test() {
//       console.log(this.customerIDListDialog);
//       console.log(this.bookIDListDialog);
      //   console.log(this.customers);
    // },
    // createView() {
    //   const res = Object.values(this.customers);
    //   console.log(res);
      // while(this.customers.customerID===this.customerIDListDialog){
      //     this.result=this.customers.customerName;
      // }
      // this.result = this.customerIDListDialog.filter(element => this.customers.customerID.includes(element));
      // let resultM = result1.filter(this.customerIDListDialog => result2.some(this.customers => this.customerIDListDialog === this.customers.customerID);
      // this.customers=[[1,'Somnath'],[2,'Pravin']],
      // this.customerIDListDialog=[1,2],
      // this.result=[],

      // var i=0;
      // while(i<res.length){
      //     if(this.customerIDListDialog[i] === this.res[i][0]){
      //         this.result.push(this.res[i][1]);
      //     }
      //     i++;
      // }
      // new String("a").valueOf() == new String("a").valueOf()

    //   const filteredArray = this.customers.customerID.filter((value) =>
    //     this.customerIDListDialog.includes(value)
    //   );

      // while(i<this.customers.length){
      //     if(this.customerIDListDialog[i] === this.result[i][0]){
      //         this.result.push(this.customers[i][1]);
      //     }
      //     i++;
      // }
//       console.log(filteredArray);
//     },
//   },
  async mounted() {
    // let resultCustomer = await axios.get("http://localhost:3000/customers");
    // this.displayTableCustomer = resultCustomer.data;
    //     for(var i=0; i<this.displayTableCustomer.length; i++){
    //         for(var j=0; j<this.customerIDListDialog.length; j++){
    //             if(this.customerIDListDialog[j] === this.displayTableCustomer[i].customerID){
    //                 this.resultFinalCustomer.push(this.displayTableCustomer[i].customerName);
    //             }
    //         }
    //     }
    //     console.log(this.resultFinalCustomer);


    // console.log(this.displayTable);

    // var i = 0;
    // while (i < this.displayTable.length) {
    //   if (this.customerIDListDialog[i] === this.displayTable[i].customerID) {
    //     this.resultFinal.push(this.displayTable[i].customerName);
    //   }
    //   i++;
    // }
    

    let resultBook = await axios.get("http://localhost:3000/books");
    this.displayTableBook = resultBook.data;
    for(var a=0; a<this.displayTableBook.length; a++){
        for(var b=0; b<this.bookIDListDialog.length; b++){
            if(this.bookIDListDialog[b] === this.displayTableBook[a].bookID){
                this.resultFinalBook.push(this.displayTableBook[a].bookTitle);
                console.log(this.displayTableBook[a].bookID);
            }
        }
    }
    // for(var a=0; a<this.displayTableBook.length; a++){
    //     for(var b=0; b<this.bookIDListDialog.length; b++){
    //         if(this.bookIDListDialog[b] === this.displayTableBook[a].bookID){
    //             this.resultFinalBook.push(this.displayTableBook[a].bookID);
    //             console.log(this.displayTableBook[a].bookID);
    //         }
    //     }
    // }
    console.log(this.resultFinalBook);
  },
  //   async created() {
  //     this.books = this.booksDialog;
  //     this.customers = this.customersDialog;
  //     this.customerID = this.customerIDlistDialog;
  //   },
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.dialog {
  position: fixed;
  top: 20%;
  background: white;
  width: 60vw;
  left: 20vw;
  padding: 20px;
}
</style>