<template>
  <div>
    <h1>Numero doble</h1>
    <button @click="redirectHome()">Go home</button>
    <h3>{{ mensaje }} Doble: {{ doble }}</h3>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        if (this.$route.params.numero == "") {
          this.mensaje = "Esto ha cambiado, sin parametros";
          this.doble = 0;
        } else {
          this.mensaje = "Esto ha cambiado, " + this.$route.params.numero + ".";
          this.doble = parseInt(this.$route.params.numero) * 2;
        }
      }
    },
  },
  data() {
    return {
      mensaje: "",
      doble: 0,
    };
  },
  mounted() {
    let paramsNumero = this.$route.params.numero;

    if (paramsNumero == "") {
      this.mensaje = "Sin parametros";
    } else {
      this.mensaje = paramsNumero;
      this.doble = parseInt(paramsNumero) * 2;
    }
  },
};
</script>

<style>
</style>