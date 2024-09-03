<script setup>
import bar2 from "@/components/charts/bar4.vue";
import pie2 from "@/components/charts/pie2.vue";
import line3 from "@/components/charts/line3.vue";
import Map from "./map.vue";

const xiangmuData = [
  {
    area: "晋A12345",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12346",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12347",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12348",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12349",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12350",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12351",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12352",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12353",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12354",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12355",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12356",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12357",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12358",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12359",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12360",
    status: "运煤车",
    energy: "出",
    money: "2024-09-01 12:00",
  },
  {
    area: "晋A12361",
    status: "危险品运输车",
    energy: "进",
    money: "2024-09-01 12:00",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">综合态势监测</div>
        <div class="left-box-content">
          <div style="display: flex; justify-content: space-around">
            <div class="ebox">
              <div class="ebg">2387.306吨</div>
              <div>废气排放总量</div>
            </div>
            <div class="ebox">
              <div class="ebg">2387.306吨</div>
              <div>废水排放总量</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-around">
            <div class="ebox">
              <div class="ebg">2387.306吨</div>
              <div>固废处置总量</div>
            </div>
            <div class="ebox">
              <div class="ebg">2387.306吨</div>
              <div>危废处置总量</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">废水废气监测</div>
        <div class="left-box-content flex-y">
          <div class="tab">
            <div class="tab-item" :class="{ active: tab == 1 }" @click="tab = 1">
              废水
            </div>
            <div class="tab-item" :class="{ active: tab == 2 }" @click="tab = 2">
              废气
            </div>
          </div>
          <div style="height: 280px; width: 100%">
            <bar2 />
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box" style="padding: 0; height: 500px">
        <Map />
      </div>
      <div class="center-box box">
        <div class="center-box-title">门禁情况</div>
        <div class="center-box-content" style="height: 200px">
          <div class="table-container">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>车牌号</th>
                    <th>车辆类型</th>
                    <th>进出情况</th>
                    <th>时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in xiangmuData" :key="item.name">
                    <td>{{ item.area }}</td>
                    <td>
                      {{ item.status }}
                    </td>
                    <td>{{ item.energy }}</td>
                    <td>{{ item.money }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">噪声监测</div>
        <div class="right-box-content" style="margin: 1rem 0">
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge1.png" alt="" />
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge2.png" alt="" />
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge3.png" alt="" />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">固废危废情况</div>
        <div class="right-box-content row">
          <div class="pie-left">
            <div>
              固废产生量
              <div style="font-size: 1.2rem; color: #ee6666; font-weight: bold">
                19.43 吨
              </div>
            </div>
            <div>
              固废综合利用量
              <div style="font-size: 1.2rem; color: #91cc75; font-weight: bold">
                28.23 吨
              </div>
            </div>
          </div>
          <div class="pie">
            <img src="./../assets/img/pie.png" alt="" />
          </div>

          <div class="pie-right">
            <div>
              固废处置量
              <div style="font-size: 1.2rem; color: #fac858; font-weight: bold">
                23.23 吨
              </div>
            </div>
            <div>
              固废贮存量
              <div style="font-size: 1.2rem; color: #5470c6; font-weight: bold">
                30.23 吨
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">环境保护成本统计</div>
        <div class="right-box-content" style="height: 280px">
          <pie2 />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tab {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
.tab-item {
  font-size: 0.6rem;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}
.active {
  background-color: #16449c;
}
.row {
  display: flex;
  justify-content: space-around;
}
.left,
.right {
  margin-top: 40px;
}
.center {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}
.box {
  background-image: url("./../assets/img/boxbg.png");
  background-size: 100% 100%;
  color: #ffffffb3;
  padding: 1rem;
  margin-bottom: 1rem;
}
.box .left-box-title,
.right-box-title,
.center-box-title {
  font-size: 1rem;
  /* text-align: center; */
  padding: 0.5rem 3rem;
  box-sizing: border-box;
  background-image: url(/src/assets/img/titlebgblue.png);
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
.left-box-content,
.right-box-content {
  padding: 0.5rem;
  box-sizing: border-box;
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
