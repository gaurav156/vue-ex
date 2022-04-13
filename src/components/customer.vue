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
import axios from "axios";
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
      // customers: [
      //   {
      //     customerID: '1',
      //     customerName: 'Somnath',
      //     membershipDate: '01-Dec-2020',
      //     bookID: ['1']
      //   },
      //   {
      //     customerID: '2',
      //     customerName: 'Pravin',
      //     membershipDate: '01-Dec-2022',
      //     bookID: ['1','2']
      //   }
      // ],
      openDialog: false,
      bookIDList: [],
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
    let resultCustomers = await axios
      .get("http://localhost:3000/customers", { timeout: 2000 })
      .catch((error) => {
        console.log(error);
      });
    this.customers = resultCustomers.data;
  },
};
</script>

<style scoped>
.memDate {
  padding-left: 28px;
}
</style>