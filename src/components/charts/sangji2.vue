<template>
  <div ref="echartsRef" class="echarts"></div>
  <div v-if="showDetail" class="detail-box">
    <div class="detail-title">
      <div class="tab-title" @click="changeTab(0)" :class="{ active: tab === 0 }">
        中央区
      </div>
      <div class="tab-title" @click="changeTab(1)" :class="{ active: tab === 1 }">
        北风井
      </div>
      <div class="tab-title" @click="changeTab(2)" :class="{ active: tab === 2 }">
        南风井
      </div>
    </div>
    <div class="detail-content">
      <div v-if="tab === 0">
        <div class="detail-item">
          <div class="device-list">
            <div class="device">
              <div class="device-title">中央区瓦斯发电站</div>
              <div class="device-content">
                <img src="../../assets/img/device/中央区瓦斯发电站.jpg" alt="" />
                <p style="color: #00ffffdd; margin-top: 1rem">
                  中央区二期瓦斯发电站共建设有10台600GJZ1-1PWW-TEM2型600KW发电机组，于2014年3月投运。中央区瓦斯发电站总装机容量为6000KW。2023年月均发电量为140万kWh，所产生的电量全部由企业内部自行消化。
                </p>
              </div>
            </div>
            <div class="device">
              <div class="device-title">中央区瓦斯泵站</div>
              <div class="device-content">
                <img src="../../assets/img/device/中央区瓦斯泵站.jpg" alt="" />
                <p style="color: #00ffffdd; margin-top: 1rem">
                  中央区地面瓦斯抽采泵站安装5台型号为2BEC72的水环式真空泵，额定瓦斯抽采量为450m3/min，额定功率为560kw。现运行系统为高负压抽采系统，抽采总量2766万m3，纯量52.6m3/min，抽采浓度14%。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tab === 1">
        <div class="detail-item">
          <div class="device-list">
            <div class="device">
              <div class="device-title">北风井瓦斯发电站</div>
              <div class="device-content">
                <img src="../../assets/img/device/北风井瓦斯发电站.jpg" alt="" />
                <p style="color: #00ffffdd; margin-top: 1rem">
                  北风井瓦斯发电站共建设有10台600GFZ1-PWWD-TEM2型600KW发电机组，于2016年初建成投运，北风井瓦斯发电站总装机容量为6000KW。2023年月均发电量为140万kWh，所产生的电量全部由企业内部自行消化。
                </p>
              </div>
            </div>
            <div class="device">
              <div class="device-title">北风井瓦斯泵站</div>
              <div class="device-content">
                <img src="../../assets/img/device/北风井瓦斯泵站.jpg" alt="" />
                <p style="color: #00ffffdd; margin-top: 1rem">
                  北风井地面瓦斯抽采泵站安装6台型号为2BEC80的水环式真空泵，额定瓦斯抽采量为628m3/min，额定功率为800kw。现运行系统为高、低负压抽采系统。高负压抽采系统抽采纯量44.5m3/min，抽采浓度13.6%；低负压抽采系统抽采纯量24.7m3/min，抽采浓度4%。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tab === 2">
        <div class="detail-item"></div>
      </div>
      <div v-if="tab === 3">
        <div class="detail-item"></div>
      </div>
    </div>
  </div>
  <div class="mask" @click="showDetail = false" v-if="showDetail"></div>
</template>

