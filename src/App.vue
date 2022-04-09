<template>
  <header>
    <nav>
      <ul>
        <li><router-link class="nav-element" to="/">Books</router-link></li>
        <li><router-link class="nav-element" to="/customer">Customers</router-link></li>
        <li><router-link class="nav-element" to="/login">Login</router-link></li>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap');

*{
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans Display', sans-serif;
}
  header{
    background-color: rgb(0, 102, 255);
    padding: 25px;
    margin-bottom: 10px;
  }
  li{
    list-style: none;
    display: inline;
    padding: 5px;
    margin: 10px;
  }
  .nav-element{
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  .nav-element:hover{
    background-color: rgb(128, 179, 255);
    color: rgb(0, 61, 153);
    border-radius: 5px;
    /* font-weight: bold; */
  }
  .justifyCenter{
  display: flex;
  justify-content: center;
}

</style>