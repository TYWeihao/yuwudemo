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
      data: ["电力", "热力", "其他"],
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
      data: ['2020', '2021', '2022', '2023', '2024'],
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
        name: "电力",
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
        data: [200, 280, 180, 260, 170],
      },
      {
        name: "热力",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#ff7e00",
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#f8bb01",
            },
            {
              offset: 1,
              color: "#f8bb0122",
            },
          ]),
        },

        // prettier-ignore
        data: [90, 150, 110, 160, 120],
      },
      {
        name: "其他",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#0dd7a0",
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0dd7a0dd",
            },
            {
              offset: 1,
              color: "#0dd7a022",
            },
          ]),
        },

        // prettier-ignore
        data: [20, 100, 40, 80, 60],
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
