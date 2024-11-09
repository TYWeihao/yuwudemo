<script setup>
import "@/assets/custom-font.css";
import { ref, defineProps, defineEmits, watch } from "vue";
import bar3D from "./charts/bar3D.vue";

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
        <div class="tab-title active">能耗趋势分析</div>
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center; flex-wrap: wrap; gap: 0">
          <div style="border-right: 1px solid #666">
            <bar3D />
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
                  <th>能耗量(tce)</th>
                  <th>节能量(tce)</th>
                  <th>能耗强度(tce/t原煤)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020</td>
                  <td>64733.03</td>
                  <td>-</td>
                  <td>5.74</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>60895.46</td>
                  <td>-</td>
                  <td>5.32</td>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>51229.25</td>
                  <td>-</td>
                  <td>4.86</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>54015.93</td>
                  <td>-</td>
                  <td>4.74</td>
                </tr>
                <tr>
                  <td>2024</td>
                  <td>47135.55</td>
                  <td>-</td>
                  <td>3.77</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2026</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2027</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
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
