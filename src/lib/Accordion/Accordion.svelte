<script>
  import { continents } from './continentsData.js'
  import Continent from './Continent.svelte'
  import MapModal from './MapModal.svelte'

  let continentMap = ''
  let modalShowing = false

  const showMap = mapURL => {
    continentMap = mapURL
    modalShowing = true
  }
</script>

<main>
  {#if modalShowing}
    <MapModal mapurl={continentMap} on:click={() => (modalShowing = false)} />
  {/if}

  {#each continents as { heading, content, learnurl, mapurl }}
    <Continent
      {heading}
      {content}
      learnmore={learnurl}
      on:click={() => showMap(mapurl)}
    />
  {/each}
</main>

<style>
  main {
    max-width: 960px;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
