<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";
import "echarts-gl";
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
echarts.registerTheme("walden1", obj);
onMounted(() => {
  let myChart = echarts.init(echartsRef.value, "walden1");
  // let value = 0.5;
  // let data = [value, value, value];
  // prettier-ignore
  var days = ['汽油折标煤(tce)','柴油折标煤(tce)','天然气折标煤(tce)','热力折标煤(tce)','电力折标煤(tce)'];
  // prettier-ignore
  var hours = ['2020', '2021', '2022',
    '2023'];
  var color = ["#313695", "#4575b4", "#74add1", "#f46d43", "#d73027", "#a50026"];
  // prettier-ignore
  var data = [[0, 0, 67], [0, 1, 61], [0, 2, 60], [0, 3, 57], [1, 0, 954], [1, 1, 883], [1, 2,823], [1, 3, 776],[2, 0,2744], [2, 1, 1527], [2, 2, 1075], [2, 3, 778], [3, 0, 21453], [3, 1, 20154], [3, 2, 13764], [3, 3, 18502],  [4, 0, 36342], [4, 1, 35723], [4, 2, 38741], [4, 3, 41875],];
  let option = {
    tooltip: {},
    // visualMap: {
    //   show: false,
    //   max: 20,
    //   inRange: {
    //     color: [
    //       "#313695",
    //       "#4575b4",
    //       "#74add1",
    //       "#abd9e9",
    //       "#e0f3f8",
    //       "#ffffbf",
    //       "#fee090",
    //       "#fdae61",
    //       "#f46d43",
    //       "#d73027",
    //       "#a50026",
    //     ],
    //   },
    // },
    xAxis3D: {
      type: "category",
      data: hours,
    },
    yAxis3D: {
      type: "category",
      data: days,
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      boxWidth: 100,
      boxDepth: 100,
      viewControl: {
        // projection: 'orthographic'
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true,
        },
        ambient: {
          intensity: 0.3,
        },
      },
    },
    series: [
      {
        type: "bar3D",
        data: data.map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
            itemStyle: {
              color: color[item[0]],
            },
          };
        }),
        shading: "lambert",
        label: {
          fontSize: 16,
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
            color: "#900",
          },
          itemStyle: {
            color: "#900",
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
  height: 300px;
}
</style>
