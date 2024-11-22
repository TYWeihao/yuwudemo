<script setup>
import line4 from "@/components/charts/line4.vue";
import "@/assets/custom-font.css";
import { ref, computed } from "vue";
import Line6 from "../components/charts/line6.vue";
import qiyejianjie from "./HomeViewComponents/qiyejianjie.vue";
import zongliangzhibiao from "./HomeViewComponents/zongliangzhibiao.vue";
import tanpaifang from "./HomeViewComponents/tanpaifang.vue";
import nenghaoqushi from "./HomeViewComponents/nenghaoqushi.vue";
import wasiliyong from "./HomeViewComponents/wasiliyong.vue";
import moment from "moment";

const today = moment();
const endDay = moment([2030, 11, 31]);
const days = endDay.diff(today, "days");
const daysArray = days.toString().split("").map(Number);
const showDetail = ref(false);
const devicesMarker = ref(null);
const devicesChecked = ref(true);
const showingLayer = ref("中央工业广场");
const projectsChecked = ref(true);
const equipmentChecked = ref(true);
const showingDevice = ref(null);
devicesMarker.value = {
  中央工业广场: {
    项目: [
      {
        name: "中央区空压机余热利用",
        type: "绿色供能低碳",
        position: ["60%", "40%"],
      },
    ],
    设备: [
      {
        name: "1# 提升机",
        type: "提升机",
        position: ["49%", "40%"],
        brand: "SIEMAG",
        image: new URL("@/assets/img/tsj.png", import.meta.url).href,
        gl: "641",
        dl: "1240",
        dy: "550",
        description:
          "Φ4.5m 四绳落地式摩擦轮25吨双箕斗提升机，提升循环时间83秒。主电机为SIEMENS公司生产的1DM5640-6XT08型电机，额定功率：4000 KW，额定电压：2625V，额定电流：852A。2套提升机每天除检修停运约3小时外，其它时间均自动提升运行。",
      },
      {
        name: "2# 提升机",
        type: "提升机",
        position: ["50%", "45%"],
        brand: "SIEMAG",
        image: new URL("@/assets/img/tsj.png", import.meta.url).href,
        gl: "641",
        dl: "1240",
        dy: "550",
        description:
          "Φ4.5m 四绳落地式摩擦轮25吨双箕斗提升机，提升循环时间83秒。主电机为SIEMENS公司生产的1DM5640-6XT08型电机，额定功率：4000 KW，额定电压：2625V，额定电流：852A。2套提升机每天除检修停运约3小时外，其它时间均自动提升运行。",
      },
      {
        name: "瓦斯泵站",
        type: "瓦斯抽采",
        position: ["62%", "60%"],
        image: new URL("@/assets/img/wsbz.jpg", import.meta.url).href,
        description:
          "瓦斯抽采泵站，主要用于瓦斯抽采，保证井下瓦斯浓度在安全范围内。泵站主要设备有：瓦斯抽采泵、瓦斯抽采管路、瓦斯抽采控制系统等。瓦斯泵型号2BEC72-1BG3-YB4246，额定抽放量450m3/min，电机功率560KW/台，瓦斯抽采泵台数5台，现运行情况开2台。",
      },
      // {
      //   name: "瓦斯电厂",
      //   type: "电力设备",
      //   position: ["40%", "60%"],
      // },
    ],
    监测: [],
  },
  地下总采区: {
    项目: [
      // {
      //   name: "地下总采区项目1",
      //   type: "低碳零碳供能",
      //   position: ["30%", "60%"],
      // },
    ],
    设备: [
      //       南翼主皮带	DTL140/250/4*500	南翼胶带大巷	4	2000	7200	57600000
      // 北翼主皮带	DTL140/250/4*500	北翼胶带输送机	4	2000	7200	57600000
      // 西翼主皮带	DTL140/250/4*500	西翼胶带输送机	4	2000	7200	57600000
      // 东翼主皮带	DTL140/350/4*1000	东翼胶带输送机	4	4000	7200	115200000
      //       南翼二部皮带	DTL140/250/4*500	南翼胶带大巷2#皮带	4	2000	7200	57600000
      // 南二胶带下山皮带	DTL140/250/4*500	南二胶带下山皮带	4	2000	7200	57600000
      // 南一上山主皮带	DTL140/250/2*400	南一胶带上山1#皮带	2	800	7200	11520000
      // 南一上山120皮带	DTL140/250/2*400	南一胶带上山2#皮带	2	800	7200	11520000
      // 南三1#主皮带	DTL160/350/3*1000	南三胶带大巷1#皮带	4	4000	7200	115200000
      // 南三2#主皮带	DTL160/350/4*1000	南三胶带大巷2#皮带	4	1000	7200	28800000

      {
        name: "南翼主皮带",
        type: "输送机",
        position: ["60%", "43%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "北翼主皮带",
        type: "输送机",
        position: ["42%", "40%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "西翼主皮带",
        type: "输送机",
        position: ["40%", "50%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "东翼主皮带",
        type: "输送机",
        position: ["37%", "60%"],
        brand: "DTL140/350/4*1000",
        gl: "4000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "南翼二部皮带",
        type: "输送机",
        position: ["50%", "40%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "南一上山主皮带",
        type: "输送机",
        position: ["62%", "48%"],
        brand: "DTL140/250/2*400",
        gl: "800",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
    ],
    监测: [],
  },
  井下: {
    项目: [
      // {
      //   name: "地下总采区项目1",
      //   type: "低碳零碳供能",
      //   position: ["30%", "60%"],
      // },
    ],
    设备: [
      //       南翼主皮带	DTL140/250/4*500	南翼胶带大巷	4	2000	7200	57600000
      // 北翼主皮带	DTL140/250/4*500	北翼胶带输送机	4	2000	7200	57600000
      // 西翼主皮带	DTL140/250/4*500	西翼胶带输送机	4	2000	7200	57600000
      // 东翼主皮带	DTL140/350/4*1000	东翼胶带输送机	4	4000	7200	115200000
      //       南翼二部皮带	DTL140/250/4*500	南翼胶带大巷2#皮带	4	2000	7200	57600000
      // 南二胶带下山皮带	DTL140/250/4*500	南二胶带下山皮带	4	2000	7200	57600000
      // 南一上山主皮带	DTL140/250/2*400	南一胶带上山1#皮带	2	800	7200	11520000
      // 南一上山120皮带	DTL140/250/2*400	南一胶带上山2#皮带	2	800	7200	11520000
      // 南三1#主皮带	DTL160/350/3*1000	南三胶带大巷1#皮带	4	4000	7200	115200000
      // 南三2#主皮带	DTL160/350/4*1000	南三胶带大巷2#皮带	4	1000	7200	28800000

      {
        name: "南翼主皮带",
        type: "输送机",
        position: ["60%", "43%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "北翼主皮带",
        type: "输送机",
        position: ["42%", "40%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "西翼主皮带",
        type: "输送机",
        position: ["40%", "50%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "东翼主皮带",
        type: "输送机",
        position: ["37%", "60%"],
        brand: "DTL140/350/4*1000",
        gl: "4000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "南翼二部皮带",
        type: "输送机",
        position: ["50%", "40%"],
        brand: "DTL140/250/4*500",
        gl: "2000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "南一上山主皮带",
        type: "输送机",
        position: ["62%", "48%"],
        brand: "DTL140/250/2*400",
        gl: "800",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
    ],
    监测: [],
  },
  南风井: {
    项目: [
      {
        name: "南风井项目1",
        type: "低碳零碳供能",
        position: ["50%", "55%"],
      },
    ],
    设备: [
      {
        name: "南风井设备1",
        type: "电力设备",
        position: ["55%", "35%"],
      },
      {
        name: "南风井设备2",
        type: "电力设备",
        position: ["60%", "50%"],
      },
    ],
    监测: [],
  },
  北风井: {
    项目: [],
    设备: [],
    监测: [],
  },
  采区: {
    项目: [
      // {
      //   name: "采区项目1",
      //   type: "低碳零碳供能",
      //   position: ["50%", "55%"],
      // },
    ],
    设备: [
      //       东翼采区	主采	综采一队	采煤机	MG400/930-WD	1	930	18	6110100
      // 东翼采区	主采	综采一队	带式输送机	DSJ120/180/4*400	1	1600	18	10512000
      // 东翼采区	主采	综采一队	带式输送机	DSJ120/180/3*400	1	1200	18	7884000
      // 东翼采区	主采	综采一队	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
      // 东翼采区	主采	综采一队	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
      // 东翼采区	主采	综采一队	转载机	SZZ1200/400	1	400	18	2628000
      // 东翼采区	主采	综采一队	破碎机	PLM3500	1	250	18	1642500

      {
        name: "采煤机",
        type: "采煤机",
        position: ["34.5%", "47%"],
        brand: "MG400/930-WD",
        gl: "930",
        image: new URL("@/assets/img/cmj.png", import.meta.url).href,
        description:
          "MG400/930-WD交流电牵引采煤机是一种多电机驱动、横向抽屉式布置，采用机载式交流变频调速装置的新型电牵引采煤机。MG400/930-WD交流电牵引采煤机适用于较倾斜、中硬煤层长壁式综采工作面采高范围为1.8~3.2米(根据配置可以改变采高和截深)。可在周围空气中的瓦斯、煤尘、硫化氢、二氧化碳等不超过《煤矿安全规程》中所规定的安全含量的矿并中使用;该机组电气系统应用两台DTC变频器采用光缆通讯技术，一一的牵引方式，",
      },
      {
        name: "带式输送机",
        type: "输送机",
        position: ["40%", "45.5%"],
        brand: "DSJ120/180/4*400",
        gl: "1600",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
        description:
          "DSJ型伸缩钢架带式输送机用于综合机械化采煤工作面的顺槽输送，也可用于一般工作面的顺槽和巷道掘进运输部位，用于顺槽运输的机尾部配刮板输送机与工作面运输机相接；用于巷道掘进运输时，机尾部配带式转载机与掘进机相接。",
      },
      {
        name: "带式输送机",
        type: "输送机",
        position: ["40%", "51.5%"],
        brand: "DSJ120/180/3*400",
        gl: "1200",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
        description:
          "DSJ型伸缩钢架带式输送机用于综合机械化采煤工作面的顺槽输送，也可用于一般工作面的顺槽和巷道掘进运输部位，用于顺槽运输的机尾部配刮板输送机与工作面运输机相接；用于巷道掘进运输时，机尾部配带式转载机与掘进机相接。",
      },
      {
        name: "前部刮板输送机",
        type: "输送机",
        position: ["52%", "46.8%"],
        brand: "SGZ1000/2×1200（变频）",
        gl: "2400",
        image: new URL("@/assets/img/qbgb.png", import.meta.url).href,
        // description:
        //   "SGZ1000/2×1200（变频）型前部刮板输送机是的新一代输送设备，适用于煤矿综采工作面的煤矿输送，具有高效、安全、环保等特点。该设备主要由机架、输送带、驱动装置、张紧装置、清扫装置、电气控制系统等部分组成。该设备具有输送能力大、输送距离远、输送效率高、安全性好、维护方便等特点。",
      },
      {
        name: "后部刮板输送机",
        type: "输送机",
        position: ["34.5%", "48.7%"],
        brand: "SGZ1000/2×1200（变频）",
        gl: "2400",
        image: new URL("@/assets/img/qbgb.png", import.meta.url).href,
        description:
          "SGZ1000/2×1200（变频）型后部刮板输送机是的新一代输送设备，适用于煤矿综采工作面的煤矿输送，具有高效、安全、环保等特点。该设备主要由机架、输送带、驱动装置、张紧装置、清扫装置、电气控制系统等部分组成。该设备具有输送能力大、输送距离远、输送效率高、安全性好、维护方便等特点。",
      },
      {
        name: "转载机",
        type: "转载机",
        position: ["46%", "51.5%"],
        brand: "SZZ1200/400",
        gl: "400",
        image: new URL("@/assets/img/zzj.png", import.meta.url).href,
        description:
          "SZZ1200/400型转载机是的新一代转载设备，适用于煤矿综采工作面的煤矿转载，具有高效、安全、环保等特点。该设备主要由机架、转载装置、驱动装置、电气控制系统等部分组成。该设备具有转载能力大、转载效率高、安全性好、维护方便等特点。",
      },
      {
        name: "破碎机",
        type: "破碎机",
        position: ["46%", "45.5%"],
        brand: "PLM3500",
        gl: "250",
        image: new URL("@/assets/img/psj.png", import.meta.url).href,
        description:
          "PLM3500型破碎机是的新一代破碎设备，适用于煤矿综采工作面的煤矿破碎，具有高效、安全、环保等特点。该设备主要由机架、破碎装置、驱动装置、电气控制系统等部分组成。该设备具有破碎能力大、破碎效率高、安全性好、维护方便等特点。",
      },
      {
        name: "液压支架",
        type: "液压支架",
        position: ["34.5%", "50.4%"],
        brand: "ZMJ",
        image: new URL("@/assets/img/yzzj.png", import.meta.url).href,
        description:
          "ZMJ液压支架是的新一代支架设备，适用于煤矿综采工作面的煤矿支架，具有高效、安全、环保等特点。该设备主要由机架、支架装置、驱动装置、电气控制系统等部分组成。该设备具有支架能力大、支架效率高、安全性好、维护方便等特点。",
      },
      {
        name: "移动变压器",
        type: "移动变压器",
        position: ["52%", "50.5%"],
        brand: "YDQ",
        image: new URL("@/assets/img/ydbyq.png", import.meta.url).href,
        // description:
        //   "YDQ移动变压器是的新一代变压器设备，适用于煤矿综采工作面的煤矿变压器，具有高效、安全、环保等特点。该设备主要由机架、变压器装置、驱动装置、电气控制系统等部分组成。该设备具有变压器能力大、变压器效率高、安全性好、维护方便等特点。",
      },
      {
        name: "东翼主皮带",
        type: "输送机",
        position: ["56%", "40.5%"],
        brand: "DTL140/350/4*1000",
        gl: "4000",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
      {
        name: "东翼1.2米皮带",
        type: "输送机",
        position: ["56%", "60.5%"],
        brand: "DTL140/350/2*400",
        gl: "800",
        image: new URL("@/assets/img/dssb.jpg", import.meta.url).href,
      },
    ],
    监测: [],
  },
};
function showDeviceDetail(device) {
  showDetail.value = true;
  showingDevice.value = device;
}
const layers = ref([
  {
    name: "中央工业广场",
    image: new URL("@/assets/img/bg.png", import.meta.url).href,
  },
  {
    name: "地下总采区",
    image: new URL("@/assets/img/采煤效果图6_b.jpg", import.meta.url).href,
  },
  {
    name: "井下",
    image: new URL("@/assets/img/采煤效果图6_b.jpg", import.meta.url).href,
  },
  { name: "南风井", image: new URL("@/assets/img/bgnfj.jpg", import.meta.url).href },
  { name: "北风井", image: new URL("@/assets/img/bgbfj.jpg", import.meta.url).href },
  {
    name: "采区",
    image: new URL("@/assets/img/caiqu2.jpg", import.meta.url).href,
  },
  // 添加更多层...
]);

const activeLayer = ref("中央工业广场");
const currentLayerImage = computed(() => {
  const layer = layers.value.find((layer) => layer.name === activeLayer.value);
  return layer ? layer.image : "";
});
function switchLayer(layer) {
  console.log(layer);
  activeLayer.value = layer;
  currentLayerImage.value = layer.image;
}
console.log(currentLayerImage.value);
const boxStatus = ref({
  qiyejianjie: false,
  zongliangzhibiao: false,
  tanpaifang: false,
  nenghaoqushi: false,
  wasiliyong: false,
  huanjingbaohu: false,
  zongliangzhibiaoTab: 0,
});
const showDetailBox = (layer, tab) => {
  console.log(layer);
  boxStatus.value[layer] = !boxStatus.value[layer];
  if (tab) {
    boxStatus.value[layer + "Tab"] = tab;
  }
};
const closeDetail = (layer) => {
  console.log(layer);
  boxStatus.value[layer] = false;
};
</script>

<template>
  <main :style="{ backgroundImage: `url(${currentLayerImage})` }">
    <div class="left">
      <div class="left-box box" style="overflow: hidden">
        <div class="left-box-title title">>企业理念</div>
        <!-- <div class="left-box-content" style="max-height: 150px; overflow: hidden; width: 100%">
                    <img src="./../assets/img/bg.png.jpg" alt="" style="width: 100%" />
                </div> -->
        <div
          class="left-box-content"
          style="overflow: hidden; width: 100%"
          @click="showDetailBox('qiyejianjie')"
        >
          <article class="jianjie">
            <img src="./../assets/img/bg.png.jpg" alt="" />
            <div
              class="jianjie_content"
              style="
                font-size: 2rem;
                font-weight: bold;
                text-align: center;
                color: #e62129;
              "
            >
              团 结 奋 进<br />守 正 创 新
              <!-- 余吾煤业公司位于山西省长治市屯留县，属潞安矿区。井田面积134.548平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力750万吨/年，配套900万吨/年的洗煤厂，可实现原煤的全部洗选。 -->
            </div>
          </article>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">
          <div>>总量指标</div>
        </div>
        <div class="left-box-content row" style="flex-wrap: wrap; padding: 0">
          <div
            class="zl-card"
            style="border-right: 1px solid #bbb; border-bottom: 1px solid #bbb"
            @click="showDetailBox('zongliangzhibiao', 0)"
          >
            <div class="zl-icon">
              <img src="./../assets/img/zl01.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  原煤产量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/up.png"
                    alt=""
                  />
                  <small style="color: #5ea755">11.60% 同比</small>
                </div>
              </div>
              <span class="zl-card-title">9588669 <small>吨</small></span>
            </div>
          </div>
          <div
            class="zl-card"
            style="border-bottom: 1px solid #bbb"
            @click="showDetailBox('zongliangzhibiao', 1)"
          >
            <div class="zl-icon">
              <img src="./../assets/img/zl02.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  能耗总量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/up.png"
                    alt=""
                  />
                  <small style="color: #5ea755">1.96% 同比</small>
                </div>
              </div>
              <span class="zl-card-title">47135.55 <small>吨ce</small></span>
            </div>
          </div>
          <div
            class="zl-card"
            style="border-right: 1px solid #bbb"
            @click="showDetailBox('zongliangzhibiao', 2)"
          >
            <div class="zl-icon">
              <img src="./../assets/img/zl03.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  碳排放量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/down.png"
                    alt=""
                  />
                  <small style="color: #ff0000">3.70% 同比</small>
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >1973659.34 <small>吨</small></span
              >
            </div>
          </div>

          <div class="zl-card" @click="showDetailBox('zongliangzhibiao', 2)">
            <div class="zl-icon">
              <img src="./../assets/img/zl04.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  碳资产量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/down.png"
                    alt=""
                  />
                  <small style="color: #ff0000">0% 同比</small>
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >0 <small>tCO₂</small></span
              >
            </div>
          </div>
        </div>
        <div style="margin-top: -1.2rem; text-align: right">截止2024年9月</div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">
          <div>>碳排放分析</div>
        </div>

        <div class="left-box-content">
          <div
            style="width: 100%; height: 100%; margin-top: -2rem"
            @click="showDetailBox('tanpaifang')"
          >
            <!-- <co2 /> -->
            <Line6 />
            <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              <div style="display: flex">
                碳排放总量
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  1973659.34 吨CO₂
                </div>
              </div>
              <div style="display: flex">
                碳排放强度
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  20.56 kgCO₂/t原煤
                </div>
              </div>
            </div>
            <!-- <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              与2020相比碳排放减少量
              <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                58174.33 吨
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="center-box box" style="padding: 0; height: 800px">
        <Map />
      </div> -->
      <!-- <div style="position: absolute; top: 155px; left: 28%">
        <div class="ebox">
          <div class="ebg">2027 年</div>
          <div style="margin-top: -1rem">零碳矿山目标达成时间</div>
        </div>
      </div> -->
      <div
        style="
          position: absolute;
          top: 165px;
          left: 50%;
          width: 600px;
          margin-left: -300px;
          text-align: center;
        "
      >
        <div
          style="
            font-family: 'YousheBiaotiHei', sans-serif;
            font-size: 1.5rem;
            color: #0ff;
          "
        >
          零碳矿山目标达成倒计时<b
            v-for="num in daysArray"
            style="
              margin: 0.5rem;
              padding: 0.5rem 0.5rem 0.1rem;
              background: linear-gradient(0deg, #074c58 0%, #2ba4c0 100%);
              border-radius: 0.1rem;
            "
            >{{ num }}</b
          >天
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">>能耗趋势分析</div>
        <div class="right-box-content" @click="showDetailBox('nenghaoqushi')">
          <div style="width: 100%; height: 100%; margin-top: -1.5rem">
            <line4 />
            <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              <div style="display: flex">
                总节能量
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  1774.26 t标煤
                </div>
              </div>
              <div style="display: flex">
                能耗强度
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  3.77 kgce/t
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>瓦斯利用情况</div>
        </div>
        <div
          class="right-box-content"
          style="
            margin: 0 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          "
          @click="showDetailBox('wasiliyong')"
        >
          <div style="text-align: center; width: 32%">
            <div class="num"><span>5052万 m³</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用总量</div>
          </div>
          <div style="text-align: center; width: 32%">
            <div class="num"><span>478098 tCO₂</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用碳减排量</div>
          </div>
          <div style="text-align: center; width: 32%">
            <div class="num"><span>31.2 %</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用率</div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>环境保护分析</div>
        </div>
        <div class="right-box-content row" style="flex-wrap: wrap">
          <div class="hb-box">
            <div class="hb-title">
              <div class="hb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"
                  />
                </svg>
              </div>
              废气排放量
            </div>
            <div class="hb-process">
              <span>1713.32 万m³</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
              <div class="hb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"
                  />
                </svg>
              </div>
              废水排放量
            </div>
            <div class="hb-process">
              <span>15.2091 万m³</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
              <div class="hb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"
                  />
                </svg>
              </div>
              固废产生量
            </div>
            <div class="hb-process">
              <span>263.36 万m³</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
              <div class="hb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"
                  />
                </svg>
              </div>
              危废产生量
            </div>
            <div class="hb-process">
              <span>99.325 吨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-view">
      <div class="radio-inputs view-radio">
        <label>
          <input
            class="radio-input"
            type="radio"
            name="view"
            :checked="
              activeLayer === '中央工业广场' ||
              activeLayer === '南风井' ||
              activeLayer === '北风井'
            "
            @change="switchLayer('中央工业广场')"
          />
          <span class="radio-tile ground">
            <span class="radio-label">地面</span>
          </span>
        </label>
        <label>
          <input
            v-model="activeLayer"
            value="井下"
            class="radio-input"
            type="radio"
            name="view"
          />
          <span class="radio-tile under">
            <span class="radio-label">井下</span>
          </span>
        </label>

        <!-- <label>
          <input
            v-model="activeLayer"
            value="采区"
            class="radio-input"
            type="radio"
            name="view"
          />
          <span class="radio-tile caiqu">
            <span class="radio-label">采区</span>
          </span>
        </label> -->
      </div>
      <div class="radio-inputs">
        <label>
          <input
            v-model="projectsChecked"
            class="radio-input project"
            type="checkbox"
            name="engine"
          />
          <span class="radio-tile" style="color: #ea580c">
            <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 8 8"
              >
                <path
                  fill="#ea580c"
                  d="M0 0v7h1V0zm7 0v7h1V0zM2 1v1h2V1zm1 2v1h2V3zm1 2v1h2V5z"
                />
              </svg>
            </span>
            <span class="radio-label" style="color: #ea580c">项目</span>
          </span>
        </label>
        <label>
          <input
            v-model="devicesChecked"
            class="radio-input"
            type="checkbox"
            name="engine"
          />
          <span class="radio-tile">
            <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="#00ffff"
                    d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 1c2.08 0 3.716.448 4.628.77c.891.317 1.325 1.192 1.227 2.02l-.024.155l-.722 3.61c-.196.977-1.232 1.45-2.079 1.112c-.645-.258-1.7-.604-2.75-.66l-.3-.007c-1.133.005-2.312.388-3.01.667c-.805.321-1.78-.09-2.043-.97l-.036-.143l-.722-3.609c-.174-.872.256-1.839 1.203-2.174A14 14 0 0 1 12 6m0 2c-1.719 0-3.08.355-3.856.62l.6 2.997c.683-.24 1.623-.506 2.624-.59l.738-1.474a1 1 0 1 1 1.788.894l-.352.705c.65.122 1.244.3 1.715.465l.6-2.997A12.1 12.1 0 0 0 12 8"
                  />
                </g>
              </svg>
            </span>
            <span class="radio-label">设备</span>
          </span>
        </label>
        <!-- <label>
          <input class="radio-input" type="checkbox" name="engine" />
          <span class="radio-tile">
            <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="#00ffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path
                    d="M43 6H5m18 17V6M8.425 19.58l31.876 8.54l-1.743 2.64l-4.002 7.21l-1.743 2.639l-28.011-7.506z"
                  />
                  <path d="m38.558 30.76l3.864 1.035l-2.07 7.727l-5.796-1.552" />
                </g>
              </svg>
            </span>
            <span class="radio-label">监测</span>
          </span>
        </label> -->
      </div>
    </div>
    <div
      class="toBfj"
      @click="
        activeLayer == '中央工业广场'
          ? switchLayer('北风井')
          : switchLayer('中央工业广场')
      "
      v-if="activeLayer == '中央工业广场' || activeLayer == '南风井'"
    >
      <div style="transform: rotate(180deg)">
        {{ activeLayer == "中央工业广场" ? "北风井" : "中央工业广场" }}
      </div>
      <div style="--color: skyblue">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </div>
    <div
      class="toNfj"
      @click="
        activeLayer == '中央工业广场'
          ? switchLayer('南风井')
          : switchLayer('中央工业广场')
      "
      v-if="activeLayer == '中央工业广场' || activeLayer == '北风井'"
    >
      <div>{{ activeLayer == "中央工业广场" ? "南风井" : "中央工业广场" }}</div>
      <div style="--color: skyblue">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </div>
    <div class="devices-marker" v-if="devicesChecked">
      <div
        v-if="activeLayer === '井下'"
        style="
          position: absolute;
          top: 35%;
          left: 54%;
          width: 140px;
          height: 200px;
          z-index: 9999999999;
        "
        @click="activeLayer = '采区'"
      ></div>
      <div
        class="marker"
        v-for="(item, index) in devicesMarker[activeLayer]['设备']"
        :key="index"
        :style="{ top: item.position[0], left: item.position[1] }"
        @click="showDeviceDetail(item)"
      >
        <div class="marker-icon" :title="item.name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            v-if="item.type !== '输送机'"
          >
            <path
              fill="#0891b2"
              d="M5 3a2 2 0 0 0-2 2v2h2V5h14v2h2V5a2 2 0 0 0-2-2zm3 4v2h8V7zM3 9v3a9 9 0 0 0 9 9a9 9 0 0 0 9-9V9h-2v3a7 7 0 0 1-7 7a7 7 0 0 1-7-7V9zm9 3a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 12 17a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            v-else
          >
            <path
              fill="#eab308"
              d="M5 21q-1.25 0-2.125-.875T2 18t.875-2.125T5 15h14q1.25 0 2.125.875T22 18t-.875 2.125T19 21zm0-2h14q.425 0 .713-.288T20 18t-.288-.712T19 17H5q-.425 0-.712.288T4 18t.288.713T5 19m5-6q-.425 0-.712-.288T9 12V4q0-.425.288-.712T10 3h8q.425 0 .713.288T19 4v8q0 .425-.288.713T18 13zm-7.05-2.05q-.4 0-.675-.288T2 9.976t.288-.675t.687-.275h3q.4 0 .675.275t.275.675t-.275.688t-.675.287zM13 8h2.025q.425 0 .7-.288T16 7t-.275-.7t-.7-.275h-2.05q-.425 0-.7.275T12 7t.288.712T13 8M4.975 8q-.425 0-.7-.288T4 7t.288-.7T5 6.025h.95q.425 0 .7.275t.275.7t-.275.713t-.7.287z"
            />
          </svg>
        </div>
        <!-- <div class="marker-title">{{ item.name }}</div> -->
        <!-- <div class="marker-content"></div> -->
      </div>
    </div>
    <div class="devices-marker" v-if="projectsChecked">
      <div
        class="marker"
        v-for="(item, index) in devicesMarker[activeLayer]['项目']"
        :key="index"
        :style="{ top: item.position[0], left: item.position[1] }"
      >
        <div class="marker-icon" style="border-color: #ea580c">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#e11d48"
              d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8m192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8m192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8m216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"
            />
          </svg>
        </div>
        <!-- <div class="marker-title" style="color: #ea580c">{{ item.name }}</div> -->
        <!-- <div class="marker-content"></div> -->
      </div>
    </div>
    <div class="mask" @click="showDetail = false" v-if="showDetail"></div>
    <div v-if="showDetail" class="detail-box">
      <div class="detail-title">
        <div class="tab-title active">设备详情</div>
        <!-- <div class="tab-title">设备工艺</div> -->
        <!-- <div class="tab-title">运行数据</div> -->
      </div>
      <div class="detail-content" style="gap: 0">
        <div class="detail-item" style="align-items: center">
          <div class="detail-img">
            <img
              style="width: 200px; height: 200px; border-radius: 10px"
              :src="showingDevice.image"
              alt=""
            />
          </div>
          <div style="padding: 0 1rem">
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">设备名称</div>
                <div class="detail-item-content">{{ showingDevice.name }}</div>
              </div>
              <div>
                <div class="detail-item-title">设备编号</div>
                <div class="detail-item-content">{{ showingDevice.name }}</div>
              </div>
              <div>
                <div class="detail-item-title">设备类型</div>
                <div class="detail-item-content">{{ showingDevice.type }}</div>
              </div>
            </div>
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">设备品牌</div>
                <div class="detail-item-content">{{ showingDevice.brand || "-" }}</div>
              </div>
              <div>
                <div class="detail-item-title">设备厂家</div>
                <div class="detail-item-content">{{ showingDevice.model || "-" }}</div>
              </div>
              <div>
                <div class="detail-item-title">出厂日期</div>
                <div class="detail-item-content">{{ showingDevice.status || "-" }}</div>
              </div>
            </div>
            <div style="display: flex; gap: 2rem; margin-bottom: 1rem">
              <div>
                <div class="detail-item-title">额定功率</div>
                <div class="detail-item-content">{{ showingDevice.gl || "-" }} KW</div>
              </div>
              <div>
                <div class="detail-item-title">额定电压</div>
                <div class="detail-item-content">{{ showingDevice.dy || "-" }} V</div>
              </div>
              <div>
                <div class="detail-item-title">额定电流</div>
                <div class="detail-item-content">{{ showingDevice.dl || "-" }} A</div>
              </div>
            </div>
            <div style="display: flex; gap: 2rem">
              <div>
                <div class="detail-item-title">日能耗</div>
                <div class="detail-item-content">
                  {{ showingDevice.gl * 18 || "-" }} kwh
                </div>
              </div>
              <div>
                <div class="detail-item-title">月能耗</div>
                <div class="detail-item-content">
                  {{ showingDevice.gl * 18 * 30 || "-" }} kwh
                </div>
              </div>
              <div>
                <div class="detail-item-title">年能耗</div>
                <div class="detail-item-content">
                  {{ showingDevice.gl * 18 * 365 || "-" }} kwh
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 0 1rem 1rem 1rem">
          <div class="detail-item-title">设备用途</div>
          <div class="detail-item-content">
            {{ showingDevice.description || "-" }}
          </div>
        </div>
      </div>
    </div>
    <qiyejianjie :showDetail="boxStatus.qiyejianjie" @close-detail="closeDetail" />
    <zongliangzhibiao
      :showDetail="boxStatus.zongliangzhibiao"
      @close-detail="closeDetail"
      :activeTab="boxStatus.zongliangzhibiaoTab"
    />
    <tanpaifang :showDetail="boxStatus.tanpaifang" @close-detail="closeDetail" />
    <nenghaoqushi :showDetail="boxStatus.nenghaoqushi" @close-detail="closeDetail" />
    <wasiliyong :showDetail="boxStatus.wasiliyong" @close-detail="closeDetail" />
  </main>
</template>
<style scoped>
.toNfj {
  position: fixed;
  bottom: 15%;
  right: calc(50% - 50px);
  margin: 1rem;
  z-index: 100000;
  color: #00ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
.toBfj {
  position: fixed;
  top: 30%;
  right: calc(50% - 50px);

  margin: 1rem;
  z-index: 100000;
  transform: rotate(180deg);
  color: #00ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}
.chevrons {
  /* padding: 6px 0 0 0; */
  margin-left: -3px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}
@keyframes pulse54012 {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0.9;
  }
}
.detail-box {
  max-width: 700px;
}
.ground {
  background-image: url("./../assets/img/bg-s.png");
  background-size: 100% 100%;
}
.under {
  background-image: url("./../assets/img/采煤效果图6-s.png");
  background-size: 100% 100%;
}
.caiqu {
  background-image: url("./../assets/img/caiqu-s.png");
  background-size: 100% 100%;
}
.left,
.right {
  z-index: 100000;
}
.devices-marker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* z-index: 100000; */
}
.marker {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
  z-index: 100000;
  cursor: pointer;
}
.marker-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000000;
  border: 2px solid #00ffff;
}
.marker-title {
  margin-top: 0.5rem;
  color: #00ffff;
  background-color: #000000;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}
.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 350px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-inputs > * {
  margin: 6px;
}

.radio-input:checked + .radio-tile {
  border-color: #00ffff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #2260ff;
}

.radio-input:checked + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
  background-color: #00ffff;
  border-color: #00ffff;
}
.project:checked + .radio-tile {
  border-color: #ea580c;
}

.project:checked + .radio-tile:before {
  border-color: #ea580c;
}
.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #2260ff;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #00ffff;
}
.view-radio .radio-input:checked + .radio-tile {
  border-color: #00ff66;
}
.view-radio .radio-input:checked + .radio-tile:before {
  border-color: #00ff66;
}
.view-radio .radio-input:checked + .radio-tile .radio-label {
  color: #00ff66;
}
.radio-input:focus + .radio-tile {
  /* border-color: #2260ff; */
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc; */
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  min-height: 60px;
  border-radius: 0.5rem;
  border: 2px solid #ffffffa3;
  background-color: #0000009e;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.radio-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile:hover {
  border-color: #2260ff;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon svg {
  width: 1rem;
  height: 1rem;
  fill: #494949;
}

.radio-label {
  color: #fff;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
  background-color: #0000006e;
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
}

.radio-input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.select {
  width: fit-content;
  cursor: pointer;
  position: relative;
  transition: 300ms;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
}

.selected {
  background-color: #0000009e;
  padding: 18px;
  margin: 6px;
  border-radius: 5px;
  position: relative;
  z-index: 100000;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  color: #00ffff;
  border: 2px solid #00ffff;
}

.arrow {
  position: relative;
  right: 0px;
  height: 10px;
  transform: rotate(90deg);
  width: 25px;
  fill: white;
  z-index: 100000;
  transition: 300ms;
}
.disabled {
  color: #7ba2c5;
}
.options {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  background-color: #2a2f3b;
  position: relative;
  top: -100px;
  opacity: 0;
  transition: 300ms;
}

.select:hover > .options {
  opacity: 1;
  top: 0;
}

.select:hover > .selected .arrow {
  transform: rotate(0deg);
}

.option {
  border-radius: 5px;
  padding: 5px;
  transition: 300ms;
  background-color: #2a2f3b;
  width: 150px;
  font-size: 15px;
}
.option:hover {
  background-color: #323741;
}

.options input[type="radio"] {
  display: none;
}

.options label {
  display: inline-block;
}
.options label::before {
  content: attr(data-txt);
}

.options input[type="radio"]:checked + label {
  display: none;
}

.options input[type="radio"]#all:checked + label {
  display: none;
}

.select:has(.options input[type="radio"]#all:checked) .selected::before {
  content: attr(data-default);
}
.select:has(.options input[type="radio"]#option-1:checked) .selected::before {
  content: attr(data-one);
}
.select:has(.options input[type="radio"]#option-2:checked) .selected::before {
  content: attr(data-two);
}
.select:has(.options input[type="radio"]#option-3:checked) .selected::before {
  content: attr(data-three);
}
.select:has(.options input[type="radio"]#option-4:checked) .selected::before {
  content: attr(data-four);
}
.select:has(.options input[type="radio"]#option-5:checked) .selected::before {
  content: attr(data-five);
}
.select:has(.options input[type="radio"]#option-6:checked) .selected::before {
  content: attr(data-six);
}
.select:has(.options input[type="radio"]#option-7:checked) .selected::before {
  content: attr(data-seven);
}
.hb-box {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem 0 0.5rem 2rem;
  background-image: url("./../assets/img/hbbg.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
}
.hb-icon {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0.5rem; */
}
.hb-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.hb-title {
  font-size: 0.8rem;
  color: #fff;
  display: flex;
  align-items: center;
}
.hb-process {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 600;
  /* 外发光 */
  text-shadow: 0 0 5px #00ffff;
}
.jianjie {
  /* font-size: 0.7rem; */
  /* padding: 0.5rem; */
  color: #7ba2c5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
.jianjie img {
  /* width: 10vw; */
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  margin-right: 1rem;
  box-shadow: 0 0 10px #0ff;
}
.jianjie .jianjie_content {
  font-size: 0.8rem;
  text-align: justify;
  cursor: pointer;
  /* width: 80%; */
  /* height: 100%; */
}
.jianjie .jianjie_content:hover {
  color: #00ffff;
  text-decoration: underline;
}
.zl-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  width: 50%;
}
.zl-card:hover {
  background-color: #00000038;
}
.zl-icon {
  margin-right: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
}
.zl-icon img {
  width: 2rem;
  height: 2rem;
}
.zl-card-title {
  font-size: 1.2rem;
  color: #0ff;
  font-weight: 800;
}
.huanjingbaohu {
  width: fit-content;
  background: #00000038;
  font-size: 0.6rem;
  text-align: center;
  padding: 0.2rem;
  color: #6da4c5;
}

.nd {
  padding-bottom: 0.3rem !important;
  border-bottom: 1px solid #00000054;
  color: #e4f5ff;
  font-size: 0.7rem;
}

.huanjingbaohu div {
  padding: 0.3rem 5px 0;
}
.switch-view {
  padding: 1rem;
  /* background-color: #00000091; */
  position: absolute;
  bottom: 1rem;
  right: 28vw;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  z-index: 1000000;
  width: 44%;
  /* border-radius: 0.5rem; */
  /* border: 1px solid #00ffff33; */
  /* box-shadow: 0 0 4px #00ffffb3; */
}
.switch-view-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 0.5rem; */
  margin: 0.5rem;
  color: #00ffffbb;
  font-size: 0.8rem;
  cursor: pointer;
  padding-bottom: 0.5rem;
}
.arrow {
  width: 0.5rem;
  height: 1rem;
  margin: 2px 0.5rem 0;
}
.num {
  font-size: 0.7rem;
  color: #00ffff;
  font-weight: bold;
  font-family: "YousheBiaotiHei", sans-serif;
}
.row {
  display: flex;
  justify-content: space-around;
}

.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
}

.box {
  background-image: url("./../assets/img/boxbg.png");
  background-size: 100% 100%;
  color: #ffffffb3;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
main {
  background-image: url("./../assets/img/bg.png");
  background-size: 100% 100%;
}
.row-title {
  justify-content: space-between;
  text-align: center;
}

.box .carousel {
  /* position: relative; */
  /* left: 0; */
  max-width: 300px;
  animation: carousel 30s linear var(--carousel_direction, normal) infinite;
}

.box .carousel[data-direction="right"] {
  --carousel_direction: reverse;
}

.box .carousel[data-position="top"] {
  /* top: 0.75rem; */
}

.box .carousel[data-position="bottom"] {
  bottom: 0.75rem;
}

.box .carousel .carousel__text {
  font-size: 0.75rem;
  /* color: black; */
  text-wrap: nowrap;
}

@keyframes carousel {
  to {
    transform: translate(-800%);
  }
}

/* .box .left-box-title,
.right-box-title,
.center-box-title {
  font-size: 1rem;
  padding: 0.5rem 3rem;
  box-sizing: border-box;
  background-image: url(/src/assets/img/titlebgblue.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.center-box-title {
  background-size: 50% 100%;
} */
.left-box-content,
.right-box-content {
  padding: 0.5rem;
  box-sizing: border-box;
  height: calc(100% - 2.8rem);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.2rem;
}

.co2zonglan {
  /* width: 50%; */
  text-align: left;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  /* padding: 0.5rem; */
}

.co2num {
  font-size: 0.6rem;
  color: #7ba2c5;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 1rem; */
  align-items: baseline;
}
.co2num b {
  /* font-family: "YousheBiaotiHei", sans-serif; */
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffffffb3;
}
.co2num small {
  font-size: 0.6rem;
  color: #ffffffb3;
}
.pie {
  width: 100px;
  height: 100px;
}

.pie img {
  width: 100%;
  height: 100%;
}

.pie-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  text-align: center;
}

.pie-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
  text-align: center;
}

.table-container {
  max-height: 240px;
  overflow: hidden;
  position: relative;
}

.table-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead,
tbody {
  display: block;
}

thead {
  width: 100%;
}

tbody {
  width: 100%;
  display: block;
  overflow: hidden;
  animation: scroll 90s linear infinite;
}

tbody tr {
  display: table;
  width: 100%;
  /* table-layout: fixed; */
}

th,
td {
  padding: 2px;
  text-align: left;
  border: 1px solid #ddd;
  /* 根据需要调整 */
  text-align: center;
}

th {
  color: #ffffffb3;
  border: none;
  font-size: 0.7rem;
}

td {
  color: #6da4c5;
  border: none;
  font-size: 0.8rem;
}

thead tr {
  position: sticky;
  top: 0;
  background-color: #16449c;
  z-index: 10;
  width: 100%;
  display: table;
}

tr th:first-child,
tr td:first-child {
  width: 25%;
}

tr th:nth-child(2),
tr td:nth-child(2) {
  width: 20%;
}

tr th:nth-child(3),
tr td:nth-child(3) {
  width: 20%;
}

tr th:nth-child(4),
tr td:nth-child(4) {
  width: 35%;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

.ebox {
  text-align: center;
  color: #ddd;
  /* margin-bottom: 1rem; */
  width: 170px;
}

.ebg {
  background-image: url(/src/assets/img/ebg.png);
  background-size: 100% 100%;
  /* padding: 0.5rem; */
  text-align: center;
  font-size: 1.5rem;
  /* margin-top: 0.5rem; */
  height: 6rem;
  color: #99ffff;
  font-weight: bold;
}

.flex-y {
  justify-content: center;
}

.zonghe-box {
  align-items: center;
  height: 120px;
  width: 18%;
  color: #13e3ff;
  background: #092cbf36;
  padding: 0 1rem 1rem;
  margin: 10px;
  box-sizing: content-box;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
  font-size: 0.6rem;
}

.card b {
  font-size: 1rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 2px #13e3ff, 0 0 30px #37e7ff;
}

.card div {
  color: #7ba2c5;
  font-size: 0.8rem;
  word-break: keep-all;
}
/* From Uiverse.io by gouthamnetha02 */
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 9999999999999999999999;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #061d68b8;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  /* z-index: 1; */
  bottom: 115%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 9999999999999999999999;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
</style>
