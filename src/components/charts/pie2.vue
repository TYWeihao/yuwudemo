<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="pollutionPieChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
onMounted(() => {
  let myChart = echarts.init(echartsRef.value);

  let option = {
    textStyle: {
      color: "#fff",
    },
    legend: {
      top: "bottom",
      textStyle: {
        color: "#fff",
      },
    },

    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [10, 75],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: "固废处置成本" },
          { value: 38, name: "危废处置成本" },
          { value: 32, name: "污水处置成本" },
          { value: 30, name: "环保税费" },
        ],
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
  height: 240px;
}
</style>
