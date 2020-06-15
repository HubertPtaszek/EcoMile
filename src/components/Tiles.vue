<template>
  <article id="tiles" :class="'style' + tilesId">
    <span class="image">
      <img :src="require(`../assets/images/${tilesId}.jpg`)" />
    </span>
    <a href="#footer" class="scrolly">
      <h2>{{ title }}</h2>
      <p>
        Cena od:<strong> {{ price }} zł/dzień</strong>
      </p>
      <div class="content">
        <p>
          Dostępne pojazdy
          <slot></slot>
        </p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: "Tiles",
  props: ["tilesId", "title", "price"],
};
</script>
