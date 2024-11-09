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
      color: "#ffffffb3",
      fontSize: 14,
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "sankey",
        layout: "none",
        // orient: "vertical",
        right: "5%",
        emphasis: {
          focus: "adjacency",
        },
        data: [
          //
          {
            name: "能源消耗",
            itemStyle: {
              color: "#999",
            },
          },
          {
            name: "余吾矿110KV变电站",
            itemStyle: {
              color: "rgba(64,105,157,255)",
              borderColor: "rgba(64,105,157,255)",
            },
          },
          {
            name: "南风井35KV变电站",
            itemStyle: {
              color: "#AA1249",
              borderColor: "#AA1249",
            },
          },
          { name: "主井下变电所", depth: 2 },
          { name: "主瓦斯泵站", depth: 2 },
          { name: "主通风机房", depth: 2 },
          //主提升
          {
            name: "主提升",
            depth: 2,
          },
          //副立井
          {
            name: "副立井",
            depth: 2,
          },
          //空压机房
          {
            name: "空压机房",
            depth: 2,
          },
          //洗煤厂
          {
            name: "洗煤厂",
            depth: 2,
          },
          //污水处理站
          {
            name: "污水处理站",
            depth: 2,
          },
          //办公用电
          {
            name: "办公用电",
            depth: 2,
          },
          //生活用电
          {
            name: "生活用电",
            depth: 2,
          },
          //机修厂
          {
            name: "机修厂",
            depth: 2,
          },
          //地面辅助
          {
            name: "地面辅助",
            depth: 2,
          },
          { name: "北风井35KV变电站" },
          { name: "南风井井下变电所" },
          { name: "南风井瓦斯泵站" },
          { name: "南风井主通风机房" },
          //南风井主提升
          {
            name: "南风井主提升",
          },
          //南风井污水处理站
          {
            name: "南风井污水处理站",
          },
          //南风井办公用电
          {
            name: "南风井办公用电",
          },
          //南风井地面辅助
          {
            name: "南风井地面辅助",
          },
          { name: "北风井井下变电所" },
          { name: "北风井瓦斯泵站" },
          { name: "北风井主通风机房" },
          //北风井主提升
          {
            name: "北风井主提升",
          },
          //北风井污水处理站
          {
            name: "北风井污水处理站",
          },
          //北风井办公用电
          {
            name: "北风井办公用电",
          },
          //北风井地面辅助
          {
            name: "北风井地面辅助",
          },
        ],
        links: [
          { source: "能源消耗", target: "余吾矿110KV变电站", value: 1390 },
          { source: "余吾矿110KV变电站", target: "南风井35KV变电站", value: 110 },
          { source: "余吾矿110KV变电站", target: "主井下变电所", value: 100 },
          { source: "余吾矿110KV变电站", target: "主瓦斯泵站", value: 100 },
          { source: "余吾矿110KV变电站", target: "主通风机房", value: 100 },
          { source: "余吾矿110KV变电站", target: "主提升", value: 100 },
          { source: "余吾矿110KV变电站", target: "副立井", value: 100 },
          { source: "余吾矿110KV变电站", target: "空压机房", value: 100 },
          { source: "余吾矿110KV变电站", target: "洗煤厂", value: 100 },
          { source: "余吾矿110KV变电站", target: "污水处理站", value: 100 },
          { source: "余吾矿110KV变电站", target: "办公用电", value: 100 },
          { source: "余吾矿110KV变电站", target: "生活用电", value: 100 },
          { source: "余吾矿110KV变电站", target: "机修厂", value: 100 },
          { source: "余吾矿110KV变电站", target: "地面辅助", value: 100 },
          { source: "余吾矿110KV变电站", target: "北风井35KV变电站", value: 80 },

          { source: "南风井35KV变电站", target: "南风井井下变电所", value: 100 },
          { source: "南风井35KV变电站", target: "南风井瓦斯泵站", value: 100 },
          { source: "南风井35KV变电站", target: "南风井主通风机房", value: 40 },
          { source: "南风井35KV变电站", target: "南风井主提升", value: 100 },
          { source: "南风井35KV变电站", target: "南风井污水处理站", value: 100 },
          { source: "南风井35KV变电站", target: "南风井办公用电", value: 100 },
          { source: "南风井35KV变电站", target: "南风井地面辅助", value: 100 },
          { source: "北风井35KV变电站", target: "北风井井下变电所", value: 100 },
          { source: "北风井35KV变电站", target: "北风井瓦斯泵站", value: 20 },
          { source: "北风井35KV变电站", target: "北风井主通风机房", value: 30 },
          { source: "北风井35KV变电站", target: "北风井主提升", value: 100 },
          { source: "北风井35KV变电站", target: "北风井污水处理站", value: 100 },
          { source: "北风井35KV变电站", target: "北风井办公用电", value: 100 },
          { source: "北风井35KV变电站", target: "北风井地面辅助", value: 100 },
        ],
        lineStyle: {
          color: "gradient",
          curveness: 0.7,
          opacity: 1,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: "#aaa",
        },

        label: {
          color: "#ffffffb3",
          position: "top",
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
