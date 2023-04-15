<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <main>
    <section name="chessboard" class="chessboard">
      <ChessBoard />
    </section>
    <section name="sidebar" class="sidebar">
      <SideBar />
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
}

.chessboard {
  flex: 1;
}

.sidebar {
  overflow: scroll;
  max-height: 5rem;
}

@media (min-width: 1024px) {
  main {
    display: grid;
    flex: 1;
    grid-template-columns: 5fr 1fr;
    height: 100%;
  }
  .sidebar {
    overflow: scroll;
    max-height: 100vh;
  }
}
</style>
