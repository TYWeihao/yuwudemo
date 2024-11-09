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
      data: ["废水排放口1#", "生活污水入河排放口2#	"],
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
      data: ["氨氮（NH3-N）", "总磷（以P计）", "五日生化需氧量", "氨氮（NH3-N）"],
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
        name: "废水排放口1#",
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
        data: [2.9, 1.049, 1.317, 6.302],
      },
      {
        name: "生活污水入河排放口2#	",
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
        data: [3.1, 1.215, 1.341, 6.818],
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
