<script>
  import { slide } from 'svelte/transition'

  export let heading
  export let content
  export let learnmore

  let isOpen
</script>

<button
  class:active={isOpen}
  class="accordion"
  on:click={() => (isOpen = !isOpen)}
>
  <span class="heading">{heading}</span>
  {#if isOpen}
    <span class="icon">&minus;</span>
  {:else}
    <span class="icon">&plus;</span>
  {/if}
</button>

{#key isOpen}
  <section class:open-panel={isOpen} class="panel" transition:slide>
    <p>{content}</p>

    <div>
      <button on:click>MAP</button>
      <a href={learnmore} target="_blank">
        <button>LEARN MORE</button>
      </a>
    </div>
  </section>
{/key}

<style>
  button.accordion {
    width: 100%;
    padding: 15px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(#e1e2e4, #f1f1f1);
    text-align: left;
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s;
  }

  button.accordion:hover,
  button.accordion.active {
    background: #307ad5;
    color: white;
  }

  .heading {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
    padding: 20px 40px;
    margin: auto 0;
  }
  span.icon {
    font-size: 1.8rem;
  }

  section.panel {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    height: 0px;
    overflow: auto;
    transition: all 0.5s;
  }

  section.open-panel {
    height: auto;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  section.open-panel div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  section div button {
    width: 150px;
    font-weight: bold;
    color: white;
    background-color: #307ad5;
    border: none;
    border-radius: 25px;
    padding: 10px 0;
    margin: 10px 10px 20px;
    cursor: pointer;
  }

  div button:active {
    background-color: hsl(11, 63%, 34%);
  }
</style>
