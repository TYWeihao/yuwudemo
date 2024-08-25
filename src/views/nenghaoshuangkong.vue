<script setup>
import radar from "@/components/charts/rader.vue";
import Line2 from "@/components/charts/line2.vue";
import sangji from "@/components/charts/sangji.vue";
const xiangmuData = [
  {
    area: "区域1",
    name: "设备1",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域2",
    name: "设备2",
    money: "2021-09-01 12:00:00",
    energy: "B相电流过大",
  },
  {
    area: "区域3",
    name: "设备3",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域4",
    name: "设备4",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域5",
    name: "设备5",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域6",
    name: "设备6",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域7",
    name: "设备7",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域8",
    name: "设备8",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域9",
    name: "设备9",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域10",
    name: "设备10",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域11",
    name: "设备11",
    money: "2021-09-01 12:00:00",
    energy: "长期低功率运行",
  },
  {
    area: "区域12",
    name: "设备12",
    money: "2021-09-01 12:00:00",
    energy: "",
  },
];
</script>

<template>
  <main>
    <div class="left">
      <div class="left-box box">
        <div class="left-box-title">设备监控</div>
        <div class="left-box-content row">
          <div class="zonghe-box flex-y">
            <b class="text-green">238</b>
            <div>设备总数</div>
          </div>
          <div class="zonghe-box flex-y">
            <b class="text-green">222</b>
            <div>在线设备</div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">能效分析</div>
        <div class="left-box-content row">
          <div class="pie-left">
            <div>
              用水量
              <div style="font-size: 1.2rem; color: #ee6666; font-weight: bold">19%</div>
            </div>
            <div>
              用热量
              <div style="font-size: 1.2rem; color: #91cc75; font-weight: bold">28%</div>
            </div>
          </div>
          <div class="pie">
            <img src="./../assets/img/pie.png" alt="" />
          </div>
          <div class="pie-right">
            <div>
              用电量
              <div style="font-size: 1.2rem; color: #fac858; font-weight: bold">23%</div>
            </div>
            <div>
              用煤量
              <div style="font-size: 1.2rem; color: #5470c6; font-weight: bold">30%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="left-box box">
        <div class="left-box-title">实时预警</div>
        <div class="left-box-content">
          <div class="table-container">
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>区域</th>
                    <th>报警内容</th>
                    <th>报警时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in xiangmuData" :key="item.name">
                    <td>{{ item.area }}</td>
                    <td>
                      {{ item.name }} <br />
                      {{ item.energy }}
                    </td>

                    <td>{{ item.money }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-box box">
        <div class="center-box-title">能源流向图</div>
        <div class="center-box-content" style="height: 300px">
          <sangji />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-box box">
        <div class="right-box-title">月综合能耗</div>
        <div class="right-box-content">
          <radar />
        </div>
      </div>
      <div class="right-box box">
        <div class="right-box-title">年度产品产量</div>
        <div class="right-box-content" style="height: 260px">
          <Line2 />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
