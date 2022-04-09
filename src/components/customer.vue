<template>
  <div>
    <h1>Customers</h1>
    <p>List of Customers coming Soon...</p>
    <div>
      <table class="table">
        <thead>
          <tr>
            <td>Customer ID</td>
            <td>Customer Name</td>
            <td>Membership Date</td>
            <td class="justifyCenter">Books</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="justifyCenter">1</td>
            <td>Somnath</td>
            <td>01-Dec-2020</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
          <tr>
            <td class="justifyCenter">2</td>
            <td>Pravin</td>
            <td>01-Dec-2022</td>
            <td class="justifyCenter"><button type="button">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "customerLib",
};
</script>

<style scoped>
h1 {
  color: rgb(0, 61, 153);
  padding: 10px;
}
p {
  padding: 10px;
}
div {
  padding: 10px;
  margin: 10px;
}
.table{
  border: 1px solid rgb(0, 61, 153);
}
table td{
  border: 1px solid rgb(0, 61, 153);
  padding: 10px;
}
</style>