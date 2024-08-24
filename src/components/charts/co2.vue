<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
const obj = {
  color: ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"],
  backgroundColor: "rgba(252,252,252,0)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#666666",
    },
    subtextStyle: {
      color: "#999999",
    },
  },
  line: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "8",
    symbol: "emptyCircle",
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: "2",
    },
    lineStyle: {
      width: "3",
    },
    symbolSize: "8",
    symbol: "emptyCircle",
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: "#ccc",
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
  },
  candlestick: {
    itemStyle: {
      color: "#e6a0d2",
      color0: "transparent",
      borderColor: "#e6a0d2",
      borderColor0: "#3fb1e3",
      borderWidth: "2",
    },
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },
    lineStyle: {
      width: "1",
      color: "#cccccc",
    },
    symbolSize: "8",
    symbol: "emptyCircle",
    smooth: false,
    color: ["#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"],
    label: {
      color: "#ffffff",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffff",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(63,177,227,0.25)",
        borderColor: "#3fb1e3",
        borderWidth: 1,
      },
      label: {
        color: "#3fb1e3",
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#cccccc",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#333",
      },
    },
    axisLabel: {
      show: true,
      color: "#999999",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ["#eeeeee"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: "#999999",
    },
    emphasis: {
      iconStyle: {
        borderColor: "#666666",
      },
    },
  },
  legend: {
    textStyle: {
      color: "#999999",
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: "#cccccc",
        width: 1,
      },
      crossStyle: {
        color: "#cccccc",
        width: 1,
      },
    },
  },
  timeline: {
    lineStyle: {
      color: "#626c91",
      width: 1,
    },
    itemStyle: {
      color: "#626c91",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#626c91",
      borderColor: "#626c91",
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: "#3fb1e3",
      borderColor: "#3fb1e3",
    },
    label: {
      color: "#626c91",
    },
    emphasis: {
      itemStyle: {
        color: "#626c91",
      },
      controlStyle: {
        color: "#626c91",
        borderColor: "#626c91",
        borderWidth: 0.5,
      },
      label: {
        color: "#626c91",
      },
    },
  },
  visualMap: {
    color: ["#2a99c9", "#afe8ff"],
  },
  dataZoom: {
    backgroundColor: "rgba(255,255,255,0)",
    dataBackgroundColor: "rgba(222,222,222,1)",
    fillerColor: "rgba(114,230,212,0.25)",
    handleColor: "#cccccc",
    handleSize: "100%",
    textStyle: {
      color: "#999999",
    },
  },
  markPoint: {
    label: {
      color: "#ffffff",
    },
    emphasis: {
      label: {
        color: "#ffffff",
      },
    },
  },
};
echarts.registerTheme("walden", obj);

onMounted(() => {
  let myChart = echarts.init(echartsRef.value, "walden");
  // let value = 0.5;
  // let data = [value, value, value];
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "5%",
      top: "5%",
      containLabel: true,
    },
    textStyle: {
      color: "#fff",
    },
    legend: {
      data: ["原煤产量", "吨原煤二氧化碳排放量", "吨原煤二氧化碳排放较2020年下降率"],
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
    },
    xAxis: [
      {
        type: "category",
        data: ["2020", "2021", "2022", "2023", "2024", "2025"],
        axisPointer: {
          type: "shadow",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 80,
        interval: 50,
        axisLabel: {
          formatter: "{value} 吨",
        },
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
      {
        type: "value",
        min: 0,
        max: 50,
        interval: 5,
        axisLabel: {
          formatter: "{value} %",
        },
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
    ],
    series: [
      {
        name: "原煤产量",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
        itemStyle: {
          borderRadius: 5,
        },
        barWidth: 10,
        data: [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72],
      },
      {
        name: "吨原煤二氧化碳排放量",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 吨";
          },
        },
        itemStyle: {
          borderRadius: 5,
        },
        barWidth: 10,
        data: [29.8, 26.5, 19.2, 18.9, 15.6, 13.3, 11.0, 6.7, 5.4, 4.1, 2.8, 1.5],
      },
      {
        name: "吨原煤二氧化碳排放较2020年下降率",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " %";
          },
        },
        data: [2.0, 3.5, 5.0, 7.2, 9.8, 12.5, 15.4, 18.6, 22.0, 25.7, 29.7, 34.0],
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
