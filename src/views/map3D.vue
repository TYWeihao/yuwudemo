<template>
  <div ref="container" class="map-container">
    <div id="pyramid-loader">
      <div>余吾煤业</div>
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";

const container = ref(null);
let scene,
  camera,
  renderer,
  controls,
  composer,
  renderPass,
  outlinePass,
  group,
  cssRenderer;
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
  camera.position.set(0.064, -4.27, 1.83);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);
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
  // 创建 CSS3DRenderer
  cssRenderer = new CSS3DRenderer();
  cssRenderer.setSize(container.value.clientWidth, container.value.clientHeight);
  cssRenderer.domElement.style.position = "absolute";
  cssRenderer.domElement.style.top = "80px";
  cssRenderer.domElement.style.left = "500px"; // 确保不会拦截鼠标事件
  cssRenderer.domElement.style.pointerEvents = "none"; // 确保不会拦截鼠标事件
  container.value.appendChild(cssRenderer.domElement);
}

function onWindowResize() {
  camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  cssRenderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

function loadGeoJSON() {
  const loader = new THREE.FileLoader();
  group = new THREE.Group();

  loader.load("./mapJson/140000.json", function (data) {
    const edgeMapData = JSON.parse(data).boundaries;
    const shape = new THREE.Shape();

    edgeMapData.forEach((coordinates, index) => {
      const x = coordinates[0];
      const y = coordinates[1];
      if (isNaN(x) || isNaN(y)) {
        console.error("Invalid coordinate:", coordinates);
        return;
      }
      if (index === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    });
    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: false,
      steps: 1,
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // 创建填充材质和描边材质
    const fillMaterial = new THREE.MeshBasicMaterial({
      color: 0x005167,
      opacity: 0,
      transparent: true,
    });
    const strokeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 3,
    });
    const glowShaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { type: "c", value: new THREE.Color(0x00ffff) },
        time: { type: "f", value: 0 },
      },
      vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    uniform vec3 color;
    varying vec3 vPosition;

    void main() {
      float alpha;
      if (vPosition.z < 0.0001) {
        alpha = 0.0;
      } else {
        alpha = 0.5 - smoothstep(0.0, 0.3, vPosition.z);
      }
      gl_FragColor = vec4(color, alpha);
    }
  `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, glowShaderMaterial);

    group.add(mesh);
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

      if (z1 === z2 && z1 === 0) {
        filteredPositions.push(x1, y1, z1, x2, y2, z2);
      }
    }

    const filteredEdgesGeometry = new THREE.BufferGeometry();
    filteredEdgesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(filteredPositions, 3)
    );
    const line = new THREE.LineSegments(filteredEdgesGeometry, strokeMaterial);

    group.add(line);
    outlinePass.selectedObjects.push(line);
  });

  loader.load("./mapJson/140000.geoJson", function (data) {
    const mapData = JSON.parse(data);
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
        depth: 0.15,
        bevelEnabled: false,
        steps: 1,
      };
      const extrudeSettings2 = {
        depth: 0.1,
        bevelEnabled: false,
        steps: 1,
      };
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const geometry2 = new THREE.ExtrudeGeometry(shape, extrudeSettings2);
      const fillMaterial = new THREE.MeshBasicMaterial({
        color: 0x005167,
        opacity: 1,
        transparent: true,
      });
      const fillMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        opacity: 1,
        transparent: true,
      });
      const strokeMaterial = new THREE.LineBasicMaterial({
        color: 0x1aa7ec,
        linewidth: 3,
      });
      const lineShaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0x00ffff) },
          time: { value: 0.0 },
        },
        vertexShader: `
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
        fragmentShader: `
    uniform vec3 color;
    uniform float time;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      float wave = sin(vUv.x * 20.0 - time * 5.0);
      float intensity = smoothstep(0.0, 1.0, wave);
      vec3 animatedColor = mix(color, vec3(1.0, 1.0, 1.0), intensity);
      gl_FragColor = vec4(animatedColor, 1.0);
    }
  `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, fillMaterial);
      const mesh2 = new THREE.Mesh(geometry2, fillMaterial2);
      mesh.position.z = -0.15;
      mesh2.position.z = -0.25;

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

        if (z1 === z2 && z1 === 0) {
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
      group.add(mesh2);
      group.add(line);
      outlinePass.selectedObjects.push(line);
    });
    const element = document.querySelector("#pyramid-loader");

    const cssObject = new CSS3DObject(element);
    cssObject.position.set(120, 400, -180); // 调整位置
    cssObject.rotation.x = Math.PI / 1.8; // 调整旋转
    group.add(cssObject);
    const boundingBox = new THREE.Box3().setFromObject(group);
    const center = boundingBox.getCenter(new THREE.Vector3());
    group.position.sub(center);
    const parentGroup = new THREE.Group();
    // 创建 CSS3DObject 并添加到场景中

    parentGroup.add(group);
    parentGroup.rotation.z = -Math.PI / 12;
    parentGroup.position.x = 0.8;
    parentGroup.position.y = 0.8;
    scene.add(parentGroup);
    rotatingObjects.push(parentGroup);
  });
}

const rotatingObjects = [];
const lines = [];
let rotationDirection = 1;
const lineShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color: { value: new THREE.Color(0x00ffff) },
    time: { value: 0.0 },
  },
  vertexShader: `
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    uniform float time;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      float wave = sin(vUv.x * 20.0 - time * 5.0);
      float intensity = smoothstep(0.0, 1.0, wave);
      vec3 animatedColor = mix(color, vec3(1.0, 1.0, 1.0), intensity);
      gl_FragColor = vec4(animatedColor, 1.0);
    }
  `,
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide,
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  lineShaderMaterial.uniforms.time.value += 0.05;
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}
</script>

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
#pyramid-loader {
  display: flex;
  justify-content: center;
  width: 100px;
  pointer-events: none; /* 确保不会拦截鼠标事件 */
  font-size: 12px;
  color: #00ffff;
}
.pyramid-loader {
  position: absolute;
  width: 100px;
  height: 100px;
  pointer-events: none; /* 确保不会拦截鼠标事件 */
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.side {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
