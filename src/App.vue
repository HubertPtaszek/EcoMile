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

import plMessages from "./assets/pl.json";
import plCldrData from "devextreme-cldr-data/pl.json";
import supplementalCldrData from "devextreme-cldr-data/supplemental.json";
import config from "devextreme/core/config";

import Globalize from "globalize";

config({
  forceIsoDateParsing: true,
});
export default {
  name: "App",
  methods: {
    getLocale() {
      const locale = sessionStorage.getItem("locale");
      return locale != null ? locale : "pl";
    },
    setLocale(locale) {
      sessionStorage.setItem("locale", locale);
    },
    initGlobalize() {
      Globalize.load(plCldrData, supplementalCldrData);
      Globalize.loadMessages(plMessages);
      Globalize.locale(this.locale);
    },
    changeLocale(e) {
      this.setLocale(e.value);
      document.location.reload();
    },
    formatMessage: Globalize.formatMessage.bind(Globalize),
  },
  created() {
    this.locale = this.getLocale();
    this.initGlobalize();
  },
  components: {
    Sidebar,
  },
};
</script>
