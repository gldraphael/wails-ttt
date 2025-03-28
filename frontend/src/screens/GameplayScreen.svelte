<main>
  {#each gameState.board as tileState, i}
    <Tile tileState={tileState} index={i} />
  {/each}
</main>

<script>
  import { gameState } from "../state/GameState.svelte";
  import Tile from "../components/Tile.svelte";
</script>

<style>
  main {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>
