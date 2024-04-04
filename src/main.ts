import '@/assets/main.scss'
import '@pdanpdan/vue-keyboard-trap/styles'

import VueKeyboardTrapDirectivePlugin from '@pdanpdan/vue-keyboard-trap'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import type { Component } from 'vue'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App as Component)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(VueKeyboardTrapDirectivePlugin, {})

app.mount('#app')
