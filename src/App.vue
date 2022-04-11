<template>
  <header>
    <nav>
      <ul>
        <li><router-link class="nav-element" to="/">Books</router-link></li>
        <li>
          <router-link class="nav-element" to="/customer"
            >Customers</router-link
          >
        </li>
        <li>
          <router-link class="nav-element" to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
  <!-- <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive> -->
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Noto Sans Display", sans-serif;
}
header {
  background-color: rgb(0, 102, 255);
  padding: 25px;
  margin-bottom: 10px;
}
li {
  list-style: none;
  display: inline;
  padding: 5px;
  margin: 10px;
}
.nav-element {
  color: white;
  text-decoration: none;
  padding: 10px;
}
.nav-element:hover {
  background-color: rgb(128, 179, 255);
  color: rgb(0, 61, 153);
  border-radius: 5px;
}
.justifyCenter {
  display: flex;
  justify-content: center;
}
.closeButton {
  float: right;
  height: 30px;
  width: 30px;
  font-size: larger;
  font-weight: 600;
  color: slategray;
}
.closeButton:hover {
  background-color: #fa4549;
  color: white;
}
.tableHeaderData {
  background-color: rgb(0, 102, 255);
  color: white;
  padding: 15px;
  min-width: 100px;
  border-radius: 5px;
}
.tableBodyData {
  background-color: rgb(128, 179, 255);
  color: black;
  padding: 15px;
  border-radius: 5px;
}
.table {
  min-width: 220px;
  border: 1px solid rgb(0, 102, 255);
  border-radius: 5px;
}
.dialogTable{
  min-width: 220px;
  margin-left: 30px;
  border: 1px solid rgb(0, 102, 255);
  border-radius: 5px;
}
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.dialog {
  position: fixed;
  top: 20%;
  background: white;
  /* width: 60vw; */
  /* left: 20vw; */
  /* padding: 20px; */
  width: auto;
  left: 35vw;
    padding: 40px;
    min-width: 330px;
}
.tableDiv {
  padding-left: 10px;
}
.div {
  padding: 10px;
  margin: 10px;
}
.viewButton {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  background-color: rgb(0, 102, 255);
  color: white;
  border: none;
  font-size: medium;
  border-radius: 5px;
}
.viewButton:hover {
  border-color: 1px solid blue;
  background-color: rgb(0, 61, 153);
}
.welcomeMsg {
  display: flex;
  float: right;
}
h1 {
  color: rgb(0, 61, 153);
  padding: 10px;
}
p {
  padding: 10px;
}
table td{
  padding: 10px;
}
</style>