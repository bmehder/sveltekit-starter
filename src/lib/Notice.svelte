<script>
  import { fade } from 'svelte/transition'

  export let padding = '1em 2em'
  export let background = 'dodgerblue'
  export let fontSize = '1em'
  export let color = 'white'
  export let borderRadius = null
  export let boxShadow = ''

  let isVisible = true
  const hide = () => (isVisible = false)
</script>

{#if isVisible}
  <div
    transition:fade
    style="padding:{padding};
          background:{background};
          color:{color};
          font-size:{fontSize} !important;
          border-radius:{borderRadius};
          box-shadow:{boxShadow};"
  >
    <p>
      <slot />
    </p>
    <span on:click={hide} style="color:{color}">&times;</span>
  </div>
{/if}

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    margin: 2em;
    line-height: 1.5em;
  }
  p {
    margin-bottom: 0;
  }
  p > * {
    display: block;
  }
  span {
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  span:hover {
    transform: scale(2);
  }
</style>
