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
        type: "cross",
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // prettier-ignore
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} W",
      },
      axisPointer: {
        snap: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: "green",
        },
        {
          gt: 6,
          lte: 8,
          color: "red",
        },
        {
          gt: 8,
          lte: 14,
          color: "green",
        },
        {
          gt: 14,
          lte: 17,
          color: "red",
        },
        {
          gt: 17,
          color: "green",
        },
      ],
    },
    series: [
      {
        name: "Electricity",
        type: "line",
        smooth: true,
        // prettier-ignore
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        markArea: {
          itemStyle: {
            color: "rgba(255, 173, 177, 0.4)",
          },
          data: [
            [
              {
                name: "超标",
                xAxis: "07:30",
              },
              {
                xAxis: "10:00",
              },
            ],
            [
              {
                name: "超标",
                xAxis: "17:30",
              },
              {
                xAxis: "21:15",
              },
            ],
          ],
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
