<template>
  <div>
    <h1>PadreNumeros</h1>
    <h2>Total {{ total }}</h2>
    <button @click="dibujarHijos()">Dibujar Hijos</button>
    <div v-for="hijo in listaComponentes" :key="hijo">
      <HijoNumeros :numero="hijo" v-on:sumaTotal="sumaTotal" />
    </div>
  </div>
</template>

<script>
import HijoNumeros from "./HijoNumeros.vue";
export default {
  name: "PadreNumeros",
  components: {
    HijoNumeros,
  },
  data() {
    return {
      numero: 0,
      listaComponentes: [],
      total: 0,
    };
  },
  methods: {
    dibujarHijos() {
      var numero = parseInt(Math.random() * 10) + 1;
      this.listaComponentes.push(numero);
    },
    sumaTotal(numero) {
      this.total = this.total + numero;
    },
  },
};
</script>

<style>
</style>