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
      color: "#ffffffb3",
      fontSize: 14,
    },
    tooltip: {
      trigger: "item",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "5%",
      top: "5%",
      containLabel: true,
    },
    legend: {
      type: "scroll",
      bottom: 0,
      textStyle: {
        color: "#ffffffb3",
        fontSize: 14,
      },
      data: (function () {
        var list = [];
        for (var i = 1; i <= 10; i++) {
          list.push(i + 2020 + "");
        }
        return list;
      })(),
    },
    visualMap: {
      show: false,
      top: "middle",
      right: 10,
      color: ["red", "yellow"],
      calculable: true,
    },
    radar: {
      indicator: [
        { text: "电力", max: 400 },
        { text: "汽油", max: 400 },
        { text: "柴油", max: 400 },
        { text: "热力", max: 400 },
        { text: "天然气", max: 400 },
        { text: "洗煤加工转换", max: 400 },
      ],
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 20; i++) {
        series.push({
          type: "radar",
          symbol: "none",
          lineStyle: {
            width: 1,
          },
          emphasis: {
            areaStyle: {
              color: "rgba(0,250,0,0.3)",
            },
          },
          data: [
            {
              value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
              name: i + 2020 + "",
            },
          ],
        });
      }
      return series;
    })(),
  };

  useEcharts(myChart, option);
});
</script>

<style scoped>
.echarts {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 340px;
}
</style>
