<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import moment from "moment";
const time = ref("");
const date = ref("");
let timer = null;
timer = setInterval(() => {
  time.value = moment().format("HH:mm:ss");
}, 1000);
date.value = moment().format("YYYY-MM-DD");
const path = ref("");
const route = useRoute();
const router = useRouter();
function changePath(data) {
  path.value = data;
  router.push(data);
}
</script>

<template>
  <header>
    <div
      style="scale: 0.6; position: fixed; right: -100px; top: 0; z-index: 9999"
      id="ww_b4181c860728b"
      v="1.3"
      loc="id"
      a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#ffffff","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3,"el_phw":3,"el_nme":3}'
    >
      <a href="https://weatherwidget.org/" id="ww_b4181c860728b_u" target="_blank"
        >Widget weather</a
      >
    </div>
    <div class="page-title">
      能碳●环保协同管理平台
      <!--下拉选择年份-->
      <select
        style="
          margin-left: 1rem;
          padding: 0.1rem 0.5rem;
          color: #fff;
          font-weight: bold;
          background: none;
          border: none;
        "
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>

        <option value="2022">2020</option>
      </select>
    </div>
    <div
      style="position: fixed; left: 1.5rem; top: 10px; display: flex; align-items: center"
    >
      <img
        src="./assets/img/logo.png"
        alt=""
        style="width: 100px; height: 70%; cursor: pointer"
      />
      <div
        style="
          margin-left: 0.5rem;
          padding: 0.1rem 0.5rem;
          border-left: 2px solid #e62129;
          color: #e62129;
          font-weight: bold;
        "
      >
        余 吾 煤 业
      </div>
      <div class="time">
        <div id="date">{{ date }}</div>
        <div id="time">{{ time }}</div>
      </div>
    </div>
    <div class="guide">
      <div class="guide-button" :class="{ active: path == '/' }" @click="changePath('/')">
        综合展示
      </div>
      <div
        class="guide-button"
        :class="{ active: path == '/lingtankuangshan' }"
        @click="changePath('/lingtankuangshan')"
      >
        零碳矿山
      </div>
      <div
        class="guide-button"
        :class="{ active: path == '/wasiguankong' }"
        @click="changePath('/wasiguankong')"
      >
        瓦斯管控
      </div>
      <div
        class="guide-button"
        :class="{ active: path == '/nenghaoshuangkong' }"
        @click="changePath('/nenghaoshuangkong')"
      >
        能耗双控
      </div>
      <div
        class="guide-button"
        :class="{ active: path == '/huanjingbaohu' }"
        @click="changePath('/huanjingbaohu')"
      >
        环境保护
      </div>
      <!-- <div
        class="guide-button"
        :class="{ active: path == '/zhongdianshebei' }"
        @click="changePath('/zhongdianshebei')"
      >
        重点设备
      </div> -->
    </div>
  </header>

  <RouterView :key="$route.fullPath" />
</template>
<style>
body {
    font-family: 'Orbitron', sans-serif; /* 默认使用Orbitron */
}

/* 中文字体覆盖 */
body {
    font-family: 'YousheBiaotiHei', 'Orbitron', sans-serif;
}
</style>

<style scoped>
header {
  padding: 0.5rem;
  height: calc(100vw / 1920 * 92);
  background-image: url("./assets/img/hdbg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.time {
  font-family: "segment";
  font-size: 1rem;
  color: #fff;
  margin-top: 3px;
  display: flex;
}
#time,
#date {
  margin-left: 1rem;
}
.title {
  font-size: 2rem;
  text-align: center;
  background: linear-gradient(
    to bottom,
    #eef1f2,
    #eef1f2,
    #eef1f2,
    #8f9697,
    #eef1f2,
    #eef1f2
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.guide {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 85px;
  width: 100vw;
  left: 0;
}
/* .guide-left {
  display: flex;
  width: 30vw;
  justify-content: space-around;
}
.guide-right {
  display: flex;
  width: 30vw;
  justify-content: space-around;
} */
.guide-button {
  font-family: 'YousheBiaotiHei', sans-serif;
  padding: 0.5rem 1.5rem;
  background-image: url("./assets/img/buttonbg.png");
  background-size: 100% 100%;
  margin: 0 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
}
.guide-button.active {
  background-image: url("./assets/img/buttonbgactive.png");
}
main {
  height: calc(100vh - calc(100vw / 1920 * 92));
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  padding: 0 0.5rem;
  z-index: 1;
}
option {
  background: #000;
  color: #fff;
}
.page-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: YousheBiaotiHei, sans-serif;
  text-align: center;
  color: linear-gradient(rgb(238, 241, 242), rgb(143, 150, 151));
  height: 35px;
  position: relative;
  width: 100%;
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(
    to bottom,
    #eef1f2,
    #8f9697,
    #eef1f2
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
</style>
