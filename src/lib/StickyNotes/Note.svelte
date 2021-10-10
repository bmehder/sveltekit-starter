<script>
  import { slide } from 'svelte/transition'
  export let content
</script>

<article>
  <span on:click>&minus;</span>
  <textarea bind:value={content} on:blur out:slide />
</article>

<style>
  article {
    display: inline-flex;
    position: relative;
  }
  textarea {
    height: 300px;
    width: 100%;
    padding: 1.5rem 2rem;
    resize: none;
    background-color: #ff8;
    border: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    font-family: inherit;
    font-size: 1.5rem;
    line-height: 1.5;
    transition: box-shadow 200ms;
  }
  textarea:focus {
    outline: none;
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  }
  span {
    position: absolute;
    top: -0.6em;
    right: -0.6em;
    width: 1.2em;
    height: 1.2em;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    font-weight: bold;
    background-color: #424242;
    color: white;
    cursor: pointer;
    transition: transform 200ms;
    border: 1px solid #424242;
    border-radius: 50%;
    z-index: 1;
  }
  span:hover {
    transform: scale(1.2);
  }
</style>
