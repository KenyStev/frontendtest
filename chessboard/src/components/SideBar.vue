<script setup lang="ts">
import MoveDisplayer from './MoveDisplayer.vue'
import { useChessBoardStore } from '../stores/chessboard'

const { clicked } = useChessBoardStore()
</script>

<template>
  <section class="sidebar">
    <MoveDisplayer :key="item" v-for="item in clicked" :move="item"></MoveDisplayer>
  </section>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
