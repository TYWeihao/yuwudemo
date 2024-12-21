<script setup>
import co2e from "@/components/charts/co2e.vue";
// import Vue from "vue";
import sangji2 from "@/components/charts/sangji2.vue";
import sangji3 from "@/components/charts/sangji3.vue";
import line5 from "@/components/charts/line5.vue";
import { ref } from "vue";
const showDetail = ref(false);
const sangji = ref(2);
const tab = ref(0);
function changeTab(index) {
  showDetail.value = true;
  tab.value = index;
}
const num1 = ref(0);
const num2 = ref(1973664);
// const step = ref(1973664 / 270 / 24 / 60 / 6);
setInterval(() => {
  num1.value = JSON.parse(JSON.stringify(num2.value));
  num2.value += 1973664 / 270 / 24 / 60 / 6;
}, 10000);
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>碳排放情况</div>
        <div class="left-box-content" style="justify-content: space-around">
          <div
            style="
              text-align: center;
              text-align: center;
              background: #0000002e;
              padding: 0.5rem;
              border-radius: 0.5rem;
            "
          >
            <div style="font-size: 0.8rem">年碳排量</div>

            <div class="num"><span>2377655.95吨</span></div>
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
            <div style="font-size: 0.8rem">碳排强度</div>

            <div class="num"><span>205.1kgCO2/吨</span></div>
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
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>碳排放趋势</div>
        <div class="left-box-content" style="height: 80%">
          <line5 />
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>双控管理</div>
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
                <div style="display: flex; align-items: center; font-size: 1rem">
                  碳监测
                </div>
              </div>
              <span class="zl-card-title">
                <count-to :start-val="num1" :end-val="num2" :decimals="2"></count-to>
                <small>t</small></span
              >
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
                <div style="display: flex; align-items: center; font-size: 1rem">
                  碳盘查
                </div>
              </div>
              <span class="zl-card-title">2741247 <small>t</small></span>
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
                <div style="display: flex; align-items: center; font-size: 1rem">
                  碳足迹
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00"
                >215.36 <small>kg/t</small></span
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
                <div style="display: flex; align-items: center; font-size: 1rem">
                  碳资产
                </div>
              </div>
              <span class="zl-card-title" style="color: #ffde00">0 <small>t</small></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="left-box-title title">>碳流图</div> -->
      <div class="mydict">
        <div>
          <label>
            <input type="radio" name="radio" :value="2" v-model="sangji" />
            <span>碳排放</span>
          </label>
          <label>
            <input type="radio" name="radio" v-model="sangji" :value="3" />
            <span>碳中和</span>
          </label>
        </div>
      </div>
      <sangji2 v-if="sangji == 2" />
      <sangji3 v-else />
    </div>
    <!-- 四个抓手详情弹窗 -->
    <div v-if="showDetail" class="detail-box">
      <div class="detail-title">
        <div class="tab-title" @click="changeTab(0)" :class="{ active: tab === 0 }">
          节能降耗减碳
        </div>
        <div class="tab-title" @click="changeTab(1)" :class="{ active: tab === 1 }">
          绿色供能低碳
        </div>
        <div class="tab-title" @click="changeTab(2)" :class="{ active: tab === 2 }">
          瓦斯利用降碳
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2022 年</td>
                  <td>井下移动变压器无功补偿应用</td>
                  <td>100000</td>
                  <td>57.03</td>
                </tr>
                <tr>
                  <td>北风井瓦斯抽采泵站节能改造</td>
                  <td>2030000</td>
                  <td>1157.709</td>
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
                </tr>
                <tr>
                  <td>中央区、南风井瓦斯抽采泵节能技术改造</td>
                  <td>2590000</td>
                  <td>1477.08</td>
                </tr>
                <tr>
                  <td>南风井空压机节能改造</td>
                  <td>2610000</td>
                  <td>1488.48</td>
                </tr>
                <tr>
                  <td>优化综采工作面皮带机启动工艺</td>
                  <td>2910000</td>
                  <td>1659.57</td>
                </tr>
                <tr>
                  <td>优化综采工作面前后溜启动工艺</td>
                  <td>2970000</td>
                  <td>1693.79</td>
                </tr>
                <tr>
                  <td>建设矿井电量分析系统</td>
                  <td>1050000</td>
                  <td>598.82</td>
                </tr>
                <tr>
                  <td>2030 年</td>
                  <td>封闭南二采区</td>
                  <td>1800000</td>
                  <td>1026.54</td>
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
                </tr>
                <tr>
                  <td>南风井瓦斯电站余热利用</td>
                  <td>56000</td>
                  <td>6160</td>
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
                </tr>
                <tr>
                  <td>100</td>
                  <td>20</td>
                  <td></td>
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
                  <td rowSpan="8">2030 年</td>
                  <th>具体措施</th>
                  <th>节能量（GJ）</th>
                  <th>碳减排量（t）</th>
                </tr>
                <tr>
                  <td>中央区瓦斯发电站余热利用</td>
                  <td>24600</td>
                  <td>2706</td>
                </tr>
                <tr>
                  <td>南风井、余欣风井空压机余热利用</td>
                  <td>14755</td>
                  <td>1623.05</td>
                </tr>
                <tr>
                  <td>南风井、余欣风井开展乏风氧化供热项目</td>
                  <td>239400</td>
                  <td>26334</td>
                </tr>
                <tr>
                  <th>具体措施④</th>
                  <th>供电量（KWh）</th>
                  <th>碳减排量（t）</th>
                </tr>
                <tr>
                  <td>建设20MW分布式光伏发电项目</td>
                  <td>26000000</td>
                  <td>14828</td>
                </tr>
                <tr>
                  <th>电动化比例（%）</th>
                  <th>节油量（t）</th>
                  <th>碳减排量（t）</th>
                </tr>
                <tr>
                  <td>100</td>
                  <td></td>
                  <td></td>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2022 年</td>
                  <td>低浓度瓦斯分布式内燃机发电项目(11.2MW),发电35950MWh</td>
                  <td>1438</td>
                  <td>20502.29</td>
                </tr>
                <tr>
                  <td>北风井乏风氧化供热（供电）综合利用项目，发电17050MWh</td>
                  <td>682</td>
                  <td>9723.62</td>
                </tr>
                <tr>
                  <td>2025 年</td>
                  <td>
                    开展中央区瓦斯发电站一期、二期以及北风井瓦斯发电项目建设，发电47150MWh
                  </td>
                  <td>1886.4</td>
                  <td>26895.35</td>
                </tr>

                <tr>
                  <td rowSpan="2">2030 年</td>
                  <td>余欣风井瓦斯发电项目，发电68180MWh</td>
                  <td>2727</td>
                  <td>38876.81</td>
                </tr>
                <tr>
                  <td>南风井开展乏风氧化供电项目，发电29725MWh</td>
                  <td>1189</td>
                  <td>16952.17</td>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2">2030 年</td>
                  <td>矸石山绿化固碳</td>
                  <td>67.45</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>对矿区行道及绿地植树固碳</td>
                  <td>10462棵</td>
                  <td>188</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @click="showDetail = false" v-if="showDetail"></div>
  </main>
