<template>
  <div
    v-if="isOpen"
    class="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-900"
    :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }"
  >
    <div class="w-full max-w-sm rounded-lg bg-white p-6">
      <h2 class="text-center text-xl font-semibold">Add New Birthday</h2>
      <form @submit.prevent="submitForm" class="mt-4">
        <div>
          <label for="name" class="block text-sm font-medium">Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            required
            class="mt-2 w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div class="mt-4">
          <label for="birthday" class="block text-sm font-medium">Birthday</label>
          <input
            v-model="birthday"
            type="date"
            id="birthday"
            required
            class="mt-2 w-full rounded-md border border-gray-300 px-4 py-2"
          />
        </div>
        <div class="mt-4">
          <label for="notes" class="block text-sm font-medium">Notes</label>
          <textarea
            v-model="notes"
            id="notes"
            class="mt-2 w-full rounded-md border border-gray-300 px-4 py-2"
          ></textarea>
        </div>
        <div class="mt-4 flex justify-end">
          <button
            type="button"
            @click="props.closeModal()"
            class="mr-2 rounded-md bg-gray-400 px-4 py-2 text-white"
          >
            Cancel
          </button>
          <button type="submit" class="rounded-md bg-blue-600 px-4 py-2 text-white">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define props
const props = defineProps({
  isOpen: Boolean,
  closeModal: Function,
  saveBirthday: Function,
})

// Reactive state for form inputs
const name = ref('')
const birthday = ref('')
const notes = ref('')

// Handle form submission
const submitForm = () => {
  const newBirthday = {
    name: name.value,
    birthday: birthday.value,
    notes: notes.value,
  }
  props.saveBirthday(newBirthday)
  props.closeModal()
}
</script>

<style scoped></style>
