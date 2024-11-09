<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
const myChart = ref();
const option = ref();

onMounted(() => {
  myChart.value = echarts.init(echartsRef.value);
  // let value = 0.5;
  // let data = [value, value, value];
  option.value = {
    title: {
      text: "",
      // subtext: "三角图",
      bottom: "0",
      left: "4%",
      textStyle: {
        color: "#ffffff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      top: "18%",
      containLabel: true,
    },
    series: {
      type: "sankey",
      top: "top",
      // emphasis: {
      //   focus: "self",
      // },
      blur: {
        itemStyle: {
          opacity: 0.5,
        },
        lineStyle: {
          opacity: 0.4,
        },
      },
      lineStyle: {
        color: "source",
        curveness: 0.5,
      },
      label: {
        color: "#ffffff",
      },
      data: [
        // 节能降碳
        // 变频改造
        // 加强矿井盘区统筹调度，提升生产效率
        // 精准计量
        // 零碳矿山协同管理平台
        // 淘汰落后低效电机
        // 移动变压器无功补偿
        // 永磁电机
        // 智能控制无人值守
        // 零碳供能
        // 分布式光伏发电项目
        // 购买绿电
        // 矿用车辆电动化
        // 余热利用
        // 瓦斯利用
        // 开发CCER
        // 提升瓦斯利用效率
        // 生态碳汇
        // 立体空间碳汇
        // 提升矿区生态碳汇
        {
          name: "碳中和",
          itemStyle: {
            color: "#00ffff",
          },
        },
        {
          name: "节能降碳",
        },
        {
          name: "零碳供能",
        },
        {
          name: "瓦斯利用",
        },
        {
          name: "生态碳汇",
        },
        {
          name: "变频改造",
        },
        {
          name: "加强矿井盘区统筹调度，提升生产效率",
        },
        {
          name: "精准计量",
        },
        {
          name: "零碳矿山协同管理平台",
        },
        {
          name: "淘汰落后低效电机",
        },
        {
          name: "移动变压器无功补偿",
        },
        {
          name: "永磁电机",
        },
        {
          name: "智能控制无人值守",
        },
        {
          name: "分布式光伏发电项目",
        },
        {
          name: "购买绿电",
        },
        {
          name: "矿用车辆电动化",
        },
        {
          name: "余热利用",
        },
        {
          name: "开发CCER",
        },
        {
          name: "提升瓦斯利用效率",
        },
        {
          name: "立体空间碳汇",
        },
        {
          name: "提升矿区生态碳汇",
        },
      ],
      links: [
        {
          source: "碳中和",
          target: "节能降碳",
          value: 47393,
        },
        {
          source: "碳中和",
          target: "零碳供能",
          value: 84908,
        },
        {
          source: "碳中和",
          target: "瓦斯利用",
          value: 30000,
        },
        {
          source: "碳中和",
          target: "生态碳汇",
          value: 0,
        },
        {
          source: "节能降碳",
          target: "变频改造",
          value: 7899,
        },
        {
          source: "节能降碳",
          target: "加强矿井盘区统筹调度，提升生产效率",
          value: 7899,
        },
        {
          source: "节能降碳",
          target: "精准计量",
          value: 7899,
        },
        {
          source: "节能降碳",
          target: "零碳矿山协同管理平台",
          value: 0,
        },
        {
          source: "节能降碳",
          target: "淘汰落后低效电机",
          value: 4739,
        },
        {
          source: "节能降碳",
          target: "移动变压器无功补偿",
          value: 7899,
        },
        {
          source: "节能降碳",
          target: "永磁电机",
          value: 7899,
        },
        {
          source: "节能降碳",
          target: "智能控制无人值守",
          value: 3159,
        },
        {
          source: "零碳供能",
          target: "分布式光伏发电项目",
          value: 11406,
        },
        {
          source: "零碳供能",
          target: "购买绿电",
          value: 11406,
        },
        {
          source: "零碳供能",
          target: "矿用车辆电动化",
          value: 1596,
        },
        {
          source: "零碳供能",
          target: "余热利用",
          value: 60500,
        },
        {
          source: "瓦斯利用",
          target: "开发CCER",
          value: 30000,
        },
        {
          source: "瓦斯利用",
          target: "提升瓦斯利用效率",
          value: 0,
        },
        {
          source: "生态碳汇",
          target: "立体空间碳汇",
          value: 0,
        },
        {
          source: "生态碳汇",
          target: "提升矿区生态碳汇",
          value: 0,
        },
      ],
    },
  };
  useEcharts(myChart.value, option.value);
});
</script>
<style scoped>
.echarts {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.device-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.device {
  width: 48%;
  margin-bottom: 1rem;
  background-color: #00000054;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.device-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #00ffff;
}
.device-content img {
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
}
</style>
