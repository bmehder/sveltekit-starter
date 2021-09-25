<script>
  import { fly } from 'svelte/transition'
</script>

<section on:click />
<article
  in:fly={{ y: -1000, duration: 400, delay: 500 }}
  out:fly={{ y: 1000, duration: 400, delay: 0 }}
>
  <slot />
</article>

<style>
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  article {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 2rem;
    width: 50%;
    max-width: 300px;
    min-height: 200px;
    background: white;
    color: black;
    z-index: 100;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }
</style>
