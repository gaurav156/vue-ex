<template>
  <headerLib />
  <div class="divP">
    <h1>Customers</h1>
    <hr />
    <p>List of Customers:</p>
    <div class="tableDiv">
      <table class="table">
        <thead>
          <tr>
            <td class="tableHeaderData">Customer ID</td>
            <td class="tableHeaderData">Customer Name</td>
            <td class="tableHeaderData">Membership Date</td>
            <td class="tableHeaderData">Books</td>
            <td class="justifyCenter tableHeaderData action">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.customerID">
            <td class="justifyCenter tableBodyData alignCenter">
              {{ item.customerID }}
            </td>
            <td class="tableBodyData alignCenter">{{ item.customerName }}</td>
            <td class="tableBodyData alignCenter">{{ item.membershipDate }}</td>
            <td class="justifyCenter tableBodyData">
              <button
                type="button"
                @click.prevent="
                  onOpenDialog();
                  getBookID(item.bookID);
                "
                class="viewButton"
              >
                View
              </button>
            </td>
            <td class="tableBodyData">
              <router-link
                :to="'/customer/update/' + item.customerID"
                class="updateButton justifyCenter"
                >Update</router-link
              >
              <button
                v-on:click="deleteCustomer(item.customerID)"
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
      <router-link :to="'/customer/add'" class="addButton"
        >Add Customer</router-link
      >
    </div>
  </div>
  <dialogViewBook v-if="openDialog" :bookIDListDialog="this.bookIDList">
    <button @click.prevent="openDialog = false" class="closeButton">X</button>
  </dialogViewBook>
</template>

<script>
import headerLib from "./header.vue";
import axiosInvocation from "./axioInvocation.js";
import dialogViewBook from "./dialogViewBook.vue";

export default {
  name: "customerLib",
  components: {
    headerLib,
    dialogViewBook,
  },
  data() {
    return {
      username: localStorage.getItem("user-info"),
      customers: [],
      openDialog: false,
      bookIDList: String,
    };
  },
  methods: {
    onOpenDialog() {
      this.openDialog = true;
    },
    getBookID(BID) {
      this.bookIDList = BID;
      // console.log(BID);
    },
    async loadData() {
      if (!this.username) {
        this.$router.push({ name: "login" });
      }

      let result = await axiosInvocation.methods.axiosInvoc(
        "http://localhost:3000/marklogic/customers"
      );
      this.customers = result;
    },
    async deleteCustomer(customerID) {
      let response = await axiosInvocation.methods.deleteCustomer(customerID);
      if (response.status == 200) {
        this.loadData();
      }
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.addButton {
  padding-left: 8px;
  padding-right: 8px;
}
</style>