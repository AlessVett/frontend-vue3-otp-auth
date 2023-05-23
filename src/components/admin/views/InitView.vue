<script setup>

</script>

<template>
  <div class="init-view">
    <div class="container">
      <div class="loader">
          <div class="logo" :class="{ pressed }" @click="logoPressed">

          </div>
          <div class="loader-component" v-show="pressed" :class="{ pressed }">
            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
              <path fill="#6e86a9" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="2s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
              </path>
            </svg>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InitView',
  data() {
    return {
      pressed: false
    }
  },
  methods: {
    logoPressed() {
      this.pressed = true;
      setTimeout(() => {
        console.log(this.$router.push('/login'))
      }, 500);
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

        &.pressed {
          height: 80px;
          width: 80px;
          // transform: translate(-50%, -150%);
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .4s;

        svg {
          width: 230px;
          height: 230px;
          margin: 5px 0 0 0;
          display:inline-block;
        }
      }
    }
  }
}
</style>

//"Lamborghini venevo" (https://skfb.ly/oHuDM) by Jonrss is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).