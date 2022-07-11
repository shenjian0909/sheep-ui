import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
// 使用全量导出
import SheepUI from './index'

createApp(App).use(SheepUI).mount('#app')
