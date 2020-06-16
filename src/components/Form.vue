<template>
  <div id="form">
    <section class="form">
      <form id="app" @submit="checkForm" method="post">
        <h2>Wypełnij formularz rezerwacji</h2>
        <div class="row mb-1">
          <div class="col-12">
            <DxSelectBox
              ref="carBox"
              :height="48"
              :data-source="carData"
              :grouped="true"
              display-expr="Name"
              value-expr="ID"
              placeholder="Wybierz..."
            />
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
            />
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
            />
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
            />
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-12">
            <DxTextBox ref="name" :height="48" placeholder="Imię i Nazwisko" />
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-6">
            <DxTextBox ref="mail" :height="48" placeholder="Adres e-mail" />
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
              <input
                id="formBtn"
                type="submit"
                value="Wypożycz"
                class="primary"
              />
            </li>
          </ul>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import DataSource from "devextreme/data/data_source";
import { ungroupedCarData } from "@/store.js";

export default {
  name: "Form",
  props: ["car"],
  watch: {
    car: function(newVal) {
      alert("old:" + this.$refs.carBox.instance.option("value"));
      this.$refs.carBox.instance.option("value", newVal);
      alert("new:" + this.$refs.carBox.instance.option("value"));
    },
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
    checkForm: function(e) {
      alert("test");
      e.preventDefault();
    },
  },
};
</script>
