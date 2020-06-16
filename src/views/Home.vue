<template>
  <div id="home">
    <Header />
    <img src="../assets/images/banner.jpg" />
    <div class="inner">
      <header id="inner">
        <h1 class="subtitle">Wypożycz pojazd elektryczny</h1>
        <p>
          Oferujemy aż 6 typów pojazdów elektrycznych do wypożyczenia. Nasze
          pojazdy posiadają wszelkie atesty, oraz są serwisowane oraz naładowane
          przed każdą podrózą. Nie zwlekaj i zrób to teraz!
        </p>
        <h3 id="innerHeader">Wybierz pojazd, który chcesz wypożyczyć</h3>
      </header>
      <section class="tiles">
        <Tiles
          tilesId="1"
          title="Miejski: mały pojazd"
          price="100"
          @carData="carData"
        >
          <br />1. Mini Cooper - 100zł/d <br />2. Tesla mini - 190zł/d <br />3.
          Mazda E1 - 180zł/d
        </Tiles>
        <Tiles
          tilesId="2"
          title="Miejski: hulajnoga"
          price="50"
          @carData="carData"
        >
          <br />1. Xiaomi Mija - 50zł/d <br />2. Boosted Board1 - 100zł/d
          <br />3. Havoc x1 - 65zł/d
        </Tiles>
        <Tiles
          tilesId="3"
          title="Miejski: skuter"
          price="70"
          @carData="carData"
        >
          <br />1. Honda EcoA - 70zł/d <br />2. Suzuki ME2 - 120zł/d <br />3.
          Piaggio SR1 Electric - 100zł/d
        </Tiles>
        <Tiles
          tilesId="4"
          title="Miejski: segway"
          price="50"
          @carData="carData"
        >
          <br />1. Mardon 3 - 50zł/d <br />2. Hyundai M10 - 70zł/d <br />3.
          EasyDrive x3- 70zł/d
        </Tiles>
        <Tiles
          tilesId="5"
          title="Samochód: mały"
          price="210"
          @carData="carData"
        >
          <br />1. Opel Astra Electric - 210zł/d <br />2. Tesla Model S -
          300zł/d <br />3. Tesla Model S2- 250zł/d
        </Tiles>
        <Tiles
          tilesId="6"
          title="Samochód: średni"
          price="300"
          @carData="carData"
          ><br />1. BMW i3 - 300zł/d<br />
          2. BMW i4 - 450zł/d<br />
          3. Toyota E11 - 340zł/d
        </Tiles>
      </section>
    </div>
    <footer id="footer">
      <div class="inner">
        <div class="row mb-2">
          <div class="col-8">
            <Form :car="car" />
          </div>
          <div class="col-4">
            <Info />
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-12">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tiles from "@/components/Tiles.vue";
import Form from "@/components/Form.vue";
import Info from "@/components/Info.vue";
import Copyright from "@/components/Copyright.vue";

export default {
  name: "Home",
  data() {
    return {
      scroll: false,
      car: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    carData: function(e) {
      this.car = e;
    },
  },
  components: {
    Header,
    Tiles,
    Form,
    Info,
    Copyright,
  },
};
</script>
