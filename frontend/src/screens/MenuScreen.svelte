<main>
    <h1>Tic tac toe</h1>
    
    <div>
        <!-- svelte-ignore a11y_autofocus -->
        <button on:click={playGame} autofocus>Play!</button>
    </div>
    

</main>

<script lang="ts">
  import { gameState } from "../state/GameState.svelte";

    function playGame() {
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
