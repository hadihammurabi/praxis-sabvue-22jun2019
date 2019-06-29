<template>
  <div>
    <br/>

    <input type="text" v-model="username" />
    <br/>

    <button :disabled="!valid" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    valid: false,
  }),
  watch: {
    username(val) {
      this.valid = val !== '';
    }
  },
  methods: {
    login() {
      alert(`Login sebagai ${this.username}`);
    }
  }
};
</script>
