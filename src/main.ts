import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import OpenLayersMap from 'vue3-openlayers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(OpenLayersMap)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
