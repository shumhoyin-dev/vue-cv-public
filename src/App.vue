<template>
  <div>
    <div class="bubble-background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <Navbar />

    <router-view></router-view>
    <!-- footer block -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/sections/Navbar.vue";
import Footer from "@/sections/Footer.vue";
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

img {
  // display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

a:visited {
  color: none;
}

.bubble-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #fff;
  overflow: hidden;
  z-index: -8;
}

.bubble-background span {
  width: 8vmin;
  height: 8vmin;
  border-radius: 8vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 3;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.bubble-background span:nth-child(0) {
  color: #ffacac;
  top: 86%;
  left: 75%;
  animation-duration: 1s;

  transform-origin: -14vw -9vh;
  box-shadow: 16vmin 0 2.9847366236739683vmin currentColor;
}

.bubble-background span:nth-child(1) {
  color: #e45a84;
  top: 81%;
  left: 35%;
  animation-duration: 1s;

  transform-origin: 10vw 2vh;
  box-shadow: -16vmin 0 2.6876378700074532vmin currentColor;
}

.bubble-background span:nth-child(2) {
  color: #583c87;
  top: 89%;
  left: 11%;
  animation-duration: 1s;

  transform-origin: -19vw 10vh;
  box-shadow: 16vmin 0 2.012916050902601vmin currentColor;
}

.bubble-background span:nth-child(3) {
  color: #ffacac;
  top: 33%;
  left: 8%;
  animation-duration: 1s;

  transform-origin: -23vw 12vh;
  box-shadow: -16vmin 0 2.308143729951383vmin currentColor;
}

.bubble-background span:nth-child(4) {
  color: #583c87;
  top: 72%;
  left: 61%;
  animation-duration: 1s;

  transform-origin: 10vw 11vh;
  box-shadow: 16vmin 0 2.1906461912559125vmin currentColor;
}

.bubble-background span:nth-child(5) {
  color: #ffacac;
  top: 11%;
  left: 76%;
  animation-duration: 1s;

  transform-origin: 5vw -17vh;
  box-shadow: -16vmin 0 2.9947970274531523vmin currentColor;
}

.bubble-background span:nth-child(6) {
  color: #ffacac;
  top: 5%;
  left: 78%;
  animation-duration: 1s;

  transform-origin: 9vw -16vh;
  box-shadow: -16vmin 0 2.5188543810086674vmin currentColor;
}

.bubble-background span:nth-child(7) {
  color: #e45a84;
  top: 69%;
  left: 48%;
  animation-duration: 1s;

  transform-origin: -12vw 22vh;
  box-shadow: -16vmin 0 2.116883123100787vmin currentColor;
}

.bubble-background span:nth-child(8) {
  color: #583c87;
  top: 77%;
  left: 48%;
  animation-duration: 1s;
  transform-origin: -16vw 2vh;
  box-shadow: -16vmin 0 2.850214419679803vmin currentColor;
}

.bubble-background span:nth-child(9) {
  color: #ffacac;
  top: 83%;
  left: 90%;
  animation-duration: 1s;
  transform-origin: -19vw -14vh;
  box-shadow: 16vmin 0 2.740048119573585vmin currentColor;
}

.tag {
  background-color: #69ff76;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 5px 17px;
  border-radius: 4px;
}
</style>
