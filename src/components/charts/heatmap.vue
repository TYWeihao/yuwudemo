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
  function getVirtualData(year, month) {
    const date = +echarts.time.parse(year + "-08-01");
    const end = +echarts.time.parse(+year + "-09-01");
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, "{yyyy}-{MM}-{dd}", false),
        Math.floor(Math.random() * 1000),
      ]);
    }
    return data;
  }
  let option = {
    tooltip: {
      position: "top",
      formatter: function (p) {
        const format = echarts.time.format(p.data[0], "{yyyy}-{MM}-{dd}", false);
        return format + ": " + p.data[1];
      },
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      // calculable: true,
      // orient: "vertical",
      // top: "center",
    },
    calendar: [
      {
        orient: "vertical",
        range: ["2024-08", "2024-09"],
        width: "80%",
        height: "80%",
        top: "10%",
        left: "10%",
        yearLabel: { show: false },
      },
    ],
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        calendarIndex: 0,
        data: getVirtualData("2024", "8"),
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
