<script setup>
defineProps({
  birthday: Object,
})

const getMonthName = (monthNumber) => {
  if (!monthNumber) return ''
  const date = new Date(2000, monthNumber - 1) // any year, just need the month
  return date.toLocaleString('default', { month: 'long' }) // e.g., "May"
}
</script>
<template>
  <div class="m-2 rounded-lg bg-white p-4 shadow-md">
    <h3 class="text-xl font-semibold">{{ birthday.name }}</h3>
    <div class="flex gap-2">
      <p class="text-sm font-bold text-gray-900">{{ getMonthName(birthday.birthMonth) }}</p>
      <p class="text-sm text-gray-600">{{ birthday.birthDay }}</p>
    </div>
    <p class="mt-2 truncate">{{ birthday.notes }}</p>
    <!-- Display each tag as a styled badge -->
    <div v-if="birthday.tags && birthday.tags.length" class="mt-2 flex flex-wrap gap-2">
      <span
        v-for="(tag, index) in birthday.tags"
        :key="index"
        class="rounded-full bg-pink-200 px-2 py-1 text-xs text-pink-800"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
