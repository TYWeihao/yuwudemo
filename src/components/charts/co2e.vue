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
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      top: "5%",
      containLabel: true,
    },
    textStyle: {
      color: "#ffffffb3",
    },
    legend: {
      data: ["原煤产量", "吨原煤二氧化碳排放量", "吨原煤二氧化碳排放较2020年下降率"],
      textStyle: {
        color: "#ffffffb3",
        fontSize: 14,
      },
    },
    xAxis: [
      {
        type: "category",

        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        // max: 80,
        interval: 50,
        axisLabel: {
          formatter: "{value} 吨",
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: "value",
        min: 0,
        max: 50,
        interval: 5,
        axisLabel: {
          formatter: "{value} %",
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    dataset: {
      dimensions: ["product", "累计发电量", "乏风氧化发电量"],
      source: [
        { product: "2023年", 累计发电量: 8958.68, 乏风氧化发电量: 1101 },
        { product: "2024年截止至8月底", 累计发电量: 6470.09, 乏风氧化发电量: 1169 },
      ],
    },
    series: [
      {
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
      },
      {
        type: "bar",
        itemStyle: {
          color: "#FF5722", // 更改柱状图颜色为橙色
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " MWh";
          },
        },
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
