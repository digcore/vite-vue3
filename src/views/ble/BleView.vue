<template>
    <van-button type="primary" @click="bleConnectMac()">搜索蓝牙</van-button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { bleConnect } from '@/utils/ble'
  
  const mac = ref('')
  async function onBleRecv(event) {
    const value = event.target.value
    console.log(`收到数据： ${new Uint8Array(value.buffer)}`)
  }
  
  async function bleConnectMac() {
    bleConnect(mac, onBleRecv)
  }
  </script>
  