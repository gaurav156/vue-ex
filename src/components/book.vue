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
            <td class="tableHeaderData">Book Title</td>
            <td class="justifyCenter tableHeaderData">ISSN No.</td>
            <td class="tableHeaderData issn">Customer</td>
            <td class="justifyCenter tableHeaderData action">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.bookID">
            <td class="justifyCenter tableBodyData alignCenter">{{ item.bookID }}</td>
            <td class="tableBodyData">{{ item.bookTitle }}</td>
            <td class="tableBodyData alignCenter">{{ item.issnNo }}</td>
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
              <router-link
                :to="'/book/update/' + item.bookID"
                class="updateButton justifyCenter"
                >Update</router-link
              >
              <button
                v-on:click="deleteBook(item.bookID)"
                class="deleteButton justifyCenter"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <router-link :to="'/book/add'" class="addButton">Add Book</router-link>
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
    async loadData() {
      if (!this.username) {
        this.$router.push({ name: "login" });
      }

      let result = await axiosInvocation.methods.axiosInvoc(
        "http://localhost:3000/marklogic/books"
      );
      this.books = result;
    },
    async deleteBook(bookID) {
      let response = await axiosInvocation.methods.deleteBook(bookID);
      if (response.status == 200) {
        this.loadData();
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>

</style>