<script setup lang="ts">
import NotFoundVec from '@images/vec/not-found.png'
</script>

<template>
  <div class="d-flex flex-column gap-6">
    <VCard
      title="Bookmark"
      subtitle="Let's, buy the event ticket you saved"
    />
    <VCard>
      <VCardText class="d-flex flex-column justify-center align-center gap-6">
        <VImg
          :src="NotFoundVec"
          width="40%"
          class="ml-10"
        />
        <div class="font-weight-semibold text-2xl text-black">
          No events saved
        </div>
        <VBtn
          size="x-large"
          @click="$router.push('/')"
        >
          Explore Event
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>

