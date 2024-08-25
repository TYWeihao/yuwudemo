<script setup>
import co2 from "@/components/charts/co2.vue";
import co2e from "@/components/charts/co2e.vue";
import pie from "@/components/charts/pie.vue";
import bar2 from "@/components/charts/bar2.vue";
const xiangmuData = [
  {
    name: "加强设备节能管理，推进矿区节能降碳增效",
    value:
      "淘汰落后产能及高耗能工艺、装备，如旧压风机及压风管路更换，对矿井主通风机、瓦斯抽采泵节能改造等，提升设备用能效率。",
  },
  {
    name: "提升余热和新能源利用，推动矿区低碳零碳供能",
    value:
      "开展主井工业场地乏风及低浓度瓦斯氧化、北风井工业场地乏风氧化、南风井场地乏风氧化供热及瓦斯电厂余热、空压风机余热回收利用等工程",
  },
  {
    name: "实施瓦斯高效利用技术，推动矿区瓦斯利用减碳",
    value:
      "采用低负压、定向钻机、煤层瓦斯增透技术等瓦斯抽采先进装备、工艺和技术，提升瓦斯抽采浓度和稳定性。余吾煤业通过氧化、提浓等方式开展低浓度瓦斯和乏风综合利用，有效提升瓦斯利用量。",
  },
  {
    name: "开展修复治理碳汇恢复，推动矿区生态增汇固碳",
    value:
      "矿产资源开发设计、开采各阶段中，将制定切实可行的矿山土地保护和土地复垦方案与措施，并严格实施，引进先进土地复垦技术，对矿山压占、损毁而可复垦的土地应得到全面复垦利用。",
  },
  {
    name: "加快智慧化矿井建设，提升矿区智能化水平",
    value:
      "对掘进工作面、提升、运输、通风、排水、压风、供配电等生产系统进行配套建设改造，通过推广应用视频监测、智能监测与保护、自动控制或集中控制等技术，实现矿井固定场所运输设备无人值守或集中控制。",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">降碳目标</div>
        <div class="left-box-content row" style="flex-wrap: wrap">
          <div class="p-card">
            <div class="p-title">
              <p class="title-text">合计排放量</p>
              <p class="percent">完成 80%</p>
            </div>
            <div class="data">
              <p>19,361.89 <small style="color: #6da4c5"> / 24500 tCO₂</small></p>

              <div class="range">
                <div class="fill"></div>
              </div>
            </div>
          </div>
          <div class="p-card">
            <div class="p-title">
              <p class="title-text">吨原煤生产综合能耗</p>
              <p class="percent">完成 75.5%</p>
            </div>
            <div class="data">
              <p>1.85 <small style="color: #6da4c5"> / 2.45 kgce/t</small></p>

              <div class="range">
                <div class="fill"></div>
              </div>
            </div>
          </div>
          <div class="p-card" style="margin-top: 0.5rem">
            <div class="p-title">
              <p class="title-text">吨原煤生产电耗</p>
              <p class="percent">完成 90.5%</p>
            </div>
            <div class="data">
              <p>3.30 <small style="color: #6da4c5"> / 3.65 kwh/t</small></p>
              <div class="range">
                <div class="fill"></div>
              </div>
            </div>
          </div>
          <div class="p-card" style="margin-top: 0.5rem">
            <div class="p-title">
              <p class="title-text">吨原煤二氧化碳排放量</p>
              <p class="percent">完成 73%</p>
            </div>
            <div class="data">
              <p>1.39 <small style="color: #6da4c5"> / 1.91 kgce/t</small></p>
              <div class="range">
                <div class="fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">用能结构降碳情况</div>
        <div class="left-box-content row" style="justify-content: space-between">
          <div class="row" style="align-items: center">
            <div style="color: #6da4c5; margin-right: 1rem; font-size: 0.8rem">
              合计排放量
            </div>
            <div style="color: #9ff; font-weight: bold; font-size: 1rem">
              131887.09 <small>tCO₂</small>
            </div>
          </div>
          <div style="display: flex; align-items: center; font-size: 0.8rem">
            同比
            <img
              class="arrow down"
              style="transform: rotateX(180deg)"
              src="./../assets/img/up.png"
              alt=""
            />
            3.5%
          </div>
        </div>
        <div class="left-box-content row">
          <div
            style="
              width: 33%;
              display: flex;
              flex-direction: column; /* align-items: stretch; */
              justify-content: center;
              padding: 0 0.5rem;
            "
          >
            <!-- { value: 2462.83, name: "天然气" },
          { value: 530.1, name: "汽油" },
          { value: 1202.05, name: "柴油" },
          { value: 31658.22, name: "热力" },
          { value: 96510.89, name: "电力" } -->

            <div class="co2zonglan" style="color: #6be6c1">
              <div class="row" style="align-items: center">
                <div class="circle" style="background-color: #6be6c1"></div>
                <div>电力</div>
              </div>
              <div class="co2num">
                <div>96510.89</div>
                <small
                  data-v-b4e148ca=""
                  style="display: flex; align-items: center; font-size: 0.6rem"
                  >同比
                  <img
                    class="down"
                    style="
                      transform: rotateX(180deg);
                      width: 0.2rem;
                      height: 0.5rem;
                      margin: 2px 0.1rem 0;
                    "
                    src="/src/assets/img/up.png"
                    alt=""
                    data-v-b4e148ca=""
                  />
                  2.5%
                </small>
              </div>
            </div>
            <div class="co2zonglan" style="color: #3fb1e3">
              <div class="row" style="align-items: center">
                <div class="circle" style="background-color: #3fb1e3"></div>
                <div>热力</div>
              </div>
              <div class="co2num">
                <div>31658.22</div>
                <small
                  data-v-b4e148ca=""
                  style="display: flex; align-items: center; font-size: 0.6rem"
                  >同比
                  <img
                    class="down"
                    style="
                      transform: rotateX(180deg);
                      width: 0.2rem;
                      height: 0.5rem;
                      margin: 2px 0.1rem 0;
                    "
                    src="/src/assets/img/up.png"
                    alt=""
                    data-v-b4e148ca=""
                  />
                  3.2%
                </small>
              </div>
            </div>
            <div class="co2zonglan" style="color: #626c91">
              <div class="row" style="align-items: center">
                <div class="circle" style="background-color: #626c91"></div>
                <div>天然气</div>
              </div>
              <div class="co2num">
                <div>2462.83</div>
                <small
                  data-v-b4e148ca=""
                  style="display: flex; align-items: center; font-size: 0.6rem"
                  >同比
                  <img
                    class="down"
                    style="
                      transform: rotateX(180deg);
                      width: 0.2rem;
                      height: 0.5rem;
                      margin: 2px 0.1rem 0;
                    "
                    src="/src/assets/img/up.png"
                    alt=""
                    data-v-b4e148ca=""
                  />
                  1.5%
                </small>
              </div>
            </div>
          </div>
          <div style="width: 33%">
            <pie />
          </div>
          <div
            style="
              width: 33%;
              display: flex;
              flex-direction: column; /* align-items: stretch; */
              justify-content: center;
              padding: 0 0.5rem;
            "
          >
            <!-- { value: 2462.83, name: "天然气" },
          { value: 530.1, name: "汽油" },
          { value: 1202.05, name: "柴油" },
          { value: 31658.22, name: "热力" },
          { value: 96510.89, name: "电力" } -->

            <div class="co2zonglan" style="color: #a0a7e6">
              <div class="row" style="align-items: center">
                <div class="circle" style="background-color: #a0a7e6"></div>
                <div>汽油</div>
              </div>
              <div class="co2num">
                <div>530.1</div>
                <small
                  data-v-b4e148ca=""
                  style="display: flex; align-items: center; font-size: 0.6rem"
                  >同比
                  <img
                    class="down"
                    style="
                      transform: rotateX(180deg);
                      width: 0.2rem;
                      height: 0.5rem;
                      margin: 2px 0.1rem 0;
                    "
                    src="/src/assets/img/up.png"
                    alt=""
                    data-v-b4e148ca=""
                  />
                  2.7%
                </small>
              </div>
            </div>
            <div class="co2zonglan" style="color: #c4ebad">
              <div class="row" style="align-items: center">
                <div class="circle" style="background-color: #c4ebad"></div>
                <div>柴油</div>
              </div>
              <div class="co2num">
                <div>1202.05</div>
                <small
                  data-v-b4e148ca=""
                  style="display: flex; align-items: center; font-size: 0.6rem"
                  >同比
                  <img
                    class="down"
                    style="
                      transform: rotateX(180deg);
                      width: 0.2rem;
                      height: 0.5rem;
                      margin: 2px 0.1rem 0;
                    "
                    src="/src/assets/img/up.png"
                    alt=""
                    data-v-b4e148ca=""
                  />
                  2.9%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">降碳主要任务</div>
        <div class="left-box-content">
          <div class="list-container" v-for="item in xiangmuData" :key="item.name">
            <div class="list">
              <div class="front-content">
                <p>{{ item.name }}</p>
              </div>
              <div class="content">
                <p>
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box">
        <div class="top">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 16 16"
            >
              <path fill="#0891b2" d="M9.5 6.5L10 0H9L2 9.5h4.5L6 16h1l7-9.5z" />
            </svg>
            <div>
              节电量
              <div class="topnum">126162.91 mwh</div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#0891b2"
                d="M304 64c-23.723 1.039-64 32-96 48c-32-10.667-79.124-37.34-96-32c-22.196 7.024-47.374 44.154-71.533 71h435.719C467.4 130.604 444.747 80.887 432 80c-15.998-1.113-80 48-80 48c-16-21.333-36.57-64.5-48-64M27.133 169l44.144 206H119V169zM137 169v14h46v-14zm64 0v206h239.725l44.142-206zm-64 32v14h46v-14zm0 32v14h46v-14zm0 32v14h46v-14zm0 32v14h46v-14zm0 32v14h46v-14zm0 32v14h46v-14zM25 393v30h462v-30zm11.822 48C34.387 445.436 33 450.543 33 456c0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15zm80 0c-2.435 4.436-3.822 9.543-3.822 15c0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15zm81.74 0l15 30h84.875l15-30zm142.26 0c-2.435 4.436-3.822 9.543-3.822 15c0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15zm80 0c-2.435 4.436-3.822 9.543-3.822 15c0 17.227 13.773 31 31 31s31-13.773 31-31c0-5.457-1.387-10.564-3.822-15z"
              />
            </svg>
            <div>
              节约标煤
              <div class="topnum">96.80万 tce</div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0891b2"
                d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H5V9h3V7zm6 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm5 1.5V12h3v1.5h-1.5A1.5 1.5 0 0 0 16 15v3h4.5v-1.5h-3V15H19a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5z"
              />
            </svg>
            <div>
              减排二氧化碳
              <div class="topnum">253.62 万吨</div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0891b2"
                d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm7-6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18"
              />
            </svg>
            <div>
              安全生产天数
              <div class="topnum">522 天</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">降碳趋势</div>
        <div class="right-box-content" style="height: 220px">
          <co2 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">降碳项目推进情况</div>
        <div class="right-box-content" style="height: 500px">
          <bar2 />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* From Uiverse.io by gharsh11032000 */
.list-container {
  /* width: 300px; */
  /* height: 300px; */
  position: relative;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #00000078;
  margin: 0.2rem 0;
}

.list {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: all 1.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list .front-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list .front-content p {
  font-size: 0.8rem;
  /* font-weight: 700; */
  color: #6da4c5;
  opacity: 1;
  padding: 0.5rem;
  /* background: linear-gradient(-45deg, #29bdf8 0%, #0f48ff 100%); */
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.list .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: linear-gradient(-45deg, #074c58 0%, #2ba4c0 100%);
  color: #e8e8e8;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translateX(-99%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  font-size: 0.8rem;
}

.list .content .heading {
  font-size: 32px;
  font-weight: 700;
}
.list:hover {
  height: 80px;
}
.list:hover .content {
  transform: translateY(0);
}

.list:hover .front-content {
  transform: translateX(-30%);
}

.list:hover .front-content p {
  opacity: 0;
}

.tag {
  width: 1.2rem;
  height: 0.8rem;
  border-radius: 4px;
  margin-right: 0.2rem;
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
  font-size: 0.8rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
.top {
  display: flex;
  justify-content: space-around;
  background-color: #00000078;
  padding: 0.5rem;
  font-size: 0.6rem;
}
.top > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topnum {
  font-size: 0.8rem;
  color: #fff;
}
.top > div > svg {
  margin-right: 0.5rem;
}
/* From Uiverse.io by Yaya12085 */
.p-card {
  padding: 1rem;
  background-color: #00000078;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* max-width: 320px; */
  /* border-radius: 4px; */
  width: 47%;
}

.p-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
}

.p-title span {
  position: relative;
  padding: 0.5rem;
  background-color: #10b981;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
}

.p-title span svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  height: 1rem;
  transform: rotateX(180deg);
}

.title-text {
  /* margin-left: 0.5rem; */
  color: #6da4c5;
  font-size: 0.6rem;
}
.arrow {
  width: 0.5rem;
  height: 1rem;
  margin: 2px 0.5rem 0;
}
.percent {
  margin-left: 0.5rem;
  color: #02972f;
  font-weight: 600;
  display: flex;
  font-size: 0.8rem;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.data p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-align: right;
}

.data .range {
  position: relative;
  background-color: #e5e7eb;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.data .range .fill {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #10b981;
  width: 76%;
  height: 100%;
  border-radius: 0.25rem;
}
</style>
