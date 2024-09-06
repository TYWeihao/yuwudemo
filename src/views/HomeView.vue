<script setup>
import bar from "@/components/charts/bar.vue";
import pie from "@/components/charts/pie.vue";
import pie3 from "@/components/charts/pie3.vue";
import pie4 from "@/components/charts/pie4.vue";
// import Map from "./map.vue";
import line4 from "@/components/charts/line4.vue";
import co2 from "@/components/charts/co2.vue";
import "@/assets/custom-font.css";
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box" style="overflow: hidden">
        <div class="left-box-title title">>企业概况</div>
        <!-- <div class="left-box-content" style="max-height: 150px; overflow: hidden; width: 100%">
                    <img src="./../assets/img/bg.png.jpg" alt="" style="width: 100%" />
                </div> -->
        <div class="left-box-content" style="overflow: hidden; width: 100%">
          <article class="jianjie">
            <img src="./../assets/img/bg.png.jpg" alt="" />
            <div class="jianjie_content">
              余吾煤业公司位于山西省长治市屯留县，属潞安矿区。井田面积134.548平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力750万吨/年，配套900万吨/年的洗煤厂，可实现原煤的全部洗选。
            </div>
          </article>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">
          <div>>总量指标</div>
        </div>
        <div class="left-box-content row" style="flex-wrap: wrap">
          <div
            class="zl-card"
            style="border-right: 1px solid #bbb; border-bottom: 1px solid #bbb"
          >
            <div class="zl-icon">
              <img src="./../assets/img/zl01.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  原煤产量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/up.png"
                    alt=""
                  />
                  <small style="color: #5ea755">4.5% 同比</small>
                </div>
              </div>
              <span class="zl-card-title">6801666 <small>吨</small></span>
            </div>
          </div>
          <div class="zl-card" style="border-bottom: 1px solid #bbb">
            <div class="zl-icon">
              <img src="./../assets/img/zl02.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  营业收入
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/up.png"
                    alt=""
                  />
                  <small style="color: #5ea755">2.5% 同比</small>
                </div>
              </div>
              <span class="zl-card-title">366782 <small>万元</small></span>
            </div>
          </div>
          <div class="zl-card" style="border-right: 1px solid #bbb">
            <div class="zl-icon">
              <img src="./../assets/img/zl03.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  碳排放量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/down.png"
                    alt=""
                  />
                  <small style="color: #ff0000">3.5% 同比</small>
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >116855 <small>吨</small></span
              >
            </div>
          </div>

          <div class="zl-card">
            <div class="zl-icon">
              <img src="./../assets/img/zl04.png" alt="" />
            </div>
            <div class="zl-card-content">
              <div>
                <div style="display: flex; align-items: center; font-size: 0.8rem">
                  能耗总量
                  <img
                    class="down"
                    style="width: 0.2rem; height: 0.6rem; margin: 1px 5px 0"
                    src="./../assets/img/down.png"
                    alt=""
                  />
                  <small style="color: #ff0000">4.5% 同比</small>
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >26526 <small>吨ce</small></span
              >
            </div>
          </div>
        </div>
        <div style="margin-top: -1.2rem; text-align: right">截止2024年8月</div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">
          <div>>碳排放分析</div>
        </div>

        <div class="left-box-content">
          <div style="width: 100%; height: 100%; margin-top: -2rem">
            <co2 />
            <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              <div style="display: flex">
                碳排放总量
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  116855.26 吨
                </div>
              </div>
              <div style="display: flex">
                碳排放强度
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  17.18 kgCO₂/t原煤
                </div>
              </div>
            </div>
            <!-- <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              与2020相比碳排放减少量
              <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                58174.33 吨
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="center-box box" style="padding: 0; height: 800px">
        <Map />
      </div> -->
      <div style="position: absolute; top: 155px; left: 28%">
        <div class="ebox">
          <div class="ebg">2030 年</div>
          <div style="margin-top: -1rem">零碳矿山目标达成时间</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title title">>能耗趋势分析</div>
        <div class="right-box-content">
          <div style="width: 100%; height: 100%; margin-top: -1.5rem">
            <line4 />
            <div
              style="
                display: flex;
                font-size: 0.8rem;
                width: 100%;
                justify-content: space-between;
              "
            >
              <div style="display: flex">
                总节能量
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  1774.26 t标煤
                </div>
              </div>
              <div style="display: flex">
                能耗强度
                <div style="font-weight: 600; color: #ffde00; margin-left: 5px">
                  3.9 kgce/t
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>瓦斯利用情况</div>
        </div>
        <div
          class="right-box-content"
          style="
            margin: 0 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          "
        >
          <div style="text-align: center; width: 32%">
            <div class="num"><span>3398万 m³</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用总量</div>
          </div>
          <div style="text-align: center; width: 32%">
            <div class="num"><span>478098 tCO₂</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用碳减排量</div>
          </div>
          <div style="text-align: center; width: 32%">
            <div class="num"><span>52.25 %</span></div>
            <img src="./../assets/img/wsbg.png" alt="" style="width: 100%" />
            <div style="font-size: 0.8rem">瓦斯利用率</div>
          </div>
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>环境保护分析</div>
        </div>
        <div class="right-box-content row" style="flex-wrap: wrap">
          <div class="hb-box">
            <div class="hb-title">
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
              废气排放量
            </div>
            <div class="hb-process">
              <span>60343.6 m³</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
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
              废水排放量
            </div>
            <div class="hb-process">
              <span>34243.6 m³</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
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
              固废产生量
            </div>
            <div class="hb-process">
              <span>2343.6 吨</span>
            </div>
          </div>
          <div class="hb-box">
            <div class="hb-title">
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
              危废产生量
            </div>
            <div class="hb-process">
              <span>2475.1 吨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switch-view">
      <div class="select">
        <div
          class="selected"
          data-default="中央工业广场"
          data-one="北风井"
          data-two="南风井"
          data-three="地下总采区"
          data-four="北风井东翼采区"
          data-five="北风井西翼采区"
          data-six="南五采区"
          data-seven="南一采区"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="arrow"
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            ></path>
          </svg>
        </div>
        <div class="options">
          <div title="中央工业广场">
            <input id="all" name="option" type="radio" checked="" />
            <label class="option" for="中央工业广场" data-txt="中央工业广场"></label>
          </div>
          <div title="北风井">
            <input id="option-1" name="option" type="radio" />
            <label class="option" for="option-1" data-txt="北风井"></label>
          </div>
          <div title="南风井">
            <input id="option-2" name="option" type="radio" />
            <label class="option" for="option-2" data-txt="南风井"></label>
          </div>
          <div title="地下总采区">
            <input id="option-3" name="option" type="radio" />
            <label class="option" for="option-3" data-txt="地下总采区"></label>
          </div>
          <div title="北风井东翼采区">
            <input id="option-4" name="option" type="radio" />
            <label class="option" for="option-4" data-txt="北风井东翼采区"></label>
          </div>
          <div title="北风井西翼采区">
            <input id="option-5" name="option" type="radio" />
            <label class="option" for="option-5" data-txt="北风井西翼采区"></label>
          </div>
          <div title="南五采区">
            <input id="option-6" name="option" type="radio" />
            <label class="option" for="option-6" data-txt="南五采区"></label>
          </div>
          <div title="南一采区">
            <input id="option-7" name="option" type="radio" />
            <label class="option" for="option-7" data-txt="南一采区"></label>
          </div>
        </div>
      </div>
      <div class="radio-inputs">
        <label>
          <input class="radio-input" type="checkbox" name="engine" />
          <span class="radio-tile">
            <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 8 8"
              >
                <path
                  fill="#00ffff"
                  d="M0 0v7h1V0zm7 0v7h1V0zM2 1v1h2V1zm1 2v1h2V3zm1 2v1h2V5z"
                />
              </svg>
            </span>
            <span class="radio-label">项目</span>
          </span>
        </label>
        <label>
          <input checked="" class="radio-input" type="checkbox" name="engine" />
          <span class="radio-tile">
            <span class="radio-icon">
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
            </span>
            <span class="radio-label">设备</span>
          </span>
        </label>
        <label>
          <input class="radio-input" type="checkbox" name="engine" />
          <span class="radio-tile">
            <span class="radio-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="#00ffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path
                    d="M43 6H5m18 17V6M8.425 19.58l31.876 8.54l-1.743 2.64l-4.002 7.21l-1.743 2.639l-28.011-7.506z"
                  />
                  <path d="m38.558 30.76l3.864 1.035l-2.07 7.727l-5.796-1.552" />
                </g>
              </svg>
            </span>
            <span class="radio-label">监测</span>
          </span>
        </label>
      </div>
    </div>
    <!-- <div class="input">
      <button class="value">中央工业广场</button>
      <button class="value">北风井</button>
      <button class="value">南风井</button>
      <button class="value">地下总采区</button>
      <button class="value">北风井东翼采区</button>
      <button class="value">南五采区</button>
      <button class="value">南一采区</button>
    </div> -->
  </main>
