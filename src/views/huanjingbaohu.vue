<script setup>
import bar4 from "@/components/charts/bar4.vue";
import barwater from "@/components/charts/barwater.vue";
import barzs from "@/components/charts/barzs.vue";
import Map from "./map.vue";
import { ref } from "vue";

const tab = ref(1);
const showgongyi = ref(false);
const xiangmuData = [
  //   出入口	出入情况	通过时间	道闸状态	车牌号码	车牌颜色	车辆类型	排放阶段
  // 北门出入口	出	2024/10/21	自动摆杆	晋D61V65	蓝牌	重型自卸货车	国VI
  // 北门出入口	进	2024/10/22	自动摆杆	晋D61308	黄牌	重型自卸货车	国VI
  // 北门出入口	出	2024/10/23	自动摆杆	晋D06465D	绿牌	重型半挂牵引车	电动
  // 北门出入口	出	2024/10/24	自动摆杆	晋D61308	黄牌	重型自卸货车	国VI
  // 北门出入口	出	2024/10/25	自动摆杆	晋D3108T	蓝牌	重型自卸货车	国VI
  // 北门出入口	出	2024/10/26	自动摆杆	晋D758Q7	蓝牌	轻型罐式货车	国VI
  // 北门出入口	出	2024/10/27	自动摆杆	晋D58611	黄牌	重型自卸货车	国VI
  // 北门出入口	进	2024/10/28	自动摆杆	晋D3108T	蓝牌	轻型罐式货车	国VI
  // 北门出入口	进	2024/10/29	自动摆杆	晋D61308	黄牌	重型自卸货车	国VI
  // 北门出入口	出	2024/10/30	自动摆杆	晋D5531M	蓝牌	轻型罐式货车	国VI
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/21",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61V65",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/22",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/23",
    daozhazhuangtai: "自动摆杆",
    num: "晋D06465D",
    paifang: "绿牌",
    name: "重型半挂牵引车",
    value: "电动",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/24",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/25",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/26",
    daozhazhuangtai: "自动摆杆",
    num: "晋D758Q7",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/27",
    daozhazhuangtai: "自动摆杆",
    num: "晋D58611",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/28",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/29",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/30",
    daozhazhuangtai: "自动摆杆",
    num: "晋D5531M",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/21",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61V65",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/22",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/23",
    daozhazhuangtai: "自动摆杆",
    num: "晋D06465D",
    paifang: "绿牌",
    name: "重型半挂牵引车",
    value: "电动",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/24",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/25",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/26",
    daozhazhuangtai: "自动摆杆",
    num: "晋D758Q7",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/27",
    daozhazhuangtai: "自动摆杆",
    num: "晋D58611",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/28",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/29",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/30",
    daozhazhuangtai: "自动摆杆",
    num: "晋D5531M",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/21",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61V65",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/22",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/23",
    daozhazhuangtai: "自动摆杆",
    num: "晋D06465D",
    paifang: "绿牌",
    name: "重型半挂牵引车",
    value: "电动",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/24",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/25",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/26",
    daozhazhuangtai: "自动摆杆",
    num: "晋D758Q7",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "出",
    time: "2024/10/27",
    daozhazhuangtai: "自动摆杆",
    num: "晋D58611",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/28",
    daozhazhuangtai: "自动摆杆",
    num: "晋D3108T",
    paifang: "蓝牌",
    name: "轻型罐式货车",
    value: "国VI",
  },
  {
    churukou: "北门出入口",
    churuqingkuang: "进",
    time: "2024/10/29",
    daozhazhuangtai: "自动摆杆",
    num: "晋D61308",
    paifang: "黄牌",
    name: "重型自卸货车",
    value: "国VI",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>环保手续</div>
        <div class="left-box-content">
          <div class="list-container">
            <div class="list">
              <div class="front-content">
                <div><span>排污许可证</span><b>有效期至：2028年6月8日</b></div>
              </div>
              <div class="content">
                <a
                  href="https://permit.mee.gov.cn/perxxgkinfo/syssb/wysb/hpsp/hpsp-company-sewage!showImage.action?dataid=782d9523e1b64059bbdd1a1e36bdb88d"
                  target="_blank"
                  >证书编号：91140000668613704X001U</a
                >
              </div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content">
                <div><span>环评批复</span><b>有效期至：2028年6月8日</b></div>
              </div>
              <div class="content">
                <p></p>
              </div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content">
                <div><span>环保验收</span><b>有效期至：2028年6月8日</b></div>
              </div>
              <div class="content">
                <p></p>
              </div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content">
                <div><span>辐射许可证</span><b>有效期至：2028年6月8日</b></div>
              </div>
              <div class="content">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box" style="height: calc((100vh - 100px - 2rem) * 0.66)">
        <div class="left-box-title title">>污染防治</div>
        <div class="left-box-content flex-y">
          <div style="display: flex; justify-content: space-around">
            <div class="ebox">
              <div class="ebg">1713.32 万m³</div>
              <div>废气排放总量</div>
            </div>
            <div class="ebox">
              <div class="ebg">15.2091 万m³</div>
              <div>废水排放总量</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-around">
            <div class="ebox">
              <div class="ebg">263.36 万m³</div>
              <div>固废产生总量</div>
            </div>
            <div class="ebox">
              <div class="ebg">99.325 t</div>
              <div>危废产生总量</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-around">
            <div class="ebox">
              <div class="ebg">0.10 mSv</div>
              <div>辐射污染总量</div>
            </div>
            <div class="ebox">
              <div class="ebg">42.30 dB</div>
              <div>噪声平均值</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box">
        <div class="center-box-title title">>门禁情况</div>
        <div class="center-box-content" style="height: 200px">
          <div class="table-container">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>出入口</th>
                    <th>出入情况</th>
                    <th>通过时间</th>
                    <th>道闸状态</th>
                    <th>车牌号码</th>
                    <th>车牌颜色</th>
                    <th>车辆类型</th>
                    <th>排放阶段</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in xiangmuData" :key="index">
                    <td>{{ item.churukou }}</td>
                    <td>{{ item.churuqingkuang }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.daozhazhuangtai }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.paifang }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        class="center-box"
        v-if="!showgongyi"
        style="padding: 0; height: calc(100% - 320px)"
      >
        <div class="circle-container">
          <div class="circle" style="--i: 0">固废危废排放</div>
          <div class="circle" style="--i: 1">辐射防护</div>
          <div class="circle" style="--i: 2">绿化及生态</div>
          <div class="circle" style="--i: 3">大气污染排放</div>
          <div class="circle" style="--i: 4">水污染物排放</div>
          <div class="circle" style="--i: 5">噪声排放</div>
        </div>
      </div>
      <div
        v-else
        class="center-box gongyi"
        style="padding: 0; height: calc(100% - 320px)"
      ></div>
    </div>
    <div class="right">
      <div class="right-box box" style="height: calc((100vh - 100px - 2rem) * 0.5)">
        <div class="right-box-title title">>环境监测</div>
        <div class="right-box-content">
          <div class="tab">
            <div class="tab-item" :class="{ active: tab == 1 }" @click="tab = 1">
              废气
            </div>
            <div class="tab-item" :class="{ active: tab == 2 }" @click="tab = 2">
              废水
            </div>
            <div class="tab-item" :class="{ active: tab == 3 }" @click="tab = 3">
              噪声
            </div>
          </div>

          <div style="height: 280px; width: 100%" v-if="tab == 1">
            <bar4 />
          </div>
          <div style="height: 280px; width: 100%" v-if="tab == 2">
            <barwater />
          </div>
          <div style="height: 280px; width: 100%" v-if="tab == 3">
            <barzs />
          </div>
        </div>
      </div>
      <div class="right-box box" style="height: calc((100vh - 100px - 3rem) * 0.5)">
        <div class="right-box-title title">>绿化及生态治理</div>
        <div class="right-box-content"></div>
      </div>
    </div>
    <div class="switch" @click="showgongyi = !showgongyi">
      {{ showgongyi ? "返回" : "查看工艺流程" }}
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-image: url("./../assets/img/bg.png"); */
  background-size: 100% 100%;
}
.list-container {
  /* width: 300px; */
  /* height: 300px; */
  position: relative;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #00000078;
  margin: 0.2rem 0;
}

