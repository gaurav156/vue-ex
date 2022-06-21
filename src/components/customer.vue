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
            <td class="justifyCenter tableHeaderData">Books</td>
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
          </tr>
        </tbody>
      </table>
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
      console.log(BID);
    },
  },
  async mounted() {

    if (!this.username) {
      this.$router.push({ name: "login" });
    }
    // let resultCustomers = await axios
    //   .get("http://localhost:3000/marklogic/customers", { timeout: 2000 })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // this.customers = resultCustomers.data;

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
</style>