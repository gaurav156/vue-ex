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
            <td class="tableHeaderData issn">Books</td>
            <td class="justifyCenter tableHeaderData">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customers" :key="item.customerID">
            <td class="justifyCenter tableBodyData">{{ item.customerID }}</td>
            <td class="tableBodyData">{{ item.customerName }}</td>
            <td class="tableBodyData memDate">{{ item.membershipDate }}</td>
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
              <router-link :to="'/customer/update/' + item.customerID" class="updateButton justifyCenter"
                >Update</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <router-link :to="'/customer/add'" class="addButton">Add Customer</router-link>
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
  },
  async mounted() {

    if (!this.username) {
      this.$router.push({ name: "login" });
    }

    let result = await axiosInvocation.methods.axiosInvoc(
      "http://localhost:3000/marklogic/customers"
    );
    this.customers = result;
  },
};
</script>

<style scoped>
.memDate {
  padding-left: 28px;
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
.updateButton:hover {
  border-color: 1px solid blue;
  background-color: rgb(0, 61, 153);
}
.issn {
  padding-left: 35px;
}
.addButton {
  justify-self: center;
  border-color: lightblue;
  font-weight: bold;
  height: 30px;
  margin: 0px;
  background-color: rgb(0, 102, 255);
  color: white;
  font-size: medium;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Noto Sans Display", sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 10%;
  padding-top: 8px;
  position: absolute;
  margin-left: 22.5%;
  margin-top: 1.5%;
}
.addButton:hover {
  background-color: lightblue;
  color: rgb(0, 102, 255);
}
</style>