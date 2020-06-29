<template>
  <div id="order">
    <Header />
    <div class="inner inner-search">
      <form id="app" @submit.prevent="checkOrder">
        <div class="row">
          <h4 class="order-label">Sprawdź swoje wypożyczenie</h4>
        </div>
        <div class="row">
          <DxTextBox
            ref="numOrder"
            :height="48"
            :width="500"
            placeholder="Numer rezerwacji"
          >
            <dx-validator>
              <dx-required-rule message="Pole wymagane" />
            </dx-validator>
          </DxTextBox>
          <dx-button
            id="sendBtn"
            :use-submit-behavior="true"
            :height="48"
            icon="search"
            type="default"
            text="Wyszukaj"
          ></dx-button>
        </div>
      </form>
    </div>
    <div class="inner" v-if="isNoData || isData">
      <div class="row" v-if="isNoData">
        <div class="col-6 none-pr">
          <h2>{{ orderNummber }}</h2>
          <div class="row no-data">
            <span>Brak danych</span>
          </div>
        </div>
        <div class="col-6 none-pl pr-2">
          <img :height="565" src="../assets/images/nodata.jpg" />
        </div>
      </div>
      <div class="row" v-if="isData">
        <div class="col-6 none-pr">
          <h2>{{ orderNummber }}</h2>
          <div class="row">
            <div class="row w100">
              <span><b>Imię i nazwisko:</b> {{ name }}</span>
            </div>
            <div class="row w100">
              <span><b>Pojazd:</b> {{ car }}</span>
            </div>
            <div class="row w100">
              <span><b>Termin:</b> od {{ from }} do {{ to }}</span>
            </div>
            <div class="row w100 ">
              <span><b>Adres e-mail:</b> {{ mail }}</span>
            </div>
          </div>
          <div class="row btn-container">
            <dx-button
              id="cancelOrderBtn"
              :height="48"
              type="danger"
              text="Anuluj rezerwacje"
              @click="deleteOrder()"
            ></dx-button>
          </div>
        </div>
        <div class="col-6 none-pl pr-2">
          <img :height="565" src="../assets/images/data.jpg" />
        </div>
      </div>
    </div>
    <div class="inner" v-if="!(isNoData || isData)">
      <img :width="1440" src="../assets/images/order.jpg" />
    </div>
    <footer id="footer">
      <div class="inner">
        <div class="row">
          <div class="col-12">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
    <DxPopup
      :visible.sync="popupVisible"
      :drag-enabled="false"
      :close-on-outside-click="false"
      :show-title="true"
      :width="800"
      :showCloseButton="false"
      height="auto"
      title="Anulowanie rezerwacji"
    >
      <div class="row">
        <div class="col-12">
          <p class="popup-content">
            Anulowano rezerwacje. Potwierdzenie przesłaliśmy na adres e-mail
            <span>{{ mail }}</span
            >.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 order-popup-btn">
          <dx-button
            id="cancelBtn"
            type="default"
            text="Ok"
            @click="hidePopup()"
          ></dx-button>
        </div>
      </div>
    </DxPopup>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Copyright from "@/components/Copyright.vue";
import { ungroupedCarData } from "@/store.js";
import db from "@/global";
import Globalize from "globalize";

export default {
  name: "Order",
  data() {
    return {
      isNoData: false,
      isData: false,
      ungroupedCarData: ungroupedCarData,
      orderNummber: "",
      name: "",
      car: "",
      mail: "",
      from: "",
      to: "",
      popupVisible: false,
    };
  },
  components: {
    Header,
    Copyright,
  },
  methods: {
    checkOrder() {
      this.orderNummber = this.$refs.numOrder.instance.option("value");
      var docRef = db.collection("orders").doc(this.orderNummber);
      var formatter = Globalize("pl").dateFormatter();
      var vm = this;
      docRef.get().then(function(doc) {
        debugger;
        if (doc.exists) {
          vm.isNoData = false;
          vm.isData = true;
          vm.name = doc.data().Name;
          vm.mail = doc.data().Email;
          vm.car = vm.ungroupedCarData.find((e) => {
            return e.ID == doc.data().CarId;
          }).Name;
          vm.from = formatter(doc.data().From.toDate());
          vm.to = formatter(doc.data().To.toDate());
        } else {
          vm.isData = false;
          vm.isNoData = true;
        }
      });
    },
    deleteOrder() {
      var vm = this;
      db.collection("orders")
        .doc(this.orderNummber)
        .delete()
        .then(function() {
          vm.popupVisible = true;
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    hidePopup() {
      this.isNoData = false;
      this.isData = false;
      this.popupVisible = false;
    },
  },
};
</script>
