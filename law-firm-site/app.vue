<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ['disclaimer']
})
</script>
