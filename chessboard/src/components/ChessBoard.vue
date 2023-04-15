<script setup lang="ts">
import SquareSpace from './SquareSpace.vue'
import { useChessBoardStore } from '../stores/chessboard'

const { positions } = useChessBoardStore()
</script>

<template>
  <div class="board">
    <div class="row" :key="index" v-for="(col, index) in positions">
      <SquareSpace :key="val" v-for="val in col" :pos="val"></SquareSpace>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.row {
  display: flex;
  flex: 1;
}
</style>
