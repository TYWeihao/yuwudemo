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
      containLabel: true,
    },
    legend: {
      data: ["碳排放量", "碳排强度"],
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
      data: ['2023-10','2023-11','2023-12','2024-1','2024-2','2024-3','2024-4','2024-5','2024-6','2024-7','2024-8','2024-9'],
    },
    yAxis: [
      {
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
      {
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
    ],
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
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgba(77, 119, 255,.3)",
            },
          ]),
        },

        // prettier-ignore
        data: [231563,218868,241236,246874,209411,230308,228794,223940,213619,201497,225457,193764],
      },
      {
        name: "碳排强度",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#ff7e00",
        },
        showSymbol: false,
        yAxisIndex: 1,
        // prettier-ignore
        data: [0.246352528,0.252044055,0.208483638,0.212517195,0.206581046,0.21292659,0.216728713,0.22780517,0.199743424,0.183763794,0.209662495,0.184244107],
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
