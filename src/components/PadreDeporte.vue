<template>
  <div>
    <h1>Padre</h1>
    <h2 v-if="favorito">Su deporte favorito es: {{ favorito }}</h2>
    <div v-for="deporte in deportes" :key="deporte">
      <HijoDeporte
        :deporte="deporte"
        v-on:seleccionarFavorito="seleccionarFavorito"
      />
    </div>
  </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";
export default {
  name: "PadreDeporte",
  components: {
    HijoDeporte,
  },
  data() {
    return {
      deportes: ["Baloncesto", "Basket", "LoL", "Furgol", "Tenis"],
      favorito: null,
    };
  },
  methods: {
    seleccionarFavorito(favorito) {
      this.favorito = favorito;
    },
  },
};
</script>

<style>
</style>