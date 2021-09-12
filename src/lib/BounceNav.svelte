<script>
  import { slide, fade } from 'svelte/transition'
  import { bounceOut } from 'svelte/easing'

  let isNavOpen

  const toggleNav = () => (isNavOpen = !isNavOpen)
</script>

<svelte:head>
  <link rel="preload" as="image" href="https://source.unsplash.com/random" />
  <link rel="preload" as="image" href="/logo.svg" />
</svelte:head>

<svelte:window on:keydown={event => event.key === 'Escape' && toggleNav()} />

<div>
  {#if isNavOpen}
    <nav
      in:slide={{ delay: 100, duration: 1000, easing: bounceOut }}
      out:slide={{ duration: 500 }}
    >
      <div>
        <a on:click|self={toggleNav} href="/"
          ><img class="logo" src="/logo.svg" alt="Fischer Imaging Logo" /></a
        >
        <span on:click|self={toggleNav}>&times;</span>
      </div>
      <div>
        <a on:click={toggleNav} href="/">Home</a>
        <a on:click={toggleNav} href="/about">About Us</a>
        <a on:click={toggleNav} href="/blog">Blog</a>
        <a on:click={toggleNav} href="/components">Components</a>
        <a on:click={toggleNav} href="/contact">Contact Us</a>
      </div>
    </nav>
  {:else}
    <aside transition:fade>
      <a href="/"
        ><img class="logo" src="/logo.svg" alt="Fischer Imaging Logo" /></a
      >
      <span on:click|self={toggleNav}>&#9776;</span>
    </aside>
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
    display: flex;
    flex-direction: column;
  }
  nav div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 3em;
  }
  nav div a {
    line-height: 1.5em;
  }
  div div {
    width: 100%;
    position: relative;
    text-align: center;
  }
  a {
    display: block;
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 1em rgba(0, 0, 0, 0.5);
  }
  a:hover {
    color: darkorange;
  }
  div nav span {
    font-size: 4em;
    color: white;
    cursor: pointer;
  }
  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    color: white;
    border: none;
    font-size: 2em;
    cursor: pointer;
  }
  aside a {
    display: grid;
    place-items: center;
  }
  img {
    vertical-align: middle;
  }
</style>
