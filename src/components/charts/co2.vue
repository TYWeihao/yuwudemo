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
      data: ["原煤产量", "碳排放强度"],
      textStyle: {
        color: "#ffffffb3",
        fontSize: 10,
      },
      top: "0",
      right: 0,
    },
    xAxis: [
      {
        type: "category",
        data: ["2020", "2021", "2022", "2023", "2024"],
        axisPointer: {
          type: "shadow",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 70,
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
        axisTick: {
          show: false,
        },
        axisLine: {
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
        axisTick: {
          show: false,
        },
        axisLine: {
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
        itemStyle: {
          color: "#00ffff",
        },
        // barWidth: 10,
        data: [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72],
      },
      {
        name: "碳排放强度",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
        itemStyle: {
          color: "#ff7e00",
        },
        data: [29.8, 26.5, 19.2, 18.9, 15.6, 13.3, 11.0, 6.7, 5.4, 4.1, 2.8, 1.5],
      },
      // {
      //   name: "碳排放强度较2020年下降率",
      //   type: "line",
      //   yAxisIndex: 1,
      //   tooltip: {
      //     valueFormatter: function (value) {
      //       return value + " %";
      //     },
      //   },
      //   data: [2.0, 3.5, 5.0, 7.2, 9.8, 12.5, 15.4, 18.6, 22.0, 25.7, 29.7, 34.0],
      // },
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
