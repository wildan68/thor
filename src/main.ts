import '@/@iconify/icons-bundle'
import '@/@mock-db/route'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// base css
import '@/assets/base.css'

// Vuetify
import vuetify from '@/plugins/vuetify'

// Swiper
import swiper from '@/plugins/swiper'

// OTPInput
import otpInput from '@/plugins/otp'

// Bottom Sheet
import bottomSheet from '@/plugins/bottom-sheet'

import App from '@/App.vue'
import router from '@/router'

export const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

app.use(vuetify)

app.use(swiper)

app.use(otpInput)

bottomSheet.forEach(plugin => app.use(plugin))

app.mount('#app')
