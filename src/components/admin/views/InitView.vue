<script setup>

</script>

<template>
  <div class="init-view">
    <div class="container">
      <div class="loader">
          <div class="logo" :class="{ pressed }" @click="() => pressed = true">

          </div>
          <div class="loader-component" v-show="pressed" :class="{ pressed }">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Camera, GltfModel, PointLight, Renderer, Scene } from 'troisjs';
export default {
  name: 'InitView',
  data() {
    return {
      pressed: false
    }
  },
  methods: {
    modelLoaded(model) {
      const renderer = this.$refs.renderer;
      renderer.onBeforeRender(() => {
        model.rotation.x += 0.01;
      });
    }
  }
}
</script>

<style scoped lang="scss">
.init-view {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: fit-content;
    margin: auto;

    .loader {
      position: relative;

      .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background-color: #6e86a9;
        transition: .2s;

        z-index: 9 !important;

        &.pressed {
          /* height: 80px; */
          /* width: 80px; */
          transform: translate(-50%, -150%);
          transition: .4s;
        }

        &:not(&.pressed) {
          cursor: pointer;

          &:hover {
            background-color: #4b5a77;
            transition: .4s;
          }
        }
      }

      &-component {
        opacity: 0;
        height: 200px;
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 12px;
        background-image: url("@/assets/media/59097644ada257296db3d19882f84ed6.gif");
        background-size: cover;
        background-position: center;
        transition: .4s;

        z-index: 0 !important;

        &.pressed {
          transition: opacity .6s linear 2s;
          opacity: 1;
        }
      }
    }
  }
}
</style>

//"Lamborghini venevo" (https://skfb.ly/oHuDM) by Jonrss is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).