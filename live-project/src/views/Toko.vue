<template>
  <div style="width: 500px">
    <!-- Loop data transaksi -->
    <div class="card" v-for="(trx, index) in transaksi" :key="index">
      
      <!-- Mount component BarangToko -->
      <barang-toko :trx="trx" :nomor="index" @change="setTotal">
        <h1 slot="title">{{trx.barang}}</h1>
        <h3 slot="harga">{{trx.harga}}</h3>
      </barang-toko>
    </div>

    <!-- Tampilkan total keseluruhan -->
    <h3>Qty: {{ total.qty }}</h3>
    <h3>Total: {{ total.bayar }}</h3>

    <button @click="clear()">Clear</button>
  
  </div>
</template>

<script>
import BarangToko from '@/components/BarangToko.vue';

export default {
  components: {
    BarangToko,
  },
  data: () => ({
    total: {
      qty: 0,
      bayar: 0,
    },
    transaksi: [
      {
        barang: 'odol',
        harga: 2500,
        qty: 0,
      },
      {
        barang: 'shampoo',
        harga: 1000,
        qty: 0,
      },
      {
        barang: 'detergen',
        harga: 5000,
        qty: 0,
      },
    ],
  }),
  methods: {
    setTotal(data) {
      this.transaksi[data.nomor].qty = data.trx.qty;
      this.total.qty = this.transaksi.reduce((acc, trx) => acc + trx.qty, 0);
      this.total.bayar = this.transaksi.reduce((acc, trx) => acc + trx.qty * trx.harga, 0);
    },
    clear() {
      this.total = {qty: 0, bayar: 0};

      this.transaksi = this.transaksi.map((trx, index) => {
        trx.qty = 0;
        return trx;
      });
    }
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

