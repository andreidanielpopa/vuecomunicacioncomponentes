<template>
  <div>
    <form v-on:submit.prevent="mostarSeleccionados()">
      <label>Selecciona opciones:</label>
      <select size="5" multiple v-model="opcionesSeleccionadas">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <button>Mostrar seleccionados</button>
    </form>
    <h4>{{ seleccionados }}</h4>
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";
export default {
  name: "SeleccionMultiple",
  //   components: { Multiselect },
  data() {
    return {
      options: ["basket", "lol", "furgol", "baloncesto", "tenis"],
      opcionesSeleccionadas: [],
      seleccionados: "",
    };
  },
  methods: {
    mostarSeleccionados() {
      let aux = "";
      for (let option of this.opcionesSeleccionadas) {
        aux += option + ", ";
      }
      this.seleccionados = aux;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>