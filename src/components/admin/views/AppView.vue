<script setup>

</script>

<template>
  <div class="appview">
    <div class="appview-container" @scroll="onScrollEvent" ref="container">
      <div class="header" ref="header">
        <div class="logo">
          <i class="bi bi-app"></i>
          <div class="title">
            Proced
          </div>
        </div>
      </div>
      <div class="body" ref="body">
        <router-view></router-view>
      </div>
      <div class="nav" ref="nav">
        <div class="nav-container">
          <RouterLink class="btn" to="/app/explore" :class="{ selected: $router.currentRoute._value.path === '/app/explore'}">
            <i class="bi" :class="$router.currentRoute._value.path === '/app/explore' ? 'bi-binoculars-fill' : 'bi-binoculars'"></i>
            <div class="description">
              Explore
            </div>
          </RouterLink>
          <RouterLink class="btn" to="/app" :class="{ selected: $router.currentRoute._value.path === '/app'}">
            <i class="bi" :class="$router.currentRoute._value.path === '/app' ? 'bi-house-door-fill' : 'bi-house-door'"></i>
            <div class="description">
              Home
            </div>
          </RouterLink>
          <RouterLink class="btn" to="/app/profile" :class="{ selected: $router.currentRoute._value.path === '/app/profile'}">
            <i class="bi" :class="$router.currentRoute._value.path === '/app/profile' ? 'bi-person-fill' : 'bi-person'"></i>
            <div class="description">
              Profile
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onScrollEvent() {
      if (window.innerWidth > 620) this.$refs['nav'].style.bottom = `${10 - this.$refs['container'].scrollTop}px`;
      else this.$refs['nav'].style.bottom = '10px';
      if (this.$refs['container'].scrollTop > 20) {
        this.$refs['header'].classList.add('hide');
      } else {
        this.$refs['header'].classList.remove('hide');
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .appview {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d2d28411;

    &-container {
      position: relative;
      height: 100%;
      max-width: 620px;
      width: 100%;
      background-color: #0f0f0f;
      overflow: auto;

      .header {
        padding: 20px 20px;
        position: absolute;
        top: 0;
        transition: top 0.5s;
        left: 0;
        width: 100%;
        background-color: #0f0f0f;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 8;

        &.hide {
          top: -64px;
          transition: top 0.5s;
        }

        .logo {
          display: flex;
          align-items: center;
          height: fit-content;
          width: fit-content;
          gap: 10px;
          color: #fff;

          i {
            font-size: 20px;
          }

          .title {
            font-size: 20px;
            font-weight: 550;
          }
        }
      }

      .nav {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        z-index: 8;

        &-container {
          padding: 10px 40px;
          background-color: #0f0f0f;
          width: fit-content;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          border-radius: 50px;

          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #fff;
            padding: 8px 10px;

            i {
              font-size: 22px;
              margin: auto;
            }

            .description {
              font-size: 12px;
            }

            &.selected {
              border-radius: 50px;
              box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.15);
            }
          }
        }
      }

      .body {
        color: white;
        margin-top: 64px;
      }
    }
  }

  @media only screen and (min-width: 621px) {
    .appview {
      &-container {
        border-radius: 30px;
        height: 95%;
        box-shadow: -3px 4px 7px 1px #00000011;

        .nav {
          position: absolute;
        }
      }
    }
  }
</style>