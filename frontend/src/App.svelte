<script lang="ts">
  import Tile from './Tile.svelte';
  import { gameState } from './GameState.svelte'
  
</script>

<div class="container">
  <main>
    {#each gameState.board as tileState, i}
      <Tile  tileState={tileState} index={i}  />
    {/each}
  </main>
</div>

<style>
  .container {
    height: 100vh;
    aspect-ratio: 1/1;

    display: flex;
    margin: auto;

    padding: 1rem;
    box-sizing: border-box;
  }
  main {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
