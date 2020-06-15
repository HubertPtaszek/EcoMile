<template>
  <div id="app">
    <router-view />
    <Sidebar>
      <h2>Menu</h2>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/">Strona główna</router-link></li>
        <li><router-link to="/about">O nas</router-link></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>
