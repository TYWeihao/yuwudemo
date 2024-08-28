<script setup>
import radar from "@/components/charts/rader.vue";
import Line2 from "@/components/charts/line2.vue";
import sangji from "@/components/charts/sangji.vue";
import bar from "@/components/charts/bar.vue";
import bar3 from "@/components/charts/bar3.vue";
import pie4 from "@/components/charts/pie4.vue";
import line4 from "@/components/charts/line4.vue";


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
        <div class="left-box-title title">耗能总览</div>
        <div class="left-box-content row">
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">6775.32</span>
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
                    3.2%
                  </div>
                </span>

              </div>
            </div>
          </div>
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">775.32</span>
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
                    3.2%
                  </div>
                </span>

              </div>
            </div>
          </div>
           <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">12.7189</span>
                <p class="card-content">
                <div>水资源消耗</div>
                <small>吨</small>
                </p>
              </div>
              <div class="date-box">
                <span class="month">
                  <div style="display: flex; align-items: center;font-size:10px">
                    <img class="down" style="  width: 0.2rem;  height: 0.6rem;  margin: 3px 1px 0  ;"
                      src="./../assets/img/down.png" alt="" />
                    1.5%
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">用能情况分析</div>
        <div class="left-box-content">
         <div style="display: flex">
            <div class="flex-y" style="width: 30%; font-size: 0.8rem; display: flex">
              <div
                style="color: #6be6c1;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #6be6c1"></div>
                  <b style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">能耗总量</b>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  131887t
                </div>
              </div>
              <div
                style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #99ffff"></div>
                  <div>电力</div>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  96510.89t
                </div>
              </div>
              <div
                style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #99ffff"></div>
                  <div>热力</div>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  31658.22t
                </div>
              </div>
              <div
                style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #99ffff"></div>
                  <div>天然气</div>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  2462.83t
                </div>
              </div>
              <div
                style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #99ffff"></div>
                  <div>汽油</div>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  530.1t
                </div>
              </div>
              <div
                style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                <div class="row" style="align-items: center">
                  <div class="circle" style="background-color: #99ffff"></div>
                  <div>柴油</div>
                </div>
                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                  1202.05t
                </div>
              </div>
            </div>
            <div style="width: 70%">
              <pie4 />
            </div>
          </div>
          <div style="width: 100%; height: 180px">
            <bar />
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">实时预警</div>
        <div class="left-box-content">
          <div class="table-container">
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
          </div>
        </div>
      </div>
    </div>
    <div class="center"  style="background-color:#00000090">
      <div class="center-box box" style="margin-top:20px">
        <div class="center-box-title title">能源流向图</div>
        <div class="center-box-content" style="height: 700px">
          <sangji />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">24小时能耗趋势</div>
        <div class="right-box-content"  style="height: 260px">
          <line4 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">系统耗能分析</div>
        <div class="right-box-content" style="height: 480px">
          <bar3 />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
.table-container {
  max-height: 160px;
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
</style>
