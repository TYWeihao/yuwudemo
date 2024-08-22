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
      fontSize: 14,
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        data: [
          { name: "原煤" },
          { name: "电力" },
          { name: "柴油" },
          { name: "矿井生产" },
          { name: "洗煤厂" },
          { name: "煤炭产品" },
          { name: "废弃物" },
          { name: "热力" },
          { name: "天然气" },
        ],
        links: [
          { source: "原煤", target: "矿井生产", value: 5000 },
          { source: "电力", target: "矿井生产", value: 1000 },
          { source: "柴油", target: "矿井生产", value: 500 },
          { source: "矿井生产", target: "洗煤厂", value: 5500 },
          { source: "洗煤厂", target: "煤炭产品", value: 4000 },
          { source: "洗煤厂", target: "废弃物", value: 1500 },
          { source: "电力", target: "洗煤厂", value: 800 },
          { source: "热力", target: "洗煤厂", value: 300 },
          { source: "天然气", target: "矿井生产", value: 200 },
        ],
        lineStyle: {
          color: "gradient",
          curveness: 0.8,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: "#aaa",
        },

        label: {
          color: "#fff",
        },
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
