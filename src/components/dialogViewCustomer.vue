<template>
  <div class="backdrop"></div>
  <div class="dialog">
    <!-- <p>Hi, it is dialog box!</p> -->
    <slot></slot>
    <div>
      <table class="dialogTable">
        <thead>
          <tr>
            <td class="tableHeaderData">Customer Name:</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultFinalCustomer" :key="item">
            <td class="tableBodyData">{{ item }}</td>
          </tr>
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
      resultFinalCustomer: [],
    };
  },

  async mounted() {
    let resultCustomer = await axios
      .get("http://localhost:3000/marklogic/customers", { timeout: 2000 })
      .catch((error) => {
        console.log(error);
      });
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
  },
};
</script>