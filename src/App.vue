<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-pink-700 p-4 text-center text-white">
      <h1 class="text-2xl font-semibold">Faey Birthday Reminder</h1>
    </header>

    <!-- Main Content Area -->
    <div class="mx-auto max-w-4xl py-6">
      <!-- Add Birthday Button -->
      <AddBirthdayButton @open-modal="openModal" />

      <!-- Birthday Cards Grid -->
      <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Loop through birthdays and display them in cards -->
        <BirthdayCard v-for="birthday in birthdays" :key="birthday.name" :birthday="birthday" />
      </div>
    </div>

    <!-- Birthday Modal -->
    <BirthdayModal :isOpen="isModalOpen" @close-modal="closeModal" @save-birthday="addBirthday" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddBirthdayButton from './components/AddBirthdayButton.vue'
import BirthdayCard from './components/BirthdayCard.vue'
import BirthdayModal from './components/BirthdayModal.vue'

// Reactive state for managing the modal visibility
const isModalOpen = ref(false)

// Reactive state to store the list of birthdays
const birthdays = ref([])

// Function to open the modal
const openModal = () => {
  isModalOpen.value = true
}

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false
}

// Function to add a new birthday
const addBirthday = (newBirthday) => {
  birthdays.value.push(newBirthday)
}
</script>

<style scoped></style>
