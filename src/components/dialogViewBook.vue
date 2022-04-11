<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <!-- <p>Hi, it is dialog box!</p> -->
    <slot></slot>
    <table class="table">
      <thead>
        <tr>
          <td class="tableHeaderData">Book Title:</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resultFinalBook" :key="item">
          <td class="tableBodyData">{{item}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dialogViewBook",
  props: {
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
    };
  },

  async mounted() {
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

    console.log(this.resultFinalBook);
  },
};
</script>

<style scoped>
/* .backdrop {
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
} */
</style>