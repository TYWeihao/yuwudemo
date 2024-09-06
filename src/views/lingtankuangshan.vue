<script setup>
import co2e from "@/components/charts/co2e.vue";
import sangji2 from "@/components/charts/sangji2.vue";

import { ref } from "vue";
const showDetail = ref(false);
const tab = ref(0);
function changeTab(index) {
  showDetail.value = true;
  tab.value = index;
}
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title title">>零碳矿山申报情况</div>
        <div class="left-box-content row">
          <!-- 时间线效果 2023年11月2日，余吾煤业公司按照《山西省零碳 (近零碳)产业示范区创建申报指南》申报零碳矿山。
2023年11月15日，省发改委安排太原煤炭设计院贠利明等专家到我公司进行现场核查，我公司顺利通过现场核查。
2023年11月22日，我公司节能环保科以及相关业务科室到太原煤炭设计院参加零碳矿山综合评估，我公司顺利通过评估。
2023年12月28日，省发改委发文确认我公司为首批创建零碳矿山试点单位之一。-->
          <div class="timeline">
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月02日</div>
              <div class="timeline-content">
                余吾煤业公司按照《山西省零碳
                (近零碳)产业示范区创建申报指南》申报零碳矿山。
              </div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月15日</div>
              <div class="timeline-content">顺利通过省发改委专家组现场核查。</div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年11月22日</div>
              <div class="timeline-content">顺利通过省发改委专家组综合评估。</div>
            </div>
            <div class="timeline-item">
              <div class="tiemline-time">2023年12月28日</div>
              <div class="timeline-content">
                成功获批省发改委首批创建零碳矿山试点单位。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="left-box box" style="width: 60%">
          <div class="left-box-title title">>预期目标</div>
          <div
            class="left-box-content row"
            style="font-size: 0.8rem; text-align: justify"
          >
            2020年我公司CO₂排放量总计为159633.3吨，到2025年CO₂排放量下降至99910.2吨，并于2030年达到负碳，排放量为-1038.3吨。到2025年吨原煤生产电耗降至20kWh/t以内，矿区零碳能源使用比例达到20%以上；到2030年吨原煤生产电耗降至18kWh/t以内，零碳能源使用比例达到50%以上。
          </div>
        </div>
        <div class="left-box box" style="width: 38%">
          <div class="left-box-title title">>四个抓手</div>
          <div
            class="left-box-content"
            style="
              flex-direction: column;
              padding: 0.2rem;
              align-items: stretch;
              align-content: center;
              justify-content: space-evenly;
            "
          >
            <div class="zhuashou" @click="changeTab(0)">节能降耗减碳</div>
            <div class="zhuashou" @click="changeTab(1)">低碳零碳供能</div>
            <div class="zhuashou" @click="changeTab(2)">瓦斯利用降碳</div>
            <div class="zhuashou" @click="changeTab(3)">矿区增汇固碳</div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title title">>瓦斯利用</div>
        <div class="left-box-content" style="height: 100%">
          <co2e />
        </div>
      </div>
    </div>
    <div class="center">
      <!-- <div class="left-box-title title">>碳流图</div> -->
      <sangji2 />
    </div>
    <!-- 四个抓手详情弹窗 -->
    <div v-if="showDetail" class="detail-box">
      <div class="detail-title">
        <div class="tab-title" @click="changeTab(0)" :class="{ active: tab === 0 }">
          节能降耗减碳
        </div>
        <div class="tab-title" @click="changeTab(1)" :class="{ active: tab === 1 }">
          低碳零碳供能
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
</style>
