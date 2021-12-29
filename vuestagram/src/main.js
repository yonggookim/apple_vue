import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import mitt from 'mitt'
import './registerServiceWorker'
// 데이터를 모두 담아두는 js파일 생성 ~ 

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app')
