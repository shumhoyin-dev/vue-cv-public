<template lang="">
  <div class="col-md-6 col-lg-4 p-3 interest-item">
    <div class="rounded p-4">
      <div class="interest-logo">
        <component :is="compo"></component>
      </div>
      <h4>{{ props.title }}</h4>
      <p>
        {{ props.desc }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const compo = computed(() => {
  switch (props.type) {
    case "web":
      return <font-awesome-icon icon="fa-solid fa-computer" />;
    case "game":
      return <font-awesome-icon icon="fa-brands fa-steam" />;
    case "reading":
      return <font-awesome-icon icon="fa-solid fa-book" />;
    case "music":
      return <font-awesome-icon icon="fa-solid fa-music" />;
    default:
      return <font-awesome-icon icon="fa-solid fa-computer" />;
  }
});
</script>
<style lang="scss">
.interest-item {
  transform: translateY(0);
  transition: transform 0.5s ease;
}

.interest-item > div {
  box-shadow: -3px 5px 10px -1px rgba(189, 171, 171, 0.73);
  -webkit-box-shadow: -3px 5px 10px -1px rgba(189, 171, 171, 0.73);
  -moz-box-shadow: -3px 5px 10px -1px rgba(189, 171, 171, 0.73);
}

.interest-item:hover {
  transform: translateY(-0.5rem);
}

.interest-logo {
  display: inline-block;
  font-size: 40px;
  color: #04b310;
}
</style>
