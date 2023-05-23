<script setup>
</script>

<template>
  <div class="auth-btn" @click="tryWs">
    Button
  </div>
  {{ token }}
</template>

<script>
import { io } from 'socket.io-client';
export default {
  data() {
    return {
        token: ''
    }
  },
  methods: {
    tryWs() {
        const socket = io('http://172.20.10.3:5000/');

        socket.on("connect_error", (err) => {
            this.token = `connect_error due to ${err.message}`;
        });

        socket.on('accepted', () => {
            socket.emit('otp');
        });

        socket.on('otp', (args) => {
            this.token = args.token;
        });

        socket.on('authenticated', () => {
            console.log('authenticated')
            this.token = 'authenticated';
            socket.close();
        });
    }
  }
}
</script>

<style scoped lang="scss">
  .auth-btn {
    padding: 6px 20px;
    background-color: #39393990;
    width: fit-content;
    border-radius: 5px;
    transition: .1s;
    cursor: pointer;

    color: white;
    font-weight: 550;
    font-size: 22px;

    &:hover {
      background-color: #393939EE;
      transition: .4s;
    }
  }
</style>