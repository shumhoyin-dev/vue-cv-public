<template>
  <!-- about me block -->
  <section class="section-title">
    <div class="container">
      <div class="text-center">
        <strong class="tag mb-3">Project</strong>
        <h2 class="mt-3 mb-3">Summary of handled Projects</h2>
      </div>

      <div class="mt-4">
        <ul class="project-list">
          <li class="project-item row">
            <div class="col-lg-6 project-content">
              <div class="project-desc">
                <h2 class="text-center text-lg-start">Web Hosting and Maintainance</h2>
                <strong class="d-block d-md-inline-block mt-3 mt-md-0"
                  >Responsible in static Webpages hosting, maintainance and ad-hoc tasks</strong
                >
                <div class="d-none d-md-block">
                  <div>Stack involved</div>
                  <ul class="stack-involved">
                    <li class="stack-item">Amazon S3</li>
                    <li class="stack-item">Amazon Cloudfront</li>
                    <li class="stack-item">Amazon Route 53</li>
                    <li class="stack-item">VYond (Animated Video Creation Tools)</li>
                    <li class="stack-item">Cloudflare (Domain and DNS settings)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <swiper
                :loop="true"
                :pagination="{
                  clickable: false,
                  dynamicBullets: true,
                }"
                :autoplay="{
                  delay: 1500,
                  disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/web-hosting/aws.jpg" alt="vyond1"
                /></swiper-slide>
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/web-hosting/vyond1.png" alt="vyond1"
                /></swiper-slide>
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/web-hosting/vyond2.png" alt="vyond1"
                /></swiper-slide>
              </swiper>
            </div>
          </li>

          <li class="project-item row flex-row-reverse">
            <div class="col-lg-6 project-content">
              <div class="project-desc">
                <h2 class="text-center text-lg-start">Web Portal Development</h2>
                <strong class="d-block d-md-inline-block mt-3 mt-md-0"
                  >Responsible in frontend development according to Figma design, backend
                  development, testing and documentation

                  <!-- <small class="text-italic">Including files upload and download, member management</small>
               -->
                </strong>

                <div class="d-none d-md-block">
                  <ul class="stack-involved">
                    <li class="stack-item">React.js (Frontend) , axios, JWT</li>
                    <li class="stack-item">i18n for multi-lang</li>
                    <li class="stack-item">Swagger , RESTful API design</li>
                    <li class="stack-item">Node.js with Express</li>
                    <li class="stack-item">MariaDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <swiper
                :loop="true"
                :pagination="{
                  clickable: false,
                  dynamicBullets: true,
                }"
                :autoplay="{
                  delay: 1500,
                  disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-2.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-3.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-4.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-5.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-6.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/portal-7.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/swagger.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-1/swagger2.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-1.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-2.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-4.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-4.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-5.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img class="img-fluid" src="../assets/portal-2/portal2-6.jpg" alt="portal-2" />
                </swiper-slide>
                <swiper-slide class="">
                  <img
                    class="img-fluid"
                    src="../assets/portal-2/portal2-7.jpg"
                    alt="portal-2"
                  /> </swiper-slide
                >-
              </swiper>
            </div>
          </li>

          <li class="project-item row">
            <div class="col-lg-6 project-content">
              <div class="project-desc">
                <h2 class="text-center text-lg-start">Demo App with AR 3D Model</h2>
                <strong
                  >Responsible in developing demo app for AR 3D Model display using Wikitude</strong
                >
                <ul class="stack-involved">
                  <li class="stack-item">Wikitude AR Kit</li>
                  <li class="stack-item">Published Demo App to Testflight and APK for client</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <swiper
                :loop="true"
                :pagination="{
                  clickable: false,
                  dynamicBullets: true,
                }"
                :autoplay="{
                  delay: 1500,
                  disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/wikitude/wikitude1.jpg" alt="wikitude1"
                /></swiper-slide>
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/wikitude/wikitude2.jpg" alt="wikitude2"
                /></swiper-slide>
                <swiper-slide class="p-3"
                  ><img class="img-fluid" src="../assets/wikitude/wikitude3.jpg" alt="wikitude3"
                /></swiper-slide>
              </swiper>
            </div>
          </li>

          <li class="project-item row flex-row-reverse">
            <div class="col-lg-6 project-content">
              <div class="project-desc">
                <h2 class="text-center text-lg-start">Mobile App Development</h2>
                <strong class="d-block d-md-inline-block"
                  >Responsible in frontend UI development, testing and documentation</strong
                >
                <ul class="stack-involved">
                  <li class="stack-item">React Native / JWT</li>
                  <li class="stack-item">i18n for multi-lang</li>
                  <li class="stack-item">Testing</li>
                  <li class="stack-item">Test Plan</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <swiper
                :loop="true"
                :pagination="{
                  clickable: false,
                  dynamicBullets: true,
                }"
                :autoplay="{
                  delay: 1500,
                  disableOnInteraction: false,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide class="p-3 text-center"
                  ><img class="w-25" src="../assets/sharebike/IMG_0088.png" alt="sharebike1"
                /></swiper-slide>
                <swiper-slide class="p-3 text-center"
                  ><img class="w-25" src="../assets/sharebike/IMG_0089.png" alt="wikitude2"
                /></swiper-slide>
                <swiper-slide class="p-3 text-center"
                  ><img class="w-25" src="../assets/sharebike/IMG_0090.png" alt="wikitude2"
                /></swiper-slide>
                <swiper-slide class="p-3 text-center"
                  ><img class="w-25" src="../assets/sharebike/IMG_0091.png" alt="wikitude2"
                /></swiper-slide>
              </swiper>
            </div>
          </li>
        </ul>
      </div>

      <div class="text-center p-5">
        <strong class="tag mb-3">Practise</strong>
        <h2 class="mb-3 mt-3">Personal Practise</h2>
        <strong>There are also some other personal practise in CSS,HTML, VUE</strong>
        <p class="mt-3"><router-link to="/">Know more</router-link></p>
      </div>
    </div>
  </section>
</template>

<script setup>
// @ is an alias to /src
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

/* eslint-disable */
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { reactive } from "vue";

const modules = reactive([Pagination, Autoplay]);
</script>

<style scoped lang="scss">
// @import "../scss/projectView/index.scss";

.stack {
  &-involved {
    list-style: square;
  }
}

.project {
  &-item {
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 2rem;
  }

  &-item {
    > div {
      padding: 1.5rem;
    }
  }

  &-content {
    display: flex;
    align-items: center;
  }

  &-desc {
    width: 100%;
  }
}

.test {
  position: absolute;
  bottom: 10%;
  right: 10%;
}
</style>
