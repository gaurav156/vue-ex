<template>
  <router-view></router-view>
  <!-- <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive> -->
</template>

<script>
// import logger from './logger';
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
  /* display: flex; */
  justify-content: center;
}
.closeButton {
  float: right;
  height: 30px;
  width: 30px;
  font-size: larger;
  font-weight: 600;
  color: slategray;
  cursor: pointer;
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
  text-align: center;
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
.dialogTable {
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
.divP {
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
  cursor: pointer;
}
.viewButton:hover {
  border-color: 1px solid blue;
  background-color: rgb(0, 61, 153);
}
.username {
  top: 10px px;
  position: absolute;
  right: 10px;
  color: white;
  padding-top: 15px;
  display: flex;
  padding-right: 40px;
}
h1 {
  color: rgb(0, 61, 153);
  padding: 10px;
  cursor: default;
}
p {
  padding: 10px;
  cursor: default;
}
table td {
  padding: 10px;
  cursor: default;
}
span {
  cursor: default;
}
.alignCenter {
  text-align: center;
}

.updateButton {
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
  padding-inline: 15px;
  margin-right: 10px;
}
.updateButton:hover {
  border-color: 1px solid blue;
  background-color: rgb(0, 61, 153);
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
  width: 8%;
  padding-top: 8px;
  position: absolute;
  margin-left: 26%;
  margin-top: 1.5%;
}
.addButton:hover {
  /* background-color: lightblue;
  color: rgb(0, 102, 255); */
  border-color: 1px solid blue;
  background-color: rgb(0, 61, 153);
}
.deleteButton {
  height: 100%;
  width: 80px;
  padding: 0px;
  margin: 0px;
  color: white;
  background-color: rgb(195, 36, 36);
  border-color: rgb(219, 34, 34);
  border: none;
  font-size: medium;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Noto Sans Display", sans-serif;
  text-decoration: none;
}
.deleteButton:hover {
  background-color: rgb(251, 189, 189);
  color: rgb(195, 36, 36);
}
.action {
  width: 175px;
  text-align: center;
}
</style>