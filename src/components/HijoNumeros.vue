<template>
  <div>
    <h1>Numero hijo {{ numero }}</h1>
    <button @click="sumaTotal">Sumar {{ numero }}</button>
  </div>
</template>

<script>
export default {
  name: "HijoNumeros",
  props: ["numero"],
  methods: {
    sumaTotal() {
      this.$emit("sumaTotal", this.numero);
    },
  },
};
</script>

<style>
</style>