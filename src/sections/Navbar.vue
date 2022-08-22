<template>
  <div class="header-main-area">
    <div class="container py-4">
      <div class="row align-items-center flex-nowrap">
        <!-- logo -->
        <div class="col-10 col-md-2">
          <router-link to="/" aria-label="logo" class="logo d-block py-md-0">
            <img src="../assets/logo3.png" alt="" class="mx-auto my-0 w-50 d-block d-md-none" />
            <img src="../assets/logo3.png" alt="" class="mx-auto my-0 d-none d-md-block" />
          </router-link>
        </div>

        <!-- hamburger -->
        <div class="d-md-none col-2" @click="click">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>

        <!-- right hand navbar  -->
        <nav class="col-md-10 col-12 d-md-block d-none">
          <ul class="d-flex tablet-nav justify-content-end p-0 m-0">
            <li class="current">
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/project">Project</router-link>
            </li>
            <li>
              <router-link to="/portfolio">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- mobile navbar 1-->
    <div
      @click.stop="click"
      ref="burgerMenu"
      id="myNav"
      class="container mobile-nav w-100 d-md-none"
    >
      <div class="row bg-white">
        <div class="col-12">
          <div class="col-12 text-center py-3">
            <img src="../assets/logo3.png" alt="" class="mx-auto my-0 w-50" />
          </div>
        </div>
        <div class="col-12 bg-white">
          <nav>
            <ul class="mobile-menu p-0 m-0 text-center">
              <li class="">
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/project">Project</router-link>
              </li>
              <li>
                <router-link to="/portfolio">Portfolio</router-link>
              </li>
              <li>
                <router-link to="/">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const burgerMenu = ref(null);

onMounted(() => {
  console.log(burgerMenu);
});

const click = () => {
  // console.log(this.$refs.mobileNav.style);
  if (!burgerMenu.value.classList.contains("mobile-nav-active")) {
    burgerMenu.value.classList.add("mobile-nav-active");
  } else {
    burgerMenu.value.classList.remove("mobile-nav-active");
  }
};
</script>
<style lang="scss" scoped>
.tablet-nav {
  gap: 1em;
  margin: 0;
}

.tablet-nav > li > a {
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.301);
    overflow-x: hidden;
    transition: left 0.8s ease-out;

    &-active {
      left: 0%;
    }
  }

  .mobile-nav {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.301);
    position: fixed;
    top: 0;
    left: -100%;
    transition: all 0.5s ease-in;
    z-index: 9999;
  }

  .mobile-nav-active {
    left: 0;
  }

  .mobile-menu > li {
    padding: 10px 10px;
  }

  .mobile-menu > li > a {
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
  }
}
</style>
