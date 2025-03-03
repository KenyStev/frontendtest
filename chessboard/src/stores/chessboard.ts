import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse()
const rows = ['1', '2', '3', '4', '5', '6', '7', '8']

export const useChessBoardStore = defineStore('chessboard', () => {
  const positions = computed(() => rows.map((row) => cols.map((col) => `${col}${row}`)))
  const clicked = ref([] as string[])
  const hasBeenClicked = (value: string) => clicked.value.includes(value)
  const onClick = (value: string) => !hasBeenClicked(value) && clicked.value.push(value)

  return { positions, hasBeenClicked, onClick, clicked }
})
