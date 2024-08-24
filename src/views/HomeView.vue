<script setup>
import bar from "@/components/charts/bar.vue";
import pie from "@/components/charts/pie.vue";
import pie3 from "@/components/charts/pie3.vue";
import pie4 from "@/components/charts/pie4.vue";
const xiangmuData = [
  {
    name: "优化综采工作面皮带启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1660t",
  },
  {
    name: "优化综采工作面前后溜启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1694t",
  },
  {
    name: "更换中央区压风机",
    status: "已完成",
    money: "1000万",
    energy: "1785t",
  },
  {
    name: "南风井空压机节能改造",
    status: "已完成",
    money: "1000万",
    energy: "1488t",
  },
  {
    name: "生产活动采用新能源车",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "降低用热、用气消耗控制措施",
    status: "已完成",
    money: "1000万",
    energy: "15400t",
  },
  {
    name: "瓦斯抽采泵节能技术改造",
    status: "已完成",
    money: "1000万",
    energy: "2634t",
  },
  {
    name: "动筛矸石再选系统优化",
    status: "已完成",
    money: "1000万",
    energy: "1750t",
  },
  {
    name: "分布式光伏发电项目",
    status: "已完成",
    money: "1000万",
    energy: "11224t",
  },
  {
    name: "中央区瓦斯发电站项目",
    status: "已完成",
    money: "1000万",
    energy: "26895t",
  },
  {
    name: "北风井乏风及低浓度瓦斯氧化发电项目",
    status: "已完成",
    money: "1000万",
    energy: "9723t",
  },
  {
    name: "余欣风井瓦斯发电项目",
    status: "已完成",
    money: "1000万",
    energy: "38877t",
  },
  {
    name: "建设矿井电量分析系统",
    status: "已完成",
    money: "1000万",
    energy: "599t",
  },
  {
    name: "生态增汇固碳",
    status: "已完成",
    money: "1000万",
    energy: "17t",
  },
  {
    name: "智能化矿井建设",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "优化综采工作面皮带启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1660t",
  },
  {
    name: "优化综采工作面前后溜启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1694t",
  },
  {
    name: "更换中央区压风机",
    status: "已完成",
    money: "1000万",
    energy: "1785t",
  },
  {
    name: "南风井空压机节能改造",
    status: "已完成",
    money: "1000万",
    energy: "1488t",
  },
  {
    name: "生产活动采用新能源车",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "降低用热、用气消耗控制措施",
    status: "已完成",
    money: "1000万",
    energy: "15400t",
  },
  {
    name: "瓦斯抽采泵节能技术改造",
    status: "已完成",
    money: "1000万",
    energy: "2634t",
  },
  {
    name: "动筛矸石再选系统优化",
    status: "已完成",
    money: "1000万",
    energy: "1750t",
  },
  {
    name: "分布式光伏发电项目",
    status: "已完成",
    money: "1000万",
    energy: "11224t",
  },
  {
    name: "中央区瓦斯发电站项目",
    status: "已完成",
    money: "1000万",
    energy: "26895t",
  },
  {
    name: "北风井乏风及低浓度瓦斯氧化发电项目",
    status: "已完成",
    money: "1000万",
    energy: "9723t",
  },
  {
    name: "余欣风井瓦斯发电项目",
    status: "已完成",
    money: "1000万",
    energy: "38877t",
  },
  {
    name: "建设矿井电量分析系统",
    status: "已完成",
    money: "1000万",
    energy: "599t",
  },
  {
    name: "生态增汇固碳",
    status: "已完成",
    money: "1000万",
    energy: "17t",
  },
  {
    name: "智能化矿井建设",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "优化综采工作面皮带启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1660t",
  },
  {
    name: "优化综采工作面前后溜启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1694t",
  },
  {
    name: "更换中央区压风机",
    status: "已完成",
    money: "1000万",
    energy: "1785t",
  },
  {
    name: "南风井空压机节能改造",
    status: "已完成",
    money: "1000万",
    energy: "1488t",
  },
  {
    name: "生产活动采用新能源车",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "降低用热、用气消耗控制措施",
    status: "已完成",
    money: "1000万",
    energy: "15400t",
  },
  {
    name: "瓦斯抽采泵节能技术改造",
    status: "已完成",
    money: "1000万",
    energy: "2634t",
  },
  {
    name: "动筛矸石再选系统优化",
    status: "已完成",
    money: "1000万",
    energy: "1750t",
  },
  {
    name: "分布式光伏发电项目",
    status: "已完成",
    money: "1000万",
    energy: "11224t",
  },
  {
    name: "中央区瓦斯发电站项目",
    status: "已完成",
    money: "1000万",
    energy: "26895t",
  },
  {
    name: "北风井乏风及低浓度瓦斯氧化发电项目",
    status: "已完成",
    money: "1000万",
    energy: "9723t",
  },
  {
    name: "余欣风井瓦斯发电项目",
    status: "已完成",
    money: "1000万",
    energy: "38877t",
  },
  {
    name: "建设矿井电量分析系统",
    status: "已完成",
    money: "1000万",
    energy: "599t",
  },
  {
    name: "生态增汇固碳",
    status: "已完成",
    money: "1000万",
    energy: "17t",
  },
  {
    name: "智能化矿井建设",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "优化综采工作面皮带启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1660t",
  },
  {
    name: "优化综采工作面前后溜启动工艺",
    status: "已完成",
    money: "1000万",
    energy: "1694t",
  },
  {
    name: "更换中央区压风机",
    status: "已完成",
    money: "1000万",
    energy: "1785t",
  },
  {
    name: "南风井空压机节能改造",
    status: "已完成",
    money: "1000万",
    energy: "1488t",
  },
  {
    name: "生产活动采用新能源车",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
  {
    name: "降低用热、用气消耗控制措施",
    status: "已完成",
    money: "1000万",
    energy: "15400t",
  },
  {
    name: "瓦斯抽采泵节能技术改造",
    status: "已完成",
    money: "1000万",
    energy: "2634t",
  },
  {
    name: "动筛矸石再选系统优化",
    status: "已完成",
    money: "1000万",
    energy: "1750t",
  },
  {
    name: "分布式光伏发电项目",
    status: "已完成",
    money: "1000万",
    energy: "11224t",
  },
  {
    name: "中央区瓦斯发电站项目",
    status: "已完成",
    money: "1000万",
    energy: "26895t",
  },
  {
    name: "北风井乏风及低浓度瓦斯氧化发电项目",
    status: "已完成",
    money: "1000万",
    energy: "9723t",
  },
  {
    name: "余欣风井瓦斯发电项目",
    status: "已完成",
    money: "1000万",
    energy: "38877t",
  },
  {
    name: "建设矿井电量分析系统",
    status: "已完成",
    money: "1000万",
    energy: "599t",
  },
  {
    name: "生态增汇固碳",
    status: "已完成",
    money: "1000万",
    energy: "17t",
  },
  {
    name: "智能化矿井建设",
    status: "已完成",
    money: "1000万",
    energy: "---",
  },
];
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
                        <div class="temporary_text">
                            <img src="./../assets/img/bg.png.jpg" alt="" style="width: 100%" />

                        </div>
                        <div class="jianjie_content">
                            <span class="jianjie_title">余吾煤业公司（屯留煤矿）</span>
                            <span class="jianjie_subtitle">位于山西省长治市屯留县，属潞安矿区。井田面积162.2平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力600万吨/年，配套600万吨/年的洗煤厂，概算总投资270007万元。</span>
                            <p class="jianjie_description">先后获得“中国煤炭行业特级安全高效矿井”、“国家级安全质量标准化煤矿”、“山西省优秀企业”、“山西省科技奉献奖先进集体”、“山西省矿（厂）区绿化模范单位”、“山西省水土保持示范工程”等荣誉称号。选煤厂被评为中国煤炭行业“十佳选煤厂”。</p>

                        </div>
                    </article>
                    <!-- <div data-position="top" class="carousel">
            <span class="carousel__text">
              山西潞安集团余吾煤业有限责任公司位于屯留区后庄北村，全矿现有5600余人，全矿井田规划面积为161.205平方千米,现设计生产能力为750万t/a，设计服务年限为53.86年，并建有一座设计能力力900万ta的选煤厂，是一座集机械化采煤、行政办公、生活福利等为一体的现代化大型煤矿。目前，煤矿主要开采3#煤层，根据采矿许可证，开采标高为800-30m，井田行政区划分属屯留区和襄垣县。主井工业场地、阎庄风井场地、南风井工业场地位于屯留区境内。</span
            >
          </div> -->
                    <!-- 余吾煤业公司（屯留煤矿）位于山西省长治市屯留县，属潞安矿区。井田面积162.2平方公里，地质储量15.45亿吨，可采储量6.81亿吨，设计能力600万吨/年，配套600万吨/年的洗煤厂，概算总投资270007万元。 -->
                </div>
            </div>
            <div class="left-box box">
                <div class="left-box-title title row-title">
                    <div></div>
                    <div>碳排放总览</div>
                    <div class="radio-input">
                        <label>
                            <input checked="" value="value-1" name="value-radio" id="value-1" type="radio" />
                            <span>年</span>
                        </label>
                        <label>
                            <input value="value-2" name="value-radio" id="value-2" type="radio" />
                            <span>月</span>
                        </label>
                        <span class="selection"></span>
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
                <div class="left-box-title title">节能减排项目列表</div>
                <div class="left-box-content">
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>项目名称</th>
                                    <!-- <th>项目状态</th>
                  <th>投资额</th> -->
                                    <th>预计节能量</th>
                                </tr>
                            </thead>
                            <tbody ref="tableBody">
                                <div class="table-wrapper" ref="tableWrapper">
                                    <tr v-for="(item, index) in xiangmuData" :key="index">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.energy }}</td>
                                    </tr>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="center-box box" style="background: #00000078">
                <div class="center-box-title title">总量指标</div>
                <div class="center-box-content row">
                    <div class="parent">

                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">30364</span>
                                <p class="card-content">
                                <div>能耗量</div>
                                <small>吨标煤</small>
                                </p>
                            </div>
                            <div class="date-box">
                                <span class="month">
                                    <div style="display: flex; align-items: center;font-size:10px">
                                        <img class="down" style="  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;" src="./../assets/img/down.png" alt="" />
                                        2.5%
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="parent">
                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">67775.32</span>
                                <p class="card-content">
                                <div>碳排放量</div>
                                <small>吨二氧化碳</small>
                                </p>
                            </div>
                            <div class="date-box">
                                <span class="month">
                                    <div style="display: flex; align-items: center;font-size:10px">
                                        <img class="down" style="transform:rotateX(180deg);  width: 0.2rem;  height: 0.6rem;  margin: 3px 2px 0  ;" src="./../assets/img/up.png" alt="" />
                                        3.2%
                                    </div>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="parent">
                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">1343435</span>
                                <p class="card-content">
                                <div>产量</div>
                                <small>吨</small>
                                </p>
                            </div>
                            <div class="date-box">
                                <span class="month">
                                    <div style="display: flex; align-items: center;font-size:10px">
                                        <img class="down" style="  width: 0.2rem;  height: 0.6rem;  margin: 1px 2px 0  ;" src="./../assets/img/up.png" alt="" />
                                        4.5%
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="parent">
                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">2387.30</span>
                                <p class="card-content">
                                <div>营业收入</div>
                                <small>万元</small>
                                </p>
                            </div>
                            <div class="date-box">
                                <span class="month">
                                    <div style="display: flex; align-items: center;font-size:10px">
                                        <img class="down" style="  width: 0.2rem;  height: 0.6rem;  margin: 1px 2px 0  ;" src="./../assets/img/up.png" alt="" />
                                        3.8%
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="parent">
                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">12.7189</span>
                                <p class="card-content">
                                <div>能耗强度</div>
                                <small>吨标煤/万元</small>
                                </p>
                            </div>
                            <div class="date-box">
                                <span class="month">
                                    <div style="display: flex; align-items: center;font-size:10px">
                                        <img class="down" style="  width: 0.2rem;  height: 0.6rem;  margin: 3px 1px 0  ;" src="./../assets/img/down.png" alt="" />
                                        1.5%
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-box box" style="    padding: 0;
    display: flex;
    justify-content: flex-end;">
                <div class="huanjingbaohu">
                    <div class="fq">
                        <div>废气排放量</div>
                        <div class=" nd">3005.15 万m³</div>
                        <div class="fqpopup">
                            <div>实时浓度</div>
                            <div>颗粒物</div>
                            <div class="nd">2.432 mg/m³</div>
                            <div>二氧化硫</div>
                            <div class="nd">ND</div>
                            <div>氮氧化物</div>
                            <div class="nd">19.0345 mg/m³</div>
                        </div>
                    </div>
                    <div class="fs">
                        <div>废水排放量</div>
                        <div class="nd">2.034 万m³</div>
                        <div class="fspopup">
                            <div>实时浓度</div>
                            <div>COD</div>
                            <div class="nd">16.3322 mg/L</div>
                            <div>氨氮</div>
                            <div class="nd">0.263 mg/L</div>
                            <div>PH</div>
                            <div class="nd">5 - 6</div>
                        </div>
                    </div>
                    <div class="zs">
                        <div>噪声均值</div>
                        <div class="nd">47dB</div>
                        <div class="zspopup">
                            <div>厂界东侧</div>
                            <div class="nd">40 dB</div>
                            <div>厂界西侧</div>
                            <div class="nd">50 dB</div>
                            <div>厂界南侧</div>
                            <div class="nd">48 dB</div>
                            <div>厂界北侧</div>
                            <div class="nd">48 dB</div>
                        </div>
                    </div>
                    <div>固体废物</div>
                    <div>产生量</div>
                    <div class="nd">23.4671 t</div>
                    <div>利用量</div>
                    <div class="nd">23.4671 t</div>
                    <div>危险废物</div>
                    <div>产生量</div>
                    <div class="nd">10.98 t</div>
                    <div>利用量</div>
                    <div class="nd">10.98 t</div>
                </div>
            </div>
            <div style="position:fixed;top:20%;left:30%">
                <img src="./../assets/img/point.gif" alt="" style="width: 7rem;height: 7rem;position:relative;top:16rem;
                left:4rem">
                <img src="./../assets/img/point.gif" alt="" style="width: 7rem;height: 7rem;position:relative;top:10rem;
                left:14rem">

            </div>
        </div>
        <div class="right">
            <div class="right-box box">
                <div class="right-box-title title row-title">
                    <div></div>
                    <div>瓦斯利用情况</div>
                    <div class="radio-input">
                        <label>
                            <input value="value-1" name="value-radio2" id="value-1" type="radio" checked="" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="rgba(149,149,255,1)"></path>
                        </svg>
                        <div class="num"><span>2272 m³</span></div>
                        <div style="font-size: 0.6rem">瓦斯利用总量</div>
                    </div>
                    <div style="text-align: center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" fill="rgba(66,193,110,1)"></path>
                        </svg>
                        <div class="num"><span>97 %</span></div>
                        <div style="font-size: 0.6rem">瓦斯利用率</div>
                    </div>
                    <div style="text-align: center">
                        <svg height="64" width="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L24 0 24 24 0 24z" fill="none"></path>
                            <path fill="rgba(252,161,71,1)" d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z"></path>
                        </svg>
                        <div class="num"><span>0.32 mg/L</span></div>
                        <div style="font-size: 0.6rem">瓦斯平均浓度</div>
                    </div>
                </div>
                <div class="right-box-title title">瓦斯排放情况分析</div>

                <div class="right-box-content row">
                    <div style="width: 50%; text-align: center">
                        <pie3 />
                    </div>
                    <div style="width: 50%; padding-top: 2rem; font-size: 0.8rem">
                        <div>
                            <div>主回风井排放量</div>
                            <!-- 进度条展示 数据1886 m³-->
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
                </div>
            </div>
            <div class="right-box box">
                <div class="right-box-title title">用能情况分析</div>
                <div class="right-box-content">
                    <div style="display: flex">
                        <div class="flex-y" style="width: 30%; font-size: 0.8rem; display: flex">
                            <div style="color: #6be6c1;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #6be6c1"></div>
                                    <b style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">能耗总量</b>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    131887t
                                </div>
                            </div>
                            <div style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #99ffff"></div>
                                    <div>电力</div>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    96510.89t
                                </div>
                            </div>
                            <div style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #99ffff"></div>
                                    <div>热力</div>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    31658.22t
                                </div>
                            </div>
                            <div style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #99ffff"></div>
                                    <div>天然气</div>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    2462.83t
                                </div>
                            </div>
                            <div style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #99ffff"></div>
                                    <div>汽油</div>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    530.1t
                                </div>
                            </div>
                            <div style="color: #99ffff;text-align: left;font-size: 0.8rem;display: flex;justify-content: space-between;">
                                <div class="row" style="align-items: center">
                                    <div class="circle" style="background-color: #99ffff"></div>
                                    <div>柴油</div>
                                </div>
                                <div style="font-size: 0.8rem; word-break: keep-all; white-space: nowrap">
                                    1202.05t
                                </div>
                            </div>
                        </div>
                        <div style="width: 70%">
                            <pie4 />
                        </div>
                    </div>
                    <div style="width: 100%; height: 180px">
                        <bar />
                    </div>
                    <bar />
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
/* From Uiverse.io by Saiyed-Tanvir */
/* From Uiverse.io by Ghost-aft */
/* From Uiverse.io by Kemboi-Dun */ 
.jianjie {
  position: relative;
  /* width: 250px; */
  /* height: 250px; */
  color: #fff;
  background: #131313;
  overflow: hidden;
  border-radius: 20px;
}

