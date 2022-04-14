import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import logger from 'vuejs-text-logger'

var options = {
  logs: true,
  logsPath: '',
  appendDate: false,
  maxFileDimension: 50
}

createApp(App).use(router, logger,
  options).mount('#app')
