<template>
  <headerLib />
  <div class="divP">
    <h1>Books</h1>
    <hr />
    <p>List of Books:</p>
    <div class="tableDiv">
      <table class="table">
        <thead>
          <tr>
            <td class="justifyCenter tableHeaderData">Book ID</td>
            <td class="tableHeaderData" id="bookTitle">Book Title</td>
            <td class="justifyCenter tableHeaderData">ISSN No.</td>
            <td class="tableHeaderData issn">Customer</td>
            <td class="justifyCenter tableHeaderData">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.bookID">
            <td class="justifyCenter tableBodyData">{{ item.bookID }}</td>
            <td class="tableBodyData">{{ item.bookTitle }}</td>
            <td class="tableBodyData issn">{{ item.issnNo }}</td>
            <td class="justifyCenter tableBodyData">
              <button
                type="button"
                @click.prevent="
                  onOpenDialog();
                  getCustomerID(item.customerID);
                "
                class="viewButton"
              >
                View
              </button>
            </td>
            <td class="tableBodyData">
              <router-link :to="'/book/update/' + item.bookID" class="updateButton justifyCenter"
                >Update</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <dialogViewCustomer
    v-if="openDialog"
    :customerIDListDialog="this.customerIDList"
  >
    <button @click.prevent="openDialog = false" class="closeButton">X</button>
  </dialogViewCustomer>
</template>

<script>
import headerLib from "./header.vue";
import axiosInvocation from "./axioInvocation.js";
import dialogViewCustomer from "./dialogViewCustomer.vue";

export default {
  name: "bookLib",
  components: {
    headerLib,
    dialogViewCustomer,
  },
  data() {
    return {
      username: localStorage.getItem("user-info"),
      books: [],
      openDialog: false,
      customerIDList: String,
    };
  },
  methods: {
    onOpenDialog() {
      this.openDialog = true;
    },
    getCustomerID(CID) {
      this.customerIDList = CID;
    },
  },
  async mounted() {
    if (!this.username) {
      this.$router.push({ name: "login" });
    }

    let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/books"
    );
    this.books = result;
  },
};
</script>

<style scoped>
.issn {
  padding-left: 35px;
}
#bookTitle {
  padding-left: 80px;
}
.updateButton{
    height: 100%;
    padding: 0px;
    margin: 0px;
    background-color: rgb(0, 102, 255);
    color: white;
    border: none;
    font-size: medium;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Noto Sans Display", sans-serif;
    text-decoration: none;
}
</style>