import {createApp} from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import {router} from "./router";

createApp(App)
	// 使用pinia代替vuex缓存
	.use(createPinia().use(piniaPluginPersist))
	// use router
	.use(router)
	.mount('#app')
