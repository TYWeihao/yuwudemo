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
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["林格曼黑度", "氮氧化物", "二氧化硫", "颗粒物"],
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
    series: [
      {
        name: "排放口1",
        type: "bar",
        label: {
          show: true,
          fontSize: 10,
          color: "#ffffffb3",
          fontFamily: "YousheBiaotiHei", // 使用指定字体
          position: "right",
        },
        itemStyle: {
          borderRadius: [5, 5, 5, 5],
        },
        barWidth: 10,
        barGap: 1,
        data: [290, 1049, 1317, 6302],
      },
      {
        name: "排放口2",
        type: "bar",

        itemStyle: {
          borderRadius: [5, 5, 5, 5],
        },
        label: {
          show: true,
          position: [0, "180%"],
          textStyle: {
            color: "#9ff",
          },
          formatter: function (params) {
            return params.name;
          },
        },
        barWidth: 10,
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
