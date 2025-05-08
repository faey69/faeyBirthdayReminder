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
  <div
    class="m-2 cursor-pointer rounded-lg bg-white p-4 shadow-md outline outline-transparent transition-all duration-150 ease-in-out hover:bg-pink-50 hover:shadow-lg hover:outline-pink-300 active:bg-pink-100 active:shadow-lg"
    @mousedown.prevent
  >
    <h3 class="text-xl font-semibold">{{ birthday.name }}</h3>
    <div class="mt-2 flex gap-2">
      <p class="text-md rounded-lg px-2 font-bold text-pink-800 outline outline-pink-900">
        {{ getMonthName(birthday.birthMonth) }}
      </p>
      <p class="text-md rounded-full px-2 font-semibold text-pink-600 outline outline-pink-900">
        {{ birthday.birthDay }}
      </p>
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
