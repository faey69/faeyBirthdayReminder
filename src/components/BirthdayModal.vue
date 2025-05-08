<script setup>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])

const name = ref('')
const birthMonth = ref('')
const birthDay = ref('')
const notes = ref('')
const tags = ref([])
const newTag = ref('')

const addTag = () => {
  const trimmedTag = newTag.value.trim()
  if (trimmedTag && !tags.value.includes(trimmedTag)) {
    tags.value.push(trimmedTag)
  }
  newTag.value = ''
}

const removeTag = (tag) => {
  tags.value = tags.value.filter((t) => t !== tag)
}

const submitForm = async () => {
  const newBirthday = {
    name: name.value,
    birthMonth: birthMonth.value,
    birthDay: birthDay.value,
    notes: notes.value,
    tags: tags.value,
    createdAt: serverTimestamp(),
  }

  try {
    const docRef = await addDoc(collection(db, 'birthdays'), newBirthday)
    console.log('Document written with ID: ', docRef.id)

    // Reset form fields
    name.value = ''
    birthMonth.value = ''
    birthDay.value = ''
    notes.value = ''
    tags.value = []

    emit('close')
  } catch (e) {
    console.error('Error adding document: ', e)
    alert('Failed to submit birthday')
  }
}
</script>
<template>
  <Transition
    name="BirthdayModal"
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-900/50"
    >
      <div class="w-full max-w-sm rounded-lg bg-white p-6">
        <h2 class="text-center text-xl font-semibold">
          <slot name="header">Add New Birthday</slot>
        </h2>
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
            <label class="mb-2 block text-sm font-medium">Birthday</label>
            <div class="flex gap-4">
              <!-- Month Select -->
              <select
                v-model="birthMonth"
                required
                class="w-1/2 rounded-md border border-gray-300 px-4 py-2"
              >
                <option disabled value="">Month</option>
                <option v-for="month in 12" :key="month" :value="month">
                  {{ new Date(0, month - 1).toLocaleString('default', { month: 'long' }) }}
                </option>
              </select>

              <!-- Day Select -->
              <select
                v-model="birthDay"
                required
                class="w-1/2 rounded-md border border-gray-300 px-4 py-2"
              >
                <option disabled value="">Day</option>
                <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
              </select>
            </div>
          </div>
          <div class="mt-4">
            <label for="notes" class="block text-sm font-medium">Notes</label>
            <textarea
              v-model="notes"
              id="notes"
              class="mt-2 w-full rounded-md border border-gray-300 px-4 py-2"
            ></textarea>
          </div>
          <div class="mt-4">
            <label for="tags" class="block text-sm font-medium">Tags</label>
            <div class="mt-2 flex max-h-24 flex-wrap gap-2 overflow-y-auto">
              <span
                v-for="tag in tags"
                :key="tag"
                class="flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-pink-700"
              >
                {{ tag }}
                <button
                  type="button"
                  @click="removeTag(tag)"
                  class="ml-2 text-pink-500 hover:text-pink-700"
                >
                  &times;
                </button>
              </span>
            </div>
            <div class="mt-2 flex">
              <input
                v-model="newTag"
                @keydown.enter.prevent="addTag"
                type="text"
                placeholder="Add a tag and press Enter"
                class="flex-1 rounded-md border border-gray-300 px-4 py-2"
              />
              <button
                type="button"
                @click="addTag"
                class="ml-2 rounded-md bg-pink-600 px-4 py-2 text-white"
              >
                Add
              </button>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <button
              type="button"
              @click="$emit('close')"
              class="mr-2 rounded-md bg-gray-400 px-4 py-2 text-white"
            >
              Cancel
            </button>
            <button type="submit" class="rounded-md bg-pink-600 px-4 py-2 text-white">Save</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
<style scoped></style>
