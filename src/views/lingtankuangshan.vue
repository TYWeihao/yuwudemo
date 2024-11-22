<script setup>
import bar5 from "@/components/charts/bar5.vue";
import bar6 from "@/components/charts/bar6.vue";
import "@/assets/custom-font.css";
import { ref } from "vue";
import moment from "moment";

const today = moment();
const endDay = moment([2030, 11, 31]);
const days = endDay.diff(today, "days");
const daysArray = days.toString().split("").map(Number);
const showDetail = ref(false);
const showDetail2 = ref(false);
const tab = ref(0);
function changeTab(index) {
  showDetail.value = true;
  tab.value = index;
}
</script>

<template>
  <main style="background-image: url(@/assets/img/bg2.png)">
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>零碳矿山纲要</div>
        <div class="left-box-content flex-y">
          <div
            style="
              margin: 0 0.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
            "
            @click="showDetailBox('wasiliyong')"
          >
            <div style="text-align: center; width: 32%">
              <div class="num">
                <span class="tooltip"
                  >一
                  <div
                    style="
                      font-size: 0.9rem;
                      margin-top: -10px;
                      color: #ffffffb3;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                  >
                    个智慧大脑
                  </div>

                  <span
                    class="tooltiptext"
                    style="
                      font-size: 1rem;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                    >包括零碳矿山智慧大脑和移动应用</span
                  >
                </span>
              </div>
              <img
                src="./../assets/img/wsbg.png"
                alt=""
                style="width: 100px; margin-top: -50px; height: 30px"
              />
              <!-- <div style="font-size: 0.8rem; margin-top: -10px">一个智慧大脑</div> -->
            </div>
            <div style="text-align: center; width: 32%">
              <div class="num">
                <span class="tooltip"
                  >二
                  <div
                    style="
                      font-size: 0.9rem;
                      margin-top: -10px;
                      color: #ffffffb3;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                  >
                    个重要指标
                  </div>
                  <span
                    class="tooltiptext"
                    style="
                      font-size: 1rem;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                    >能耗双控指标和碳排双控指标</span
                  >
                </span>
              </div>
              <img
                src="./../assets/img/wsbg.png"
                alt=""
                style="width: 100px; margin-top: -50px; height: 30px"
              />
              <!-- <div style="font-size: 0.8rem; margin-top: -10px">二个重要指标</div> -->
            </div>
            <div style="text-align: center; width: 32%">
              <div class="num">
                <span class="tooltip"
                  >三
                  <div
                    style="
                      font-size: 0.9rem;
                      margin-top: -10px;
                      color: #ffffffb3;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                  >
                    年建设时间
                  </div>
                  <span
                    class="tooltiptext"
                    style="
                      font-size: 1rem;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                    >争取利用3年时间，基本达成零碳矿山目标</span
                  >
                </span>
              </div>
              <img
                src="./../assets/img/wsbg.png"
                alt=""
                style="width: 100px; margin-top: -50px; height: 30px"
              />
              <!-- <div style="font-size: 0.8rem; margin-top: -10px">三年建设时间</div> -->
            </div>
          </div>
          <div
            style="
              margin: 0 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              width: 100%;
            "
            @click="showDetailBox('wasiliyong')"
          >
            <div style="text-align: center; width: 32%">
              <div class="num">
                <span class="tooltip"
                  >四
                  <div
                    style="
                      font-size: 0.9rem;
                      margin-top: -10px;
                      color: #ffffffb3;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                  >
                    大降碳抓手
                  </div>
                  <span
                    class="tooltiptext"
                    style="
                      font-size: 1rem;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                    >节能降耗减碳、瓦斯利用降碳、绿色供能低碳、矿区增汇固碳</span
                  >
                </span>
              </div>
              <img
                src="./../assets/img/wsbg.png"
                alt=""
                style="width: 100px; margin-top: -50px; height: 30px"
              />
              <!-- <div style="font-size: 0.8rem; margin-top: -10px">四大降碳抓手</div> -->
            </div>
            <div style="text-align: center; width: 32%">
              <div class="num">
                <span class="tooltip"
                  >五
                  <div
                    style="
                      font-size: 0.9rem;
                      margin-top: -10px;
                      color: #ffffffb3;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                  >
                    套应用体系
                  </div>
                  <span
                    class="tooltiptext"
                    style="
                      font-size: 1rem;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    "
                    >零碳矿山、碳排双控、能耗双控、瓦斯管控、环境保护</span
                  >
                </span>
              </div>
              <img
                src="./../assets/img/wsbg.png"
                alt=""
                style="width: 100px; margin-top: -50px; height: 30px"
              />
              <!-- <div style="font-size: 0.8rem; margin-top: -10px">五套应用体系</div> -->
            </div>
          </div>
          <!-- <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>1个智慧大脑:</b>
                  <span>包括零碳矿山智慧大脑和移动应用</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>2个重要指标:</b>
                  <span>能耗双控指标和碳排双控指标</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>3年建设时间:</b>
                  <span>争取利用3年时间，基本达成零碳矿山目标</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>4大降碳抓手:</b>
                  <span>节能降耗减碳、瓦斯利用降碳、绿色供能低碳、矿区增汇固碳</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>5套应用体系:</b>
                  <span>零碳矿山、碳排双控、能耗双控、瓦斯管控、环境保护</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>零碳矿山建设历程</div>
        <div class="left-box-content row timeline" @click="showDetail2 = true">
          <!-- <div class="timeline">
            <div class="timeline-item" style="background-color: #05aaef">
              <div class="tiemline-time">2023年11月02日</div>
              <div class="timeline-content">申报零碳矿山</div>
            </div>
            <div class="timeline-item" style="background-color: #05aaef">
              <div class="tiemline-time">2023年11月15日</div>
              <div class="timeline-content">通过现场核查</div>
            </div>
            <div class="timeline-item" style="background-color: #0475b3">
              <div class="tiemline-time">2023年11月22日</div>
              <div class="timeline-content">通过综合评估</div>
            </div>
            <div class="timeline-item" style="background-color: #0475b3">
              <div class="tiemline-time">2023年12月28日</div>
              <div class="timeline-content">获批试点单位</div>
            </div>
            <div class="timeline-item" style="background-color: #02447b">
              <div class="tiemline-time">2025年12月31日</div>
              <div class="timeline-content">项目初步建成</div>
            </div>
            <div class="timeline-item" style="background-color: #02447b">
              <div class="tiemline-time">2027年12月31日</div>
              <div class="timeline-content">零碳目标达成</div>
            </div>
          </div> -->
          <div class="button op1">
            <div class="timeline-content">申报零碳矿山</div>

            <div class="tiemline-time">2023年11月02日</div>
            <span class="button-border"></span>
          </div>
          <div class="button">
            <div class="timeline-content">通过现场核查</div>
            <div class="tiemline-time">2023年11月15日</div>
            <span class="button-border"></span>
          </div>
          <div class="button">
            <div class="timeline-content">通过综合评估</div>
            <div class="tiemline-time">2023年11月22日</div>
            <span class="button-border"></span>
          </div>
          <div class="button op1">
            <div class="timeline-content">获批试点单位</div>
            <div class="tiemline-time">2023年12月28日</div>
            <span class="button-border"></span>
          </div>
          <div class="button op1">
            <div class="timeline-content">项目初步建成</div>
            <div class="tiemline-time">2025年12月31日</div>
            <span class="button-border"></span>
          </div>
          <div class="button">
            <div class="timeline-content">零碳目标达成</div>
            <div class="tiemline-time">2027年12月31日</div>
            <span class="button-border"></span>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>预期目标</div>
        <div class="left-box-content flex-y">
          <div style="width: 100%">
            <div class="list">
              <div class="front-content" style="height: 100%; text-align: center">
                <div>
                  <b>年份</b>
                  <span>碳排放量</span><span>吨原煤生产电耗</span
                  ><span>零碳能源比例</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>2020年</b>
                  <span>159633.3吨</span><span>25.83kWh/t以内</span><span>0%</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>2025年</b>
                  <span>99910.2吨</span><span>20kWh/t以内</span><span>20%以上</span>
                  <!-- <span
                    >碳排放量:99910.2吨，吨原煤生产电耗:20kWh/t以内，矿区零碳能源使用比例:20%以上</span
                  > -->
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <div class="list-container">
            <div class="list">
              <div class="front-content" style="height: 100%">
                <div>
                  <b>2027年</b>
                  <span>-1038.3吨</span><span>18kWh/t以内</span><span>50%以上</span>
                </div>
              </div>
              <div class="content"></div>
            </div>
          </div>
          <!-- <div class="gjhj">
            
          </div>
          <div class="gjhj">
            2025年CO2排放量:99910.2吨，吨原煤生产电耗:20kWh/t以内，矿区零碳能源使用比例:20%以上
          </div>
          <div class="gjhj">
            2027年CO2排放量：-1038.3吨，吨原煤生产电耗：18kWh/t以内，矿区零碳能源使用比例：50%以上。
          </div> -->
        </div>
      </div>
      <!-- <div class="left-box box">
        <div class="left-box-title title">>具体措施</div>
        <div class="left-box-content detail-item">
          <table border="1">
            <thead>
              <tr>
                <th colspan="2">源头减碳</th>
                <th colspan="2">过程降碳</th>
                <th colspan="3">末端固碳</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>开发利用新能源</td>
                <td>绿色电力</td>
                <td>设备节能管理</td>
                <td>瓦斯利用减碳</td>
                <td>CO2先进高效捕集</td>
                <td>CO2资源化利用</td>
                <td>生态增汇固碳</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
    </div>
    <div class="center">
      <div
        style="
          position: absolute;
          top: 165px;
          left: 50%;
          width: 600px;
          margin-left: -300px;
          text-align: center;
        "
      >
        <div
          style="
            font-family: 'YousheBiaotiHei', sans-serif;
            font-size: 1.5rem;
            color: #0ff;
          "
        >
          零碳矿山目标达成倒计时<b
            v-for="num in daysArray"
            style="
              margin: 0.5rem;
              padding: 0.5rem 0.5rem 0.1rem;
              background: linear-gradient(0deg, #074c58 0%, #2ba4c0 100%);
              border-radius: 0.1rem;
            "
            >{{ num }}</b
          >天
        </div>
        <div
          style="
            padding: 0;
            display: flex;
            justify-content: space-evenly;
            font-size: 1rem;
            color: #ffffffb3;
            margin-top: 0.5rem;
          "
        >
          <div>
            碳排放量
            <b
              style="
                font-family: 'YousheBiaotiHei', sans-serif;
                color: #0ff;
                font-size: 1.2rem;
                margin: 0 0.5rem;
              "
              >-1038.3 </b
            >吨
          </div>
          <div>
            吨原煤生产电耗
            <b
              style="
                font-family: 'YousheBiaotiHei', sans-serif;
                color: #0ff;
                font-size: 1.2rem;
                margin: 0 0.5rem;
              "
              >18 kWh/t</b
            >以内
          </div>
        </div>
      </div>

      <div class="center-box" style="padding: 0; height: 800px">
        <div class="circle-container">
          <!-- <div class="circle" style="--i: 0">二氧化碳排放量<br />≥20%</div>
          <div class="circle" style="--i: 1">原煤生产电耗（kWh/t）<br />≤20</div>
          <div class="circle" style="--i: 2">零碳能源使用比例<br />≥20%</div>
          <div class="circle" style="--i: 3">矿区生产活动中新能源车辆占比<br />≥30%</div>
          <div class="circle" style="--i: 4">乏风瓦斯利用<br />有</div>
          <div class="circle" style="--i: 5">停用矸石场地覆土绿化率<br />100%</div> -->

          <!-- <div class="circle" style="--i: 2">运行管理</div> -->
          <!-- <div class="circle" style="--i: 3">用能结构</div> -->
          <div class="circle" style="--i: 1" @click="changeTab(1)">
            绿色供能低碳<small>累计减碳量<br />3789 tCO₂</small>
          </div>
          <div class="circle" style="--i: 5" @click="changeTab(3)">
            矿区增汇固碳<small>累计减碳量<br />4219 tCO₂</small>
          </div>
          <div class="circle" style="--i: 4" @click="changeTab(2)">
            瓦斯利用降碳<small>累计减碳量<br />5924 tCO₂</small>
          </div>
          <div class="circle" style="--i: 0" @click="changeTab(0)">
            节能降耗减碳<small>累计减碳量<br />3154 tCO₂</small>
          </div>
        </div>
      </div>
      <!-- <div style="position: absolute; top: 155px; left: 28%">
        <div class="ebox">
          <div class="ebg">2030 年</div>
          <div style="margin-top: -1rem">零碳矿山目标达成时间</div>
        </div>
      </div> -->
    </div>
    <div class="right">
      <!-- <div class="right-box box" style="height: calc((100vh - 100px - 3rem) * 0.18)">
        <div class="right-box-title title">>四个抓手</div>
        <div class="right-box-content">
          <div class="gjhj" @click="changeTab(0)">节能降<br />耗减碳</div>
          <div class="gjhj" @click="changeTab(1)">低碳零<br />碳供能</div>
          <div class="gjhj" @click="changeTab(2)">瓦斯利<br />用降碳</div>
          <div class="gjhj" @click="changeTab(3)">矿区增<br />汇固碳</div>
        </div>
      </div> -->
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>重点项目监测</div>
        </div>
        <div class="right-box-content flex-y">
          <div
            style="
              color: #00ffff;
              width: 100%;
              padding: 0 1rem;
              font-size: 1rem;
              font-weight: 600;
              text-align: right;
            "
          >
            重点项目总数<b style="font-family: 'YousheBiaotiHei', sans-serif">12</b>个
          </div>
          <bar5 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>能碳项目建设分类</div>
        </div>
        <div class="right-box-content flex-y">
          <bar6 />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title title">
          <div>>重点项目收益情况</div>
        </div>
        <div class="right-box-content">
          <div class="row" style="flex-wrap: wrap">
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
                碳减排量
              </div>
              <div class="hb-process">
                <span>60343.6 t</span>
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
                碳排强度下降
              </div>
              <div class="hb-process">
                <span>34.6 kg/co2t</span>
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
                碳交易量
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
                碳交易收益
              </div>
              <div class="hb-process">
                <span>247.1 万元</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="right-box-content detail-item">
          <table border="1">
            <thead>
              <tr>
                <th>关键环节</th>
                <th>实施方法</th>
                <th>具体举措</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">源头减碳</td>
                <td>开发利用新能源</td>
                <td>
                  1. 加大光伏等新能源使用<br />
                  2. 采用清洁能源车辆
                </td>
              </tr>
              <tr>
                <td>绿色电力</td>
                <td>
                  1. 购买并使用绿电<br />
                  2. 购买绿证
                </td>
              </tr>
              <tr>
                <td rowspan="2">过程降碳</td>
                <td>设备节能管理</td>
                <td>
                  1. 淘汰落后产能及高耗能工艺、装备<br />
                  2. 对高耗能用电设备进行变频器技术改造<br />
                  3. 优化生产系统，减少设备空运转
                </td>
              </tr>
              <tr>
                <td>瓦斯利用减碳</td>
                <td>开展低浓度瓦斯和乏风综合利用</td>
              </tr>
              <tr>
                <td rowspan="3">末端固碳</td>
                <td>CO2先进高效捕集</td>
                <td>
                  1. 燃烧前捕集<br />
                  2. 燃烧后捕集
                </td>
              </tr>
              <tr>
                <td>CO2资源化利用</td>
                <td>
                  1. 化学利用<br />
                  2. 生物利用
                </td>
              </tr>
              <tr>
                <td>生态增汇固碳</td>
                <td>
                  1. 对矿山压占、损毁土地复垦利用<br />
                  2. 有效利用矿区植被固碳
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
    </div>
    <div v-if="showDetail" class="detail-box">
      <div class="detail-title">
        <div class="tab-title" @click="changeTab(0)" :class="{ active: tab === 0 }">
          节能降耗减碳
        </div>
        <div class="tab-title" @click="changeTab(2)" :class="{ active: tab === 2 }">
          瓦斯利用降碳
        </div>
        <div class="tab-title" @click="changeTab(1)" :class="{ active: tab === 1 }">
          绿色供能低碳
        </div>
        <div class="tab-title" @click="changeTab(3)" :class="{ active: tab === 3 }">
          矿区增汇固碳
        </div>
      </div>
      <div class="detail-content">
        <div v-if="tab === 0">
          <div class="detail-item">
            <table>
              <thead>
                <tr>
                  <th>年度</th>
                  <th>具体措施</th>
                  <th>节电量（kWh）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2022 年</td>
                  <td>井下移动变压器无功补偿应用</td>
                  <td>100000</td>
                  <td>57.03</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>北风井瓦斯抽采泵站节能改造</td>
                  <td>2030000</td>
                  <td>1157.709</td>
                  <td>100%</td>
                </tr>
                <!--具体措施①	节电量（kWh）	碳减排量（t）
更换中央区压风机6台	3130000	1785.04 
中央区、南风井瓦斯抽采泵节能技术改造	2590000	1477.08 
南风井空压机节能改造	2610000	1488.48 
优化综采工作面皮带机启动工艺	2910000	1659.57 
优化综采工作面前后溜启动工艺	2970000	1693.79 
建设矿井电量分析系统	1050000	598.82 
-->
                <tr>
                  <td rowSpan="6">2025 年</td>
                  <td>更换中央区压风机6台</td>
                  <td>3130000</td>
                  <td>1785.04</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>中央区、南风井瓦斯抽采泵节能技术改造</td>
                  <td>2590000</td>
                  <td>1477.08</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>南风井空压机节能改造</td>
                  <td>2610000</td>
                  <td>1488.48</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>优化综采工作面皮带机启动工艺</td>
                  <td>2910000</td>
                  <td>1659.57</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>优化综采工作面前后溜启动工艺</td>
                  <td>2970000</td>
                  <td>1693.79</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>建设矿井电量分析系统</td>
                  <td>1050000</td>
                  <td>598.82</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2027 年</td>
                  <td>封闭南二采区</td>
                  <td>1800000</td>
                  <td>1026.54</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="tab === 2">
          <div class="detail-item">
            <!-- 
            2022具体措施⑤	年利用甲烷纯量（万Nm3/年）	碳减排量（t）	2025具体措施⑤	年利用甲烷纯量（万Nm3/年）	碳减排量（t）	2030具体措施⑤	年利用甲烷纯量（万Nm3/年）	碳减排量（t）
								
低浓度瓦斯分布式内燃机发电项目(11.2MW),发电35950MWh	1438	20502.29 	开展中央区瓦斯发电站一期、二期以及北风井瓦斯发电项目建设，发电47150MWh	1886.4	26895.35 	余欣风井瓦斯发电项目，发电68180MWh	2727	38876.81 
		0						
北风井乏风氧化供热（供电）综合利用项目，发电17050MWh	682	9723.62 				南风井开展乏风氧化供电项目，发电29725MWh	1189	16952.17 

             -->
            <table>
              <thead>
                <tr>
                  <th>年度</th>
                  <th>具体措施</th>
                  <th>年利用甲烷纯量（万Nm3/年）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2022 年</td>
                  <td>低浓度瓦斯分布式内燃机发电项目(11.2MW),发电35950MWh</td>
                  <td>1438</td>
                  <td>20502.29</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>北风井乏风氧化供热（供电）综合利用项目，发电17050MWh</td>
                  <td>682</td>
                  <td>9723.62</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2025 年</td>
                  <td>
                    开展中央区瓦斯发电站一期、二期以及北风井瓦斯发电项目建设，发电47150MWh
                  </td>
                  <td>1886.4</td>
                  <td>26895.35</td>
                  <td>80%</td>
                </tr>

                <tr>
                  <td rowSpan="2">2027 年</td>
                  <td>余欣风井瓦斯发电项目，发电68180MWh</td>
                  <td>2727</td>
                  <td>38876.81</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>南风井开展乏风氧化供电项目，发电29725MWh</td>
                  <td>1189</td>
                  <td>16952.17</td>
                  <td>80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="tab === 1">
          <div class="detail-item">
            <table>
              <thead>
                <tr>
                  <th>年度</th>
                  <th>具体措施</th>
                  <th>节能量（GJ）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
              </thead>
              <tbody>
                <!--2022年 具体措施③	节能量（GJ）	碳减排量（t）
"1.及时调整热风机开启数量，控制井口及井底温度在7-10℃避免热量浪费
2.及时处理管道跑冒滴漏及保温层损坏等问题，减少热量消耗
3.根据天气情况调整二次热水出水温度，减少供暖过程热量损耗"	140000	15400
南风井瓦斯电站余热利用	56000	6160
中央区空压机余热利用	14755	1623.05 
 -->
                <tr>
                  <td rowSpan="3">2022 年</td>
                  <td>
                    1.及时调整热风机开启数量，控制井口及井底温度在7-10℃避免热量浪费<br />
                    2.及时处理管道跑冒滴漏及保温层损坏等问题，减少热量消耗<br />
                    3.根据天气情况调整二次热水出水温度，减少供暖过程热量损耗
                  </td>
                  <td>140000</td>
                  <td>15400</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>南风井瓦斯电站余热利用</td>
                  <td>56000</td>
                  <td>6160</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td class="detail-tooltip">
                    <div class="tooltip">
                      中央区空压机余热利用
                      <div class="tooltiptext">
                        <div class="tooltip-title">
                          变电站简介：中央风井瓦斯电站位于余吾煤业矿区东南区，于2013年月建成投产。装设600kw发电机组10台。瓦斯发电机组出线电压为380V，采用4台升压变压器升至10kv，共有（低压部分)：机组断路器柜10个，低压断路器柜4个，(高压部分）：PT柜1个，升压变压器柜4个；10kv进线柜1个。测控保护设备为北京四方继保CSC-280装置，该站发电供到余吾煤业北门110KV变电站内。
                        </div>
                        <div class="tooltip-content">
                          <img src="/src/assets/img/detail1.png" alt="" />
                          <img src="/src/assets/img/detail2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>14755</td>
                  <td>1623.05</td>
                  <td>100%</td>
                </tr>
                <!-- 2025 年
                电动化比例（%）	节油量（t）	碳减排量（t）
100	20	
 -->
                <tr>
                  <td rowSpan="2">2025 年</td>
                  <th>电动化比例（%）</th>
                  <th>节油量（t）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
                <tr>
                  <td>100</td>
                  <td>20</td>
                  <td></td>
                  <td>100%</td>
                </tr>
                <!-- 2030 年
                具体措施③	节能量（GJ）	碳减排量（t）
		
中央区瓦斯发电站余热利用	24600	2706
南风井、余欣风井空压机余热利用	14755	1623.05 
南风井、余欣风井开展乏风氧化供热项目	239400	26334
具体措施④	供电量（KWh）	碳减排量（t）
建设20MW分布式光伏发电项目	26000000	14828
		
电动化比例（%）	节油量（t）	碳减排量（t）
100		

-->
                <tr>
                  <td rowSpan="8">2027 年</td>
                  <th>具体措施</th>
                  <th>节能量（GJ）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
                <tr>
                  <td>中央区瓦斯发电站余热利用</td>
                  <td>24600</td>
                  <td>2706</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>南风井、余欣风井空压机余热利用</td>
                  <td>14755</td>
                  <td>1623.05</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>南风井、余欣风井开展乏风氧化供热项目</td>
                  <td>239400</td>
                  <td>26334</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <th>具体措施④</th>
                  <th>供电量（KWh）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
                <tr>
                  <td>建设20MW分布式光伏发电项目</td>
                  <td>26000000</td>
                  <td>14828</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <th>电动化比例（%）</th>
                  <th>节油量（t）</th>
                  <th>碳减排量（t）</th>
                  <th>项目进度</th>
                </tr>
                <tr>
                  <td>100</td>
                  <td></td>
                  <td></td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="tab === 3">
          <div class="detail-item">
            <!-- 2030
           具体措施⑥	治理面积（hm2）	碳汇量（t）
矸石山绿化固碳	67.45	17
对矿区行道及绿地植树固碳	10462棵	188
 -->
            <table>
              <thead>
                <tr>
                  <th>年度</th>
                  <th>具体措施</th>
                  <th>治理面积（hm2）</th>
                  <th>碳汇量（t）</th>
                  <th>项目进度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2027 年</td>
                  <td>矸石山绿化固碳</td>
                  <td>67.45</td>
                  <td>17</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>对矿区行道及绿地植树固碳</td>
                  <td>10462棵</td>
                  <td>188</td>
                  <td>80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showDetail2" class="detail-box">
      <div class="detail-title active">
        <div class="tab-title active">建设历程</div>
      </div>
      <div class="detail-content">
        <div>
          <div class="detail-item">
            <div class="gjhj">
              <b>2020年及以前</b>
              中央泵站低浓度瓦斯电站、北风井低浓度瓦斯电站、北风井乏风氧化发电站、南风井低浓度瓦斯电站、空压机余热利用等
            </div>
            <div class="gjhj">
              <b>2021年</b>
              井下主要运输设备采用变频控制、能耗在线监测系统与省级平台完成对接等
            </div>
            <div class="gjhj">
              <b>2022年</b>
              主井提升机液压站冷却风扇运行优化、皮带机启动工艺和运行速度优化、更换113台高耗能电机、矿区内照明系统节能改造等
            </div>
            <div class="gjhj">
              <b>2023年</b>
              北风井瓦斯抽采泵节能技术改造、联建换热站安装阻垢装置、敷设南风井大联建楼小联建楼热水管道、智能化综采工作面建设、水环真空泵节能增效技术、中央区1#、2#压风机房改造
            </div>
            <div class="gjhj">
              <b>2024年</b>
              南风井乏风氧化发电站、建设零碳矿山协同管理平台、矿区植树造林、更换中央区压风机房至选煤厂压风管路、优化前后溜启动工艺、优化皮带机启动工艺、更换中央区压风机、南六盾构机供电系统加装10kV无功补偿装置、东水源井安装智能节电系统
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @click="showDetail2 = false" v-if="showDetail2"></div>

    <div class="mask" @click="showDetail = false" v-if="showDetail"></div>
  </main>
</template>
<style scoped>
/* From Uiverse.io by mrhyddenn */

.chevrons {
  /* padding: 6px 0 0 0; */
  margin-left: -3px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}
.list-container {
  width: 100%;
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

.front-content {
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.front-content div {
  font-size: 0.8rem;
  color: #ffffff;
  opacity: 1;
  padding: 0.5rem;
  /* background: linear-gradient(-45deg, #29bdf8 0%, #0f48ff 100%); */
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  /* display: flex;
  justify-content: space-between;
  width: 90%;
  text-align: center;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  width: 100%;
  text-align: center;
  align-items: center;
}
.list .front-content div b {
  color: #00ffff;
  font-weight: bold;
  font-size: 0.8rem;
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
  color: #00ffff;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 5px;
  /* pointer-events: none; */
  transform: translateX(-99%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  font-size: 0.8rem;
}

.list .content .heading {
  font-size: 32px;
  font-weight: 700;
}
.list:hover {
  /* height: 80px; */
}
/* .list:hover .content {
  transform: translateY(0);
}

.list:hover .front-content {
  transform: translateX(-30%);
}

.list:hover .front-content p {
  opacity: 0;
} */
.ground {
  background-image: url("./../assets/img/bg-s.png");
  background-size: 100% 100%;
}
.under {
  background-image: url("./../assets/img/采煤效果图6-s.png");
  background-size: 100% 100%;
}
.caiqu {
  background-image: url("./../assets/img/caiqu-s.png");
  background-size: 100% 100%;
}
.left,
.right {
  z-index: 100000;
}
.devices-marker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* z-index: 100000; */
}
.marker {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
  z-index: 100000;
  cursor: pointer;
}
.marker-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000000;
  border: 2px solid #00ffff;
}
.marker-title {
  margin-top: 0.5rem;
  color: #00ffff;
  background-color: #000000;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
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
.disabled {
  color: #7ba2c5;
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
.arrow {
  width: 0.5rem;
  height: 1rem;
  margin: 2px 0.5rem 0;
}
.num {
  font-size: 2rem;
  color: #00ffff;
  font-weight: bold;
  font-family: "YousheBiaotiHei", sans-serif;
  text-shadow: 0 0 10px #019de8, 0 0 20px #019de8, 0 0 30px #019de8;
}
.row {
  display: flex;
  justify-content: space-around;
}

.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
  background-color: #00000038;
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
/* .center-box {
  background-image: url("./../assets/img/zhibiao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
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
.zhuashou {
  background-image: url("/src/assets/img/zhuashou.png");
  background-size: 100% 100%;
  padding: 0.5rem 0.2rem;
  margin: 0.3rem 0;
  font-size: 0.8rem;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  max-width: 40vw;
  min-width: 200px;
  background-color: #000000b3;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  /* padding: 5px; */
  position: absolute;
  z-index: 1;
  top: -50%;
  left: 125%;
  /* bottom: 20%; */
  /* margin-left: 100%; */
  margin-top: -100%;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 1.5rem;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
.tooltiptext .tooltip-title {
  color: #00ffffb3;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: justify;
}
.tooltiptext .tooltip-content {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.tooltiptext img {
  border-radius: 0.5rem;
  width: 18vw;
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
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.2rem;
}
p {
  font-size: 0.8rem;
}
.timeline {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 85%;
  align-content: space-between;
  margin-top: 0.5rem;
}
.timeline-bg {
  background-image: url("/src/assets/img/timeline.png");
  background-size: 100% 100%;
}
.timeline-item {
  display: flex;
  align-items: center;
  align-content: center;
  width: 120px;
  flex-direction: column;
  background-color: #0371aee0;
  padding: 0.2rem 0;
  border-radius: 30px;
  margin: 0 0.15rem;
  box-shadow: 0 0 10px #1b1b1b6e;
}
.tiemline-time {
  font-size: 0.8rem;
  color: #ffffffb3;
  word-break: keep-all;
  text-align: right;
}
.timeline-content {
  font-size: 1.1rem;
  color: #fff;
}
.gjhj {
  --primary-blue: #3498db;
  --light-blue: #5dade2;
  --dark-blue: #2980b9;
  --text-color: #ecf0f1;
  --background: linear-gradient(#2988e7, #0c66bf);
  --shadow: 0 5px 15px 0 rgba(52, 152, 219, 0.3);
  --shadow-active: 0 5px 5px 0 rgba(52, 152, 219, 0.5);
  --border-radius-main: 10px;
  --border-radius-icon: 50px;
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  cursor: default;
  color: var(--text-color);
  opacity: 0.9;
  margin: 0 0.2rem 2rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  background: var(--background);
  max-width: max-content;
  border-radius: var(--border-radius-main);
  box-shadow: var(--shadow);
  transition: 0.2s ease all;
  font-size: 1rem;
  width: 20%;
  height: 420px;
}
.circle-container {
  position: relative;
  width: 45vw;
  height: calc(45vw / (1147 / 935));
  margin: 100px auto;
  border-radius: 50%;
  background-image: url("./../assets/img/zhibiao.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}

.circle {
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #0e76a875;
  box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 1rem;
  padding: 10px;
  transform-origin: center center;
  z-index: calc(var(--i) * 1);
  transform: rotate(calc(360deg / 9 * var(--i))) translate(220px)
    rotate(calc(-360deg / 9 * var(--i)));
  border: 2px solid #2ca7ed;
  flex-direction: column;
}

.circle:nth-child(1) {
  transform: rotate(-40deg) translate(15vw) rotate(40deg);
}

.circle:nth-child(2) {
  transform: rotate(40deg) translate(15vw) rotate(-40deg);
}

.circle:nth-child(5) {
  transform: rotate(40deg) translate(15vw) rotate(-40deg);
}

.circle:nth-child(6) {
  transform: rotate(140deg) translate(15vw) rotate(-140deg);
}

.circle:nth-child(3) {
  transform: rotate(140deg) translate(15vw) rotate(-140deg);
}

.circle:nth-child(4) {
  transform: rotate(220deg) translate(15vw) rotate(-220deg);
}
/* From Uiverse.io by TaniaDou */
.button {
  /* padding: 1.3rem 2rem; */
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  color: #f4f0ff;
  text-align: center;
  position: relative;
  cursor: pointer;
  width: 43%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  clip-path: polygon(
    20px 0%,
    100% 0,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    0 100%,
    0% 20px
  );
  font-weight: bold;
}

.button::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%),
    rgba(47, 255, 255, 0.24);
  box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
  z-index: -1;
}

.button::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%),
    rgba(47, 255, 255, 0.24);
  box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
  border-radius: 0.5rem;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease-in;
}
.op1::after {
  opacity: 1;
}
/* .button:hover::after {
  opacity: 0;
} */

.button-border {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  z-index: -1;
}

.button-border::before {
  content: "";
  position: absolute;
  border-radius: 0.5rem;
  padding: 1px;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(184, 238, 255, 0.24) 0%,
      rgba(184, 238, 255, 0) 100%
    ),
    linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  pointer-events: none;
}
</style>
