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
          <td>Customer Name</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in customers" :key="i.customerID">
          <!-- <td class="justifyCenter">{{item.bookID}}</td> -->
          <td>{{ i.customerName }}</td>
        </tr>
      </tbody>
    </table>
    <p v-for="item in customerIDlist" :key="item">{{ item }}</p>
    <!-- <p>{{customerIDlistDialog}}</p> -->
    <button v-on:click="test()">test</button>
    <p>{{ customers }}</p>
  </div>
</template>

<script>
export default {
  name: "dialogView",
  props: {
    // booksDialog: [],
    // customersDialog: [],
    bookIDListDialog: [],
    customerIDListDialog: [],
  },
  data() {
    return {
      result: [],
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
  methods: {
    test() {
      console.log(this.customerIDListDialog);
      console.log(this.bookIDListDialog);
    //   console.log(this.customers);
    },
  },
  async created() {
    this.books = this.booksDialog;
    this.customers = this.customersDialog;
    this.customerID = this.customerIDlistDialog;
  },
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