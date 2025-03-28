<button class="tile" {tabindex} onclick={click}>
    {tileState}
</button>

<script lang="ts">
  import { TileState } from "../state/TileState";
  import { gameState } from "../state/GameState.svelte";

  interface TileProps {
    tileState: TileState
    index: number
  }

  const { tileState, index }: TileProps = $props()
  
  const tabindex = $derived(tileState == TileState.Empty ? 0 : -1)

  function click() {
    gameState.updateTile(index)
  }
</script>

<style>

    .tile {
        display: flex;
        align-items: center;
        justify-content: center;

        aspect-ratio: 1/1;
        height: 100%;
    }
    
</style>
