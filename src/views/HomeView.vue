<script setup>
import bar from "@/components/charts/bar.vue";
import pie from "@/components/charts/pie.vue";
import pie3 from "@/components/charts/pie3.vue";
import pie4 from "@/components/charts/pie4.vue";
import Map from "./map.vue";
import line4 from "@/components/charts/line4.vue";
import co2 from "@/components/charts/co2.vue";
import "@/assets/custom-font.css";
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box" style="overflow: hidden">
        <div class="left-box-title title">企业概况</div>
        <!-- <div class="left-box-content" style="max-height: 150px; overflow: hidden; width: 100%">
                    <img src="./../assets/img/bg.png.jpg" alt="" style="width: 100%" />
                </div> -->
        <div class="left-box-content" style="overflow: hidden; width: 100%">
          <article class="jianjie">
            <div class="row">
              <img src="./../assets/img/bg.png.jpg" alt="" />
              <div class="jianjie_content">
                <span class="jianjie_title">余吾煤业公司（屯留煤矿）</span>
                <span class="jianjie_subtitle"
                  >位于山西省长治市屯留县，属潞安矿区。井田面积162.2平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力600万吨/年，配套600万吨/年的洗煤厂，概算总投资270007万元。</span
                >
              </div>
            </div>
            <!-- <p class="jianjie_description">
              先后获得“中国煤炭行业特级安全高效矿井”、“国家级安全质量标准化煤矿”、“山西省优秀企业”、“山西省科技奉献奖先进集体”、“山西省矿（厂）区绿化模范单位”、“山西省水土保持示范工程”等荣誉称号。选煤厂被评为中国煤炭行业“十佳选煤厂”。
            </p> -->
          </article>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title row-title">
          <div>总量指标</div>
          <div class="radio-input">
            <label>
              <input
                checked=""
                value="value-1"
                name="value-radio"
                id="value-1"
                type="radio"
              />
              <span>年</span>
            </label>
            <label>
              <input value="value-2" name="value-radio" id="value-2" type="radio" />
              <span>月</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
        <div class="left-box-content row" style="flex-wrap: wrap">
          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">1343435 <small>吨</small></span>
                <div class="card-content">
                  <div>
                    <div style="display: flex; align-items: center; font-size: 10px">
                      同比
                      <img
                        class="down"
                        style="width: 0.2rem; height: 0.6rem; margin: 1px 2px 0"
                        src="./../assets/img/up.png"
                        alt=""
                      />
                      4.5%
                    </div>
                  </div>
                  <!-- <small>吨</small> -->
                </div>
              </div>
              <div class="date-box">
                <span class="month"> 原煤产量 </span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">2387.30 <small>万元</small></span>
                <div class="card-content">
                  <div>
                    <div style="display: flex; align-items: center; font-size: 10px">
                      同比
                      <img
                        class="down"
                        style="width: 0.2rem; height: 0.6rem; margin: 1px 2px 0"
                        src="./../assets/img/up.png"
                        alt=""
                      />
                      3.8%
                    </div>
                  </div>
                  <!-- <small>万元</small> -->
                </div>
              </div>
              <div class="date-box">
                <span class="month"> 营业收入 </span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">67775.32 <small>吨CO₂</small></span>
                <div class="card-content">
                  <div>
                    <div style="display: flex; align-items: center; font-size: 10px">
                      同比
                      <img
                        class="down"
                        style="
                          transform: rotateX(180deg);
                          width: 0.2rem;
                          height: 0.6rem;
                          margin: 3px 2px 0;
                        "
                        src="./../assets/img/up.png"
                        alt=""
                      />
                      3.2%
                    </div>
                  </div>
                  <!-- <small>吨二氧化碳</small> -->
                </div>
              </div>
              <div class="date-box">
                <span class="month"> 碳排放总量 </span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">30364 <small>吨ce</small></span>
                <div class="card-content">
                  <div>
                    <div style="display: flex; align-items: center; font-size: 10px">
                      同比
                      <img
                        class="down"
                        style="width: 0.2rem; height: 0.6rem; margin: 3px 2px 0"
                        src="./../assets/img/down.png"
                        alt=""
                      />
                      2.5%
                    </div>
                  </div>
                  <!-- <small>吨标煤</small> -->
                </div>
              </div>
              <div class="date-box">
                <span class="month"> 能耗总量 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title row-title">
          <div>碳排放分析</div>
        </div>
        <div class="left-box-content row">
          <div class="co2num">
            <b>67775.32 <small>吨CO₂</small></b>
            <span>碳排放量</span>
          </div>
          <div class="co2num">
            <b>17.32 <small>kgCO₂/吨</small></b>
            <span>碳排放强度</span>
          </div>
        </div>
        <div class="left-box-content">
          <div style="width: 100%; height: 280px">
            <co2 />
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box" style="padding: 0; height: 800px">
        <Map />
      </div>
      <div style="position: absolute; top: 155px; left: 32%">
        <div class="ebox">
          <div class="ebg">2026 年</div>
          <div>碳达峰时间</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">能耗趋势分析</div>
        <div class="right-box-content">
          <div style="width: 100%; height: 180px">
            <line4 />
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title row-title">
          <div></div>
          <div>瓦斯利用情况</div>
          <div class="radio-input">
            <label>
              <input
                value="value-1"
                name="value-radio2"
                id="value-1"
                type="radio"
                checked=""
              />
              <span>年</span>
            </label>
            <label>
              <input value="value-2" name="value-radio2" id="value-2" type="radio" />
              <span>月</span>
            </label>
            <span class="selection"></span>
          </div>
        </div>
        <div class="right-box-content row" style="margin: 1rem 0">
          <div style="text-align: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 1rem"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                fill="rgba(149,149,255,1)"
              ></path>
            </svg>
            <div class="num"><span>2272 m³</span></div>
            <div style="font-size: 0.6rem">瓦斯利用总量</div>
          </div>
          <div style="text-align: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 1rem"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                fill="rgba(66,193,110,1)"
              ></path>
            </svg>
            <div class="num"><span>1887 m³</span></div>
            <div style="font-size: 0.6rem">瓦斯利用量</div>
          </div>
          <div style="text-align: center">
            <svg
              height="64"
              width="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 1rem"
            >
              <path d="M0 0L24 0 24 24 0 24z" fill="none"></path>
              <path
                fill="rgba(252,161,71,1)"
                d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
              ></path>
            </svg>
            <div class="num"><span>91 %</span></div>
            <div style="font-size: 0.6rem">瓦斯利用率</div>
          </div>
        </div>
        <!-- <div class="right-box-title title">瓦斯排放情况分析</div>

        <div class="right-box-content row">
          <div style="width: 50%; text-align: center">
            <pie3 />
          </div>
          <div style="width: 50%; padding-top: 2rem; font-size: 0.8rem">
            <div>
              <div>主回风井排放量</div>
              <div class="process process1"><span>1886 m³</span></div>
            </div>
            <div>
              <div>北风井排放量</div>
              <div class="process process2"><span>682 m³</span></div>
            </div>
            <div>
              <div>南风井排放量</div>
              <div class="process process3"><span>544 m³</span></div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</template>
