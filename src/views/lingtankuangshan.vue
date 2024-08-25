<script setup>
import co2 from "@/components/charts/co2.vue";
import co2e from "@/components/charts/co2e.vue";
const xiangmuData = [
  {
    name: "零碳能源使用比例",
    value: "50%",
  },
  {
    name: "矿区生产活动中新能源车辆占比",
    value: "50%",
  },
  {
    name: "乏风瓦斯利用率",
    value: "50%",
  },
  {
    name: "停用矸石场地覆土绿化率",
    value: "50%",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">基本信息</div>
        <div class="left-box-content">
          <div>企业名称：余吾煤业</div>
          <div>所属行业：煤炭开采</div>
          <div>企业规模：大型企业</div>
          <div>开业时间：2000-01-01</div>
          <div>排污许可证号：123456789</div>
          <div>有效期限：2021-01-01至2022-01-01</div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">二氧化碳排放总量</div>
        <div class="left-box-content">
          <img style="width: 100%; height: 200px" src="./../assets/img/co2.png" alt="" />
          <div style="display: flex; justify-content: space-around">
            <div style="display: flex; font-size: 0.6rem; align-items: center">
              <div class="tag" style="background: #fac858"></div>
              化石燃料燃烧排放
            </div>
            <div style="display: flex; font-size: 0.6rem; align-items: center">
              <div class="tag" style="background: #91cc75"></div>
              购入热力对应的二氧化碳排放
            </div>
          </div>
          <div style="display: flex; justify-content: space-around">
            <div style="display: flex; font-size: 0.6rem; align-items: center">
              <div class="tag" style="background: #5470c6"></div>
              二氧化碳逃逸排放
            </div>

            <div style="display: flex; font-size: 0.6rem; align-items: center">
              <div class="tag" style="background: #ee6666"></div>
              购入电力对应的二氧化碳排放
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">其他碳排数据</div>
        <div class="left-box-content">
          <div class="table-container">
            <table>
              <thead>
                <!-- <tr>
                  <th>项目名称</th>
                  <th>项目状态</th>
                  <th>投资额</th>
                  <th>节能量</th>
                </tr> -->
              </thead>
              <tbody ref="tableBody">
                <div class="table-wrapper" ref="tableWrapper">
                  <tr v-for="(item, index) in xiangmuData" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="center-box box">
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
      </div> -->
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">吨原煤二氧化碳排放量</div>
        <div class="right-box-content" style="height: 320px">
          <co2 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">吨原煤生产电耗</div>
        <div class="right-box-content" style="height: 320px">
          <co2e />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tag {
  width: 1.2rem;
  height: 0.8rem;
  border-radius: 4px;
  margin-right: 0.2rem;
}
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
  padding: 0.5rem 5rem;
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
  width: 75%;
}
tr th:nth-child(2),
tr td:nth-child(2) {
  width: 25%;
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
