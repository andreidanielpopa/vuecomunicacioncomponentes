<template>
  <div id="comics">
    <h2>{{ comic.titulo }}</h2>
    <p>{{ comic.descripcion }}</p>
    <img :src="comic.imagen" alt="" />
    <h4
      :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000,
      }"
    >
      Año: {{ comic.year }}
    </h4>
    <button @click="seleccionarFavorito()">Favorito</button>
    <button @click="deleteComic()">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: "ComicComponent",
  props: ["comic", "index"],
  methods: {
    seleccionarFavorito() {
      this.$emit("seleccionarFavorito", this.comic);
    },
    deleteComic() {
      this.$emit("deleteComic", this.index);
    },
  },
};
</script>

<style>
@import "./../assets/css/estiloscomic.css";
</style>