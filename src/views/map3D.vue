<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const container = ref(null);
let scene, camera, renderer, controls, composer, renderPass, outlinePass;
const params = {
  edgeStrength: 2.2,
  edgeGlow: 1,
  edgeThickness: 4,
  pulsePeriod: 0,
  rotate: false,
  usePatternTexture: false,
};
onMounted(() => {
  initThreeJS();
  loadGeoJSON();
  animate();
});

onUnmounted(() => {
  if (renderer) {
    renderer.dispose();
  }
  window.removeEventListener("resize", onWindowResize);
});

function initThreeJS() {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(2, -2, 5);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  // renderer.toneMapping = THREE.ReinhardToneMapping;
  container.value.appendChild(renderer.domElement);
  // 设置场景背景为透明
  renderer.setClearColor(0x000000, 0);
  // 添加光源
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5).normalize();
  scene.add(light);
  // 创建一个渲染器通道，场景和相机作为参数
  const renderScene = new RenderPass(scene, camera);
  outlinePass = new OutlinePass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    scene,
    camera
  );
  outlinePass.edgeStrength = params.edgeStrength;
  outlinePass.edgeGlow = params.edgeGlow;
  outlinePass.edgeThickness = params.edgeThickness;
  outlinePass.pulsePeriod = params.pulsePeriod;
  outlinePass.visibleEdgeColor.set("#ffffff");
  outlinePass.hiddenEdgeColor.set("#190a05");

  const outputPass = new OutputPass();

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(outlinePass);
  composer.addPass(outputPass);

  // 添加控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // 监听窗口调整大小
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

function loadGeoJSON() {
  const loader = new THREE.FileLoader();
  loader.load("./mapJson/140000.geoJson", function (data) {
    const mapData = JSON.parse(data);
    const group = new THREE.Group();
    mapData.features.forEach((feature) => {
      const shape = new THREE.Shape();
      const coordinates = feature.geometry.coordinates;
      coordinates.forEach((item, index) => {
        const x = item[0];
        const y = item[1];
        if (isNaN(x) || isNaN(y)) {
          console.error("Invalid coordinate:", item);
          return;
        }
        if (index === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      });

      const extrudeSettings = {
        depth: calculateHeight(feature),
        bevelEnabled: false,
        steps: 2,
      };
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

      // 创建填充材质和描边材质
      const fillMaterial = new THREE.MeshBasicMaterial({
        color: 0x005167,
        opacity: 1,
        transparent: true,
        // emissive: 0xff0000, //发射红光
        // emissiveIntensity: 0.2, //发光强度 默认值1.0
      }); // 浅色
      const fillMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x05618d,
        opacity: 1,
        transparent: true,
        // emissive: 0xff0000, //发射红光
        // emissiveIntensity: 0.2, //发光强度 默认值1.0
      });
      const strokeMaterial = new THREE.LineBasicMaterial({
        color: 0xa5fff9,
        linewidth: 3,
      }); // 深色
      console.log(geometry);
      // 创建网格对象
      const mesh = new THREE.Mesh(geometry, fillMaterial);
      console.log(mesh);
      // 创建线框对象
      const edges = new THREE.EdgesGeometry(geometry);
      const positions = edges.attributes.position.array;
      const filteredPositions = [];

      for (let i = 0; i < positions.length; i += 6) {
        const x1 = positions[i];
        const y1 = positions[i + 1];
        const z1 = positions[i + 2];
        const x2 = positions[i + 3];
        const y2 = positions[i + 4];
        const z2 = positions[i + 5];

        // 只保留Z坐标相同的线条
        if (z1 === z2) {
          filteredPositions.push(x1, y1, z1, x2, y2, z2);
        }
      }

      const filteredEdgesGeometry = new THREE.BufferGeometry();
      filteredEdgesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(filteredPositions, 3)
      );
      const line = new THREE.LineSegments(filteredEdgesGeometry, strokeMaterial);

      group.add(mesh);
      group.add(line);
      outlinePass.selectedObjects.push(mesh);
    });

    const boundingBox = new THREE.Box3().setFromObject(group);
    const center = boundingBox.getCenter(new THREE.Vector3());
    group.position.sub(center);
    // 创建一个新的父组
    const parentGroup = new THREE.Group();
    parentGroup.add(group);
    // 将父组添加到场景中
    scene.add(parentGroup);

    // 将父组添加到全局数组中，以便在动画中旋转
    rotatingObjects.push(parentGroup);
  });
  function calculateHeight(feature) {
    // 根据 feature 中的数据计算棱柱高度
    return feature.properties.value * 0.1; // 根据实际情况调整比例因子
  }
}

const rotatingObjects = [];
const lines = [];
let rotationDirection = 1;
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  composer.render();
}
</script>

<template>
  <div ref="container" class="map-container"></div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.map-container {
  width: 100%;
  height: 85%;
  overflow: hidden;
  background-color: transparent;
}
</style>
