<script setup>
import "@/assets/custom-font.css";
import { ref, defineProps, defineEmits, watch } from "vue";
import Line6 from "./charts/line6.vue";

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
        <div class="tab-title active">碳排放分析</div>
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center; flex-wrap: wrap; gap: 0">
          <div style="border-right: 1px solid #666">
            <Line6 />
          </div>
          <div>
            <!-- 碳排放量 189633.3, 172154.2,157243.8, 140154.2, 139633.3, 122154.2,117243.8, 100154.2 -->
            <!-- 碳中和量 5432.1, 35423.3, 47863.2, 59342.8, 63424.6, 76532.5, 84234.2, 96234.2 -->
            <!-- 净排放量 184201.2, 136730.9, 109380.6, 80811.4, 76208.7, 45599.7, 32999.6, 0 -->
            <!-- 碳排放强度  21.28, 20.02, 18.98, 17.98, 17.98, 16.98, 16.98, 16.98 -->
            <table>
              <thead>
                <tr>
                  <th>年份</th>
                  <th>碳排放量(t)</th>
                  <th>碳中和量(t)</th>
                  <th>净排放量(t)</th>
                  <th>碳排放强度(kgCO₂/t原煤)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020</td>
                  <td>189633.3</td>
                  <td>5432.1</td>
                  <td>184201.2</td>
                  <td>21.28</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>172154.2</td>
                  <td>35423.3</td>
                  <td>136730.9</td>
                  <td>20.02</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>157243.8</td>
                  <td>47863.2</td>
                  <td>109380.6</td>
                  <td>18.98</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>140154.2</td>
                  <td>59342.8</td>
                  <td>80811.4</td>
                  <td>17.98</td>
                </tr>
                <tr>
                  <td>2024</td>
                  <td>139633.3</td>
                  <td>63424.6</td>
                  <td>76208.7</td>
                  <td>17.98</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>122154.2</td>
                  <td>76532.5</td>
                  <td>45599.7</td>
                  <td>16.98</td>
                </tr>
                <tr>
                  <td>2026</td>
                  <td>117243.8</td>
                  <td>84234.2</td>
                  <td>32999.6</td>
                  <td>16.98</td>
                </tr>
                <tr>
                  <td>2027</td>
                  <td>100154.2</td>
                  <td>96234.2</td>
                  <td>0</td>
                  <td>16.98</td>
                </tr>
              </tbody>
            </table>
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
