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
        min-height: 70px;
      "
    >
      <div style="display: flex; align-items: center">
        <img
          src="./assets/img/logo.png"
          alt=""
          style="width: 40px; cursor: pointer; margin-top: 2px"
        />
        <div>
          <div style="display: flex; align-items: center">
            <div
              style="
                margin-left: 0.1rem;
                padding: 0.1rem 0.5rem;
                /* border-left: 2px solid #e62129; */
                color: #e62129;
                font-weight: bold;
                font-size: 1.1rem;
              "
            >
              余 吾 煤 业 公 司
            </div>
          </div>
          <div>
            <div
              style="
                font-size: 0.8rem;
                color: rgb(204 166 40);
                font-weight: bold;
                text-align: center;
              "
            >
              团 结 奋 进,守 正 创 新
            </div>
          </div>
        </div>

        <div class="time">
          <div id="date">{{ date }}</div>
          <div id="time">{{ time }}</div>
        </div>
      </div>
      <div style="display: flex; align-items: center">
        <!-- <div
          id="ww_b4181c860728b"
          v="1.3"
          loc="id"
          a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FFFFFF00","cl_font":"#ffffff","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_whr":3,"el_phw":3,"el_nme":3}'
        >
          <a
            href="https://weatherwidget.org/"
            id="ww_b4181c860728b_u"
            target="_blank"
            style="display: none"
            >Widget weather</a
          >
        </div> -->
        <!-- <div class="mydict">
          <div>
            <label>
              <input type="radio" name="radio" checked="" />
              <span>2023年</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>2022年</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>2021年</span>
            </label>
          </div>
        </div> -->
        <select>
          <option value="2024">2024年</option>
          <option value="2023">2023年</option>
          <option value="2022">2022年</option>
          <option value="2021">2021年</option>
        </select>
        <img
          src="./assets/img/ok.png"
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
        余吾模式
      </div>
      <div
        class="guide-button"
        :class="{ active: path == '/tanpaishuangkong' }"
        @click="changePath('/tanpaishuangkong')"
      >
        碳排双控
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
        :class="{ active: path == '/wasiguankong' }"
        @click="changePath('/wasiguankong')"
      >
        瓦斯管控
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
    <!-- <div
      style="
        position: absolute;
        top: 0;
        left: 2rem;
        font-size: 2rem;
        color: rgb(230, 33, 41);
        font-weight: bold;
      "
    >
      团 结 奋 进
    </div>
    <div
      style="
        position: absolute;
        top: 0;
        right: 2rem;
        font-size: 2rem;
        color: rgb(230, 33, 41);
        font-weight: bold;
      "
    >
      守 正 创 新
    </div> -->
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
  position: relative;
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
/* From Uiverse.io by mahiatlinux */
:focus {
  outline: 0;
  border-color: #00ffff;
  box-shadow: 0 0 0 4px #2a4a8f;
}

.mydict div {
  display: flex;
  flex-wrap: wrap;
  margin-right: 1rem;
  justify-content: center;
}

.mydict input[type="radio"] {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.mydict input[type="radio"]:checked + span {
  box-shadow: 0 0 0 0.0625em #00ffff;
  background-color: #1c2b4a;
  z-index: 1;
  color: #00ffff;
}

label span {
  display: block;
  cursor: pointer;
  background-color: #1e2635;
  padding: 0.375em 0.75em;
  position: relative;
  margin-left: 0.0625em;
  box-shadow: 0 0 0 0.0625em #4a5568;
  letter-spacing: 0.05em;
  color: #a0aec0;
  text-align: center;
  transition: background-color 0.5s ease;
}

label:first-child span {
  border-radius: 0.375em 0 0 0.375em;
}

label:last-child span {
  border-radius: 0 0.375em 0.375em 0;
}

select {
  background-color: #1e2635;
  border: 0.0625em solid #4a5568;
  border-radius: 0.375em;
  color: #a0aec0;
  font-size: 1em;
  padding: 0.375em 1.75em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.375em center;
  background-size: 0.75em 0.75em;
  cursor: pointer;
  transition: background-color 0.5s ease;
  z-index: 999999999999999999999999999999;
  margin-right: 1rem;
}
</style>
