<template>
  <div id="form">
    <section class="form">
      <form id="app" @submit.prevent="addOrder">
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
          <div class="col-12">
            <label>Ilość dni wypożyczenia:</label>
            <DxNumberBox
              ref="time"
              :value="days"
              :readOnly="true"
              :height="48"
              :min="1"
            >
              <dx-validator>
                <dx-required-rule message="Pole wymagane" />
              </dx-validator>
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
      :close-on-outside-click="true"
      :show-title="true"
      :width="800"
      :height="150"
      title="Rezerwacja"
    >
      <p class="popup-content">
        Dokonano rezerwacji pojazdu. Dalsze informacje przesłaliśmy na adres
        e-mail
        <span>{{ email }}</span>
      </p>
    </DxPopup>
  </div>
</template>

<script>
import DataSource from "devextreme/data/data_source";
import { ungroupedCarData } from "@/store.js";
import { DxValidator } from "devextreme-vue";
import { DxRequiredRule } from "devextreme-vue/validator";

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
      now: new Date(),
      to: new Date().setDate(new Date().getDate() + 1),
      days: 1,
      popupVisible: false,
      email: "",
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
      if (dateFrom.getTime() > dateTo.getTime())
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
    changeDateTo(e) {
      var dateTo = new Date(e.component.option("value"));
      var dateFrom = new Date(this.$refs.from.instance.option("value"));
      var differenceInTime =
        (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);
      this.$refs.time.instance.option("value", Math.round(differenceInTime));
    },
    addOrder() {
      this.email = this.$refs.mail.instance.option("value");
      this.popupVisible = true;
    },
  },
};
</script>
