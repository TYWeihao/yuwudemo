<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";
import { Font } from "three/examples/jsm/Addons.js";

const echartsRef = ref();
const obj = {
  color: ["#27b0e8", "#27e2f9", "#5394ef", "#246bd3", "#0b5abe", "#11318d"],
  backgroundColor: "rgba(252,252,252,0)",
  textStyle: {},
  title: {
    textStyle: {
      color: "#666666",
      fontFamily: "YousheBiaotiHei",
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
    color: ["#27e2f9", "#27b0e8", "#5394ef", "#246bd3", "#0b5abe", "#11318d"],
    label: {
      color: "#ffffffb3fffb3",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#aaaaaa",
      borderWidth: 0.5,
    },
    label: {
      color: "#ffffffb3fffb3",
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
      color: "#ffffffb3fffb3",
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
      color: "#ffffffb3fffb3",
    },
    emphasis: {
      label: {
        color: "#ffffffb3fffb3",
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
    // title: {
    //   text: "能碳项目建设分类",
    //   textStyle: {
    //     color: "#ffffffb3",
    //     fontSize: 14,
    //     fontFamily: "Segoe UI", // 使用指定字体
    //   },
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["项目数", "降碳成效"],
      textStyle: {
        color: "#ffffffb3",
      },
      right: 0,
    },
    grid: {
      left: "1%",
      right: "0%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: [
      {
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
      },
      {
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
      },
    ],
    yAxis: {
      type: "category",
      data: ["节能降耗减碳", "绿色供能低碳", "瓦斯利用减碳", "矿区增碳减汇"],
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: "#ffffffb3",
      },
    },
    series: [
      {
        name: "项目数",
        type: "bar",
        stack: "total",
        barWidth: 15,
        label: {
          show: true,
          fontSize: 10,
          color: "#ffffffb3",
          fontFamily: "YousheBiaotiHei", // 使用指定字体
        },
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          barBorderRadius: [0, 5, 5, 0],
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgba(77, 119, 255,.3)",
            },
          ]),
        },
        data: [3, 2, 5, 2],
      },
      {
        name: "降碳成效",
        type: "bar",
        barWidth: 15,
        xAxisIndex: 1,
        label: {
          show: true,
          fontSize: 8,
          color: "#ffffffb3",
          fontFamily: "YousheBiaotiHei", // 使用指定字体
        },
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          barBorderRadius: [0, 5, 5, 0],

          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#53e9f6",
            },
            {
              offset: 1,
              color: "#55f8b130",
            },
          ]),
        },
        data: [3154, 3789, 5924, 4219],
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
  height: 200px;
}
</style>
