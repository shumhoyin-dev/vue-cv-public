<template lang="">
  <div>
    <h4 class="mb-3">My Education</h4>
    <ul class="education-list border-start border-4 border-success">
      <li class="education-item">
        <strong class="title">2000 - 2005</strong>
        <h5>Computer science</h5>
        <p class="card-text mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem
          illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate
        </p>
      </li>
      <li class="education-item">
        <strong class="title">2000 - 2005</strong>
        <h5>Computer science</h5>
        <p class="card-text mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem
          illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.education-item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
