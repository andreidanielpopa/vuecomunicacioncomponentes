<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button @click="crearCheckbox()">Generar Checkbox</button>
    <div v-for="hijo in listaCheckbox" :key="hijo">
      <input
        type="checkbox"
        name=""
        id=""
        :value="hijo"
        @change="sumar($event)"
      />
      <label for="">{{ hijo }}</label>
    </div>
    <p>La summa total es: {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: "SumaCheckbox",
  methods: {
    crearCheckbox() {
      var numero = parseInt(Math.random() * 100) + 1;
      this.listaCheckbox.push(numero);
    },
    sumar(event) {
      let value = parseInt(event.target.value);
      if (event.target.checked) {
        this.total += value;
      } else {
        this.total -= value;
      }
    },
  },
  data() {
    return {
      listaCheckbox: [],
      total: 0,
    };
  }
};
</script>

<style>

</style>