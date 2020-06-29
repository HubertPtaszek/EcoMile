<template>
  <div id="form">
    <section class="form">
      <form id="app" ref="form" @submit.prevent="addOrder">
        <h2>Wypełnij formularz rezerwacji</h2>
        <div class="row mb-1">
          <div class="col-12">
            <DxSelectBox
              ref="carBox"
              id="carBoxId"
              :height="48"
              :data-source="carData"
              :grouped="true"
              display-expr="Name"
              value-expr="ID"
              placeholder="Wybierz..."
              @value-changed="recountCost()"
            >
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxSelectBox>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <p>Od:</p>
          </div>
          <div class="col-5">
            <DxDateBox
              ref="from"
              display-format="dd.MM.yyyy"
              :value="now"
              :min="now"
              type="date"
              :height="48"
              @value-changed="changeDateFrom($event)"
            >
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxDateBox>
          </div>
          <div class="col-1">
            <p>Do:</p>
          </div>
          <div class="col-5">
            <DxDateBox
              ref="to"
              display-format="dd.MM.yyyy"
              :value="to"
              :min="to"
              type="date"
              :height="48"
              @value-changed="changeDateTo($event)"
            >
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxDateBox>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-6">
            <label>Ilość dni wypożyczenia:</label>
            <DxNumberBox
              ref="time"
              :value="days"
              :readOnly="true"
              :height="48"
              :min="1"
              @value-changed="recountCost()"
            >
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxNumberBox>
          </div>
          <div class="col-6">
            <label>Koszt wypożyczenia:</label>
            <DxNumberBox
              ref="cost"
              :value="0.0"
              :readOnly="true"
              :height="48"
              :min="0"
              format="##0.## PLN"
            >
            </DxNumberBox>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-12">
            <DxTextBox ref="name" :height="48" placeholder="Imię i Nazwisko">
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxTextBox>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-6">
            <DxTextBox ref="mail" :height="48" placeholder="Adres e-mail">
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
            </DxTextBox>
          </div>
          <div class="col-6">
            <DxTextBox ref="phone" :height="48" placeholder="Numer telefonu" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <DxTextArea
              ref="info"
              :height="108"
              placeholder="Dodatkowe uwagi"
            />
          </div>
        </div>
        <div class="field text-right">
          <label>&nbsp;</label>
          <ul class="actions">
            <li>
              <dx-button
                id="formBtn"
                :use-submit-behavior="true"
                type="default"
                text="Wypożycz"
              ></dx-button>
            </li>
          </ul>
        </div>
      </form>
    </section>
    <DxPopup
      :visible.sync="popupVisible"
      :drag-enabled="false"
      :close-on-outside-click="false"
      :show-title="true"
      :width="800"
      :showCloseButton="false"
      height="auto"
      title="Rezerwacja"
    >
      <div class="row">
        <div class="col-12">
          <p class="popup-content">
            Dokonano rezerwacji pojazdu o numerze <span>{{ id }}</span
            >. Dalsze informacje przesłaliśmy na adres e-mail
            <span>{{ email }}</span
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
            v-scroll-to="{ element: '#app', duration: 1000 }"
          ></dx-button>
        </div>
      </div>
    </DxPopup>
  </div>
</template>

<script>
import DataSource from "devextreme/data/data_source";
import { ungroupedCarData } from "@/store.js";
import { DxValidator } from "devextreme-vue";
import { DxRequiredRule } from "devextreme-vue/validator";
import db from "@/global";

export default {
  name: "Form",
  props: ["car"],
  watch: {
    car: function(newVal) {
      var val = 1;
      switch (parseInt(newVal, 0)) {
        case 1:
          val = 1;
          break;
        case 2:
          val = 4;
          break;
        case 3:
          val = 7;
          break;
        case 4:
          val = 10;
          break;
        case 5:
          val = 13;
          break;
        case 6:
          val = 16;
          break;
      }
      this.$refs.carBox.instance.option("value", val);
    },
  },
  components: {
    DxValidator,
    DxRequiredRule,
  },
  data() {
    return {
      carData: new DataSource({
        store: ungroupedCarData,
        key: "ID",
        group: "Category",
      }),
      ungroupedCarData: ungroupedCarData,
      now: new Date(),
      to: new Date().setDate(new Date().getDate() + 1),
      days: 1,
      popupVisible: false,
      email: "",
      id: "",
    };
  },
  methods: {
    changeDateFrom(e) {
      var dateFrom = new Date(e.component.option("value"));
      var dateTo = new Date(this.$refs.to.instance.option("value"));
      this.$refs.to.instance.option(
        "min",
        dateFrom.getTime() + 1000 * 3600 * 24
      );
      if (dateFrom.getTime() >= dateTo.getTime())
        this.$refs.to.instance.option(
          "value",
          new Date().setDate(dateFrom.getDate() + 1)
        );
      else {
        var differenceInTime =
          (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);
        this.$refs.time.instance.option("value", Math.round(differenceInTime));
      }
    },
    recountCost() {
      var carId = this.$refs.carBox.instance.option("value");
      var days = this.$refs.time.instance.option("value");
      if (carId) {
        var price = this.ungroupedCarData.find((e) => {
          return e.ID == carId;
        });
        var finalCost = days * price.Cost;
        this.$refs.cost.instance.option("value", finalCost);
      }
    },
    changeDateTo(e) {
      var dateTo = new Date(e.component.option("value"));
      var dateFrom = new Date(this.$refs.from.instance.option("value"));
      var differenceInTime =
        (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);
      this.$refs.time.instance.option("value", Math.round(differenceInTime));
    },
    hidePopup() {
      this.popupVisible = false;
      this.$refs.info.instance.reset();
      this.$refs.phone.instance.reset();
      this.$refs.mail.instance.reset();
      this.$refs.name.instance.reset();

      this.$refs.cost.instance.reset();
      this.$refs.time.instance.option("value", this.days);

      this.$refs.from.instance.option("value", new Date(this.now));
      this.$refs.to.instance.option("value", new Date(this.to));

      this.$refs.carBox.instance.reset();
    },
    addOrder() {
      const order = {
        CarId: this.$refs.carBox.instance.option("value"),
        From: new Date(this.$refs.from.instance.option("value")),
        To: new Date(this.$refs.to.instance.option("value")),
        Count: this.$refs.time.instance.option("value"),
        Cost: this.$refs.cost.instance.option("value"),
        Name: this.$refs.name.instance.option("value"),
        Email: this.$refs.mail.instance.option("value"),
        Phone: this.$refs.phone.instance.option("value"),
        Description: this.$refs.info.instance.option("value"),
      };
      db.collection("orders")
        .add(order)
        .then((documentReference) => {
          this.id = documentReference.id;
        });
      this.email = this.$refs.mail.instance.option("value");
      this.popupVisible = true;
    },
  },
};
</script>
