const gus_service_uuid = 'a6ed0201-d344-460a-8075-b9e8ec90d71b'
const gus_rx_char_uuid = 'a6ed0202-d344-460a-8075-b9e8ec90d71b' // 蓝牙发出，需要监听
const gus_tx_char_uuid = 'a6ed0203-d344-460a-8075-b9e8ec90d71b' // 发给蓝牙

const esp_service_uuid = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'

const options = {
  filters: [
    // { services: ['heart_rate'] },
    // { services: [0x1802, 0x1803] }
    // { services: [gus_service_uuid] },
    // { name: 'TFidea@xt8JDutt' }, // EF:72:13:37:8D:F7
    // { namePrefix: 'TFidea' },
    { namePrefix: 'UART' },
    { services: [esp_service_uuid] },
  ],
  // optionalServices: []
}
const optionsAll = {
  acceptAllDevices: true
}

let device, server, service, char_rx, char_tx, mtu

export async function bleConnect(mac, onCharValueChanged) {
  //   const name = 'TFidea@' + mac
  //   options.filters = [{ name }]

  if (device && device.name === name) {
    return
  }

  if (device) {
    await device.gatt.disconnect()
  }

  device = await navigator.bluetooth.requestDevice(options)
  server = await device.gatt.connect()
  service = await server.getPrimaryService(gus_service_uuid)

  char_rx = await service.getCharacteristic(gus_rx_char_uuid)
  char_rx.addEventListener('characteristicvaluechanged', onCharValueChanged)
  await char_rx.startNotifications()

  char_tx = await service.getCharacteristic(gus_tx_char_uuid)
  const data = new Uint8Array([0x67]) // 要发送的数据
  char_tx
    .writeValue(data)
    .then(() => {
      console.log('发送数据成功')
    })
    .catch((error) => {
      console.log('发送数据失败:', error)
    })
}

export async function bleDisconnect() {
  if (device) {
    await device.gatt.disconnect()
  }
}

export async function bleSend(data) {
  if (char_tx) {
    char_tx
      .writeValue(data)
      .then(() => {
        console.log('发送数据成功')
      })
      .catch((error) => {
        console.log('发送数据失败:', error)
      })
  }
}