.temporary_text {
  font-weight: bold;
  font-size: 24px;
  /* padding: 6px 12px; */
  color: #f8f8f8;
}

.jianjie_title {
  font-weight: bold;
}

.jianjie_content {
  position: absolute;
  left: 0;
  bottom: 0;
    /* edit the width to fit jianjie */
  width: 100%;
  padding: 20px;
  background: #0b586fe6;
  border-top-left-radius: 20px;
    /* edit here to change the height of the content box */
  transform: translateY(130px);
  transition: transform .25s;
}

.jianjie_content::before {
  content: '';
  position: absolute;
  top: -47px;
  right: -45px;
  width: 100px;
  height: 100px;
  transform: rotate(-175deg);
  border-radius: 50%;
  box-shadow: inset 48px 48px #0b586fe6;
}

.jianjie_title {
  color: #fff;
  line-height: 15px;
}

.jianjie_subtitle {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
}

.jianjie_description {
  font-size: 14px;
  opacity: 0;
  transition: opacity .5s;
}

.jianjie:hover .jianjie_content {
  transform: translateY(0);
}

.jianjie:hover .jianjie_description {
  opacity: 1;
  transition-delay: .25s;
}

.radio-input input {
  display: none;
}
.fqpopup,.fspopup,.zspopup {
  display: none;
  background: #00000078;
  /* 过渡动画 */
  
}
.fq:hover .fqpopup {
  display: block;
  transition: all 5s;
}
.fs:hover .fspopup {
  display: block;
  transition: all 5s;
}
.zs:hover .zspopup {
  display: block;
  transition: all 5s;
}
.radio-input {
  --container_width: 60px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #00000078;
  border-radius: 2px;
  color: #fff;
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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
  background: #000000;
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
  background: #000000;
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
.left {
  background: #00000028;
}
.row {
  display: flex;
  justify-content: space-around;
}
.left,
.right {
  margin-top: -20px;
  background: #00000028;
}
.center {
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
}
.box {
  /* background-image: url("./../assets/img/boxbg.png"); */
  /* background-size: 100% 100%; */
  color: #fff;
  padding: 0.5rem 1rem;
  /* margin-bottom: 1rem; */
}
.title {
  min-height: 28px;
  min-width: 166px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(-12.74%, rgb(8 98 109 / 50%)),
    color-stop(56.76%, rgba(106, 224, 255, 0.271))
  );
  background: linear-gradient(
    90deg,
    rgb(10 127 190 / 91%) -12.74%,
    rgb(1 24 31 / 78%) 56.76%
  );
  border: 2px solid #074d90;
  color: #ffffff;
  font-size: 0.8rem;
}
.row-title {
  justify-content: space-between;
  text-align: center;
}
.title::after {
  content: "";
  position: absolute;
  left: -2px;
  bottom: -2px;
  border-top: 15px solid transparent;
  border-left: 15px solid #fffcf7;
}

.title::before {
  content: "";
  width: 4px;
  height: 28px;
  background: #19173b;
  border: 2px solid #acf7ff;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  border-top: 0;
  border-left: 0;
  border-bottom: 0;
  bottom: -7px;
  left: 4px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
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
  border: 1px solid #ddd; /* 根据需要调整 */
  text-align: center;
}
th {
  color: #fff;
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
  margin-bottom: 1rem;
}
.ebg {
  background-image: url(/src/assets/img/ebg.png);
  background-size: 100% 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
  /* margin-top: 0.5rem; */
  height: 6rem;
  color: #fff;
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
  color: #abe8f0;
  font-size: 0.8rem;
  word-break: keep-all;
}
</style>
