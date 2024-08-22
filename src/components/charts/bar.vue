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
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: "{b}: {c}次",
    },
    legend: {
      show: false,
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      top: "5%",
      containLabel: true,
    },
    yAxis: {
      type: "value",

      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    xAxis: {
      type: "category",
      data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月"],
      // axisLabel: {
      //   show: true,
      //   textStyle: {
      //     color: "#baeaf0",
      //   },
      // },
    },
    series: [
      {
        name: "执法次数",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        data: [20, 30, 13, 33, 9, 33, 32, 13],
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
