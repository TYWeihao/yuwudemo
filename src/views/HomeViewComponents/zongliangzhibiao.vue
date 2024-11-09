<script setup>
import "@/assets/custom-font.css";
import { ref, defineProps, defineEmits, watch } from "vue";
import bar1 from "./charts/bar1.vue";
import bar2 from "./charts/bar2.vue";
import bar3 from "./charts/bar3.vue";
import bar4 from "./charts/bar4.vue";

const props = defineProps(["showDetail", "activeTab"]);
const emits = defineEmits(["closeDetail"]);
const showDetail = ref(props.showDetail);

const closeDetail = () => {
  showDetail.value = false;
  emits("closeDetail", "zongliangzhibiao");
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
        <div class="tab-title active">总量指标详情</div>
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center; flex-wrap: wrap; gap: 0">
          <div style="border-right: 1px solid #666">
            <bar1 />
          </div>
          <div style="border-bottom: 1px solid #666">
            <bar4 />
          </div>
          <div style="border-top: 1px solid #666">
            <bar3 />
          </div>
          <div style="border-left: 1px solid #666">
            <bar2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-item > div {
  width: calc(50%);
  padding: 2rem;
}
</style>
