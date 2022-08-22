<template lang="">
  <section class="interest-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <strong class="tag mb-3">Interest</strong>
          <h2 class="mt-3 mb-3">
            A Summmary of my <br />
            Interest
          </h2>
        </div>
      </div>
      <div class="row">
        <InterestCard
          v-for="(item, idx) in interestList"
          :key="idx"
          :type="item.type"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import InterestCard from "@/components/InterestCard.vue";
import { reactive } from "vue";

const interestList = reactive([
  {
    type: "web",
    title: "Web Development",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eum asperiores minus impedit
        reprehenderit! Possimus, suscipit nobis! Est facilis labore ipsa dolorem quaerat nostrum
        accusamus nesciunt fugit? Numquam, unde optio.`,
  },
  {
    type: "game",
    title: "Web Development",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eum asperiores minus impedit
        reprehenderit! Possimus, suscipit nobis! Est facilis labore ipsa dolorem quaerat nostrum
        accusamus nesciunt fugit? Numquam, unde optio.`,
  },
  {
    type: "reading",
    title: "Web Development",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eum asperiores minus impedit
        reprehenderit! Possimus, suscipit nobis! Est facilis labore ipsa dolorem quaerat nostrum
        accusamus nesciunt fugit? Numquam, unde optio.`,
  },
  {
    type: "music",
    title: "Web Development",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eum asperiores minus impedit
        reprehenderit! Possimus, suscipit nobis! Est facilis labore ipsa dolorem quaerat nostrum
        accusamus nesciunt fugit? Numquam, unde optio.`,
  },
]);
</script>
<style lang="scss">
.interest-section {
  & > div {
    border-radius: 15px;
    background: #fff;
    padding: 40px;
    -webkit-box-shadow: 5px 9px 20px -3px #07a1f7;
    box-shadow: 5px 9px 20px -3px #07a1f7;
  }
}
</style>
