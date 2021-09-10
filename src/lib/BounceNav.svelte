<script>
  import { slide, fade } from 'svelte/transition'
  import { bounceOut } from 'svelte/easing'

  let isNavOpen
  const toggleNav = () => (isNavOpen = !isNavOpen)
</script>

<svelte:window on:keydown={event => event.key === 'Escape' && toggleNav()} />

<div>
  {#if isNavOpen}
    <nav
      in:slide={{ delay: 100, duration: 1000, easing: bounceOut }}
      out:slide={{ duration: 500 }}
    >
      <span on:click={toggleNav}>&times;</span>
      <div>
        <a href=".">About</a>
        <a href=".">Services</a>
        <a href=".">Clients</a>
        <a href=".">Contact</a>
      </div>
    </nav>
  {:else}
    <aside on:click={toggleNav} transition:fade>&#9776;</aside>
  {/if}
</div>

<style>
  div {
    position: relative;
  }
  nav {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: url('https://source.unsplash.com/random') no-repeat center
      center/cover;
    backdrop-filter: blur(1em);
    overflow-x: hidden;
    z-index: 9999;
  }
  div div {
    width: 100%;
    position: relative;
    top: 25%;
    margin-top: 30px;
    text-align: center;
  }
  a {
    display: block;
    padding: 0.5rem;
    font-size: 3em;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 1em rgba(0, 0, 0, 1);
  }
  a:hover {
    color: gold;
  }
  span {
    position: absolute;
    top: 0;
    right: 0.25em;
    font-size: 4em;
    color: white;
    cursor: pointer;
  }
  aside {
    padding: 0.5em 0.75em;
    background: #222;
    color: white;
    text-align: right;
    border: none;
    font-size: 2em;
    cursor: pointer;
  }
</style>
