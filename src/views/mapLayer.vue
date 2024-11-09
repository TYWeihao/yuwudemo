<template>
  <div class="bg-black py-5 d-flex justify-content-center align-items-center">
    <div class="obj">
      <div class="objchild">
        <span class="inn6"></span>
      </div>
    </div>
    <div class="obj">
      <div class="objchild">
        <span class="inn7"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* From Uiverse.io by Saad3092003 */
.obj {
  position: relative;
  width: 800px;
  height: 800px;
  /* background-color: rgb(96, 96, 232); */
  transform-style: preserve-3d;
  transition: 0.5s all;
  transform: rotateX(-15deg) rotateY(45deg);
}
.obj:hover {
  transform: rotateX(-90deg) rotateY(0);
}
.objchild {
  transform-style: preserve-3d;
  position: absolute;
  width: 100%;
  height: 100%;
}

.inn6 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(21, 21, 21);
  transform: rotateX(90deg);
  background-image: url("./../assets/img/bg.png");
  background-size: 200% 200%;
  background-position: center;
  z-index: 2;
  /* animation: updown 4s infinite ease-in-out; */
}

.inn7 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(21, 21, 21);
  transform: rotateX(90deg) translateZ(700px);
  background-image: url("./../assets/img/02.jpg");
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
  /* animation: updown 4s infinite ease-in-out; */
}
</style>
