<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: Arial, Helvetica, sans-serif;
  }

  :global(#svelte) {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  :global(a) {
    color: darkorange;
  }

  :global(h1, h2, h3) {
    font-size: 3rem;
    line-height: 1.5em;
    margin: 0.25em 0;
  }

  :global(h1) {
    font-size: 3rem;
  }

  :global(h2) {
    font-size: 2.5rem;
  }

  :global(h3) {
    font-size: 1.5rem;
  }

  :global(p) {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.5em;
  }

  :global(.flex p) {
    margin-bottom: 0;
  }

  :global(.flex) {
    display: flex;
    gap: 4em;
  }

  @media (max-width: 900px) {
    :global(.flex) {
      flex-direction: column;
      gap: 2em;
    }

    :global(p) {
      font-size: 1.25rem;
      line-height: 1.5em;
    }
  }
</style>
