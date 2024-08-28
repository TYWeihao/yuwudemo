<script setup>
import { ref } from "vue";
const map = ref(null);
const mapDom = ref(null);
const AK = "BvWPpO6r5VwGE6VMF8uc7MLrXoRokI5O";
const BMapGLURL = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${AK}&callback=init`;
const script = document.createElement("script");
script.src = BMapGLURL;
script.async = true;
script.defer = true;
document.body.appendChild(script);
const geoJson = ref(null);
// 初始化地图
window.init = () => {
  fetch("./public/mapJson/140000.geoJson")
    .then((res) => res.json())
    .then((res) => {
      geoJson.value = res;
      map.value = new window.BMapGL.Map("map");
      map.value.centerAndZoom(new window.BMapGL.Point(112.406499, 37.502849), 8);
      map.value.enableScrollWheelZoom(false);
      //调整地图角度
      map.value.setTilt(15);
      map.value.setHeading(5);
      map.value.setZoom(7.5);
      map.value.setMapStyleV2({
        styleId: "7edc9f0146d3be6bcd67404be50c1d43",
      });
      //去掉mapDom元素css属性background-image: url(http://webmap0.bdimg.com/image/api/bg.png);
      mapDom.value.style.backgroundImage = "none";
      //去掉百度地图logo
      map.value.removeControl(map.value.logoControl);

      getBoundary();
    });
};
//绘制3D棱柱山西省边界
function getBoundary() {
  const bdary = new window.BMapGL.Boundary();
  bdary.get("山西省", function (rs) {
    const count = rs.boundaries.length;
    for (let i = 0; i < count; i++) {
      const ply = new window.BMapGL.Polygon(rs.boundaries[i], {
        strokeWeight: 2,
        strokeColor: "#7ba2c5",
        fillOpacity: 0.2,
        fillColor: "#96fafa",
      });
      map.value.addOverlay(ply);
    }
  });
  geoJson.value.features.forEach((item) => {
    const points = item.geometry.coordinates.map((point) => {
      console.log(point);
      return new window.BMapGL.Point(point[0], point[1]);
    });
    console.log(points);
    const ply = new window.BMapGL.Polygon(points, {
      strokeWeight: 1,
      strokeColor: "#7ba2c5",
      fillOpacity: 0.2,
      fillColor: "#96fafa",
    });
    map.value.addOverlay(ply);
  });
  setYuwuPosition();
}
function setYuwuPosition() {
  const point = new window.BMapGL.Point(112.872384, 36.369665);
  const content =
    '<div class="pyramid-loader">  <div class="wrapper">    <span class="side side1"></span>    <span class="side side2"></span>    <span class="side side3"></span>    <span class="side side4"></span>    <span class="shadow"></span>  </div></div>  ';
  const infoWindow = new window.BMapGL.Label(content, {
    position: point,
    offset: new window.BMapGL.Size(0, 0),
  });
  const title = new window.BMapGL.Label("余吾煤矿", {
    position: point,
    offset: new window.BMapGL.Size(20, -20),
  });
  infoWindow.setStyle({
    color: "#ffffffb3",
    backgroundColor: "transparent",
    border: "none",
  });
  title.setStyle({
    color: "#ffffffb3",
    backgroundColor: "transparent",
    border: "none",
    // padding: "2px",
  });
  map.value.addOverlay(infoWindow);
  map.value.addOverlay(title);
}
</script>

<template>
  <div id="map" class="map" ref="mapDom"></div>
</template>

<style scoped>
.map {
  min-height: 30vh;
  min-width: 30vw;
  height: 100%;
  width: 100%;
}
</style>