<style scoped>
.jianjie {
  font-size: 0.7rem;
  padding: 0.5rem;
  color: #7ba2c5;
}
.jianjie img {
  width: 10rem;
  /* height: 100%; */
  border-radius: 1rem;
  margin-right: 1rem;
}
.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 60px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #00000078;
  border-radius: 2px;
  color: #ffffffb3;
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
  margin-left: 10px;
}

.radio-input label {
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 0.8rem;
}

.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: calc(var(--container_width) / 2);
  z-index: 0;
  left: 0;
  top: 0;
  transition: 0.15s ease;
}

.radio-input label:has(input:checked) {
  color: #ffffffb3;
}

.radio-input label:has(input:checked) ~ .selection {
  background-color: rgb(11 117 223);
  display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 0 / 2));
}

.radio-input label:nth-child(2):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 1 / 2));
}

.huanjingbaohu {
  width: fit-content;
  background: #00000038;
  font-size: 0.6rem;
  text-align: center;
  padding: 0.2rem;
  color: #6da4c5;
}

.nd {
  padding-bottom: 0.3rem !important;
  border-bottom: 1px solid #00000054;
  color: #e4f5ff;
  font-size: 0.7rem;
}

.huanjingbaohu div {
  padding: 0.3rem 5px 0;
}

