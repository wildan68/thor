<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'
import { isDark, useSkinConfig } from '@core/app'

const { global } = useTheme()

const switchTheme = (val: boolean) => val ? global.name.value = 'dark' : global.name.value = 'light'

watch(isDark, switchTheme)

onMounted(() => switchTheme(isDark.value))

useSkinConfig()
</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
    <RouterView />
  </VApp>
</template>

