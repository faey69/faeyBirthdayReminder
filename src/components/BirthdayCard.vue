<template>
  <div class="rounded-lg bg-white p-4 shadow-md">
    <h3 class="text-xl font-semibold">{{ birthday.name }}</h3>
    <p class="text-sm text-gray-600">{{ formatBirthday(birthday.birthday) }}</p>
    <p class="mt-2">{{ birthday.notes }}</p>
  </div>
</template>

<script setup>
// Define the `birthday` prop
defineProps({
  birthday: Object,
})

// Format function for the birthday date
const formatBirthday = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>

<style scoped></style>
