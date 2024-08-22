<script setup>
import radar from "@/components/charts/rader.vue";
import Line2 from "@/components/charts/line2.vue";
import sangji from "@/components/charts/sangji.vue";
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
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">设备监控</div>
        <div class="left-box-content row">
          <div class="zonghe-box flex-y">
            <b class="text-green">238</b>
            <div>设备总数</div>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">222</b>
            <div>在线设备</div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">能效分析</div>
        <div class="left-box-content row">
          <div class="pie-left">
            <div>
              用水量
              <div style="font-size: 1.2rem; color: #ee6666; font-weight: bold">19%</div>
            </div>
            <div>
              用热量
              <div style="font-size: 1.2rem; color: #91cc75; font-weight: bold">28%</div>
            </div>
          </div>
          <div class="pie">
            <img src="./../assets/img/pie.png" alt="" />
          </div>
          <div class="pie-right">
            <div>
              用电量
              <div style="font-size: 1.2rem; color: #fac858; font-weight: bold">23%</div>
            </div>
            <div>
              用煤量
              <div style="font-size: 1.2rem; color: #5470c6; font-weight: bold">30%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">实时预警</div>
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
    <div class="center">
      <div class="center-box box">
        <div class="center-box-title">能源流向图</div>
        <div class="center-box-content" style="height: 300px">
          <sangji />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">月综合能耗</div>
        <div class="right-box-content">
          <radar />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">年度产品产量</div>
        <div class="right-box-content" style="height: 260px">
          <Line2 />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
}
.left,
.right {
  margin-top: 30px;
}
.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
}
.box {
  background-image: url("./../assets/img/boxbg.png");
  background-size: 100% 100%;
  color: #fff;
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
  max-height: 220px;
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
  color: #fff;
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
  color: #fff;
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
