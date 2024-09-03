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
          <div style="text-align: center; min-width: 30%">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 10px"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                fill="#9ff"
              ></path>
            </svg>
            <div class="num"><span>2272 m³</span></div>
            <div style="font-size: 0.6rem">瓦斯利用总量</div>
          </div>
          <div style="text-align: center; min-width: 30%">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 10px"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                fill="#9ff"
              ></path>
            </svg>
            <div class="num"><span>1887 m³</span></div>
            <div style="font-size: 0.6rem">瓦斯利用量</div>
          </div>
          <div style="text-align: center; min-width: 30%">
            <svg
              height="40"
              width="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style="border-radius: 50%; border: 1px dashed #9ff; padding: 10px"
            >
              <path d="M0 0L24 0 24 24 0 24z" fill="none"></path>
              <path
                fill="#9ff"
                d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"
              ></path>
            </svg>
            <div class="num"><span>91 %</span></div>
            <div style="font-size: 0.6rem">瓦斯利用率</div>
          </div>
        </div>
        <div class="right-box-title title">减排项目情况</div>

        <div class="right-box-content row">
          <div class="parent" style="min-width: 30%">
            <div class="card">
              <div class="content-box">
                <span class="card-title">16 <small>个</small></span>
              </div>
              <div class="date-box">
                <span class="month"> 项目个数 </span>
              </div>
            </div>
          </div>
          <div class="parent" style="min-width: 30%">
            <div class="card">
              <div class="content-box">
                <span class="card-title">1.5 <small>亿元</small></span>
              </div>
              <div class="date-box">
                <span class="month"> 投资总额 </span>
              </div>
            </div>
          </div>
          <div class="parent" style="min-width: 30%">
            <div class="card">
              <div class="content-box">
                <span class="card-title">1.2 <small>万吨</small></span>
              </div>
              <div class="date-box">
                <span class="month">减排量</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-box-title title">环境保护分析</div>

        <div class="right-box-content row" style="flex-wrap: wrap">
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"
                />
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">废气排放量</div>
              <div class="hb-process">
                <span>60343.6 m³</span>
              </div>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M5.325 17q-.725 0-1.05.313t-.9.437t-.975-.112t-.4-.713q0-.375.325-.725t1.025-.7q.125-.075.663-.288T5.425 15q1.375 0 1.85.5t1.4.5t1.388-.5t1.912-.5t1.963.5t1.437.5t1.35-.5t1.85-.5q.575 0 1.113.138t1.087.412q.625.325.925.675t.3.7q0 .475-.4.713t-.975.112t-.912-.437T18.675 17q-.925 0-1.388.5t-1.912.5t-1.963-.5t-1.437-.5t-1.388.5t-1.937.5t-1.925-.5t-1.4-.5m0-4q-.7 0-1.038.313t-.912.437t-.975-.112t-.4-.713q0-.375.325-.725t1.025-.7q.125-.075.663-.287T5.425 11q1.375 0 1.85.5t1.4.5t1.388-.5t1.912-.5t1.963.5t1.412.5t1.35-.5t1.85-.5q.875 0 1.413.213t.662.287q.725.375 1.05.713t.325.712q0 .475-.413.713t-.987.112t-.9-.437T18.675 13q-.925 0-1.387.5t-1.913.5t-1.963-.5t-1.437-.5t-1.362.5T8.7 14t-1.963-.5t-1.412-.5m0-4q-.7 0-1.038.313t-.912.437t-.975-.112t-.4-.713q0-.375.325-.725t1.025-.7q.125-.075.663-.287T5.425 7q1.375 0 1.85.5t1.4.5t1.388-.5t1.912-.5t1.963.5t1.412.5t1.35-.5t1.85-.5q.875 0 1.413.213t.662.287q.725.375 1.05.713t.325.712q0 .475-.413.713t-.987.112t-.9-.437T18.675 9q-.925 0-1.387.5t-1.913.5t-1.963-.5t-1.437-.5t-1.362.5T8.7 10t-1.963-.5T5.325 9"
                />
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">废水排放量</div>
              <div class="hb-process">
                <span>34243.6 m³</span>
              </div>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M12 7v6"
                  />
                  <circle cx="12" cy="16" r="1" fill="#ffffff" />
                  <path
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
                  />
                </g>
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">固废产生量</div>
              <div class="hb-process">
                <span>2343.6 吨</span>
              </div>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 48 48"
              >
                <g fill="#ffffff">
                  <path
                    d="m20.3 30l-4.216 7.44a.64.64 0 0 0-.059.495a.66.66 0 0 0 .315.393c4.667 2.61 10.654 2.61 15.318 0a.66.66 0 0 0 .317-.393a.64.64 0 0 0-.06-.495L27.701 30a6.05 6.05 0 0 1-3.7 1.25A6.05 6.05 0 0 1 20.3 30m.55-12.276l-4.336-7.371a.64.64 0 0 0-.398-.299a.66.66 0 0 0-.499.077c-4.593 2.736-7.587 7.92-7.659 13.265a.66.66 0 0 0 .183.471c.12.125.284.195.458.196l8.55.07a6.05 6.05 0 0 1 .769-3.829a6.05 6.05 0 0 1 2.932-2.58m10 6.551l8.551-.069a.64.64 0 0 0 .458-.196a.66.66 0 0 0 .183-.47c-.073-5.346-3.066-10.53-7.659-13.265a.66.66 0 0 0-.498-.078a.64.64 0 0 0-.4.299l-4.335 7.37a6.05 6.05 0 0 1 2.932 2.58a6.04 6.04 0 0 1 .768 3.83M29 24a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">危废产生量</div>
              <div class="hb-process">
                <span>2475.1 吨</span>
              </div>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m.975-2q-.975 0-1.75-.6T10.1 15.85q-.075-.2-.162-.388t-.238-.337L8.45 13.85q-.65-.65-1.05-1.5t-.4-1.8q0-1.875 1.313-3.213T11.5 6q1.3 0 2.388.688T15.55 8.55q.25.5-.038.975T14.65 10q-.3 0-.537-.162T13.75 9.4q-.325-.65-.925-1.025T11.5 8q-1.05 0-1.775.725T9 10.5q0 .525.188 1t.562.85l1.375 1.35q.35.35.563.763t.362.862q.125.3.375.488T13 16q.275 0 .513-.137t.362-.388q.125-.225.35-.35t.5-.125q.575 0 .875.475t.025.975q-.4.725-1.112 1.138T12.974 18m.525-4q.625 0 1.063-.437T15 12.5t-.437-1.062T13.5 11t-1.062.438T12 12.5t.438 1.063T13.5 14"
                />
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">噪声均值</div>
              <div class="hb-process">
                <span>43.6 dB</span>
              </div>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 14 14"
              >
                <g fill="none" stroke="#ffffff" stroke-linecap="round">
                  <path
                    stroke-linejoin="round"
                    d="M6.338 3.7a1 1 0 0 0-.943-.668H4.62a.893.893 0 0 0-.19 1.765l1.178.258a1 1 0 0 1-.214 1.977h-.667a1 1 0 0 1-.943-.666m1.278-3.334v-1m0 6v-1m1.907 6.467v-5.25a1.25 1.25 0 0 1 1.25-1.25v0a1.25 1.25 0 0 1 1.25 1.25v2.75h2a2 2 0 0 1 2 2v.5"
                  />
                  <path d="M5.063 9.564a4.531 4.531 0 1 1 4.489-3.911" />
                </g>
              </svg>
            </div>
            <div class="hb-content">
              <div class="hb-title">环保投入</div>
              <div class="hb-process">
                <span>132 万元</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.hb-box {
  display: flex;
  align-items: center;
  margin: 0.3rem;
  padding: 0.5rem;
  background: linear-gradient(90deg, #00000078, #00000078);
  min-width: 45%;
}
.hb-icon {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
.hb-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.hb-content {
  width: 100%;
}
.hb-title {
  font-size: 0.6rem;
  color: #7ba2c5;
}
.jianjie {
  font-size: 0.7rem;
  padding: 0.5rem;
  color: #7ba2c5;
}
.jianjie img {
  width: 10rem;
  height: 5rem;
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
  font-size: 1rem;
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
