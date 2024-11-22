<script setup>
import ch4 from "@/components/charts/ch4.vue";
import pie5 from "@/components/charts/pie5.vue";
import pie6 from "@/components/charts/pie6.vue";

// import Map from "./map.vue";
import { ref, computed, watch } from "vue";
const tab = ref(1);
const layers = ref([
  {
    name: "西风井",
    image: new URL("@/assets/img/wa01_a.jpg", import.meta.url).href,
  },
  { name: "南风井", image: new URL("@/assets/img/wa02_a.jpg", import.meta.url).href },
  { name: "北风井", image: new URL("@/assets/img/wa03_a.jpg", import.meta.url).href },
  {
    name: "北风井设备",
    image: new URL("@/assets/img/wa03_a_b.jpg", import.meta.url).href,
  },

  // 添加更多层...
]);
const devicesChecked = ref(false);
const activeLayer = ref("西风井");
const currentLayerImage = computed(() => {
  const layer = layers.value.find((layer) => layer.name === activeLayer.value);
  return layer ? layer.image : "";
});
function switchLayer(layer) {
  console.log(layer);
  activeLayer.value = layer;
  currentLayerImage.value = layer.image;
  if (layer == "北风井") {
    devicesChecked.value = false;
  }
}
console.log(currentLayerImage.value);
watch(devicesChecked, (val) => {
  if (val && activeLayer.value == "北风井") {
    switchLayer("北风井设备");
  } else if (!val && activeLayer.value == "北风井设备") {
    switchLayer("北风井");
  }
});
</script>

