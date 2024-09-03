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
    title: {
      text: "矿井二氧化碳流向分析",
      // subtext: "数据来自余吾矿",
      left: "left",
      textStyle: {
        color: "#ffffffb3",
      },
    },
    series: {
      type: "sankey",
      layout: "none",
      emphasis: {
        focus: "adjacency",
      },

      lineStyle: {
        color: "source",
        curveness: 0.5,
      },

      data: [
        { name: "直接排放" },
        { name: "间接排放" },
        { name: "柴油燃烧排放" },
        { name: "汽油燃烧排放" },
        { name: "煤油排放" },
        { name: "天然气燃烧排放" },

        { name: "气态天然气燃烧排放" },
        { name: "甲烷抽采逃逸排放" },
        { name: "二氧化碳逃逸排放" },
        { name: "二氧化碳排放" },
        { name: "购入电力排放" },
        { name: "购入热力排放" },
        { name: "采掘生产部署系统" },
        { name: "运输系统" },
        { name: "通风系统" },
        { name: "机电（供电）系统" },
        { name: "排水系统" },
        { name: "压风系统" },
        { name: "监测监控系统" },
        { name: "通讯系统" },
        { name: "办公及生活系统" },
        { name: "瓦斯抽采系统" },
        { name: "北风井" },
        { name: "南风井" },
        { name: "中央工业广场" },
        { name: "瓦斯抽采利用(106164tCO₂)" },
        { name: "瓦斯风排(588490tCO₂)" },
        { name: "地面食堂" },
        { name: "厂内运输车辆" },
        { name: "工业其他使用" },
        { name: "公司小车队" },
        { name: "清洗机械设备" },
      ],
      links: [
        { source: "直接排放", target: "柴油燃烧排放", value: 1202 },
        { source: "直接排放", target: "汽油燃烧排放", value: 53 },
        { source: "直接排放", target: "煤油排放", value: 2000 },
        { source: "直接排放", target: "天然气燃烧排放", value: 2462 },

        { source: "天然气燃烧排放", target: "气态天然气燃烧排放", value: 2462 },
        { source: "直接排放", target: "天然气燃烧排放", value: 2462 },

        { source: "直接排放", target: "甲烷抽采逃逸排放", value: 694654 },
        { source: "直接排放", target: "二氧化碳排放", value: 2000 },
        { source: "二氧化碳排放", target: "二氧化碳逃逸排放", value: 2000 },

        { source: "间接排放", target: "购入电力排放", value: 96510 },
        { source: "购入电力排放", target: "采掘生产部署系统", value: 23823 },
        { source: "购入电力排放", target: "运输系统", value: 16373 },
        { source: "购入电力排放", target: "通风系统", value: 18596 },
        { source: "购入电力排放", target: "机电（供电）系统", value: 5000 },
        { source: "购入电力排放", target: "排水系统", value: 2922 },
        { source: "购入电力排放", target: "压风系统", value: 7862 },
        { source: "购入电力排放", target: "监测监控系统", value: 5000 },
        { source: "购入电力排放", target: "通讯系统", value: 5000 },
        { source: "购入电力排放", target: "办公及生活系统", value: 8942 },
        { source: "购入电力排放", target: "瓦斯抽采系统", value: 4995 },

        { source: "间接排放", target: "购入热力排放", value: 31658 },
        { source: "购入热力排放", target: "北风井", value: 10000 },
        { source: "购入热力排放", target: "南风井", value: 10000 },
        { source: "购入热力排放", target: "中央工业广场", value: 10000 },
        { source: "甲烷抽采逃逸排放", target: "瓦斯抽采利用(106164tCO₂)", value: 106164 },
        { source: "甲烷抽采逃逸排放", target: "瓦斯风排(588490tCO₂)", value: 588490 },
        { source: "柴油燃烧排放", target: "地面食堂", value: 400 },
        { source: "柴油燃烧排放", target: "厂内运输车辆", value: 400 },
        { source: "柴油燃烧排放", target: "工业其他使用", value: 400 },
        { source: "汽油燃烧排放", target: "公司小车队", value: 5 },
        { source: "煤油排放", target: "清洗机械设备", value: 5 },
        { source: "煤油排放", target: "工业其他使用", value: 5 },
      ],
    },
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
