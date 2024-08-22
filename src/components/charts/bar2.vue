<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
onMounted(() => {
  let myChart = echarts.init(echartsRef.value);
  // let value = 0.5;
  // let data = [value, value, value];
  let option = {
    textStyle: {
      color: "#fff",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["排放口1", "排放口2"],
      textStyle: {
        color: "#fff",
      },
      top: "bottom",
    },
    grid: {
      top: "3%",
      left: "3%",
      right: "4%",
      bottom: "13%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["林格曼黑度", "氮氧化物", "二氧化硫", "颗粒物"],
    },
    series: [
      {
        name: "排放口1",
        type: "bar",
        data: [290, 1049, 1317, 6302],
      },
      {
        name: "排放口2",
        type: "bar",
        data: [310, 1215, 1341, 6818],
      },
    ],
  };
  useEcharts(myChart, option);
});
</script>
<style scoped>
.echarts {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
