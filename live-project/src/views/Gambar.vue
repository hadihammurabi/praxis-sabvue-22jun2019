<template>
  <div>
    Gambar ke-
    <select v-model="nomor">
      <option v-for="(gbr, index) in gambar"
        :key="index"
        :value="index"
      >{{index + 1}}</option>
    </select>
    <br/>

    <img :src="getImage(nomor)"/>
  </div>
</template>

<script>
// import logo from '@/assets/logo.png';
// import jomblo from '@/assets/jomblo.jpg';

export default {
  data: () => ({
    nomor: 0,
    gambar: [
      'a',
      'b',
    ],

    // gambar: [
    //   logo,
    //   jomblo,
    // ],
  }),
  methods: {
    getImage(idx) {
      return `/assets/${this.gambar[idx]}/logo.png`;
    } 
  }
}
</script>
