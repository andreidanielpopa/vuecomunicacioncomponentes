<template>
  <div>
    <ul id="menu">
      <li><router-link class="dec" to="/">| Home |</router-link></li>
      <li><router-link class="dec" to="/checkbox"> Checkbox |</router-link></li>
      <li v-for="num in numeros" :key="num">
        <router-link class="dec" :to="'/multiplicar/' + num">
          Tabla Multiplicar del {{ num }} |
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numeros: [4, 123, 45, 12, 87, 5, 6],
    };
  },
};
</script>

<style>
ul#menu li {
  display: inline;
}
.dec {
  text-decoration: none;
}
</style>