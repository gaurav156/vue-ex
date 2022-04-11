<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <!-- <p>Hi, it is dialog box!</p> -->
    <slot></slot>
    <div>
      <table class="table">
        <thead>
          <tr>
            <td class="tableHeaderData">Customer Name:</td>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="item in customers" :key="item.customerID"> -->
          <!-- <td class="justifyCenter">{{item.bookID}}</td> -->
          <!-- <td  v-if="item.customerID===customerIDListDialog[item-1]">{{item.customerName }}</td>
        </tr> -->

          <tr v-for="item in resultFinalCustomer" :key="item">
            <td class="tableBodyData">{{ item }}</td>
          </tr>

          <!-- <tr v-for="item in resultFinalBook" :key="item">
          <td>{{item}}</td>
        </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dialogView",
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
    let resultCustomer = await axios.get("http://localhost:3000/customers");
    this.displayTableCustomer = resultCustomer.data;
    for (var i = 0; i < this.displayTableCustomer.length; i++) {
      for (var j = 0; j < this.customerIDListDialog.length; j++) {
        if (
          this.customerIDListDialog[j] ===
          this.displayTableCustomer[i].customerID
        ) {
          this.resultFinalCustomer.push(
            this.displayTableCustomer[i].customerName
          );
        }
      }
    }
    console.log(this.resultFinalCustomer);

    let resultBook = await axios.get("http://localhost:3000/books");
    this.displayTableBook = resultBook.data;
    for (var a = 0; a < this.displayTableBook.length; a++) {
      for (var b = 0; b < this.bookIDListDialog.length; b++) {
        if (this.bookIDListDialog[b] === this.displayTableBook[a].bookID) {
          this.resultFinalBook.push(this.displayTableBook[a].bookID);
          console.log(this.displayTableBook[a].bookID);
        }
      }
    }
    console.log(this.resultFinalBook);
  },
};
</script>

<style scoped>

</style>