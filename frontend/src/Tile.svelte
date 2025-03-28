<a role="button" class="tile" {tabindex} on:click={click}>
    {tileState}
</a>

<script lang="ts">
  import { TileState } from "./TileState";
  import { gameState } from "./GameState.svelte";

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
        
        outline: 2px dashed lightcoral;

        cursor: pointer;
    }

    .tile:hover, .tile:focus {
        background-color: oklch(from var(--color) l c h / 0.1 );
    }

    .tile:active {
        background-color: oklch(from var(--color) l c h / 0.2 );
    }
    
</style>
