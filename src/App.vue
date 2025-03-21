<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import HelloWorld from '@/components/HelloWorld.vue'

const counter = useCounterStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <button
        @click="counter.increment()"
        class="rounded-full border-2 bg-green-500 p-2 font-serif text-lg font-extrabold text-black hover:bg-green-300 active:bg-green-700"
      >
        Count: {{ counter.count }} | Double: {{ counter.doubleCount }}
      </button>
      <HelloWorld />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
