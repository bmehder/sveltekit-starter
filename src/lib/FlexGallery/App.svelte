<script>
  import { panelData } from './data'
  import Panel from './Panel.svelte'

  function toggleOpen() {
    this.classList.add('open')
    document.querySelectorAll('div').forEach(panel => {
      if (panel !== this) {
        panel.classList.remove('open')
      }
    })
  }

  function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active')
    }
  }
</script>

<main>
  {#each panelData as data}
    <Panel {data} on:click={toggleOpen} on:transitionend={toggleActive} />
  {/each}
</main>

<style>
  main {
    display: flex;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
  }
</style>
