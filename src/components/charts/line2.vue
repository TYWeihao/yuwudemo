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
  let base = 2020;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data = [];
  let data2 = [];
  for (var i = 1; i < 10; i++) {
    var dayStr = base + i;
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }
  let option = {
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
    legend: {
      top: "bottom",
      data: ["原煤", "精煤"],
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
    },
    xAxis: {
      type: "category",

      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      z: 10,
    },
    grid: {
      top: 30,
      left: 15,
      right: 15,
    },
    series: [
      {
        name: "原煤",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#0770FF",
        },
        stack: "a",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(58,77,233,0.8)",
            },
            {
              offset: 1,
              color: "rgba(58,77,233,0.3)",
            },
          ]),
        },
        data: data,
      },
      {
        name: "精煤",
        type: "line",
        smooth: true,
        stack: "a",
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#F2597F",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(213,72,120,0.8)",
            },
            {
              offset: 1,
              color: "rgba(213,72,120,0.3)",
            },
          ]),
        },
        data: data2,
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
