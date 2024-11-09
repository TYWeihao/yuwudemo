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
      color: "#ffffffb3",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "4%",
      containLabel: true,
    },
    legend: {
      data: ["碳排放量", "碳中和量", "净排放量"],
      textStyle: {
        color: "#ffffffb3",
      },
      right: 0,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      // prettier-ignore
      data: ['2020', '2021', '2022', '2023', '2024','2025','2026','2027'],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} W",
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
    // visualMap: {
    //   show: false,
    //   dimension: 0,
    //   pieces: [
    //     {
    //       lte: 6,
    //       color: "green",
    //     },
    //     {
    //       gt: 6,
    //       lte: 8,
    //       color: "red",
    //     },
    //     {
    //       gt: 8,
    //       lte: 14,
    //       color: "green",
    //     },
    //     {
    //       gt: 14,
    //       lte: 17,
    //       color: "red",
    //     },
    //     {
    //       gt: 17,
    //       color: "green",
    //     },
    //   ],
    // },
    series: [
      {
        name: "碳排放量",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#00ffff",
        },
        showSymbol: false,
        // areaStyle: {
        //   opacity: 0.8,
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     {
        //       offset: 0,
        //       color: "rgb(0, 221, 255)",
        //     },
        //     {
        //       offset: 1,
        //       color: "rgba(77, 119, 255,.3)",
        //     },
        //   ]),
        // },

        // prettier-ignore
        data: [189633.3, 172154.2,157243.8, 140154.2, 139633.3, 122154.2,117243.8, 100154.2],
      },
      {
        name: "碳中和量",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#ff7e00",
        },
        showSymbol: false,
        // areaStyle: {
        //   opacity: 0.8,
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     {
        //       offset: 0,
        //       color: "#f8bb01",
        //     },
        //     {
        //       offset: 1,
        //       color: "#f8bb0122",
        //     },
        //   ]),
        // },

        // 逐渐增加到
        data: [5432.1, 35423.3, 47863.2, 59342.8, 63424.6, 76532.5, 84234.2, 96234.2],
      },
      {
        name: "净排放量",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#00ff00",
        },
        showSymbol: false,
        // areaStyle: {
        //   opacity: 0.8,
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     {
        //       offset: 0,
        //       color: "#f8bb01",
        //     },
        //     {
        //       offset: 1,
        //       color: "#f8bb0122",
        //     },
        //   ]),
        // },

        // 逐渐增加到
        data: [184201.2, 136730.9, 109380.6, 80811.4, 76208.7, 45599.7, 32999.6, 0],
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
  height: 95%;
  margin: 10px 0;
}
</style>
