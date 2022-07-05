<template>
  <div class="username">
    <p id="userName">Hi {{ username }}, Welcome!</p>
    <p id="slash">|</p>
    <a v-on:click="logout" href="#" class="nav-element">Logout</a>
  </div>
  <header>
    <nav>
      <ul>
        <li>
          <router-link class="nav-element" to="/">Books</router-link>
        </li>
        <li>
          <router-link class="nav-element" to="/customer"
            >Customers</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "headerLib",
  data() {
    return {
      username: localStorage.getItem("user-info"),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped>
#slash{
    font-size: x-large;
    padding-top: 1.5px;
    cursor: default;
}
#userName{
  cursor: default;
}
</style>