<template>
  <main :style="{ backgroundImage: `url(${currentLayerImage})` }">
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>瓦斯总览</div>
        <div class="left-box-content" style="flex-direction: column">
          <div
            style="
              display: flex;
              width: 80%;
              align-items: baseline;
              padding-left: 0.5rem;
              margin-bottom: 1rem;
              justify-content: space-between;
              font-size: 1rem;
            "
          >
            煤矿瓦斯等级：
            <b
              style="
                font-size: 1rem;

                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >高瓦斯矿井</b
            >
            <!-- <small style="font-size: 0.8rem"> 万m³</small> -->
          </div>
          <div
            style="
              display: flex;
              width: 80%;
              align-items: baseline;
              padding-left: 0.5rem;
              margin-bottom: 1rem;

              justify-content: space-between;
              font-size: 1rem;
            "
          >
            相对瓦斯涌出量:
            <b
              style="
                font-size: 1rem;
                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >16.7 m³/t</b
            >
            <!-- <small style="font-size: 0.8rem"> 万m³</small> -->
          </div>
          <div
            style="
              display: flex;
              width: 80%;
              align-items: baseline;
              padding-left: 0.5rem;
              justify-content: space-between;
              font-size: 1rem;
            "
          >
            瓦斯总量：
            <b
              style="
                font-size: 1rem;
                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >16204万m³</b
            >
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>瓦斯总量</div>
        <div class="left-box-content" style="flex-direction: column">
          <div
            style="
              display: flex;
              width: 100%;
              align-items: baseline;
              padding-left: 0.5rem;
              margin: 0.5rem 0;
              justify-content: flex-end;
            "
          >
            抽采瓦斯
            <b
              style="
                font-size: 1rem;
                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >16204</b
            ><small style="font-size: 0.8rem"> 万m³</small>
          </div>
          <pie6 />
          <!-- <div style="display: flex; width: 100%">
            <div style="padding: 0.5rem 1rem; width: 50%">
              <div style="margin-bottom: 2rem">
                <div>甲烷浓度>30%瓦斯</div>
                <div class="process"><span>0 </span></div>
              </div>
              <div style="margin-bottom: 2rem">
                <div>甲烷浓度8%以下瓦斯</div>
                <div class="process process3"><span>6810 万m³</span></div>
              </div>
            </div>
            <div style="padding: 0.5rem 1rem; width: 50%">
              <div style="margin-bottom: 2rem">
                <div>甲烷浓度8%-30%瓦斯</div>
                <div class="process process4"><span>9394 万m³</span></div>
              </div>

              <div style="margin-bottom: 2rem">
                <div>通风瓦斯</div>
                <div class="process process2"><span>2242 万m³</span></div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>瓦斯利用情况</div>
        <div class="left-box-content">
          <div style="width: 100%; height: 100%; margin-top: -1rem">
            <div
              style="
                display: flex;
                font-size: 1rem;
                width: 100%;
                justify-content: space-between;
                padding: 0 1rem;
              "
            >
              <div style="display: flex; font-size: 0.8rem">
                利用总量
                <div
                  style="
                    font-weight: 600;
                    color: #ffde00;
                    margin-left: 0.3rem;
                    font-family: 'YousheBiaotiHei', sans-serif;
                    display: contents;
                    font-size: 1rem;
                  "
                >
                  5052 万m³
                </div>
              </div>
              <div style="display: flex; font-size: 0.8rem">
                利用率
                <div
                  style="
                    font-weight: 600;
                    color: #ffde00;
                    margin-left: 0.3rem;

                    font-family: 'YousheBiaotiHei', sans-serif;
                    font-size: 1rem;
                  "
                >
                  31.2%
                </div>
              </div>
            </div>
            <ch4 />
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="wasi-bg">
        <img style="width: 100%" src="./../assets/img/wa01.jpg" alt="" />
      </div> -->
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="left-box-title title">>瓦斯利用成效</div>
        <div class="left-box-content" style="flex-direction: column">
          <div style="display: flex">
            <div
              style="
                text-align: center;
                text-align: center;
                background: #0000002e;
                padding: 0.5rem;
                border-radius: 0.5rem;
              "
            >
              <div style="font-size: 0.8rem">年减碳排量</div>

              <div class="num"><span>577524.36吨</span></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                height="3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#059669"
                  d="M14.421 7.624a3.7 3.7 0 0 0-2.907.5a.258.258 0 0 0-.045.392a.345.345 0 0 0 .441.062a3.04 3.04 0 0 1 2.39-.411a2.74 2.74 0 0 1 2.241 3.139l-.027.119a2.6 2.6 0 0 1-.132.414a.34.34 0 0 0 .169.421a.284.284 0 0 0 .4-.126a3 3 0 0 0 .194-.646l.009-.039a3.34 3.34 0 0 0-2.733-3.825m3 13.09H16.5l1.063-1.159a.84.84 0 0 0 .009-1.035a1.27 1.27 0 0 0-1.024-.476a1.184 1.184 0 0 0-1.291 1.03a.429.429 0 0 0 .837 0a.42.42 0 0 1 .461-.362a.36.36 0 0 1 .294.144a.29.29 0 0 1 .019.326l-1.531 1.669a.28.28 0 0 0-.035.348a.44.44 0 0 0 .373.182h1.745a.342.342 0 1 0 0-.667zM8.864 19a2.1 2.1 0 0 1-.757.14a1.57 1.57 0 0 1-1.713-1.365a1.57 1.57 0 0 1 1.713-1.365a2.1 2.1 0 0 1 .749.137a.47.47 0 0 0 .559-.154a.307.307 0 0 0-.193-.446a3.1 3.1 0 0 0-1.115-.2a2.34 2.34 0 0 0-2.55 2.032a2.34 2.34 0 0 0 2.55 2.033a3.1 3.1 0 0 0 1.128-.21a.306.306 0 0 0 .19-.447a.47.47 0 0 0-.561-.155m3.351-3.26a2.337 2.337 0 0 0-2.549 2.032a2.34 2.34 0 0 0 2.549 2.033a2.34 2.34 0 0 0 2.55-2.033a2.34 2.34 0 0 0-2.55-2.032m0 3.4a1.57 1.57 0 0 1-1.715-1.368a1.57 1.57 0 0 1 1.712-1.365a1.57 1.57 0 0 1 1.713 1.365a1.57 1.57 0 0 1-1.71 1.365zm-4.027-4.312a.334.334 0 0 0 0-.667H5.726a3.057 3.057 0 0 1-1.048-5.93a.333.333 0 0 0 .2-.412a3.978 3.978 0 1 1 7.6-2.347a.34.34 0 0 0 .266.231a.33.33 0 0 0 .324-.135a3.35 3.35 0 0 1 2.711-1.393h.022A3.27 3.27 0 0 1 18.186 5.2a3.33 3.33 0 0 1 .931 2.451a.334.334 0 0 0 .667.032a4 4 0 0 0-1.116-2.945a3.94 3.94 0 0 0-2.859-1.232a4.03 4.03 0 0 0-2.895 1.217a4.646 4.646 0 0 0-8.876 1.922a4.7 4.7 0 0 0 .126 1.077a3.724 3.724 0 0 0 1.562 7.106Zm12.449-6.606a.334.334 0 0 0-.422.517a3.058 3.058 0 0 1-1.936 5.422H9.555a.334.334 0 0 0 0 .667h8.724a3.725 3.725 0 0 0 2.358-6.606"
                />
              </svg>
            </div>
            <div
              style="
                text-align: center;
                text-align: center;
                background: #0000002e;
                padding: 0.5rem;
                border-radius: 0.5rem;
              "
            >
              <div style="font-size: 0.8rem">年节能量</div>

              <div class="num"><span>19784tce</span></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                height="3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#059669"
                  d="M11.005 11.08c0-1.574-.795-3.867-2.359-6.719c-.269-.49-.97-.483-1.27-.02q-.629.97-1.877 1.981l-.37.29l-.354.268l-.49.378c-1.729 1.377-2.41 2.602-2.26 4.411c.131 1.6 1.099 2.746 2.762 3.27q-.878 1.025-2.324 1.622a.75.75 0 1 0 .574 1.387c1.833-.76 3.149-1.976 3.912-3.634q.428-.93.684-1.833l.043-.156l.102-.412l.068-.33l.042-.237l.066-.477a9 9 0 0 0 .056-1.12l-.004-.024a.75.75 0 0 1 1.5.023q.033 2.191-.886 4.464l-.025.088a.454.454 0 0 0 .634.495l.114-.057q.11-.062.196-.137c.722-.624 1.466-1.945 1.466-3.52M17 6h-5.25l-.102.007a.75.75 0 0 0 .102 1.494H17l.145.006A1.5 1.5 0 0 1 18.5 9.001v6l-.007.144A1.5 1.5 0 0 1 17 16.5H7.75c-.406.028-.75.321-.75.75c0 .415.336.75.75.75H17l.176-.005A3 3 0 0 0 20 15v-1l1 .018l.135-.009a1 1 0 0 0 .866-.991v-2l-.008-.121a1 1 0 0 0-.992-.879L20 10V9l-.005-.176A3 3 0 0 0 17 6.001"
                />
              </svg>
            </div>
          </div>

          <div
            style="
              display: flex;
              margin-top: 0.5rem;
              width: 100%;
              text-align: left;
              align-items: baseline;
              padding-left: 0.5rem;
            "
          >
            瓦斯总发电量
            <b
              style="
                font-size: 1.2rem;
                color: #6be6c1;
                font-family: 'YousheBiaotiHei', sans-serif;
                text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
                margin: 0 0.5rem;
              "
              >8958.68</b
            ><small style="font-size: 0.8rem"> 万KWh</small>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">>瓦斯发电占比</div>
        <div class="right-box-content">
          <pie5 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">>乏风瓦斯利用</div>
        <div class="left-box-content row" style="flex-wrap: wrap">
          <div
            class="zl-card"
            style="border-right: 1px solid #bbb; border-bottom: 1px solid #bbb"
          >
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00ffff"
                  d="M6 3a2 2 0 0 0-2 2v11h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V5a2 2 0 0 0-2-2zm6 4V5h6v2zm0 2h6v2h-6zM8 5v4h2l-3 6v-4H5zm14 15v2H2v-2z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  乏风氧化发电量
                </div>
              </div>
              <span class="zl-card-title">1101 <small>万kW·h</small></span>
            </div>
          </div>
          <div class="zl-card" style="border-bottom: 1px solid #bbb">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#00ffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M11 8c2-3-2-3 0-6m4.5 6c2-3-2-3 0-6M6 10h.01M6 14h.01M10 16v-4m4 4v-4m4 4v-4"
                  />
                  <path
                    d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M5 20v2m14-2v2"
                  />
                </g>
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  乏风氧化供热量:
                </div>
              </div>
              <span class="zl-card-title">21.75 <small>万GJ</small></span>
            </div>
          </div>
          <div class="zl-card" style="border-right: 1px solid #bbb">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffde00"
                  d="M20 16V4H8v12m14 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2m-6 16v2H4c-1.1 0-2-.9-2-2V7h2v13m12-9h2v3h-2m-3-8h2v8h-2m-3-6h2v6h-2Z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  乏风瓦斯利用量
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >142 <small>万m³</small></span
              >
            </div>
          </div>

          <div class="zl-card">
            <div class="zl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffde00"
                  d="M19 12h-7V5c0-.6-.4-1-1-1c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-.6-.4-1-1-1m-7 7.9c-3.8.6-7.4-2.1-7.9-5.9c-.6-3.8 2.1-7.4 5.9-7.9V13c0 .6.4 1 1 1h6.9c-.4 3.1-2.8 5.5-5.9 5.9M15 2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1c0-3.9-3.1-7-7-7m1 6V4.1c2 .4 3.5 1.9 3.9 3.9z"
                />
              </svg>
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  乏风瓦斯利用率
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >2.09 <small>%</small></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-view">
      <div class="radio-inputs view-radio">
        <label>
          <div class="tooltip">
            <input
              class="radio-input"
              type="radio"
              name="view"
              :checked="
                activeLayer == '西风井' ||
                activeLayer == '南风井' ||
                activeLayer == '北风井' ||
                activeLayer == '北风井设备'
              "
            />
            <span class="radio-tile ground">
              <span class="radio-label">地面</span>
            </span>
            <div class="tooltiptext">
              <div
                style="
                  padding: 0.2rem;
                  border-bottom: 1px solid #33333390;
                  position: relative;
                  z-index: 99999999999999999999999;
                "
                @click="switchLayer('西风井')"
              >
                西风井
              </div>
              <div style="padding: 0.2rem" @click="switchLayer('南风井')">南风井</div>
              <div style="padding: 0.2rem" @click="switchLayer('北风井')">北风井</div>
            </div>
          </div>
        </label>
      </div>
      <div class="radio-inputs">
        <label>
          <input
            v-model="devicesChecked"
            class="radio-input"
            type="checkbox"
            name="engine1"
          />
          <span class="radio-tile">
            <!-- <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="#00ffff"
                    d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 1c2.08 0 3.716.448 4.628.77c.891.317 1.325 1.192 1.227 2.02l-.024.155l-.722 3.61c-.196.977-1.232 1.45-2.079 1.112c-.645-.258-1.7-.604-2.75-.66l-.3-.007c-1.133.005-2.312.388-3.01.667c-.805.321-1.78-.09-2.043-.97l-.036-.143l-.722-3.609c-.174-.872.256-1.839 1.203-2.174A14 14 0 0 1 12 6m0 2c-1.719 0-3.08.355-3.856.62l.6 2.997c.683-.24 1.623-.506 2.624-.59l.738-1.474a1 1 0 1 1 1.788.894l-.352.705c.65.122 1.244.3 1.715.465l.6-2.997A12.1 12.1 0 0 0 12 8"
                  />
                </g>
              </svg>
            </span> -->
            <span class="radio-label">监测<br />设备</span>
          </span>
        </label>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-image: url("./../assets/img/wa01_a.jpg"); */
  background-size: 100% 100%;
}
.zl-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 50%;
}
.zl-icon {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
}
.zl-icon img {
  width: 2rem;
  height: 2rem;
}
.zl-card-title {
  font-size: 1.2rem;
  color: #0ff;
  font-weight: 800;
}
.left-box-content,
.right-box-content {
  padding: 0.5rem;
  box-sizing: border-box;
  height: calc(100% - 2.8rem);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.num {
  position: relative;
  /* width: 6rem; */
  /* height: 3rem; */
  padding: 0.2rem 1rem;
  border: 2px solid #92cbee;
  background: #0b1e73;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  color: #6be6c1;
  font-family: "YousheBiaotiHei", sans-serif;
  text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
  text-align: center;
  margin: 0.5rem;
}

.num:before,
.num:after {
  content: "";
  position: absolute;
  background: #0b1e73;
  transition: all 0.2s linear;
}

.num:before {
  width: calc(100% + 6px);
  height: calc(100% - 16px);
  top: 8px;
  left: -3px;
}

.num:after {
  width: calc(100% - 16px);
  height: calc(100% + 6px);
  top: -3px;
  left: 8px;
}

.num:hover {
  cursor: crosshair;
}

.num:active {
  transform: scale(0.95);
}

.num:hover:before {
  height: calc(100% - 32px);
  top: 16px;
}

.num:hover:after {
  width: calc(100% - 32px);
  left: 16px;
}

.num span {
  font-size: 0.8rem;
  z-index: 3;
  position: relative;
  font-weight: 600;
  /* color: #92cbee; */
}

.process {
  width: 100%;
  height: 0.5rem;
  background: #00000078;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  position: relative;
  text-align: right;
  padding-top: 0.6rem;
}

.process span {
  font-size: 0.8rem;
  font-family: "YousheBiaotiHei", sans-serif;
  margin-top: 0.5rem;
  color: #0ff;
}

.process1:before {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #6be6c1;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
}

.process2:before {
  content: "";
  width: 29.44%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #3fb1e3;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
}

.process3:before {
  content: "";
  width: 31.78%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #626c91;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
}
.process4:before {
  content: "";
  width: 38.78%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #ffde00;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #fff;
}
.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #2260ff;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #00ffff;
}
.view-radio .radio-input:checked + .radio-tile {
  border-color: #00ff66;
}
.view-radio .radio-input:checked + .radio-tile:before {
  border-color: #00ff66;
}
.view-radio .radio-input:checked + .radio-tile .radio-label {
  color: #00ff66;
}
.radio-input:focus + .radio-tile {
  /* border-color: #2260ff; */
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc; */
}

