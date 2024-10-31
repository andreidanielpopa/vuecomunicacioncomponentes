<template>
  <div>
    <h3>{{ deporte }}</h3>
    <button @click="seleccionarFavorito()">Favorito</button>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["deporte"],
  methods: {
    seleccionarFavorito() {
      console.log("Adios");
      this.$emit("seleccionarFavorito", this.deporte);
    },
  },
};
</script>

<style>
</style>