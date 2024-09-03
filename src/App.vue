<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
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
onMounted(() => {
  path.value = route.path;
});
</script>

<template>
  <header>
    <div
      style="
        padding: 0 2rem;
        z-index: 9999;
        display: flex;
        width: calc(100vw - 1rem);
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
      "
    >
      <div style="display: flex; align-items: center">
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
      <div style="display: flex; align-items: center">
        <div
          id="ww_b4181c860728b"
          v="1.3"
          loc="id"
          a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#ffffff","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3,"el_phw":3,"el_nme":3}'
        >
          <a href="https://weatherwidget.org/" id="ww_b4181c860728b_u" target="_blank"
            >Widget weather</a
          >
        </div>
        <img
          src="./assets/img/logo2.png"
          alt=""
          style="width: 100px; height: 70%; cursor: pointer"
        />
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
      <div class="guide-button" :class="{ active: path == '/tanpaishuangkong' }">
        碳排双控
      </div>
      <div class="guide-button" :class="{ active: path == '/nenghaoshuangkong' }">
        能耗双控
      </div>
      <div class="guide-button" :class="{ active: path == '/wasiguankong' }">
        瓦斯管控
      </div>

      <div class="guide-button" :class="{ active: path == '/huanjingbaohu' }">
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
<style></style>

<style scoped>
header {
  padding: 0.5rem;
  height: 100px;
  /* background-image: url("./assets/img/hdbg.png"); */
  background-image: url("./assets/img/TOP7.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.time {
  font-family: "segment";
  font-size: 1rem;
  color: #ffffffb3;
  margin-top: 3px;
  display: flex;
}
#time,
#date {
  margin-left: 1rem;
}
#ww_b4181c860728b {
  width: 300px !important;
}

.guide {
  display: flex;
  justify-content: center;
  /* position: fixed; */
  /* top: 85px; */
  /* width: 100vw; */
  /* left: 0; */
  z-index: 999999999999;
}
.guide-button {
  font-family: "YousheBiaotiHei", sans-serif;
  padding: 0.5rem 1.5rem 0.2rem;
  background-image: url(/src/assets/img/buttonbg.png);
  background-size: 100% 100%;
  /* margin: 0 0.5rem; */
  cursor: pointer;
  color: #ffffff;
  font-size: 0.8rem;
}
.guide-button.active {
  background-image: url("./assets/img/buttonbgactive.png");
}
main {
  height: calc(100vh - calc(100vw / 1920 * 92));
  /* display: grid;
  grid-template-columns: 3fr 4fr 3fr; */
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1;
}
option {
  background: #000;
  color: #ffffffb3;
}
</style>
