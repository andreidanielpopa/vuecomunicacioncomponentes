<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home |</router-link></li>
      <li><router-link to="/checkbox"> Checkbox |</router-link></li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/doble/'+num"> NumeroDoble |</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      numeros: [4, 123, 45, 12, 87, 5],
    };
  },
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>