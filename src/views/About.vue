<template>
  <div id="about">
    <Header />
    <div class="inner">
      <h3>O nas</h3>
      <span class="image main"><img src="b9dbqx06.jpg" alt=""/></span>
      <p>
        Jeśteśmy firmą specjalizującaą się w wypożyczeniach pojazdów
        elektrycznych. Oferujemy nasze usługi na terenie Kielc. Nasze
        wypożyczenia działają od 2012 roku, kiedy to w Polsce zaczeły powstawać
        pierwsze stacje do ładowania pojazdów elektrycznych.
      </p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tenetur
      quos perferendis ratione. Enim, veniam. Vero, fugiat. Voluptatibus, est
      voluptatum impedit laboriosam, inventore distinctio id corporis maxime
      temporibus, laborum numquam!
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi
        illum possimus, veniam, labore minus incidunt accusantium magni non
        deserunt eius esse cumque perspiciatis corporis ea deleniti, quam
        asperiores! Totam.
      </p>
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Copyright from "@/components/Copyright.vue";

export default {
  name: "About",
  components: {
    Header,
    Copyright
  },
};
</script>