<script setup name="waterChart">
import { ref, onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
import * as echarts from "echarts";

const echartsRef = ref();
const myChart = ref();
const showDetail = ref(false);
const option = ref();
const tab = ref(0);
function changeTab(index) {
  showDetail.value = true;
  tab.value = index;
}
function setTitle(params, type) {
  if (type == "1" || type == "3") {
    option.value.title.text =
      params.data.target +
      ":直接排放" +
      params.data.value +
      "tCO₂,占直接排放总量" +
      (params.data.value / 81462).toFixed(4) * 100 +
      "%";
  } else if (type == "2" || type == "4") {
    option.value.title.text =
      params.data.target +
      ":间接排放" +
      params.data.value +
      "tCO₂,占间接排放总量" +
      (params.data.value / 128513).toFixed(4) * 100 +
      "%";
  }
  useEcharts(myChart.value, option.value);
}
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
      containLabel: true,
    },
    series: {
      type: "sankey",
      // layout: "none",

      emphasis: {
        focus: "self",
      },
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
        {
          name: "直接排放",
          label: {
            formatter: function (params) {
              return params.name + " 40%";
            },
          },
        },
        {
          name: "间接排放",
          label: {
            formatter: function (params) {
              return params.name + " 60%";
            },
          },
        },
        { name: "柴油燃烧排放" },
        { name: "汽油燃烧排放" },
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
        { name: "北风井供热" },
        { name: "南风井供热" },
        { name: "中央工业广场供热" },
        { name: "瓦斯抽采利用(106164tCO₂)" },
        { name: "瓦斯风排(588490tCO₂)" },
        { name: "地面食堂" },
        { name: "工业其他使用" },
        { name: "公司小车队" },
      ],
      links: [
        { source: "直接排放", target: "柴油燃烧排放", value: 4000 },
        { source: "直接排放", target: "汽油燃烧排放", value: 2000 },
        { source: "直接排放", target: "天然气燃烧排放", value: 2462 },

        { source: "天然气燃烧排放", target: "气态天然气燃烧排放", value: 2462 },

        { source: "直接排放", target: "甲烷抽采逃逸排放", value: 70000 }, //694654
        { source: "直接排放", target: "二氧化碳排放", value: 3000 },
        { source: "二氧化碳排放", target: "二氧化碳逃逸排放", value: 3000 },

        { source: "间接排放", target: "购入电力排放", value: 98513 },
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

        { source: "间接排放", target: "购入热力排放", value: 30000 },
        { source: "购入热力排放", target: "北风井供热", value: 10000 },
        { source: "购入热力排放", target: "南风井供热", value: 10000 },
        { source: "购入热力排放", target: "中央工业广场供热", value: 10000 },
        { source: "甲烷抽采逃逸排放", target: "瓦斯抽采利用(106164tCO₂)", value: 35000 },
        { source: "甲烷抽采逃逸排放", target: "瓦斯风排(588490tCO₂)", value: 35000 },
        { source: "柴油燃烧排放", target: "地面食堂", value: 2000 },
        { source: "柴油燃烧排放", target: "工业其他使用", value: 2000 },
        { source: "汽油燃烧排放", target: "公司小车队", value: 2000 },
      ],
    },
  };
  let nameList = [];
  myChart.value.on("mouseover", function (params) {
    console.log(params);
    nameList.push(params.name);
    //是否是来自直接排放
    if (params.data.source == "直接排放") {
      setTitle(params, "1");
      nameList.push(params.data.source);
      nameList.push(params.data.target);
      option.value.series.links.forEach((item, index) => {
        if (item.source == params.data.target) {
          nameList.push(item.target);
          nameList.push(item.source + " > " + item.target);
        }
      });
    } else if (params.data.source == "间接排放") {
      setTitle(params, "2");
      nameList.push(params.data.source);
      nameList.push(params.data.target);
      option.value.series.links.forEach((item, index) => {
        if (item.source == params.data.target) {
          nameList.push(item.target);
          nameList.push(item.source + " > " + item.target);
        }
      });
    } else if (
      params.data.source == "柴油燃烧排放" ||
      params.data.source == "汽油燃烧排放" ||
      params.data.source == "天然气燃烧排放" ||
      params.data.source == "甲烷抽采逃逸排放" ||
      params.data.source == "二氧化碳排放"
    ) {
      setTitle(params, "3");
      nameList.push(params.data.source);
      nameList.push(params.data.target);
      nameList.push("直接排放 > " + params.data.source);
      nameList.push("直接排放");
    } else if (
      params.data.source == "购入电力排放" ||
      params.data.source == "购入热力排放"
    ) {
      setTitle(params, "4");
      nameList.push(params.data.source);
      nameList.push(params.data.target);
      nameList.push("间接排放 > " + params.data.source);
      nameList.push("间接排放");
    }
    console.log(nameList);
    //高亮整条路径
    myChart.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      name: nameList,
    });
  });
  myChart.value.on("mouseout", function (params) {
    console.log(params);
    myChart.value.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      name: nameList,
    });
    nameList = [];
  });
  myChart.value.on("click", function (params) {
    if (params.name == "瓦斯抽采系统") {
      showDetail.value = true;
    }
  });
  // myChart.on("click", function (params) {
  //   console.log(params);
  // });
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
