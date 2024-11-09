<script setup>
import "@/assets/custom-font.css";
import { ref, defineProps, defineEmits, watch } from "vue";
import bar5 from "./charts/bar5.vue";

const props = defineProps(["showDetail", "activeTab"]);
const emits = defineEmits(["closeDetail"]);
const showDetail = ref(props.showDetail);

const closeDetail = () => {
  showDetail.value = false;
  emits("closeDetail", "tanpaifang");
};
watch(
  () => props.showDetail,
  (newVal) => {
    showDetail.value = newVal;
  }
);
</script>

<template>
  <div style="position: absolute" v-if="showDetail">
    <div class="mask" @click="closeDetail"></div>
    <div v-if="showDetail" class="detail-box" style="width: 1000px">
      <div class="detail-title">
        <div class="tab-title active">瓦斯利用情况</div>
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center; flex-wrap: wrap; gap: 0">
          <div>
            <bar5 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-item > div {
  width: calc(90%);
  padding: 2rem;
}
</style>
