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

<header>
  <p>Packing a lot of information into a small space</p>
</header>

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

<footer>
  <p>
    Information and images from
    <a href="https://en.wikipedia.org/wiki/Main_Page">wikipedia</a>
  </p>
</footer>

<style>
  header {
    width: 100%;
    text-align: center;
    color: #333;
  }

  main {
    max-width: 960px;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  footer {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
</style>