</template>
<style scoped>
/* From Uiverse.io by 3bdel3ziz-T */
/* From Uiverse.io by Yaya12085 */
.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
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

.radio-input:checked + .radio-tile .radio-icon svg {
  fill: #2260ff;
}

.radio-input:checked + .radio-tile .radio-label {
  color: #00ffff;
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
  border: 2px solid #0632a7;
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
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
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

.arrow {
  position: relative;
  right: 0px;
  height: 10px;
  transform: rotate(90deg);
  width: 25px;
  fill: white;
  z-index: 100000;
  transition: 300ms;
}

.options {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  background-color: #2a2f3b;
  position: relative;
  top: -100px;
  opacity: 0;
  transition: 300ms;
}

.select:hover > .options {
  opacity: 1;
  top: 0;
}

.select:hover > .selected .arrow {
  transform: rotate(0deg);
}

.option {
  border-radius: 5px;
  padding: 5px;
  transition: 300ms;
  background-color: #2a2f3b;
  width: 150px;
  font-size: 15px;
}
.option:hover {
  background-color: #323741;
}

.options input[type="radio"] {
  display: none;
}

.options label {
  display: inline-block;
}
.options label::before {
  content: attr(data-txt);
}

.options input[type="radio"]:checked + label {
  display: none;
}

.options input[type="radio"]#all:checked + label {
  display: none;
}

