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
      data: ["厂界东侧1#", "厂界南侧2#", "厂界西侧3#", "厂界北侧4#"],
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
        name: "噪声平均值",
        type: "bar",
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
        itemStyle: {
          borderRadius: [5, 5, 5, 5],
        },
        barWidth: 20,
        barGap: 1,
        data: [25, 34, 37, 40],
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
