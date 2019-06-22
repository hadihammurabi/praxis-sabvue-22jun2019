<template>
  <div class="home">
    <div v-for="(user, index) in users" :key="index" class="card">
      <h1 style="margin: 0">{{ user.name }}</h1>
      <span>{{ user.email }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    users: [],
  }),
  mounted() {
    this.$yangenak();
    this.$axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
  }
}
</script>

<style>
.card {
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px black;
}
</style>

