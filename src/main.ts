import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { globalRegister } from './global' //局部引用element

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css' //全局引用element-plus

const app = createApp(App)
app.use(router)
// app.use(globalRegister) //局部引用element
app.use(ElementPlus) //全局引用element-plus
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
