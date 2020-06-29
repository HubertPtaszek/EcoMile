<template>
  <div id="contact">
    <Header />
    <div class="inner">
      <h3>Tutaj nas znajdziesz</h3>
      <span class="image main"
        ><a href="https://www.google.com/maps/place/50%C2%B052'11.5%22N+20%C2%B038'38.9%22E/@50.8698554,20.6419613,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d50.869852!4d20.64415"><img
          src="../assets/images/map1.jpg"
          alt=""
      /></a></span>
      <h6>Skontatktuj się z nami</h6>
      <p>
        ul. Wymyślna 11 28-123 Kielce <br />
        Tel. +48 223 554 345
      </p>
      <p>mail: <a href="#">mail@EcoMile.pl</a></p>
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
  name: "Contact",
  components: {
    Header,
    Copyright,
  },
};
</script>
