<template lang="">
  <section class="resume-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <strong class="tag mb-3">Resume</strong>
          <h2 class="mt-3 mb-3">
            A Summmary of my <br />
            resume
          </h2>
        </div>
      </div>
      <div class="row">
        <!-- My Education -->
        <div class="col-12 col-lg-6 mb-4">
          <Education />
        </div>
        <div class="col-12 col-lg-6 mb-4">
          <Experience />
        </div>
        <!-- My Experiance -->
      </div>
      <div>
        <Skills />
      </div>
    </div>
  </section>
</template>
<script setup>
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Skills from "@/components/Skills.vue";
</script>
<style scoped lang="scss">
.resume-section {
  padding-top: 100px;
  padding-bottom: 100px;

  & > div {
    border-radius: 15px;
    background: #fff;
    padding: 40px;
    -webkit-box-shadow: -1px 14px 33px -8px rgba(20, 255, 26, 0.55);
    box-shadow: -1px 14px 33px -8px rgba(20, 255, 26, 0.55);
  }
}
</style>
