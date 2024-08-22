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
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    // legend: {
    //   bottom: "0",
    //   left: "center",
    //   textStyle: {
    //     color: "#baeaf0",
    //   },
    // },
    series: [
      {
        name: "排污企业类型",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "工业企业" },
          { value: 735, name: "污水处理厂" },
          { value: 580, name: "固废处置厂" },
          { value: 484, name: "畜禽养殖场" },
          { value: 300, name: "其他企业" },
        ],
        label: {
          fontSize: 10,
          color: "#baeaf0",
          textBorderWidth: 0,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
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
  height: 240px;
}
</style>
