<script setup lang="ts">
import { themeConfig } from '@themeConfig'

interface Emit {
  (e: 'change', val: string): void
  (e: 'change:menu', val: string): void
}

const emit = defineEmits<Emit>()

const summary = ref<HTMLElement>()

useIntersectionObserver(
  summary,
  ([{ isIntersecting }]) => isIntersecting && emit('change', 'summary'),
)

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'Indonesia',
    disabled: false,
    href: '/reg/indonesia',
  },
  {
    title: 'JAKARTA MUSIC FESTIVAL',
    disabled: true,
    href: '/the-best-of-jazz',
  },
]
</script>

<template>
  <VRow
    no-gutters
    class="justify-space-between align-center"
  >
    <VBreadcrumbs :items="breadcrumbs">
      <template #divider>
        <VIcon
          icon="tabler-chevron-right"
          size="12px"
        />
      </template>
    </VBreadcrumbs>

    <div
      v-if="!themeConfig.isMobile"
      class="guarante-badge"
    >
      <VRow
        no-gutters
        class="align-center gap-2"
      >
        <VIcon icon="tabler-shield-check-filled" />
        <span>Ticket Guarantee</span>
      </VRow>
    </div>
  </VRow>

  <VCard
    ref="summary"
  >
    <VCardText>
      <VRow
        no-gutters
        class="justify-beetween"
      >
        <VCol class="d-flex flex-column gap-6">
          <h1 class="text-black">
            JAKARTA MUSIC FESTIVAL
          </h1>

          <VRow
            no-gutters
            class="gap-2"
          >
            <VIcon icon="tabler-calendar-event" />
            <span>12 May 2023</span>
          </VRow>

          <VRow
            no-gutters
            class="gap-4 align-center"
          >
            <VAvatar
              color="success"
              size="28"
            />

            <span class="font-weight-semibold text-black text-xs">JakartaFest</span>

            <VIcon
              icon="tabler-discount-check-filled"
              color="info"
            />
          </VRow>

          <div class="d-flex flex-column gap-3">
            <h4 class="text-black">
              Description
            </h4>

            <p class="text-secondary text-sm">
              <slot />
            </p>
          </div>
        </VCol>

        <VCol
          v-if="!themeConfig.isMobile"
          class="d-flex flex-column gap-2 align-end"
        >
          <span class="text-secondary text-sm font-weight-bold">Started</span>
          <span class="text-primary text-2xl font-weight-bold">$40</span>
          <VBtn
            variant="tonal"
            size="large"
            @click="emit('change:menu', 'packages')"
          >
            Show Package
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style scoped lang="scss">
.guarante-badge {
  padding: 8px 24px;
  background: linear-gradient(90deg, #F15C59, #F4BC67) 100%;
  border-radius: 12px;
  color: #fff;
}
</style>
