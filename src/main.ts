import {createApp} from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import {router} from "./router";

createApp(App)
	// use pinia plugin persist
	.use(createPinia().use(piniaPluginPersist))
	// use router
	.use(router)
	.mount('#app')
