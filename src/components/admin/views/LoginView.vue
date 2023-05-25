<script setup>

</script>

<template>
  <div class="login-view">
    <div class="card" :class="{ active }">
      <div class="content">
        <div class="front">
          <div class="description">
            Description
          </div>
          <div class="btn" @click="onCardClicked">
            Accedi
          </div>
        </div>
        <div class="back">
          <div class="btn-reload" @click="onReloadClick"><i class="bi bi-arrow-clockwise"></i></div>
          <div class="description">
            <a target="_blank" :href="token">{{ token }}</a>
          </div>
          <div class="btn-cancel" @click="onCardClicked">
            Annulla
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';
export default {
  data() {
    return {
      active: false,
      token: '',
      socket: null,
      sse: null
    }
  },
  methods: {
    onCardClicked() {
      this.active = !this.active
      if (this.active) {
          this.socket = io('http://172.20.10.3:5000/');
          this.socket.on('connect_error', (err) => {
              console.log(err);
              this.active = false;
          });
          this.socket.on('accepted', () => {
              this.socket.emit('otp');
          });
          this.socket.on('otp', (args) => {
              this.token = `https://t.me/share/url?url=/auth&text=${this.socket.id}$${args.token}`;
              this.sse = new EventSource(`http://172.20.10.3:5000/sse/${args.token}`);

              this.sse.onmessage = (e) => {
                const data = JSON.parse(e.data);

                if (data.status) {
                  this.socket.close();
                  this.sse.close();
                  this.token = 'auth';
                  this.$router.push('/home');
                }
              }
          });
          this.socket.on('authenticated', () => {
              this.token = 'authenticated';
              this.socket.close();
              this.socket = null;
          });
      } else {
          this.token = '';
      }
    },
    onReloadClick() {
        /*
        if (!this.socket) {
            this.socket = io('http://192.168.1.10:5000');
        } else {
            this.socket.emit('otp');
        }
        */
    }
  }
}
</script>

<style scoped lang="scss">
.login-view {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    position: relative;
    min-height: 450px;
    min-width: 300px;
    perspective: 500px;

    .content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      box-shadow: -3px 4px 10px 1px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
    }

    &.active .content {
      transform: rotateY(180deg);
      box-shadow: 3px 4px 10px 1px rgba(0, 0, 0, 0.25);
      transition: transform 0.5s;
    }

    .front, .back {
      position: absolute;
      height: 100%;
      width: 100%;
      background: white;
      border-radius: 5px;
      backface-visibility: hidden;
      padding: 10px;
    }

    .front {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      gap: 10px;

      .description {
        height: 100%;
        width: 100%;
        background-color: #fafafa;
        padding: 10px;
        border-radius: 7px;
        box-shadow: -1px 2px 4px .5px rgba(0, 0, 0, 0.15);
      }

      .btn {
        width: 100%;
        padding: 10px 20px;
        background-color: rgba(115, 132, 166, 0.85);
        color: white;
        font-weight: 550;
        border-radius: 7px;
        cursor: pointer;
        box-shadow: -1px 2px 4px .5px rgba(0, 0, 0, 0.25);

        &:hover {
          background-color: #4b5a77;
          transition: .4s;
        }
      }
    }

    .back {
      color: black;
      transform: rotateY( 180deg );
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      gap: 10px;

      .description {
        height: 240px;
        width: 100%;
        background-color: #fafafa;
        padding: 10px;
        border-radius: 7px;
        box-shadow: -1px 2px 4px .5px rgba(0, 0, 0, 0.15);
        word-wrap: break-word;
      }

      .btn-reload {
        position: absolute !important;
        top: 10px;
        right: 10px;
        padding: 2px;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
          background-color: rgba(0,0,0,.1);
          transition: .3s;
        }

        i {
          display: block !important;
          height: 27px;
          font-size: 25px;
        }
      }

      .btn-cancel {
        width: 100%;
        padding: 10px 20px;
        background-color: rgb(194, 94, 94);
        color: white;
        font-weight: 550;
        border-radius: 7px;
        cursor: pointer;
        box-shadow: -1px 2px 4px .5px rgba(0, 0, 0, 0.25);

        &:hover {
          background-color: rgb(171, 83, 83);
          transition: .4s;
        }
      }
    }
  }
}
</style>