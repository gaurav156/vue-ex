<template>
    <div class="backdrop">
    </div>
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
            <td>{{i.customerName}}</td>
          </tr>
        </tbody>
      </table>
      <p v-for="item in customerIDlist" :key="item">{{item}}</p>
      <!-- <p>{{customerIDlistDialog}}</p> -->
      <button v-on:click="test()">test</button>
      <p>{{customers}}</p>
    </div>
</template>

<script>

export default{
    name: "dialogView",
    props: {
        booksDialog: [],
        customersDialog: [],
        customerIDlistDialog: [],
    },
    data(){
        return{
            result:[],
            books:[],
            customers:[],
            customerID:[],
        }
    },
    methods:{
        test(){
            console.log(this.customerID);
            console.log(this.customers);
        },
    },
    async created(){
            this.books=this.booksDialog;
            this.customers=this.customersDialog;
            this.customerID=this.customerIDlistDialog;
    }
}
</script>

<style scoped>
.backdrop{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}
.dialog{
    position: fixed;
    top: 20%;
    background: white;
    width: 60vw;
    left: 20vw;
    padding: 20px;
}
</style>