.process {
  width: 100%;
  height: 0.5rem;
  background: #00000078;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  position: relative;
  text-align: right;
}

.process span {
  font-size: 0.6rem;
}

.process1:before {
  content: "";
  width: 60.6%;
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
  color: #ffffffb3;
}

.process2:before {
  content: "";
  width: 21.92%;
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
  color: #ffffffb3;
}

.process3:before {
  content: "";
  width: 17.48%;
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
  color: #ffffffb3;
}

.arrow {
  width: 0.5rem;
  height: 1rem;
  margin: 2px 0.5rem 0;
}

.num {
  position: relative;
  /* width: 6rem; */
  /* height: 3rem; */
  padding: 0.2rem 1rem;
  border: 2px solid #92cbee;
  background: #023866;
  user-select: none;
  white-space: nowrap;
  transition: all 0.05s linear;
  font-family: inherit;
  text-align: center;
  margin: 0.5rem;
}

.num:before,
.num:after {
  content: "";
  position: absolute;
  background: #023866;
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
  font-size: 1.2rem;
  z-index: 3;
  position: relative;
  font-weight: 600;
  /* color: #92cbee; */
}

.row {
  display: flex;
  justify-content: space-around;
}

.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
}

.box {
  /* background-image: url("./../assets/img/boxbg.png"); */
  /* background-size: 100% 100%; */
  color: #ffffffb3;
  padding: 0.5rem 1rem;
  /* margin-bottom: 1rem; */
}

.row-title {
  justify-content: space-between;
  text-align: center;
}

.box .carousel {
  /* position: relative; */
  /* left: 0; */
  max-width: 300px;
  animation: carousel 30s linear var(--carousel_direction, normal) infinite;
}

.box .carousel[data-direction="right"] {
  --carousel_direction: reverse;
}

.box .carousel[data-position="top"] {
  /* top: 0.75rem; */
}

.box .carousel[data-position="bottom"] {
  bottom: 0.75rem;
}

.box .carousel .carousel__text {
  font-size: 0.75rem;
  /* color: black; */
  text-wrap: nowrap;
}

@keyframes carousel {
  to {
    transform: translate(-800%);
  }
}

/* .box .left-box-title,
.right-box-title,
.center-box-title {
  font-size: 1rem;
  padding: 0.5rem 3rem;
  box-sizing: border-box;
  background-image: url(/src/assets/img/titlebgblue.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.center-box-title {
  background-size: 50% 100%;
} */
.left-box-content,
.right-box-content {
  padding: 0.5rem;
  box-sizing: border-box;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.2rem;
}

.co2zonglan {
  /* width: 50%; */
  text-align: left;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  /* padding: 0.5rem; */
}

.co2num {
  font-size: 0.6rem;
  color: #7ba2c5;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 1rem; */
  align-items: baseline;
}
.co2num b {
  /* font-family: "YousheBiaotiHei", sans-serif; */
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffffffb3;
}
.co2num small {
  font-size: 0.6rem;
  color: #ffffffb3;
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
  max-height: 240px;
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
  border: 1px solid #ddd;
  /* 根据需要调整 */
  text-align: center;
}

th {
  color: #ffffffb3;
  border: none;
  font-size: 0.7rem;
}

td {
  color: #6da4c5;
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
  /* margin-bottom: 1rem; */
  width: 130px;
}

.ebg {
  background-image: url(/src/assets/img/ebg.png);
  background-size: 100% 100%;
  /* padding: 0.5rem; */
  text-align: center;
  font-size: 1.5rem;
  /* margin-top: 0.5rem; */
  height: 6rem;
  color: #99ffff;
  font-weight: bold;
}

.flex-y {
  justify-content: center;
}

.zonghe-box {
  align-items: center;
  height: 120px;
  width: 18%;
  color: #13e3ff;
  background: #092cbf36;
  padding: 0 1rem 1rem;
  margin: 10px;
  box-sizing: content-box;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
  font-size: 0.6rem;
}

.card b {
  font-size: 1rem;
  margin: 0.5rem 0;
  text-shadow: 0 0 2px #13e3ff, 0 0 30px #37e7ff;
}

.card div {
  color: #7ba2c5;
  font-size: 0.8rem;
  word-break: keep-all;
}
</style>
