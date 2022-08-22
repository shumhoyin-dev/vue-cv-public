<template>
  <section class="about-me-section">
    <div class="container">
      <div class="text-center col-md-12 col-sm-12-col-xs-12">
        <strong class="tag mb-3">About Me</strong>
        <h2 class="mt-3 mb-3 d-none d-md-block">Know Me More</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-md-8 order-2 order-md-1">
          <SimpleTyper>
            <h2 class="d-inline-block me-2">Hello, I'm</h2>
          </SimpleTyper>

          <p class="text-justify">
            I am graduated from with a bachelor degree in Computer Science. I love web development
            as I can get a sense of accomplishmen after building a website from scratch or design. I
            always do sport myself and read books in my free time, especially those related to web
            development.
          </p>
        </div>
        <div class="col-md-4 order-1 order-md-2">
          <img alt="Vue logo" src="../assets/logo3.png" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-3">
          Name:
          <p>Mark Juckerberg</p>
        </div>
        <div class="col-12 col-md-3">
          Email:
          <p>Example@Gmail.Com</p>
        </div>
        <div class="col-12 col-md-3">
          Date Of Birth:
          <p>12 December</p>
        </div>
        <div class="col-12 col-md-3">
          From:
          <p>Hong Kong</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SimpleTyper from "@/components/SimpleTyper.vue";
</script>

<style scoped lang="scss">
.text-justify {
  text-align: justify;
}
.about-me-section {
  padding-top: 100px;
  padding-bottom: 100px;

  & > div {
    border-radius: 15px;
    background: #fff;
    padding: 40px;
    -webkit-box-shadow: 0px 26px 36px -20px rgba(23, 102, 255, 0.55);
    box-shadow: 0px 26px 36px -20px rgba(23, 102, 255, 0.55);
  }
}
</style>
