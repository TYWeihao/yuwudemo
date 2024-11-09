<script setup>
import "@/assets/custom-font.css";
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps(["showDetail"]);
const emits = defineEmits(["closeDetail"]);
const showDetail = ref(props.showDetail);

const closeDetail = () => {
  showDetail.value = false;
  emits("closeDetail", "qiyejianjie");
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
    <div v-if="showDetail" class="detail-box" style="width: 800px">
      <div class="detail-title">
        <div class="tab-title active">企业详情</div>
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center">
          <div class="detail-img">
            <img
              style="width: 200px; height: 200px; border-radius: 10px"
              src="./../../assets/img/bg.png.jpg"
              alt=""
            />
          </div>
          <div style="padding: 0 1rem">
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">企业名称</div>
                <div class="detail-item-content">山西潞安集团余吾煤业有限责任公司</div>
              </div>
              <div>
                <div class="detail-item-title">所属行业</div>
                <div class="detail-item-content">烟煤和无烟煤开采洗选</div>
              </div>
            </div>
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">企业规模</div>
                <div class="detail-item-content">
                  <div>员工人数：xxx人 年营业额：xxxx万元</div>
                </div>
              </div>
              <div>
                <div class="detail-item-title">企业地址</div>
                <div class="detail-item-content">山西省长治市潞城市余吾镇</div>
              </div>
            </div>
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">企业简介</div>
                <div class="detail-item-content">
                  余吾煤业公司位于山西省长治市屯留县，属潞安矿区。井田面积134.548平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力750万吨/年，配套900万吨/年的洗煤厂，可实现原煤的全部洗选。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
