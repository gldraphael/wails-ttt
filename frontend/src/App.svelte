<div class="container">
  {#if gameState.gameStatus == GameStatus.New}
    <MenuScreen />
  {:else if gameState.gameStatus == GameStatus.InGame}
    <GameplayScreen />
  {:else}
    <GameOverScreen />
  {/if}
</div>

<script lang="ts">
  import GameOverScreen from './screens/GameoverScreen.svelte';
  import GameplayScreen from './screens/GameplayScreen.svelte';  
  import MenuScreen from './screens/MenuScreen.svelte';
  import { gameState } from './state/GameState.svelte';
  import { GameStatus } from './state/GameStatus';
</script>

<style>
  .container {
    height: 100vh;
    aspect-ratio: 1/1;

    display: flex;
    margin: auto;

    padding: 1rem;
  }
</style>
