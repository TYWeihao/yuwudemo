<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
const obj = {
  color: [
    "rgba(208,100,138,0.68)",
    "rgba(245,141,178,0.66)",
    "rgba(242,179,201,0.67)",
    "rgba(78,163,151,0.67)",
    "rgba(34,195,170,0.64)",
    "rgba(123,217,165,0.63)",
  ],
  backgroundColor: "rgba(255,255,255,0)",
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
      color: "#d0648a",
      color0: "transparent",
      borderColor: "#d0648a",
      borderColor0: "#22c3aa",
      borderWidth: "1",
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
    color: [
      "rgba(78,163,151,0.67)",
      "rgba(34,195,170,0.64)",
      "rgba(123,217,165,0.63)",
      "rgba(208,100,138,0.68)",
      "rgba(245,141,178,0.66)",
      "rgba(242,179,201,0.67)",
    ],
    label: {
      color: "#ffffffb3fffb3",
    },
  },
  map: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#999999",
      borderWidth: 0.5,
    },
    label: {
      color: "#28544e",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(34,195,170,0.25)",
        borderColor: "#22c3aa",
        borderWidth: 1,
      },
      label: {
        color: "#349e8e",
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: "#eeeeee",
      borderColor: "#999999",
      borderWidth: 0.5,
    },
    label: {
      color: "#28544e",
    },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(34,195,170,0.25)",
        borderColor: "#22c3aa",
        borderWidth: 1,
      },
      label: {
        color: "#349e8e",
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
      color: "#4ea397",
      width: 1,
    },
    itemStyle: {
      color: "#4ea397",
      borderWidth: 1,
    },
    controlStyle: {
      color: "#4ea397",
      borderColor: "#4ea397",
      borderWidth: 0.5,
    },
    checkpointStyle: {
      color: "#4ea397",
      borderColor: "#3cebd2",
    },
    label: {
      color: "#4ea397",
    },
    emphasis: {
      itemStyle: {
        color: "#4ea397",
      },
      controlStyle: {
        color: "#4ea397",
        borderColor: "#4ea397",
        borderWidth: 0.5,
      },
      label: {
        color: "#4ea397",
      },
    },
  },
  visualMap: {
    color: ["#d0648a", "#22c3aa", "#adfff1"],
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

echarts.registerTheme("walden3", obj);
onMounted(() => {
  let myChart = echarts.init(echartsRef.value, "walden3");
  // let value = 0.5;
  // let data = [value, value, value];
  let option = {
    title: {
      // text: "月度能源消耗情况",
      textStyle: {
        color: "#ffffffb3",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: "bottom",
      textStyle: {
        color: "#ffffffb3",
      },
    },
    grid: {
      left: "1%",
      right: "0%",
      bottom: "13%",
      top: "2%",
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
    },
    yAxis: {
      type: "category",
      data: [
        "瓦斯抽采系统",
        "办公及生活系统",
        "通讯系统",
        "监测监控系统",
        "压风系统",
        "排水系统",
        "机电（供电）系统",
        "通风系统",
        "运输系统",
        "采掘生产部署系统",
      ],
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
        name: "柴油",
        type: "bar",
        stack: "total",
        // label: {
        //   show: true,
        //   fontSize: 10,
        //   color: "#ffffffb3",
        //   fontFamily: "YousheBiaotiHei", // 使用指定字体
        // },
        label: {
          show: true,
          position: [0, "130%"],
          textStyle: {
            color: "#9ff",
          },
          formatter: function (params) {
            return params.name;
          },
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 102, 101, 134, 190, 130, 120, 334, 390, 330],
      },
      {
        name: "汽油",
        type: "bar",
        stack: "total",
        // label: {
        //   show: true,
        //   fontSize: 10,
        //   color: "#ffffffb3",
        //   fontFamily: "YousheBiaotiHei", // 使用指定字体
        // },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210, 134, 90, 230],
      },
      {
        name: "天然气",
        type: "bar",
        stack: "total",
        // label: {
        //   show: true,
        //   fontSize: 10,
        //   color: "#ffffffb3",
        //   fontFamily: "YousheBiaotiHei", // 使用指定字体
        // },
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 190, 130, 110, 234, 290, 330],
      },
      {
        name: "热力",
        type: "bar",
        stack: "total",
        // label: {
        //   show: true,
        //   fontSize: 10,
        //   color: "#ffffffb3",
        //   fontFamily: "YousheBiaotiHei", // 使用指定字体
        // },
        emphasis: {
          focus: "series",
        },
        data: [150, 212, 201, 154, 190, 330, 410, 154, 190, 330],
      },
      {
        name: "电力",
        type: "bar",
        stack: "total",
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
          borderRadius: [0, 5, 5, 0],
        },
        barWidth: 15,
        data: [820, 832, 901, 934, 1090, 1030, 1020, 934, 1290, 1230],
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
