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
      bottom: "5%",
      top: "5%",
      containLabel: true,
    },
    textStyle: {
      color: "#fff",
    },
    legend: {
      data: ["原煤产量", "吨原煤二氧化碳排放量", "吨原煤二氧化碳排放较2020年下降率"],
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027",
          "2028",
          "2029",
          "2030",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 80,
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
    series: [
      {
        name: "原煤产量",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
        data: [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72],
      },
      {
        name: "吨原煤二氧化碳排放量",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
        data: [29.8, 26.5, 19.2, 18.9, 15.6, 13.3, 11.0, 6.7, 5.4, 4.1, 2.8, 1.5],
      },
      {
        name: "吨原煤二氧化碳排放较2020年下降率",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " %";
          },
        },
        data: [2.0, 3.5, 5.0, 7.2, 9.8, 12.5, 15.4, 18.6, 22.0, 25.7, 29.7, 34.0],
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
