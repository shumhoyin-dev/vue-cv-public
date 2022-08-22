<template lang="">
  <section class="project-section">
    <div class="container">
      <div class="text-center">
        <strong class="tag mb-3">Project</strong>
        <h2 class="mt-3 mb-3">Summary of my Projects</h2>
        <p>participated in differents projects</p>
        <p><router-link to="/">Know more</router-link></p>
      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-6 col-xl-4 mb-4" v-for="(item, idx) in projects" :key="idx">
          <div class="project-item">
            <div class="img-container">
              <img :src="item.url" :alt="item.title" />
            </div>
            <div
              class="project-hover text-center d-flex align-items-center flex-column justify-content-center"
            >
              <h2>{{ item.title }}</h2>
              <p><router-link :to="item.link">Know more</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";

const projects = reactive([
  {
    title: "Mobile Application Development",
    url: "https://i.imgur.com/N2gjL7t.jpg",

    link: "/",
  },
  {
    title: "Web Development \n & Hosting",
    url: "https://i.imgur.com/dASmz1u.jpg",
    link: "/",
  },
  {
    title: `Testing \n & Documentation`,
    url: "https://i.imgur.com/dASmz1u.jpg",
    link: "/",
  },
]);
</script>
<style lang="scss" scoped>
.project-section {
  padding-top: 100px;
  padding-bottom: 100px;
  & > div {
    border-radius: 15px;
    background: #fff;
    padding: 40px;
    -webkit-box-shadow: -1px 14px 33px -8px rgba(194, 96, 219, 0.71);
    box-shadow: -1px 14px 33px -8px rgba(194, 96, 219, 0.71);
  }
}

.project-item {
  position: relative;
  opacity: 0.7;
  overflow: hidden;
}

.project-item:hover > .project-hover {
  transform: scale(1, 1);
}
.img-container img {
  transform: scale(1);
  transition: transform 0.5s ease-out;
}

.project-item:hover .img-container > img {
  transform: scale(1.1);
}

.project-hover {
  color: white;
  font-size: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(32, 32, 32, 0.8);
  transform: scale(1, 0);
  transition: transform 0.5s ease-out;
  transform-origin: bottom;
}
</style>
