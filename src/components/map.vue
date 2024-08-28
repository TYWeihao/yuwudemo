<script setup>
import { ref } from "vue";
console.log("map.vue");
const map = ref(null);
const mapDom = ref(null);
const AK = "BvWPpO6r5VwGE6VMF8uc7MLrXoRokI5O";
const BMapGLURL = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${AK}&callback=init`;
const script = document.createElement("script");
script.src = BMapGLURL;
script.async = true;
script.defer = true;
document.body.appendChild(script);

// 初始化地图
window.init = () => {
  map.value = new window.BMapGL.Map("map");
  map.value.centerAndZoom(new window.BMapGL.Point(112.646499, 37.902849), 7);
  // map.value.enableScrollWheelZoom(false);
  //调整地图角度
  map.value.setTilt(15);
  map.value.setHeading(5);
  map.value.setMapStyleV2({
    styleId: "7edc9f0146d3be6bcd67404be50c1d43",
  });
  //去掉mapDom元素css属性background-image: url(http://webmap0.bdimg.com/image/api/bg.png);
  mapDom.value.style.backgroundImage = "none";
  //去掉百度地图logo
  map.value.removeControl(map.value.logoControl);
  getBoundary();
};
//绘制3D棱柱山西省边界
function getBoundary() {
  const bdary = new window.BMapGL.Boundary();
  bdary.get("山西省", function (rs) {
    const count = rs.boundaries.length;
    for (let i = 0; i < count; i++) {
      const ply = new window.BMapGL.Polygon(rs.boundaries[i], {
        strokeWeight: 2,
        strokeColor: "#ff0000",
        fillOpacity: 0.1,
        fillColor: "#ff0000",
      });
      map.value.addOverlay(ply);
    }
  });
}
</script>

<template>
  <div id="map" class="map" ref="mapDom"></div>
</template>

<style scoped>
.map {
  min-height: 30vh;
  min-width: 30vw;
  height: 700px;
  width: 100%;
}
</style>
