<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <DxButton
        text="Click me"
        @click="sayHelloWorld"
    />
    <router-view />
  </div>
</template>


<script>
import DxButton from 'devextreme-vue/button';

export default {
    components: {
        DxButton
    },
    methods: {
        sayHelloWorld() {
            alert('Hello world!')
        }
    }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
