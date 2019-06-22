<template>
  <div>
      <slot name="title"></slot>
      <slot name="harga"></slot>
      
      <slot></slot>

      <br/>
      
      <h2>{{ trx.qty }}</h2>

      <button @click="tambah()">Tambah</button>
      <button @click="kurang()">Kurang</button>


  </div>
</template>

<script>
export default {
  props: ['trx', 'nomor'],
  data: () => ({
    transaksi: {},
  }),
  mounted() {
    this.transaksi = this.trx;
  },
  methods: {
    tambah() {
      this.transaksi.qty += 1;
      this.$emit('change', {trx: this.transaksi, nomor: this.nomor});
    },
    kurang() {
      if (this.transaksi.qty > 0) {
        this.transaksi.qty -= 1;
        this.$emit('change', {trx: this.transaksi, nomor: this.nomor});
      }
    },
  },
};
</script>