.select:has(.options input[type="radio"]#all:checked) .selected::before {
  content: attr(data-default);
}
.select:has(.options input[type="radio"]#option-1:checked) .selected::before {
  content: attr(data-one);
}
.select:has(.options input[type="radio"]#option-2:checked) .selected::before {
  content: attr(data-two);
}
.select:has(.options input[type="radio"]#option-3:checked) .selected::before {
  content: attr(data-three);
}
.select:has(.options input[type="radio"]#option-4:checked) .selected::before {
  content: attr(data-four);
}
.select:has(.options input[type="radio"]#option-5:checked) .selected::before {
  content: attr(data-five);
}
.select:has(.options input[type="radio"]#option-6:checked) .selected::before {
  content: attr(data-six);
}
.select:has(.options input[type="radio"]#option-7:checked) .selected::before {
  content: attr(data-seven);
}
.hb-box {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 0.5rem 0 0.5rem 2rem;
  background-image: url("./../assets/img/hbbg.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
}
.hb-icon {
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0.5rem; */
}
.hb-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.hb-title {
  font-size: 0.8rem;
  color: #fff;
  display: flex;
  align-items: center;
}
.hb-process {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 600;
  /* 外发光 */
  text-shadow: 0 0 5px #00ffff;
}
.jianjie {
  /* font-size: 0.7rem; */
  /* padding: 0.5rem; */
  color: #7ba2c5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.jianjie img {
  /* width: 10vw; */
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  margin-right: 1rem;
  box-shadow: 0 0 10px #0ff;
}
.jianjie .jianjie_content {
  font-size: 0.8rem;
  text-align: justify;
  /* width: 80%; */
  /* height: 100%; */
}
.zl-card {
  display: flex;
  align-items: center;
  padding: 0.5rem;
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
.switch-view {
  padding: 1rem;
  /* background-color: #00000091; */
  position: absolute;
  bottom: 1rem;
  right: 28vw;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: end;
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
.arrow {
  width: 0.5rem;
  height: 1rem;
  margin: 2px 0.5rem 0;
}
.num {
  font-size: 0.7rem;
  color: #00ffff;
  font-weight: bold;
  font-family: "YousheBiaotiHei", sans-serif;
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
  background-image: url("./../assets/img/boxbg.png");
  background-size: 100% 100%;
  color: #ffffffb3;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}
main {
  background-image: url("./../assets/img/bg.png");
  background-size: 100% 100%;
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
  height: calc(100% - 2.8rem);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
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
  width: 170px;
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
