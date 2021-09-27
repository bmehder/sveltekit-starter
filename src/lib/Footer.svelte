<script>
  import { fly } from 'svelte/transition'

  export let background = 'rgba(82, 98, 125, 0.8)'
  export let color = 'white'
  export let height = ''

  const year = new Date().getFullYear()

  let y
  let isShowBackToTop = false

  $: y > 500 ? (isShowBackToTop = true) : (isShowBackToTop = false)

  const scrollToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
</script>

<svelte:window bind:scrollY={y} />

<footer style="height:{height};background:{background};color:{color};">
  <div>
    <p>
      © {year}
      <slot />. All rights reserved.
    </p>
    {#if isShowBackToTop}
      <i
        on:click={scrollToTop}
        class="fa fa-arrow-up"
        aria-hidden="true"
        in:fly={{ x: 32, opacity: 1 }}
        out:fly={{ x: 32, opacity: 0 }}
      />
    {/if}
  </div>
</footer>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 960px;
    margin: auto;
    padding: 2em;
  }
  p {
    margin-bottom: 0;
  }
  i {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 0;
    width: 52px;
    height: 52px;
    background-color: #323232;
    color: white;
    line-height: 52px;
    text-align: center;
    border: 1px solid #525252;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }
</style>
