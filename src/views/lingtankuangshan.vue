<script setup>
import co2e from "@/components/charts/co2e.vue";
import sangji2 from "@/components/charts/sangji2.vue";
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>零碳矿山申报情况</div>
        <div class="left-box-content row">
          <!-- 时间线效果 2023年11月2日，余吾煤业公司按照《山西省零碳 (近零碳)产业示范区创建申报指南》申报零碳矿山。
2023年11月15日，省发改委安排太原煤炭设计院贠利明等专家到我公司进行现场核查，我公司顺利通过现场核查。
2023年11月22日，我公司节能环保科以及相关业务科室到太原煤炭设计院参加零碳矿山综合评估，我公司顺利通过评估。
2023年12月28日，省发改委发文确认我公司为首批创建零碳矿山试点单位之一。-->
          <div class="timeline">
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月2日</div>
              <div class="timeline-content">
                余吾煤业公司按照《山西省零碳
                (近零碳)产业示范区创建申报指南》申报零碳矿山。
              </div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月15日</div>
              <div class="timeline-content">
                省发改委安排太原煤炭设计院贠利明等专家到我公司进行现场核查，我公司顺利通过现场核查。
              </div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月22日</div>
              <div class="timeline-content">
                我公司节能环保科以及相关业务科室到太原煤炭设计院参加零碳矿山综合评估，我公司顺利通过评估。
              </div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年12月28日</div>
              <div class="timeline-content">
                省发改委发文确认我公司为首批创建零碳矿山试点单位之一。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="left-box box" style="width: 60%">
          <div class="left-box-title title">>预期目标</div>
          <div class="left-box-content row" style="font-size: 0.8rem">
            2020年我公司CO2排放量总计为159633.3吨，到2025年CO2排放量下降至99910.2吨，并于2030年达到负碳，排放量为-1038.3吨。到2025年吨原煤生产电耗降至20kWh/t以内，矿区零碳能源使用比例达到20%以上；到2030年吨原煤生产电耗降至18kWh/t以内，零碳能源使用比例达到50%以上
          </div>
        </div>
        <div class="left-box box" style="width: 38%">
          <div class="left-box-title title">>四个抓手</div>
          <div class="left-box-content">
            <div class="zhuashou">节能降耗减碳</div>
            <div class="zhuashou">低碳零碳供能</div>
            <div class="zhuashou">瓦斯利用降碳</div>
            <div class="zhuashou">矿区增汇固碳</div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>瓦斯利用</div>
        <div class="left-box-content" style="height: 100%">
          <co2e />
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="left-box-title title">>碳流图</div> -->
      <sangji2 />
    </div>
  </main>
</template>

<style scoped>
/* main {
  background-image: url("./../assets/img/bg2.png");
  background-size: 100% 100%;
  z-index: -2;
} */
.zhuashou {
  background-image: url("/src/assets/img/zhuashou.png");
  background-size: 100% 100%;
  padding: 0.5rem 0.2rem;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  text-align: center;
  color: #ffffff;
}
.center {
  width: 73%;
  height: calc(100vh - 100px - 2rem);
  background-color: #0a1d7155;
  z-index: -1;
}
.left-box-content,
.right-box-content {
  padding: 0.5rem;
  box-sizing: border-box;
}
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.2rem;
}
p {
  font-size: 0.8rem;
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.timeline-item {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 1rem;
}
.tiemline-time {
  font-size: 0.8rem;
  color: #ffffffb3;
  word-break: keep-all;
  width: 30%;
  text-align: right;
}
.timeline-content {
  font-size: 0.7rem;
  color: #0ff;
  width: 75%;
}
</style>
