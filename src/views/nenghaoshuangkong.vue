<script setup>
import sangji from "@/components/charts/sangji.vue";
import pie4 from "@/components/charts/pie4.vue";
import { ref } from "vue";
const num1 = ref(0);
const num2 = ref(56136.73);
setInterval(() => {
  num1.value = JSON.parse(JSON.stringify(num2.value));
  num2.value += 56136.73 / 330 / 24 / 60 / 6;
}, 10000);
const showDetail = ref(false);
const tab = ref(0);
function changeTab(index) {
  showDetail.value = true;
  tab.value = index;
}

const xiangmuData = [
  {
    area: "区域1",
    name: "设备1",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域2",
    name: "设备2",
    money: "2021-09-01 12:00:00",
    energy: "B相电流过大",
  },
  {
    area: "区域3",
    name: "设备3",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域4",
    name: "设备4",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域5",
    name: "设备5",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域6",
    name: "设备6",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域7",
    name: "设备7",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域8",
    name: "设备8",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域9",
    name: "设备9",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域10",
    name: "设备10",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域11",
    name: "设备11",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域12",
    name: "设备12",
    money: "2021-09-01 12:00:00",
    energy: "",
  },
    {
    area: "区域1",
    name: "设备1",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域2",
    name: "设备2",
    money: "2021-09-01 12:00:00",
    energy: "B相电流过大",
  },
  {
    area: "区域3",
    name: "设备3",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域4",
    name: "设备4",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域5",
    name: "设备5",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域6",
    name: "设备6",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域7",
    name: "设备7",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域8",
    name: "设备8",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域9",
    name: "设备9",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域10",
    name: "设备10",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域11",
    name: "设备11",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域12",
    name: "设备12",
    money: "2021-09-01 12:00:00",
    energy: "",
  },
    {
    area: "区域1",
    name: "设备1",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域2",
    name: "设备2",
    money: "2021-09-01 12:00:00",
    energy: "B相电流过大",
  },
  {
    area: "区域3",
    name: "设备3",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域4",
    name: "设备4",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域5",
    name: "设备5",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域6",
    name: "设备6",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域7",
    name: "设备7",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域8",
    name: "设备8",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域9",
    name: "设备9",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域10",
    name: "设备10",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域11",
    name: "设备11",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域12",
    name: "设备12",
    money: "2021-09-01 12:00:00",
    energy: "",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>耗能总览</div>
        <div class="left-box-content row">
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">29122.79</span>
                <p class="card-content">
                <div>电力消耗量</div>
                <small>兆瓦时</small>
                </p>
              </div>
              <div class="date-box">
                <span class="month">
                  <div style="display: flex; align-items: center;font-size:10px">
                    <img class="down"
                      style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;"
                      src="./../assets/img/up.png" alt="" />
                      0.35%
                  </div>
                </span>

              </div>
            </div>
          </div>
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">267670</span>
                <p class="card-content">
                <div>热力消耗量</div>
                <small>百万千焦</small>
                </p>
              </div>
              <div class="date-box">
                <span class="month">
                  <div style="display: flex; align-items: center;font-size:10px">
                    <img class="down"
                      style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;"
                      src="./../assets/img/up.png" alt="" />
                      0.22%
                  </div>
                </span>

              </div>
            </div>
          </div>
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">9585875</span>
                <p class="card-content">
                <div>水资源消耗</div>
                <small>吨</small>
                </p>
              </div>
              <div class="date-box">
                <span class="month">
                  <div style="display: flex; align-items: center;font-size:10px">
                    <img class="down"
                      style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;"
                      src="./../assets/img/up.png" alt="" />
                    3.03%
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 1.2rem; text-align: right">截止2024年11月</div>

      </div>
      <div class="left-box box">
        <div class="left-box-title title">>能耗分析</div>
        <div class="left-box-content" style="height:100%">
            <pie4 />
            <div
            style="
              display: flex;
              width: 100%;
              align-items: baseline;
              padding-left: 0.5rem;
margin-top:-0.5rem;
margin-bottom: 0.5rem;
              justify-content: center;
              font-size: 1rem;
            "
          >
           能耗总量
            <b
              style="
                font-size: 1rem;
                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >56136.73t</b
            >
            |
            <div style="display: flex; align-items: center;font-size:0.8rem;margin-left: 0.5rem;">
            同比
                    <img class="down"
                      style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;"
                      src="./../assets/img/down.png" alt="" />
                    1.96%
                  </div>
                  <!-- <div style="display: flex; align-items: center;font-size:0.8rem;margin-left: 0.5rem;">
            环比
                    <img class="down"
                      style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;"
                      src="./../assets/img/up.png" alt="" />
                    1.6%
                  </div> -->
            <!-- <small style="font-size: 0.8rem"> 万m³</small> -->
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>双控管理        </div>
        <div class="left-box-content">
          <div class="left-box-content row" style="flex-wrap: wrap">
          <div
            class="zl-card"
            style="border-right: 1px solid #bbb; border-bottom: 1px solid #bbb"
          >
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00ffff"
                  d="M6 3a2 2 0 0 0-2 2v11h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V5a2 2 0 0 0-2-2zm6 4V5h6v2zm0 2h6v2h-6zM8 5v4h2l-3 6v-4H5zm14 15v2H2v-2z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 1rem">
                  能耗总量
                </div>
              </div>
              <span class="zl-card-title">  <count-to :startVal="num1" :endVal="num2" :decimals="2"></count-to> <small>tce</small></span>
            </div>
          </div>
          <div class="zl-card" style="border-bottom: 1px solid #bbb">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffde00"
                  d="M20 16V4H8v12m14 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2m-6 16v2H4c-1.1 0-2-.9-2-2V7h2v13m12-9h2v3h-2m-3-8h2v8h-2m-3-6h2v6h-2Z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 1rem">
                  能耗强度
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >4.84 <small>kgce/t</small></span
              >
            </div>
            
          </div>
          <div class="zl-card" style="border-right: 1px solid #bbb"  @click="changeTab(0)">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#00ffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M11 8c2-3-2-3 0-6m4.5 6c2-3-2-3 0-6M6 10h.01M6 14h.01M10 16v-4m4 4v-4m4 4v-4"
                  />
                  <path
                    d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M5 20v2m14-2v2"
                  />
                </g>
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 1rem">
                  耗能设备
                </div>
              </div>
              <span class="zl-card-title">150 <small>项</small></span>
            </div>
          </div>

          <div class="zl-card">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffde00"
                  d="M19 12h-7V5c0-.6-.4-1-1-1c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-.6-.4-1-1-1m-7 7.9c-3.8.6-7.4-2.1-7.9-5.9c-.6-3.8 2.1-7.4 5.9-7.9V13c0 .6.4 1 1 1h6.9c-.4 3.1-2.8 5.5-5.9 5.9M15 2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1c0-3.9-3.1-7-7-7m1 6V4.1c2 .4 3.5 1.9 3.9 3.9z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 1rem">
                  节能成效
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >16728 <small>tce</small></span
              >
            </div>
          </div>
        </div>
          <!-- <div class="table-container">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>区域</th>
                    <th>报警内容</th>
                    <th>报警时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in xiangmuData" :key="item.name">
                    <td>{{ item.area }}</td>
                    <td>
                      {{ item.name }} <br />
                      {{ item.energy }}
                    </td>

                    <td>{{ item.money }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="center">
      <img src="./../assets/img/nengliu.png" alt="" />
          <!-- <sangji /> -->
    </div>
    <div v-if="showDetail" class="detail-box">
      <div class="detail-title">
        <div class="tab-title" @click="changeTab(0)" :class="{ active: tab === 0 }">
          能耗前20设备
        </div>
        <!-- 采掘生产部署系统运输系统通风系统机电(供电)系统排水系统压风系统监测监控及通讯系统办公及生活系统瓦斯抽采系统 -->
        <div class="tab-title" @click="changeTab(1)" :class="{ active: tab === 1 }">
          采掘生产部署系统
        </div>
        <div class="tab-title" @click="changeTab(2)" :class="{ active: tab === 2 }">
          运输系统
          </div>  
        <div class="tab-title" @click="changeTab(3)" :class="{ active: tab === 3 }">
          通风系统
          </div>
        <div class="tab-title" @click="changeTab(4)" :class="{ active: tab === 4 }">
          机电(供电)系统
          </div>
        <div class="tab-title" @click="changeTab(5)" :class="{ active: tab === 5 }">
          排水系统
          </div>
        <div class="tab-title" @click="changeTab(6)" :class="{ active: tab === 6 }">
          压风系统
          </div>
        <div class="tab-title" @click="changeTab(7)" :class="{ active: tab === 7 }">
          监测监控及通讯系统
          </div>
        <div class="tab-title" @click="changeTab(8)" :class="{ active: tab === 8 }">
          办公及生活系统
          </div>
        <div class="tab-title" @click="changeTab(9)" :class="{ active: tab === 9 }">
          瓦斯抽采系统
          </div>

      </div>
      <div class="detail-content">
        <div v-if="tab === 0">
          <div class="detail-item">
            <!-- 序号	装备名称	型号	数量	功率（kw）	年能耗（kwh）
1	东翼主皮带	DTL140/350/4*1000	4	4000	115200000
2	南三1#主皮带	DTL160/350/3*1000	4	4000	115200000
3	南翼主皮带	DTL140/250/4*500	4	2000	57600000
4	北翼主皮带	DTL140/250/4*500	4	2000	57600000
5	西翼主皮带	DTL140/250/4*500	4	2000	57600000
6	南翼二部皮带	DTL140/250/4*500	4	2000	57600000
7	南二胶带下山皮带	DTL140/250/4*500	4	2000	57600000
8	瓦斯泵	2BEC80-1BG3-YB4246	5	800	35040000
9	南三2#主皮带	DTL160/350/4*1000	4	1000	28800000
10	南五胶带下山主皮带	DTL160/350/4*1000	4	1000	28800000
11	电机	YB710S2-4	2	1120	19622400
12	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
13	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
14	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
15	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
16	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
17	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
18	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
19	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	15768000
20	东翼1.2米皮带（主）	——	2	800	11520000 -->
            <table>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>装备名称</th>
                  <th>型号</th>
                  <th>数量</th>
                  <th>功率（kw）</th>
                  <th>年能耗（kwh）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>东翼主皮带</td>
                  <td>DTL140/350/4*1000</td>
                  <td>4</td>
                  <td>4000</td>
                  <td>115200000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>南三1#主皮带</td>
                  <td>DTL160/350/3*1000</td>
                  <td>4</td>
                  <td>4000</td>
                  <td>115200000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>南翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>北翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>西翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>南翼二部皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>南二胶带下山皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>瓦斯泵</td>
                  <td>2BEC80-1BG3-YB4246</td>
                  <td>5</td>
                  <td>800</td>
                  <td>35040000</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>南三2#主皮带</td>
                  <td>DTL160/350/4*1000</td>
                  <td>4</td>
                  <td>1000</td>
                  <td>28800000</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>南五胶带下山主皮带</td>
                  <td>DTL160/350/4*1000</td>
                  <td>4</td>
                  <td>1000</td>
                  <td>28800000</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>电机</td>
                  <td>YB710S2-4</td>
                  <td>2</td>
                  <td>1120</td>
                  <td>19622400</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>东翼1.2米皮带（主）</td>
                  <td>——</td>
                  <td>2</td>
                  <td>800</td>
                  <td>11520000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="tab === 1">
          <div class="detail-item">
            <!-- 采（盘）区名称	目前生产情况	综采队组	综采队装备名称	型号	数量	功率（kw）	运行时间（小时）	年能耗（kwh）
东翼采区	主采	综采一队	采煤机	MG400/930-WD	1	930	18	6110100
东翼采区	主采	综采一队	带式输送机	DSJ120/180/4*400	1	1600	18	10512000
东翼采区	主采	综采一队	带式输送机	DSJ120/180/3*400	1	1200	18	7884000
东翼采区	主采	综采一队	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
东翼采区	主采	综采一队	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
东翼采区	主采	综采一队	转载机	SZZ1200/400	1	400	18	2628000
东翼采区	主采	综采一队	破碎机	PLM3500	1	250	18	1642500
西翼采区	主采	安装预备队	采煤机	MG400/930-WD	1	930	18	6110100
西翼采区	主采	安装预备队	带式输送机	DSJ120/180/4*400	1	1600	18	10512000
西翼采区	主采	安装预备队	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
西翼采区	主采	安装预备队	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
西翼采区	主采	安装预备队	转载机	SZZ1200/400	1	400	18	2628000
西翼采区	主采	安装预备队	破碎机	PLM3500	1	250	18	1642500
南一采区	主采	综采二队	采煤机	MG400/930-WD	1	930	18	6110100
南一采区	主采	综采二队	带式输送机	DSJ120/180/4*400	1	1600	18	10512000
南一采区	主采	综采二队	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
南一采区	主采	综采二队	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
南一采区	主采	综采二队	转载机	SZZ1200/400	1	400	18	2628000
南一采区	主采	综采二队	破碎机	PLM3500	1	250	18	1642500
南五采区	主采	综采预备队	采煤机	MG400/930-WD	1	930	18	6110100
南五采区	主采	综采预备队	带式输送机	DSJ120/180/4*400	1	1600	18	10512000
南五采区	主采	综采预备队	前部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
南五采区	主采	综采预备队	后部刮板输送机	SGZ1000/2×1200（变频）	1	2400	18	15768000
南五采区	主采	综采预备队	转载机	SZZ1200/400	1	400	18	2628000
南五采区	主采	综采预备队	破碎机	PLM3500	1	250	18	1642500 -->
            <table>
              <thead>
                <tr>
                  <th>采（盘）区名称</th>
                  <th>目前生产情况</th>
                  <th>综采队组</th>
                  <th>综采队装备名称</th>
                  <th>型号</th>
                  <th>数量</th>
                  <th>功率（kw）</th>
                  <th>运行时间（小时）</th>
                  <th>年能耗（kwh）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>采煤机</td>
                  <td>MG400/930-WD</td>
                  <td>1</td>
                  <td>930</td>
                  <td>18</td>
                  <td>6110100</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>带式输送机</td>
                  <td>DSJ120/180/4*400</td>
                  <td>1</td>
                  <td>1600</td>
                  <td>18</td>
                  <td>10512000</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>带式输送机</td>
                  <td>DSJ120/180/3*400</td>
                  <td>1</td>
                  <td>1200</td>
                  <td>18</td>
                  <td>7884000</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>转载机</td>
                  <td>SZZ1200/400</td>
                  <td>1</td>
                  <td>400</td>
                  <td>18</td>
                  <td>2628000</td>
                </tr>
                <tr>
                  <td>东翼采区</td>
                  <td>主采</td>
                  <td>综采一队</td>
                  <td>破碎机</td>
                  <td>PLM3500</td>
                  <td>1</td>
                  <td>250</td>
                  <td>18</td>
                  <td>1642500</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>采煤机</td>
                  <td>MG400/930-WD</td>
                  <td>1</td>
                  <td>930</td>
                  <td>18</td>
                  <td>6110100</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>带式输送机</td>
                  <td>DSJ120/180/4*400</td>
                  <td>1</td>
                  <td>1600</td>
                  <td>18</td>
                  <td>10512000</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>转载机</td>
                  <td>SZZ1200/400</td>
                  <td>1</td>
                  <td>400</td>
                  <td>18</td>
                  <td>2628000</td>
                </tr>
                <tr>
                  <td>西翼采区</td>
                  <td>主采</td>
                  <td>安装预备队</td>
                  <td>破碎机</td>
                  <td>PLM3500</td>
                  <td>1</td>
                  <td>250</td>
                  <td>18</td>
                  <td>1642500</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>采煤机</td>
                  <td>MG400/930-WD</td>
                  <td>1</td>
                  <td>930</td>
                  <td>18</td>
                  <td>6110100</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>带式输送机</td>
                  <td>DSJ120/180/4*400</td>
                  <td>1</td>
                  <td>1600</td>
                  <td>18</td>
                  <td>10512000</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>转载机</td>
                  <td>SZZ1200/400</td>
                  <td>1</td>
                  <td>400</td>
                  <td>18</td>
                  <td>2628000</td>
                </tr>
                <tr>
                  <td>南一采区</td>
                  <td>主采</td>
                  <td>综采二队</td>
                  <td>破碎机</td>
                  <td>PLM3500</td>
                  <td>1</td>
                  <td>250</td>
                  <td>18</td>
                  <td>1642500</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>采煤机</td>
                  <td>MG400/930-WD</td>
                  <td>1</td>
                  <td>930</td>
                  <td>18</td>
                  <td>6110100</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>带式输送机</td>
                  <td>DSJ120/180/4*400</td>
                  <td>1</td>
                  <td>1600</td>
                  <td>18</td>
                  <td>10512000</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>前部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>后部刮板输送机</td>
                  <td>SGZ1000/2×1200（变频）</td>
                  <td>1</td>
                  <td>2400</td>
                  <td>18</td>
                  <td>15768000</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>转载机</td>
                  <td>SZZ1200/400</td>
                  <td>1</td>
                  <td>400</td>
                  <td>18</td>
                  <td>2628000</td>
                </tr>
                <tr>
                  <td>南五采区</td>
                  <td>主采</td>
                  <td>综采预备队</td>
                  <td>破碎机</td>
                  <td>PLM3500</td>
                  <td>1</td>
                  <td>250</td>
                  <td>18</td>
                  <td>1642500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="tab === 2">
          <div class="detail-item">
            <!-- 装备名称	型号	安设地点	数量	功率kw	运行时间h	能耗kwh
防爆柴油单轨吊	DZ18003+3	南二、南五采区	2	80	3600	576000
防爆柴油单轨吊	DZ22004+4	南翼、南五采区	3	130	3600	1404000
防爆柴油单轨吊	DC210/160Y	南翼、南五采区	2	160	1903	608960
防爆柴油单轨吊	DZ1800 3+3	西翼采区	2	80	2864	458240
防爆柴油单轨吊	DZ1800 3+3	东翼采区	2	80	2864	458240
防爆柴油单轨吊	DC260/160Y	西翼采区	1	160	1432	229120
防爆柴油单轨吊	DC260/160Y	东翼采区	2	160	1432	458240
防爆柴油单轨吊	CCG/C200/160Y	北翼辅助运输大巷	2	160	1432	458240
南翼主皮带	DTL140/250/4*500	南翼胶带大巷	4	2000	7200	57600000
北翼主皮带	DTL140/250/4*500	北翼胶带输送机	4	2000	7200	57600000
西翼主皮带	DTL140/250/4*500	西翼胶带输送机	4	2000	7200	57600000
东翼主皮带	DTL140/350/4*1000	东翼胶带输送机	4	4000	7200	115200000
东翼1.2米皮带（主）	——	——	2	800	7200	11520000
南翼二部皮带	DTL140/250/4*500	南翼胶带大巷2#皮带	4	2000	7200	57600000
南二胶带下山皮带	DTL140/250/4*500	南二胶带下山皮带	4	2000	7200	57600000
南一上山主皮带	DTL140/250/2*400	南一胶带上山1#皮带	2	800	7200	11520000
南一上山120皮带	DTL140/250/2*400	南一胶带上山2#皮带	2	800	7200	11520000
南三1#主皮带	DTL160/350/3*1000	南三胶带大巷1#皮带	4	4000	7200	115200000
南三2#主皮带	DTL160/350/4*1000	南三胶带大巷2#皮带	4	1000	7200	28800000
南五胶带下山主皮带	DTL160/350/4*1000	南五胶带下山皮带	4	1000	7200	28800000
南翼配煤皮带	DTL140/250/90	南翼配仓 1#	2	90	7200	1296000
南翼破碎机	PLM-3500	——	1	315	7200	2268000
南三破碎机	——	——	2	160	7200	2304000
西翼破碎机	——	——	2	160	7200	2304000 -->
            <table>
              <thead>
                <tr>
                  <th>装备名称</th>
                  <th>型号</th>
                  <th>安设地点</th>
                  <th>数量</th>
                  <th>功率kw</th>
                  <th>运行时间h</th>
                  <th>能耗kwh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>防爆柴油单轨吊</td>
                  <td>DZ18003+3</td>
                  <td>南二、南五采区</td>
                  <td>2</td>
                  <td>80</td>
                  <td>3600</td>
                  <td>576000</td>
                </tr>
                <tr>
                  <td>防爆柴油单轨吊</td>
                  <td>DZ22004+4</td>
                  <td>南翼、南五采区</td>
                  <td>3</td>
                  <td>130</td>
                  <td>3600</td>
                  <td>1404000</td>
                </tr>
                <tr>
                  <td>防爆柴油单轨吊</td>
                  <td>DC210/160Y</td>
                  <td>南翼、南五采区</td>
                  <td>2</td>
                  <td>160</td>
                  <td>1903</td>
                  <td>608960</td>
                </tr>
                <tr>
                  <td>防爆柴油单轨吊</td>
                  <td>DZ1800 3+3</td>
                  <td>西翼采区</td>
                  <td>2</td>
                  <td>80</td>
                  <td>2864</td>
                  <td>458240</td>
                </tr>
                <tr>
                  <td>防爆柴油单轨吊</td>
                  <td>DZ1800 3+3</td>
                  <td>东翼采区</td>
                  <td>2</td>
                  <td>80</td>
                  <td>2864</td>
                  <td>458240</td>
                </tr>

                <tr>
                  <td>南翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>南翼胶带大巷</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>7200</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>北翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>北翼胶带输送机</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>7200</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>西翼主皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>西翼胶带输送机</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>7200</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>东翼主皮带</td>
                  <td>DTL140/350/4*1000</td>
                  <td>东翼胶带输送机</td>
                  <td>4</td>
                  <td>4000</td>
                  <td>7200</td>
                  <td>115200000</td>
                </tr>
                <tr>
                  <td>东翼1.2米皮带（主）</td>
                  <td>——</td>
                  <td>——</td>
                  <td>2</td>
                  <td>800</td>
                  <td>7200</td>
                  <td>11520000</td>
                </tr>
                <tr>
                  <td>南翼二部皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>南翼胶带大巷2#皮带</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>7200</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>南二胶带下山皮带</td>
                  <td>DTL140/250/4*500</td>
                  <td>南二胶带下山皮带</td>
                  <td>4</td>
                  <td>2000</td>
                  <td>7200</td>
                  <td>57600000</td>
                </tr>
                <tr>
                  <td>南一上山主皮带</td>
                  <td>DTL140/250/2*400</td>
                  <td>南一胶带上山1#皮带</td>
                  <td>2</td>
                  <td>800</td>
                  <td>7200</td>
                  <td>11520000</td>
                </tr>
                <tr>
                  <td>南一上山120皮带</td>
                  <td>DTL140/250/2*400</td>
                  <td>南一胶带上山2#皮带</td>
                  <td>2</td>
                  <td>800</td>
                  <td>7200</td>
                  <td>11520000</td>
                </tr>
                <tr>
                  <td>南三1#主皮带</td>
                  <td>DTL160/350/3*1000</td>
                  <td>南三胶带大巷1#皮带</td>
                  <td>4</td>
                  <td>4000</td>
                  <td>7200</td>
                  <td>115200000</td>
                </tr>
                <tr>
                  <td>南三2#主皮带</td>
                  <td>DTL160/350/4*1000</td>
                  <td>南三胶带大巷2#皮带</td>
                  <td>4</td>
                  <td>1000</td>
                  <td>7200</td>
                  <td>28800000</td>
                </tr>
                <tr>
                  <td>南五胶带下山主皮带</td>
                  <td>DTL160/350/4*1000</td>
                  <td>南五胶带下山皮带</td>
                  <td>4</td>
                  <td>1000</td>
                  <td>7200</td>
                  <td>28800000</td>
                </tr>
                <tr>
                  <td>南翼配煤皮带</td>
                  <td>DTL140/250/90</td>
                  <td>南翼配仓 1#</td>
                  <td>2</td>
                  <td>90</td>
                  <td>7200</td>
                  <td>1296000</td>
                </tr>
                <tr>
                  <td>南翼破碎机</td>
                  <td>PLM-3500</td>
                  <td>——</td>
                  <td>1</td>
                  <td>315</td>
                  <td>7200</td>
                  <td>2268000</td>
                </tr>
                </tbody>  
            </table>
          </div>
        </div>
        <div v-if="tab === 3">
          <div class="detail-item">
            <table>
              <thead>
                <tr>
                  <th>进回系统名称</th>
                  <th>风量（进/回）</th>
                  <th>装备名称（含风机/供暖）</th>
                  <th>型号</th>
                  <th>安设地点</th>
                  <th>数量</th>
                  <th>工作时间（h）</th>
                  <th>功率（kw）</th>
                  <th>年能耗（kwh）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>中央区</td>
                  <td>26433m³/min</td>
                  <td>主扇</td>
                  <td>ANN—3900/2000N</td>
                  <td>西风井主扇房</td>
                  <td>2</td>
                  <td>24</td>
                  <td>3200</td>
                  <td>56064000</td>
                </tr>
                <tr>
                  <td>北风井区</td>
                  <td>28038m³/min</td>
                  <td>主扇</td>
                  <td>ANN—3900/2000B</td>
                  <td>北风井主扇房</td>
                  <td>2</td>
                  <td>24</td>
                  <td>3200</td>
                  <td>56064000</td>
                </tr>
                <tr>
                  <td>南风井区</td>
                  <td>29139m³/min</td>
                  <td>主扇</td>
                  <td>AGF606-4.0-2.0-2</td>
                  <td>南风井主扇房</td>
                  <td>3</td>
                  <td>24</td>
                  <td>4000</td>
                  <td>105120000</td>
                </tr>
                <tr>
                  <td>掘进工作面</td>
                  <td>400-1600m³/min</td>
                  <td>局扇</td>
                  <td>FBDNo7.1</td>
                  <td>井下</td>
                  <td>48</td>
                  <td>24</td>
                  <td>2*45</td>
                  <td>37843200</td>
                </tr>
                <tr>
                  <td>煤仓、水仓</td>
                  <td>200-400m³/min</td>
                  <td>局扇</td>
                  <td>FBDNo7.1</td>
                  <td>井下</td>
                  <td>10</td>
                  <td>24</td>
                  <td>2*11</td>
                  <td>1927200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="tab === 4">
          <div class="detail-item">
            <table>
      <thead>
        <tr>
          <th>安装地点</th>
          <th>电表编号</th>
          <th>1月</th>
          <th>2月</th>
          <th>3月</th>
          <th>4月</th>
          <th>5月</th>
          <th>6月</th>
          <th>7月</th>
          <th>8月</th>
          <th>9月</th>
          <th>10月</th>
          <th>11月</th>
          <th>12月</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>832</td>
          <td>74.74</td>
          <td>73.15</td>
          <td>77.62</td>
          <td>70.03</td>
          <td>68.58</td>
          <td>43.21</td>
          <td>27.44</td>
          <td>14.96</td>
          <td>12.92</td>
          <td>16.27</td>
          <td>19.78</td>
          <td>36.75</td>
          <td>1367.426</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>866</td>
          <td>51.97</td>
          <td>52.70</td>
          <td>53.38</td>
          <td>50.92</td>
          <td>54.53</td>
          <td>39.91</td>
          <td>25.22</td>
          <td>32.51</td>
          <td>24.66</td>
          <td>7.12</td>
          <td>10.61</td>
          <td>30.04</td>
          <td>1299.559</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>833</td>
          <td>4.97</td>
          <td>5.31</td>
          <td>7.12</td>
          <td>7.09</td>
          <td>7.31</td>
          <td>7.21</td>
          <td>8.76</td>
          <td>11.06</td>
          <td>10.61</td>
          <td>11.90</td>
          <td>11.23</td>
          <td>13.68</td>
          <td>939.2624</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>865</td>
          <td>3.36</td>
          <td>3.85</td>
          <td>6.77</td>
          <td>6.83</td>
          <td>7.12</td>
          <td>6.04</td>
          <td>6.69</td>
          <td>7.31</td>
          <td>7.15</td>
          <td>8.98</td>
          <td>10.15</td>
          <td>9.79</td>
          <td>949.0306</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>834</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.50
          </td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.00</td>
          <td>0.01</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>834.5514</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>864</td>
          <td>93.42</td>
          <td>98.46</td>
          <td>111.08</td>
          <td>97.81</td>
          <td>108.13</td>
          <td>71.62</td>
          <td>113.35</td>
          <td>106.00</td>
          <td>107.32</td>
          <td>99.79</td>
          <td>99.92</td>
          <td>88.27</td>
          <td>2059.161</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>837</td>
          <td>105.39</td>
          <td>106.54</td>
          <td>119.39</td>
          <td>106.56</td>
          <td>115.97</td>
          <td>86.18</td>
          <td>120.08</td>
          <td>108.51</td>
          <td>109.73</td>
          <td>105.93</td>
          <td>98.15</td>
          <td>89.48</td>
          <td>2108.891</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>861</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>2.27</td>
          <td>0.02</td>
          <td>0.00
          </td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>0.01</td>
          <td>861.0006</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>838</td>
          <td>0.01</td>
          <td>0.00</td>
          <td>0.01</td>
          <td>5.15</td>
          <td>8.20</td>
          <td>8.53</td>
          <td>9.43</td>
          <td>9.73</td>
          <td>8.53</td>
          <td>8.32</td>
          <td>7.78</td>
          <td>8.09</td>
          <td>911.758</td>
        </tr>
        <tr>
          <td>中央区110kV变电站10kV室</td>
          <td>839</td>
          <td>62.01</td>
          <td>66.29</td>
          <td>57.74</td>
          <td>60.26</td>
          <td>49.14</td>
          <td>78.78</td>
          <td>33.32</td>
          <td>68.29</td>
          <td>43.84</td>
          <td>65.42</td>
          <td>37.57</td>
          <td>65.44</td>
          <td>1527.112</td>
        </tr>
        </tbody>
    </table>
  </div>  
        </div>
        <div v-if="tab===5">
          <div class="detail-item">
            <!-- 供排水点名称（中央水泵房/采盘区/采掘工作面等）	设备名称	设备型号	安设（使用）地点	运行数量	功率kw	运行时间平均单机开机时间（h）	能耗（kwh）	年能耗kwh
中央水泵房	水泵	MD450-60/84×10	中央主排水泵房	2	0	24	0	0
南风井水泵房	水泵	MD450-60/84×11	南风井主排水泵房	1	0	4	0	0
中央水泵房	电机	YB710S2-4	中央主排水泵房	2	1120	24	53760	19622400
南风井水泵房	电机	YB270M1-4	南风井主排水泵房	1	1120	4	4480	1635200
南一上山采区排水水仓	水泵	——	南一上山采区	1	0	4	0	0
南一上山采区排水水仓	电机	YDKE3-315 S-4	南一上山采区	1	110	4	440	160600
南二、南五采区水仓	电机	YB3-315S-4等	——	8	110	24	21120	7708800
南二、南五采区水仓	电机	YB3-315S-4等	——	5	160	24	19200	7008000
南二、南五采区水仓	电机	YB3-315S-4等	——	1	90	24	2160	788400
沉淀池	电机	——	——	5	45	24	5400	1971000
沉淀池	电机	——	——	1	18.5	24	444	162060
沉淀池	电机	——	——	5	35	24	4200	1533000 -->
            <table>
              <thead>
                <tr>
                  <th>供排水点名称</th>
                  <th>设备名称</th>
                  <th>设备型号</th>
                  <th>安设（使用）地点</th>
                  <th>运行数量</th>
                  <th>功率kw</th>
                  <th>运行时间平均单机开机时间（h）</th>
                  <th>能耗（kwh）</th>
                  <th>年能耗kwh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>中央水泵房</td>
                  <td>水泵</td>
                  <td>MD450-60/84×10</td>
                  <td>中央主排水泵房</td>
                  <td>2</td>
                  <td>0</td>
                  <td>24</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>南风井水泵房</td>
                  <td>水泵</td>
                  <td>MD450-60/84×11</td>
                  <td>南风井主排水泵房</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>中央水泵房</td>
                  <td>电机</td>
                  <td>YB710S2-4</td>
                  <td>中央主排水泵房</td>
                  <td>2</td>
                  <td>1120</td>
                  <td>24</td>
                  <td>53760</td>
                  <td>19622400</td>
                </tr>
                <tr>
                  <td>南风井水泵房</td>
                  <td>电机</td>
                  <td>YB270M1-4</td>
                  <td>南风井主排水泵房</td>
                  <td>1</td>
                  <td>1120</td>
                  <td>4</td>
                  <td>4480</td>
                  <td>1635200</td>
                </tr>
                <tr>
                  <td>南一上山采区排水水仓</td>
                  <td>水泵</td>
                  <td>——</td>
                  <td>南一上山采区</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>南一上山采区排水水仓</td>
                  <td>电机</td>
                  <td>YDKE3-315 S-4</td>
                  <td>南一上山采区</td>
                  <td>1</td>
                  <td>110</td>
                  <td>4</td>
                  <td>440</td>
                  <td>160600</td>
                </tr>
                <tr>
                  <td>南二、南五采区水仓</td>
                  <td>电机</td>
                  <td>YB3-315S-4等</td>
                  <td>——</td>
                  <td>8</td>
                  <td>110</td>
                  <td>24</td>
                  <td>21120</td>
                  <td>7708800</td>
                </tr>
                <tr>
                  <td>南二、南五采区水仓</td>
                  <td>电机</td>
                  <td>YB3-315S-4等</td>
                  <td>——</td>
                  <td>5</td>
                  <td>160</td>
                  <td>24</td>
                  <td>19200</td>
                  <td>7008000</td>
                </tr>
                <tr>
                  <td>南二、南五采区水仓</td>
                  <td>电机</td>
                  <td>YB3-315S-4等</td>
                  <td>——</td>
                  <td>1</td>
                  <td>90</td>
                  <td>24</td>
                  <td>2160</td>
                  <td>788400</td>
                </tr>
                <tr>
                  <td>沉淀池</td>
                  <td>电机</td>
                  <td>——</td>
                  <td>——</td>
                  <td>5</td>
                  <td>45</td>
                  <td>24</td>
                  <td>5400</td>
                  <td>1971000</td>
                </tr>
                <tr>
                  <td>沉淀池</td>
                  <td>电机</td>
                  <td>——</td>
                  <td>——</td>
                  <td>1</td>
                  <td>18.5</td>
                  <td>24</td>
                  <td>444</td>
                  <td>162060</td>
                </tr>
                <tr>
                  <td>沉淀池</td>
                  <td>电机</td>
                  <td>——</td>
                  <td>——</td>
                  <td>5</td>
                  <td>35</td>
                  <td>24</td>
                  <td>4200</td>
                  <td>1533000</td>
                </tr>
              </tbody>
            </table>
          </div>  
        </div>
        <div v-if="tab===6">
          <div class="detail-item">
            <!-- 编号	设备类型	型号	排气量	额定压力	功率kw	工作时间（h）	年能耗kwh
中央区1#压风机	螺杆式空气压缩机	SA250W-10K	40.5m3/min	0.8MPa	250	24	2190000
中央区2#压风机	螺杆式空气压缩机	SA250W-10K	40.5m3/min	0.8MPa	250	24	2190000
中央区3#压风机	螺杆式空气压缩机	SA250W-10K	40.5m3/min	0.8MPa	250	24	2190000
中央区4#压风机	螺杆式空气压缩机	SA250W-10K	40.5m3/min	0.8MPa	250	24	2190000
中央区5#压风机	螺杆式空气压缩机	SA250W-10K	40.5m3/min	0.8MPa	250	24	2190000
3701#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3702#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3703#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3704#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3705#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3706#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3707#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
3708#压风机	螺杆式空气压缩机	SA250W-10K	46.3m3/min	0.8MPa	250	24	2190000
北风井1#压风机	螺旋式空气压缩机	GLFII200-8	43m3/min	0.8MPa	200	24	1752000
北风井2#压风机	螺旋式空气压缩机	GLFII200-8	43m3/min	0.8MPa	200	24	1752000
北风井3#压风机	螺旋式空气压缩机	GLFII200-8	43m3/min	0.8MPa	200	24	1752000
北风井4#压风机	螺旋式空气压缩机	LS25S-300H AC SULL	43m3/min	0.8MPa	200	24	1752000
北风井5#压风机	螺旋式空气压缩机	LS25S-300H AC SULL	38.6m3/min	0.8MPa	224	24	1962240
南风井1#压风机	螺旋式空气压缩机	SA250A-10K	42m3/min	0.8MPa	250	24	2190000
南风井2#压风机	螺旋式空气压缩机	SA250A-10K	42m3/min	0.8MPa	250	24	2190000
南风井3#压风机	螺旋式空气压缩机	SA250A-10K	42m3/min	0.8MPa	250	24	2190000
南风井4#压风机	螺旋式空气压缩机	SA250A-10K	42m3/min	0.8MPa	250	24	2190000
南风井5#压风机	螺旋式空气压缩机	SA250A-10K	42m3/min	0.8MPa	250	24	2190000 -->
            <table>
              <thead>
                <tr>
                  <th>编号</th>
                  <th>设备类型</th>
                  <th>型号</th>
                  <th>排气量</th>
                  <th>额定压力</th>
                  <th>功率kw</th>
                  <th>工作时间（h）</th>
                  <th>年能耗kwh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>中央区1#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>40.5m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>中央区2#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>40.5m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>中央区3#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>40.5m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>中央区4#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>40.5m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>中央区5#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>40.5m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3701#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3702#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3703#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3704#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3705#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3706#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3707#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>3708#压风机</td>
                  <td>螺杆式空气压缩机</td>
                  <td>SA250W-10K</td>
                  <td>46.3m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>北风井1#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>GLFII200-8</td>
                  <td>43m3/min</td>
                  <td>0.8MPa</td>
                  <td>200</td>
                  <td>24</td>
                  <td>1752000</td>
                </tr>
                <tr>
                  <td>北风井2#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>GLFII200-8</td>
                  <td>43m3/min</td>
                  <td>0.8MPa</td>
                  <td>200</td>
                  <td>24</td>
                  <td>1752000</td>
                </tr>
                <tr>
                  <td>北风井3#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>GLFII200-8</td>
                  <td>43m3/min</td>
                  <td>0.8MPa</td>
                  <td>200</td>
                  <td>24</td>
                  <td>1752000</td>
                </tr>
                <tr>
                  <td>北风井4#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>LS25S-300H AC SULL</td>
                  <td>43m3/min</td>
                  <td>0.8MPa</td>
                  <td>200</td>
                  <td>24</td>
                  <td>1752000</td>
                </tr>
                <tr>
                  <td>北风井5#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>LS25S-300H AC SULL</td>
                  <td>38.6m3/min</td>
                  <td>0.8MPa</td>
                  <td>224</td>
                  <td>24</td>
                  <td>1962240</td>
                </tr>
                <tr>
                  <td>南风井1#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>SA250A-10K</td>
                  <td>42m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>南风井2#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>SA250A-10K</td>
                  <td>42m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>南风井3#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>SA250A-10K</td>
                  <td>42m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>南风井4#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>SA250A-10K</td>
                  <td>42m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
                <tr>
                  <td>南风井5#压风机</td>
                  <td>螺旋式空气压缩机</td>
                  <td>SA250A-10K</td>
                  <td>42m3/min</td>
                  <td>0.8MPa</td>
                  <td>250</td>
                  <td>24</td>
                  <td>2190000</td>
                </tr>
              </tbody>
            </table>
            </div>
            </div>  
            <div v-if="tab===7">
              <div class="detail-item">
                <!-- 设备名称	设备型号	在用数量	单机功率（W）	工作时间（h）	年能耗（Wh）
监控分站	KJF130	104	7.2	24	6559488
隔爆兼本安型
多路电源	KDW65	98	342.9	24	294372792
激光甲烷传感器	GJG100J	224	0.9	24	1766016
矿用一氧化碳
传感器	KGA5	187	0.7	24	1146684
温度传感器	KG3007A	73	0.7	24	447636
烟雾传感器	GQQ5(A)	81	1.44	24	1021766.4
风速传感器	GFY15	25	0.9	24	197100
粉尘传感器	GCG1000	17	1.8	24	268056
二氧化碳传感器	KGQ9	16	1.8	24	252288
矿用氧气传感器	KGQ7	25	0.7	24	153300
机电设备开停
传感器	KGT15	166	0.63	24	916120.8
远程控制开关	KDG15A	91	2.16	24	1721865.6
风门开闭状态
传感器	KGE22	58	3	24	1524240
风筒风量传感器	GFT16	30	0.7	24	183960
负压传感器	KGY3A	7	0.72	24	44150.4
氢气传感器	GQH1	4	0.9	24	31536
硫化氢传感器	KGQ8	1	2.7	24	23652
湿度传感器	GWSD50/100	2	0.7	24	12264
语音声光报警器	KXB18A	13	5.4	24	614952
本安显示屏	PHL18	4	15.3	24	536112
千兆环网交换机	KJJ58	21	150	24	27594000 -->
                <table>
                  <thead>
                    <tr>
                      <th>设备名称</th>
                      <th>设备型号</th>
                      <th>在用数量</th>
                      <th>单机功率（W）</th>
                      <th>工作时间（h）</th>
                      <th>年能耗（Wh）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>监控分站</td>
                      <td>KJF130</td>
                      <td>104</td>
                      <td>7.2</td>
                      <td>24</td>
                      <td>6559488</td>
                    </tr>
                    <tr>
                      <td>隔爆兼本安型多路电源</td>
                      <td>KDW65</td>
                      <td>98</td>
                      <td>342.9</td>
                      <td>24</td>
                      <td>294372792</td>
                    </tr>
                    <tr>
                      <td>激光甲烷传感器</td>
                      <td>GJG100J</td>
                      <td>224</td>
                      <td>0.9</td>
                      <td>24</td>
                      <td>1766016</td>
                    </tr>
                    <tr>
                      <td>矿用一氧化碳传感器</td>
                      <td>KGA5</td>
                      <td>187</td>
                      <td>0.7</td>
                      <td>24</td>
                      <td>1146684</td>
                    </tr>
                    <tr>
                      <td>温度传感器</td>
                      <td>KG3007A</td>
                      <td>73</td>
                      <td>0.7</td>
                      <td>24</td>
                      <td>447636</td>
                    </tr>
                    <tr>
                      <td>烟雾传感器</td>
                      <td>GQQ5(A)</td>
                      <td>81</td>
                      <td>1.44</td>
                      <td>24</td>
                      <td>1021766.4</td>
                    </tr>
                    <tr>
                      <td>风速传感器</td>
                      <td>GFY15</td>
                      <td>25</td>
                      <td>0.9</td>
                      <td>24</td>
                      <td>197100</td>
                    </tr>
                    <tr>
                      <td>粉尘传感器</td>
                      <td>GCG1000</td>
                      <td>17</td>
                      <td>1.8</td>
                      <td>24</td>
                      <td>268056</td>
                    </tr>
                    <tr>
                      <td>二氧化碳传感器</td>
                      <td>KGQ9</td>
                      <td>16</td>
                      <td>1.8</td>
                      <td>24</td>
                      <td>252288</td>
                    </tr>
                    <tr>
                      <td>矿用氧气传感器</td>
                      <td>KGQ7</td>
                      <td>25</td>
                      <td>0.7</td>
                      <td>24</td>
                      <td>153300</td>
                    </tr>
                    <tr>
                      <td>机电设备开停传感器</td>
                      <td>KGT15</td>
                      <td>166</td>
                      <td>0.63</td>
                      <td>24</td>
                      <td>916120.8</td>
                    </tr>
                    <tr>
                      <td>远程控制开关</td>
                      <td>KDG15A</td>
                      <td>91</td>
                      <td>2.16</td>
                      <td>24</td>
                      <td>1721865.6</td>
                    </tr>
                    <tr>
                      <td>风门开闭状态传感器</td>
                      <td>KGE22</td>
                      <td>58</td>
                      <td>3</td>
                      <td>24</td>
                      <td>1524240</td>
                    </tr>
                    <tr>
                      <td>风筒风量传感器</td>
                      <td>GFT16</td>
                      <td>30</td>
                      <td>0.7</td>
                      <td>24</td>
                      <td>183960</td>
                    </tr>
                    <tr>
                      <td>负压传感器</td>
                      <td>KGY3A</td>
                      <td>7</td>
                      <td>0.72</td>
                      <td>24</td>
                      <td>44150.4</td>
                    </tr>
                    <tr>
                      <td>氢气传感器</td>
                      <td>GQH1</td>
                      <td>4</td>
                      <td>0.9</td>
                      <td>24</td>
                      <td>31536</td>
                    </tr>
                    <tr>
                      <td>硫化氢传感器</td>
                      <td>KGQ8</td>
                      <td>1</td>
                      <td>2.7</td>
                      <td>24</td>
                      <td>23652</td>
                    </tr>
                    <tr>
                      <td>湿度传感器</td>
                      <td>GWSD50/100</td>
                      <td>2</td>
                      <td>0.7</td>
                      <td>24</td>
                      <td>12264</td>
                    </tr>
                    <tr>
                      <td>语音声光报警器</td>
                      <td>KXB18A</td>
                      <td>13</td>
                      <td>5.4</td>
                      <td>24</td>
                      <td>614952</td>
                    </tr>
                    <tr>
                      <td>本安显示屏</td>
                      <td>PHL18</td>
                      <td>4</td>
                      <td>15.3</td>
                      <td>24</td>
                      <td>536112</td>
                    </tr>
                    <tr>
                      <td>千兆环网交换机</td>
                      <td>KJJ58</td>
                      <td>21</td>
                      <td>150</td>
                      <td>24</td>
                      <td>27594000</td>
                    </tr>
                  </tbody>
                </table>
              </div>  
              </div>  
              <div v-if="tab===8">
                <div class="detail-item">
                <p style="color:#00ffff">煤矿办公生活系统是一个综合性的体系，旨在提升管理效率、办公便捷性以及职工的生活质量。该系统通常涵盖办公管理、生活环境改善、后勤保障等多个方面。
                  2024年8月份所有办公生活用电60.88kwh。</p>
                  


                </div>  
                </div>  
                <div v-if="tab===9">
                  <div class="detail-item">
                    <!-- 序号	瓦斯抽采设备名称（泵站/钻机）	型号	安设（使用）地点	数量	功率（KW）	运行时间（h）	年能耗量kwh
1	瓦斯泵	2BEC72-1BG3-YB4246	中央区瓦斯泵站	5，现运行情况开2台	560	24	9811200
2	瓦斯泵	2BEC80-1BG3-YB4246	南风井瓦斯泵站	5	800	24	35040000
3		2BEC80		1	800	24	7008000
4	瓦斯泵	CBF530-2BG3	东翼临时瓦斯抽采泵站	4，现运行情况开2台	355	24	6219600
5	瓦斯泵	CBF430-2BG3	南翼临时瓦斯抽采泵站	4，全部停机	250	24	——
6	瓦斯泵	2BEC52	南一回风临时瓦斯抽采泵站	5台，现运行情况开1台	315	24	2759400
7	瓦斯泵	2BEC52	南二临时瓦斯抽采泵站	2	315	24	5518800
8		2BF430-2BG3		2	250	24	4380000
9	瓦斯泵	2BEY52	南三临时瓦斯抽采泵	4，全部停机	315	24	—— -->
                    <table>
                      <thead>
                        <tr>
                          <th>序号</th>
                          <th>瓦斯抽采设备名称（泵站/钻机）</th>
                          <th>型号</th>
                          <th>安设（使用）地点</th>
                          <th>数量</th>
                          <th>功率（KW）</th>
                          <th>运行时间（h）</th>
                          <th>年能耗量kwh</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>瓦斯泵</td>
                          <td>2BEC72-1BG3-YB4246</td>
                          <td>中央区瓦斯泵站</td>
                          <td>5，现运行情况开2台</td>
                          <td>560</td>
                          <td>24</td>
                          <td>9811200</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td rowSpan="2">瓦斯泵</td>
                          <td>2BEC80-1BG3-YB4246</td>
                          <td rowSpan="2">南风井瓦斯泵站</td>
                          <td>5</td>
                          <td>800</td>
                          <td>24</td>
                          <td>35040000</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>2BEC80</td>
                          <td>1</td>
                          <td>800</td>
                          <td>24</td>
                          <td>7008000</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>瓦斯泵</td>
                          <td>CBF530-2BG3</td>
                          <td>东翼临时瓦斯抽采泵站</td>
                          <td>4，现运行情况开2台</td>
                          <td>355</td>
                          <td>24</td>
                          <td>6219600</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>瓦斯泵</td>
                          <td>CBF430-2BG3</td>
                          <td>南翼临时瓦斯抽采泵站</td>
                          <td>4，全部停机</td>
                          <td>250</td>
                          <td>24</td>
                          <td>——</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>瓦斯泵</td>
                          <td>2BEC52</td>
                          <td>南一回风临时瓦斯抽采泵站</td>
                          <td>5台，现运行情况开1台</td>
                          <td>315</td>
                          <td>24</td>
                          <td>2759400</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td rowSpan="2">瓦斯泵</td>
                          <td>2BEC52</td>
                          <td rowSpan="2">南二临时瓦斯抽采泵站</td>
                          <td>2</td>
                          <td>315</td>
                          <td>24</td>
                          <td>5518800</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>2BF430-2BG3</td>
                          <td>2</td>
                          <td>250</td>
                          <td>24</td>
                          <td>4380000</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>瓦斯泵</td>
                          <td>2BEY52</td>
                          <td>南三临时瓦斯抽采泵</td>
                          <td>4，全部停机</td>
                          <td>315</td>
                          <td>24</td>
                          <td>——</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>  
                  </div>  
      </div>
    </div>
    <div class="mask" @click="showDetail = false" v-if="showDetail"></div>
    <!-- <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">24小时能耗趋势</div>
        <div class="right-box-content"  style="height: 90%">
          <line4 />
        </div>
      </div>
      <div class="right-box box" style=" height:calc((100vh - 100px - 3rem) * 0.66);">
        <div class="right-box-title title">系统耗能分析</div>
        <div class="right-box-content" style="height: 460px">
          <bar3 />
        </div>
      </div>
    </div> -->
  </main>
</template>

<style scoped>
.zl-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 50%;
}
.zl-icon {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
}
.zl-icon img {
  width: 2rem;
  height: 2rem;
}
.zl-card-title,.zl-card-title span {
  font-size: 1.2rem;
  color: #0ff;
  font-weight: 800;
}
.center{
  width: 73%;
  height: calc(100vh - 100px - 5rem);
  margin-top: 0.5rem;
  background-color: #0a1d7155;
}
.co2zonglan01 {
  font-size: 1rem;
  height: 3rem;
  padding: 0.5rem 2rem 0.5rem 3.5rem;

  box-sizing: border-box;
  background-image: url(/src/assets/img/01.png);
  background-size: 100% 100%;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.co2zonglan02 {
  font-size: 1rem;
  height: 3rem;
  padding: 0.5rem 2rem 0.5rem 3.5rem;

  box-sizing: border-box;
  background-image: url(/src/assets/img/02.png);
  background-size: 100% 100%;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.co2zonglan03 {
  font-size: 1rem;
  height: 3rem;
  padding: 0.5rem 2rem 0.5rem 3.5rem;
  box-sizing: border-box;
  background-image: url(/src/assets/img/02.png);
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
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

.ebox {
  text-align: center;
  color: #ddd;
  margin-bottom: 1rem;
}
.ebg {
  background-image: url(/src/assets/img/ebg.png);
  background-size: 100% 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  /* margin-top: 0.5rem; */
  height: 6rem;
  color: #ffffffb3;
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
.detail-box {
  height: 80%;
  /* width:80% */
}
.detail-content {
  overflow-y: auto;
  padding: 1rem;
  height: calc(100% - 10rem);
}
.detail-content::-webkit-scrollbar {
  width: 0.5rem;
}

</style>
