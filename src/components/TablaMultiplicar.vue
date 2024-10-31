<template>
  <div>
    <h1>Tabla Multiplicar</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Operacion</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 10" :key="index">
          <td>{{ numero }} x {{ index }}</td>
          <td>{{ numero * index }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
    };
  },
  mounted() {
    let paramsNumero = parseInt(this.$route.params.numero);
    this.numero = paramsNumero;
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        let paramsNumero = parseInt(this.$route.params.numero);
        this.numero = paramsNumero;
      }
    },
  },
};
</script>

<style>
table {
  margin: auto;
}
</style>