<script setup>
const xiangmuData = [
  {
    name: "项目1",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目2",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目3",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目4",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目5",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目6",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目7",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目8",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目9",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
  {
    name: "项目10",
    status: "已完成",
    money: "1000万",
    energy: "1000吨标准煤",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">矿山简介</div>
        <div class="left-box-content" style="max-height: 100px; overflow: hidden">
          山西潞安集团余吾煤业有限责任公司位于屯留区后庄北村，全矿现有5600余人，全矿井田规划面积为161.205平方千米,现设计生产能力为750万t/a，设计服务年限为53.86年，并建有一座设计能力力900万ta的选煤厂，是一座集机械化采煤、行政办公、生活福利等为一体的现代化大型煤矿。目前，煤矿主要开采3#煤层，根据采矿许可证，开采标高为800-30m，井田行政区划分属屯留区和襄垣县。主井工业场地、阎庄风井场地、南风井工业场地位于屯留区境内。
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">碳排放总览</div>
        <div class="left-box-content">
          <div class="co2zonglan01">
            <div><b>2387.306</b> <small>吨CO2</small></div>
            直接排放
          </div>
          <div class="co2zonglan02">
            <div><b>2387.306</b> <small>吨CO2</small></div>
            间接排放
          </div>
          <div class="co2zonglan03">
            <div><b>2387.306</b> <small>吨CO2</small></div>
            本地排放
          </div>
        </div>
        <div class="left-box-title">碳排放占比</div>
        <div class="left-box-content row">
          <div class="pie-left">
            <div>
              化石燃料燃烧
              <div style="font-size: 1.2rem; color: #ee6666; font-weight: bold">19%</div>
            </div>
            <div>
              二氧化碳逃逸
              <div style="font-size: 1.2rem; color: #91cc75; font-weight: bold">28%</div>
            </div>
          </div>
          <div class="pie">
            <img src="./../assets/img/pie.png" alt="" />
          </div>
          <div class="pie-right">
            <div>
              购入电力排放
              <div style="font-size: 1.2rem; color: #fac858; font-weight: bold">23%</div>
            </div>
            <div>
              购入热力排放
              <div style="font-size: 1.2rem; color: #5470c6; font-weight: bold">30%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">节能减排项目列表</div>
        <div class="left-box-content">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>项目名称</th>
                  <th>项目状态</th>
                  <th>投资额</th>
                  <th>节能量</th>
                </tr>
              </thead>
              <tbody ref="tableBody">
                <div class="table-wrapper" ref="tableWrapper">
                  <tr v-for="(item, index) in xiangmuData" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.money }}</td>
                    <td>{{ item.energy }}</td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box">
        <div class="center-box-title">总量指标</div>
        <div class="center-box-content row">
          <div class="zonghe-box flex-y">
            <b class="text-green">2387.306</b>
            <div>累计用电量</div>
            <small>单位：千瓦时</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">2387.306</b>
            <div>累计用水量</div>
            <small>单位：吨</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">2387.306</b>
            <div>累计用煤量</div>
            <small>单位：吨</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">2387.306 </b>
            <div>累计用气量</div>
            <small>单位：立方米</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">2387.306</b>
            <div>累计用热量</div>
            <small>单位：千焦</small>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">甲烷情况数据</div>
        <div class="right-box-content" style="margin: 1rem 0">
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge1.png" alt="" />
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge2.png" alt="" />
          <img style="width: 33%; height: 80px" src="./../assets/img/gauge3.png" alt="" />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">能耗结构</div>
        <div class="right-box-content row">
          <div class="pie-left">
            <div>
              电力
              <div style="font-size: 1.2rem; color: #ee6666; font-weight: bold">19%</div>
            </div>
            <div>
              热力
              <div style="font-size: 1.2rem; color: #91cc75; font-weight: bold">28%</div>
            </div>
          </div>
          <div class="pie">
            <img src="./../assets/img/pie.png" alt="" />
          </div>

          <div class="pie-right">
            <div>
              水力
              <div style="font-size: 1.2rem; color: #fac858; font-weight: bold">23%</div>
            </div>
            <div>
              煤炭
              <div style="font-size: 1.2rem; color: #5470c6; font-weight: bold">30%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">环境保护</div>
        <div class="right-box-content">
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
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.center-box-title {
  background-size: 50% 100%;
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
  max-height: 100px;
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
