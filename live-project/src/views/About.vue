<template>
  <div>
    <button style="background: blue" @click="setColor('blue')">Biru</button>
    <button style="background: red" @click="setColor('red')">Merah</button>
    <button style="background: yellow" @click="setColor('yellow')">Kuning</button>
    <button style="background: green" @click="setColor('green')">Hijau</button>
    <button style="background: grey" @click="setColor('grey')">Abu-Abu</button>

    <div :style="{width: '100%', height: '100px', background: color}"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'blue',
  }),
  methods: {
    setColor(color) {
      this.color = color;
    },
  }
}
</script>
