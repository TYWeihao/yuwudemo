<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";
import moment from "moment";
const echartsRef = ref();
onMounted(() => {
  let myChart = echarts.init(echartsRef.value);
  // let value = 0.5;
  // let data = [value, value, value];
  let option = {
    title: {
      // text: "Accumulated Waterfall Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params) {
        let startMonth = moment("2023-01-01")
          .add(params[0].value, "months")
          .format("YYYY年MM月");
        let endMonth = moment("2023-01-01")
          .add(params[0].value + params[1].value + params[2].value, "months")
          .format("YYYY年MM月");
        return `${params[0].name}<br />${startMonth} - ${endMonth}`;
      },
    },
    legend: {
      data: ["已完成", "未完成"],
    },
    grid: {
      top: "5%",
      left: "6%",
      right: "6%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "category",
      data: [
        "优化综采工作面皮带启动工艺",
        "优化综采工作面前后溜启动工艺",
        "更换中央区压风机",
        "南风井空压机节能改造",
        "生产活动采用新能源车(一期)",
        "生产活动采用新能源车(二期)",
        "北风井瓦斯抽采泵节能技术改造",
        "中央区、南风井瓦斯抽采泵节能技术改造",
        "中央区瓦斯发电站项目",
        "北风井乏风及低浓度瓦斯氧化发电项目",
        "建设矿井电量分析系统",
        "智能化矿井建设",
        "碳排放或能源运行管理数字化平台",
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
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      max: 35,
      axisLabel: {
        formatter: (value) => {
          //以2023年1月为0点 每1个月为1单位
          return moment("2023-01-01").add(value, "months").format("YYYY-MM");
        },
      },
    },
    series: [
      {
        name: "Placeholder",
        type: "bar",
        stack: "Total",
        silent: true,
        itemStyle: {
          borderColor: "transparent",
          color: "transparent",
        },
        emphasis: {
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
        },
        data: [11, 11, 15, 23, 0, 16, 4, 23, 4, 3, 4, 4, 11],
      },
      {
        name: "Income",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "bottom",
          textStyle: {
            color: "#6da4c5",
          },
          formatter: function (params) {
            return params.name;
          },
        },
        itemStyle: {
          color: "#6be6c1",
          borderRadius: [5, 0, 0, 0],
        },
        barWidth: 10,
        markLine: {
          symbol: "none",
          label: {
            // show: false,
            textStyle: {
              color: "#9ff",
            },
            formatter: (params) => {
              return params.value == 19
                ? "本月"
                : moment("2023-01-01").add(params.value, "months").format("YYYY-MM");
            },
          },
          lineStyle: {
            color: "#6da4c5",
          },
          data: [
            {
              name: "Target",
              xAxis: 19,
              lineStyle: {
                color: "#9ff",
              },
            },
            {
              name: "Target",
              xAxis: 0,
            },
            {
              name: "Target",
              xAxis: 11,
            },
            {
              name: "Target",
              xAxis: 23,
            },
            {
              name: "Target",
              xAxis: 35,
            },
          ],
        },
        data: [8, 8, 3, 0, 12, 2, 15, 0, 15, 16, 15, 15, 8],
      },
      {
        name: "Expenses",
        type: "bar",
        stack: "Total",
        label: {
          show: false,
          position: "bottom",
        },
        itemStyle: {
          color: "#2f4554",
          borderRadius: [0, 5, 0, 0],
        },
        barWidth: 10,
        data: [4, 4, 5, 12, 0, 11, 4, 12, 4, 2, 4, 4, 4],
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
