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
        name: "原煤生产耗电量",
        type: "bar",
        itemStyle: {
          color: "#FF5722", // 更改柱状图颜色为橙色
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " MWh";
          },
        },
        data: [78, 75, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45],
      },
      {
        name: "吨原煤生产电耗",
        type: "line",
        yAxisIndex: 1,
        itemStyle: {
          color: "#2196F3", // 更改线条颜色为蓝色
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + " kWh";
          },
        },
        data: [19.6, 18.3, 17.0, 15.9, 14.8, 13.8, 12.9, 12.0, 11.2, 10.4, 9.7, 9.0],
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
