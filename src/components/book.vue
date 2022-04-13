<template>
  <headerLib />
  <div class="divP">
    <!-- <p v-if="username" class="welcomeMsg">Hi {{ username }}, Welcome!</p> -->
    <h1>Books</h1>
    <hr />
    <!-- <p>List of Books coming Soon...</p> -->
    <p>List of Books:</p>
    <div class="tableDiv">
      <table class="table">
        <thead>
          <tr>
            <td class="justifyCenter tableHeaderData">Book ID</td>
            <td class="tableHeaderData" id="bookTitle">Book Title</td>
            <td class="justifyCenter tableHeaderData">ISSN No.</td>
            <td class="tableHeaderData issn">Customer</td>
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
import axios from "axios";
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
      // books: [
      //   {
      //     bookID: '1',
      //     bookTitle: 'Harry Potter and Dungeo',
      //     issnNo: '12112',
      //     customerID: ['1','2']
      //   },
      //   {
      //     bookID: '2',
      //     bookTitle: 'Harry Potter and Dumbledore',
      //     issnNo: '23232',
      //     customerID: ['2']
      //   }
      // ],
      openDialog: false,
      customerIDList: [],
    };
  },
  methods: {
    onOpenDialog() {
      this.openDialog = true;
    },
    getCustomerID(CID) {
      this.customerIDList = CID;
      console.log(CID);
    },
  },
  async mounted() {
    
    if (!this.username) {
      this.$router.push({ name: "login" });
    }
    let resultBooks = await axios
      .get("http://localhost:3000/books", { timeout: 2000 })
      .catch((error) => {
        console.log(error);
      });
    this.books = resultBooks.data;

        // axios
        //   .post("http://mysite.com/user", { name: "John" }, { timeout: 2 })
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        
    // console.log(resultBooks.status);

    // .then((response) => {
    //     this.books = resultBooks.data;
    //     console.log(response);
    //   })

  //    .catch(function (error) {
  //   if (error.response) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   }
  // });
  },
}
</script>

<style scoped>
.issn {
  padding-left: 35px;
}
#bookTitle {
  padding-left: 80px;
}
</style>