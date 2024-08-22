<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const showChat = ref(false);
const route = useRoute();
const router = useRouter();
const path = ref(route.fullPath);
console.log(route.fullPath);
function changePath(data) {
  path.value = data;
  router.push(data);
}
</script>

<template>
  <header>
    <div class="title">能碳●环保协同管理平台</div>
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

<style scoped>
header {
  padding: 0.5rem;
  height: calc(100vw / 1920 * 92);
  background-image: url("./assets/img/hdbg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  top: 80px;
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
  padding: 0.5rem 1.5rem;
  background-image: url("./assets/img/buttonbg.png");
  background-size: 100% 100%;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  font-size: 0.8rem;
}
.guide-button.active {
  background-image: url("./assets/img/buttonbgactive.png");
}
main {
  height: calc(100vh - calc(100vw / 1920 * 92));
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  padding: 0 2rem;
}
</style>
