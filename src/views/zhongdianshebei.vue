<script setup>
const xiangmuData = [
  {
    name: "设备1",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备2",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备3",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备4",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备5",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备6",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备7",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备8",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备9",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备10",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备11",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备12",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备13",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备14",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备15",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备16",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备17",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备18",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备19",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
  {
    name: "设备20",
    status: "运行中",
    gonglv: "1000kw",
    yongdian: "1000kw",
  },
];
</script>

<template>
  <div>
    <div class="devices">
      <div class="device" v-for="(item, index) in xiangmuData" :key="index">
        <div class="device-name">{{ item.name }}</div>
        <div class="device-status">{{ item.status }}</div>
        <div class="device-info">
          <div class="device-info-item">
            <div class="device-info-item-title">功率</div>
            <div class="device-info-item-value">{{ item.gonglv }}</div>
          </div>
          <div class="device-info-item">
            <div class="device-info-item-title">用电</div>
            <div class="device-info-item-value">{{ item.yongdian }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.devices {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
}
.device {
  width: 200px;
  height: 200px;
  background-color: #1060abc2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 20px;
}
.device-name {
  font-size: 20px;
  font-weight: bold;
}
.device-status {
  font-size: 16px;
  color: #00a854;
}
.device-info {
  display: flex;
  justify-content: space-between;
}
.device-info-item {
  display: flex;
  flex-direction: column;
}
.device-info-item-title {
  font-size: 14px;
  color: #999;
}
.device-info-item-value {
  font-size: 16px;
  font-weight: bold;
}
</style>
