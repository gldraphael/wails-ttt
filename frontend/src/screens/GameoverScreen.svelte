<main>
    <h1>
        {#if gameState.gameStatus == GameStatus.XWins}
            X wins!
        {:else if gameState.gameStatus == GameStatus.OWins}
            0 wins!
        {:else if gameState.gameStatus == GameStatus.Draw }
            Draw!
        {:else}
            Game over!
        {/if}
    </h1>
    <div>
        <button on:click={playAgain}>Play again!</button>
    </div>
</main>

<script lang="ts">
  import { GameStatus } from "../state/GameStatus";
  import { gameState } from "../state/GameState.svelte";

  function playAgain() {
        gameState.startGame()
    }
</script>

<style>
    main {
        display: flex;
        flex-direction: column;

        justify-content: center;
        margin: auto;
    }
</style>
