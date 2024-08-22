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
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        "中央区地面瓦斯泵站",
        "南风井地面瓦斯泵站",
        "北风井地面瓦斯泵站",
        "北风井东翼临时瓦斯泵站",
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "中央区地面瓦斯泵站",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "南风井地面瓦斯泵站",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "北风井地面瓦斯泵站",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "北风井东翼临时瓦斯泵站",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
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
