<script setup>
import { ref } from 'vue'
import BirthdayCard from './components/BirthdayCard.vue'
import BirthdayModal from './components/BirthdayModal.vue'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const showBirthdayModal = ref(false)

const birthdays = ref([])
const selectedBirthday = ref(null)

async function getCollection() {
  const colRef = collection(db, 'birthdays')
  const querySnapshot = await getDocs(colRef)

  birthdays.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
getCollection()

const openBirthdayModal = (birthday = null) => {
  selectedBirthday.value = birthday
  showBirthdayModal.value = true
}

const refreshBirthdays = async () => {
  await getCollection()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="flex items-center justify-between bg-pink-700 p-4 text-white">
      <h2 class="text-2xl font-semibold">Faey Birthday Reminder</h2>
      <div>
        <button
          @click="showBirthdayModal = true"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-pink-100"
          aria-label="Add new birthday"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="h-8 w-8 fill-pink-700"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content Area -->
    <div class="mx-auto max-w-4xl py-2">
      <!-- Birthday Cards Grid -->
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Loop through birthdays and display them in cards -->
        <BirthdayCard
          v-for="birthday in birthdays"
          :key="birthday.name"
          :birthday="birthday"
          @click="openBirthdayModal(birthday)"
        />
      </div>
    </div>

    <!-- Birthday Modal -->
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <BirthdayModal
        :show="showBirthdayModal"
        :birthdayToEdit="selectedBirthday"
        @close="
          () => {
            showBirthdayModal = false
            selectedBirthday = null
          }
        "
        @refresh="refreshBirthdays"
      >
        <template #header>{{ selectedBirthday ? 'Edit Birthday' : 'New Birthday Entry' }}</template>
      </BirthdayModal>
    </Teleport>
  </div>
</template>

<style scoped></style>
