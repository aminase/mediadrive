import mqtt from 'mqtt'

const websocketUrl = 'wss://<SERVER-ADDRESS>:443/mqtt'
const apiEndpoint = '<API-ENDPOINT/>'

const getClient = (errorHandler: any) => {
 const client = mqtt.connect(websocketUrl)
 client.on('error', (err: any) => {
  errorHandler(`Connection to ${websocketUrl} failed`)
  client.end()
 })
 return client
}

const subscribe = (client: any, topic: any, errorHandler: any) => {
 const callBack = (err: string) => {
  if (err) {
   errorHandler('Subscription request failed')
  }
 }
 return client.subscribe(apiEndpoint + topic, callBack)
}

const onMessage = (client: any, callBack: any) => {
 client.on('message', (topic: any, message: any) => {
  callBack(JSON.parse(new TextDecoder('utf-8').decode(message)))
 })
}

const unsubscribe = (client: any, topic: any) => {
 client.unsubscribe(apiEndpoint + topic)
}

const closeConnection = (client: any) => {
 client.end()
}

export default { getClient, subscribe, onMessage, unsubscribe, closeConnection }
