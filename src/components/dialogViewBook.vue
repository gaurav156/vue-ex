<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <!-- <p>Hi, it is dialog box!</p> -->
    <slot></slot>
    <table class="dialogTable">
      <thead>
        <tr>
          <td class="tableHeaderData">Book Title:</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resultFinalBook" :key="item">
          <td class="tableBodyData">{{ item }}</td>
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
      displayTableBook: [],
      resultFinalBook: [],
    };
  },

  async mounted() {
    // .get("http://localhost:3000/books", { timeout: 2000 })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    let resultBook = await axios
      .get("http://localhost:3000/marklogic/books", { timeout: 2000 })
      .catch((error) => {
        console.log(error);
      });
    this.displayTableBook = resultBook.data;
    for (var a = 0; a < this.displayTableBook.length; a++) {
      for (var b = 0; b < this.bookIDListDialog.length; b++) {
        if (this.bookIDListDialog[b] === this.displayTableBook[a].bookID) {
          this.resultFinalBook.push(this.displayTableBook[a].bookTitle);
          console.log(this.displayTableBook[a].bookID);
        }
      }
    }

    console.log(this.resultFinalBook);
  },
};
</script>