<template>
  <div id="header">
    <div class="inner">
      <router-link to="/" class="logo">
        <span class="fa fa-car logo-icon "></span>
        <span>Wypożyczalnia pojazdów elekrycznych EcoMile</span>
      </router-link>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  components: {
    Menu,
  },
};
</script>
