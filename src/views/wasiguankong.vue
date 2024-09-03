<script setup>
import line from "@/components/charts/line.vue";
import Map from "./map.vue";
import { ref } from "vue";
console.log(line);
const tab = ref(1);
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">甲烷实时浓度分析</div>
        <div class="left-box-content">
          <img style="width: 100%" src="./../assets/img/rank.png" alt="" />
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">甲烷实时排放量</div>
        <div class="left-box-content">
          <!-- 当年、当月、当日切换tab -->
          <div class="tab">
            <div class="tab-item" :class="{ active: tab == 1 }" @click="tab = 1">
              当年
            </div>
            <div class="tab-item" :class="{ active: tab == 2 }" @click="tab = 2">
              当月
            </div>
            <div class="tab-item" :class="{ active: tab == 3 }" @click="tab = 3">
              当日
            </div>
          </div>
          <img style="width: 100%" src="./../assets/img/rank2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box" style="padding: 0; height: 600px">
        <Map />
      </div>
      <div class="center-box box">
        <div class="center-box-title">今日统计</div>
        <div class="center-box-content row">
          <div class="zonghe-box flex-y">
            <b class="text-green">23.87 %</b>
            <div>今日同比</div>
            <small>降低</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-red">23.87 %</b>
            <div>今日环比</div>
            <small>增加</small>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">7.30 %</b>
            <div>今日占比</div>
            <small>降低</small>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">风排瓦斯总量分析</div>
        <div class="left-box-content" style="padding: 2rem 0">
          <!-- 当年、当月、当日切换tab -->
          <div class="tab">
            <div class="tab-item" :class="{ active: tab == 1 }" @click="tab = 1">
              当年
            </div>
            <div class="tab-item" :class="{ active: tab == 2 }" @click="tab = 2">
              当月
            </div>
            <div class="tab-item" :class="{ active: tab == 3 }" @click="tab = 3">
              当日
            </div>
          </div>
          <img style="width: 100%" src="./../assets/img/rank2.png" alt="" />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">瓦斯泵站抽采量统计</div>
        <div class="right-box-content" style="height: 400px; padding: 2rem 0">
          <div class="tab">
            <div class="tab-item" :class="{ active: tab == 1 }" @click="tab = 1">
              当年
            </div>
            <div class="tab-item" :class="{ active: tab == 2 }" @click="tab = 2">
              当月
            </div>
            <div class="tab-item" :class="{ active: tab == 3 }" @click="tab = 3">
              当日
            </div>
          </div>
          <!-- <line /> -->
          <img style="width: 100%" src="./../assets/img/line-stack.png" alt="" />
        </div>
      </div>
      <!-- <div class="right-box box">
        <div class="right-box-title">今日统计</div>
        <div class="right-box-content"></div>
      </div> -->
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
  margin-top: 30px;
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
