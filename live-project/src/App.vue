<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/toko">Toko</router-link> |
      <router-link to="/gambar">Gambar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  text-align: center;
}
</style>

