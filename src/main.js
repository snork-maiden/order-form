import './assets/tailwind.css'
import store from './store'
import { vMaska } from "maska"

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
app.use(store)
app.directive("maska", vMaska)

app.mount('#app')