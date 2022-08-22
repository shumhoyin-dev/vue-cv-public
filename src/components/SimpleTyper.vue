<template lang="">
  <slot></slot>
  <div class="d-inline-block">
    <span class="fs-2">{{ string }}</span>
    <span class="vertical-line"></span>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const string = ref("");
let interval;

onMounted(() => {
  // make a interval
  const textArr = ["Shum Ho Yin.", "Lemon."];
  let ItemIdx = 0;
  let ExistIdx = 0;
  interval = setInterval(() => {
    const len2 = textArr[ItemIdx].length;
    if (ExistIdx < len2) {
      string.value += textArr[ItemIdx].charAt(ExistIdx);
      ExistIdx += 1;
    } else {
      string.value = "";
      ExistIdx = 0;

      if (ItemIdx === textArr.length - 1) {
        ItemIdx = 0;
      } else {
        ItemIdx += 1;
      }
    }
  }, 200);
});
onUnmounted(() => {
  // clear interval
  clearInterval(interval);
  console.log("interval clear");
});
</script>
<style lang="scss" scoped>
.vertical-line {
  height: 100%;
  animation: blink 0.3s infinite;
  border-left: 3px solid black;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