.list {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: all 1.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list .front-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list .front-content div {
  font-size: 0.8rem;
  color: #00ffff;
  opacity: 1;
  padding: 0.5rem;
  /* background: linear-gradient(-45deg, #29bdf8 0%, #0f48ff 100%); */
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  justify-content: space-between;
  width: 90%;
}
.list .front-content div b {
  color: #00d112;
  font-weight: bold;
}
.list .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: linear-gradient(-45deg, #074c58 0%, #2ba4c0 100%);
  color: #00ffff;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 5px;
  /* pointer-events: none; */
  transform: translateX(-99%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  font-size: 0.8rem;
}

.list .content .heading {
  font-size: 32px;
  font-weight: 700;
}
.list:hover {
  /* height: 80px; */
}
.list:hover .content {
  transform: translateY(0);
}

.list:hover .front-content {
  transform: translateX(-30%);
}

.list:hover .front-content p {
  opacity: 0;
}
.center {
  width: 52%;
}
.tab {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.tab-item {
  font-size: 0.8rem;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  width: 33%;
  text-align: center;
}
.active {
  background-color: #16449c;
}
.row {
  display: flex;
  justify-content: space-around;
}
.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 2rem;
}
.table-container {
  max-height: 200px;
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
  border: 1px solid #ddd; /* 根据需要调整 */
  text-align: center;
}
th {
  color: #ffffffb3;
  border: none;
  font-size: 0.7rem;
  padding: 0.5rem;
}
td {
  color: #abe8f0;
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
tr:nth-child(even) {
  background-color: #00000033;
}
tr th:last-child,
tr td:last-child {
  width: 15%;
}

tr th,
tr td {
  width: 15%;
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.switch {
  position: absolute;
  bottom: 290px;
  left: 27.4%;
  width: 100px;
  height: 40px;
  background-color: #16449c;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  border-radius: 10px;
}
.ebox {
  text-align: center;
  color: #ddd;
  margin-top: 1rem;
  width: 40%;
}
.ebg {
  font-family: "YousheBiaotiHei", sans-serif;
  background-image: url(/src/assets/img/ebg.png);
  background-size: 100% 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  /* margin-top: 0.5rem; */
  height: 6rem;
  color: #00ffff;
  font-weight: bold;
}
.flex-y {
  justify-content: center;
}
.zonghe-box {
  align-items: center;
  height: 120px;
  color: #13e3ff;
  background: #092cbf36;
  padding: 0 1rem 1rem;
  margin: 10px;
  box-sizing: content-box;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
}
.zonghe-box b {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 2px #13e3ff, 0 0 30px #37e7ff;
}
.zonghe-box div {
  color: #abe8f0;
  font-size: 1rem;
  word-break: keep-all;
}
.gongyi {
  background-image: url("./../assets/img/gongyi.jpg");
  background-size: 100% 100%;
}
.circle-container {
  background-image: url("./../assets/img/hbzhibiao.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 57%;
  position: relative;
  width: 45vw;
  height: 100%;
  margin: auto;
  border-radius: 50%;
}

.circle {
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0e76a875;
  box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 12px;
  padding: 10px;
  transform-origin: center center;
  z-index: calc(var(--i) * 1);
  transform: rotate(calc(360deg / 9 * var(--i))) translate(220px)
    rotate(calc(-360deg / 9 * var(--i)));
  border: 2px solid #2ca7ed;
}

.circle:nth-child(1) {
  transform: rotate(-40deg) translate(220px) rotate(40deg);
}

.circle:nth-child(2) {
  transform: rotate(0deg) translate(220px) rotate(0deg);
}

.circle:nth-child(3) {
  transform: rotate(40deg) translate(220px) rotate(-40deg);
}

.circle:nth-child(4) {
  transform: rotate(140deg) translate(220px) rotate(-140deg);
}

.circle:nth-child(5) {
  transform: rotate(180deg) translate(220px) rotate(-180deg);
}

.circle:nth-child(6) {
  transform: rotate(220deg) translate(220px) rotate(-220deg);
}
</style>
