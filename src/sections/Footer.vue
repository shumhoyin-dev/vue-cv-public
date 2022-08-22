<template lang="">
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <h6 class="col-12 col-md-8 text-center text-md-start">Copyright © by Shum Ho Yin 2022</h6>
        <ul
          class="soical-list col-12 col-md-4 d-flex align-items-center justify-content-md-end justify-content-center"
        >
          <li class="social-item">
            <a href="mailto:https://youtube.com" aria-label="youtube">
              <font-awesome-icon icon="fa-solid fa-envelope" class="fa-2x" />
            </a>
          </li>
          <li class="social-item">
            <font-awesome-icon icon="fa-brands fa-facebook" class="fa-2x" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped lang="scss">
.footer {
  padding-top: 30px;
  padding-bottom: 30px;

  &-item {
    background: red;
    padding: 10px;
  }
}

.social-item {
  padding: 5px;
}
</style>