</template>

<style scoped>
/* main {
  background-image: url("./../assets/img/bg2.png");
  background-size: 100% 100%;
  z-index: -2;
} */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  z-index: 99;
}
.zhuashou {
  background-image: url("/src/assets/img/zhuashou.png");
  background-size: 100% 100%;
  padding: 0.5rem 0.2rem;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip button {
  background-color: #db3434;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-out;
}

.tooltip button:hover {
  background-color: #b92929;
  transform: scale(1.05);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
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
.zl-card-title,
.zl-card-title span {
  font-size: 1.2rem;
  color: #0ff;
  font-weight: 800 !important;
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
  margin-top: -200%;
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

.center {
  width: 73%;
  height: calc(100vh - 100px - 5rem);
  margin-top: 3rem;
  background-color: #0a1d7155;
  /* z-index: -1; */
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
  flex-direction: column;
  gap: 0.5rem;
}
.timeline-item {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 1rem;
}
.tiemline-time {
  font-size: 0.8rem;
  color: #ffffffb3;
  word-break: keep-all;
  width: 30%;
  text-align: right;
}
.timeline-content {
  font-size: 0.8rem;
  color: #0ff;
  width: 75%;
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

.mydict div {
  display: flex;
  flex-wrap: wrap;
  margin-right: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
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
</style>