.radio-input:focus + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  min-height: 60px;
  border-radius: 0.5rem;
  border: 2px solid #ffffffa3;
  background-color: #0000009e;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: 0.15s ease;
  cursor: pointer;
  position: relative;
}

.radio-tile:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.45rem;
  height: 0.45rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile:hover {
  border-color: #2260ff;
}

.radio-tile:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon svg {
  width: 1rem;
  height: 1rem;
  fill: #494949;
}

.radio-label {
  color: #fff;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
  background-color: #0000006e;
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
}

.radio-input {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.select {
  width: fit-content;
  cursor: pointer;
  position: relative;
  transition: 300ms;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
}

.selected {
  background-color: #0000009e;
  padding: 18px;
  margin: 6px;
  border-radius: 5px;
  position: relative;
  z-index: 100000;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  color: #00ffff;
  border: 2px solid #00ffff;
}
.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 350px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-inputs > * {
  margin: 6px;
}

.radio-input:checked + .radio-tile {
  border-color: #00ffff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #2260ff;
}

.radio-input:checked + .radio-tile:before {
  transform: scale(1);
  opacity: 1;
  background-color: #00ffff;
  border-color: #00ffff;
}
.project:checked + .radio-tile {
  border-color: #ea580c;
}

.project:checked + .radio-tile:before {
  border-color: #ea580c;
}
.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #2260ff;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #00ffff;
}
.switch-view {
  padding: 1rem;
  /* background-color: #00000091; */
  position: absolute;
  bottom: 1rem;
  right: 28vw;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  z-index: 1000000;
  width: 44%;
  /* border-radius: 0.5rem; */
  /* border: 1px solid #00ffff33; */
  /* box-shadow: 0 0 4px #00ffffb3; */
}
.switch-view-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 0.5rem; */
  margin: 0.5rem;
  color: #00ffffbb;
  font-size: 0.8rem;
  cursor: pointer;
  padding-bottom: 0.5rem;
}
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 9999999999999999999999;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #061d68b8;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  /* z-index: 1; */
  bottom: 115%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 9999999999999999999999;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
</style>
