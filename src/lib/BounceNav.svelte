<script>
  import { slide, fade } from 'svelte/transition'
  import { bounceOut } from 'svelte/easing'

  let isNavOpen

  const toggleNav = () => (isNavOpen = !isNavOpen)
</script>

<svelte:head>
  <link rel="preload" as="image" href="https://source.unsplash.com/random" />
</svelte:head>

<svelte:window on:keydown={event => event.key === 'Escape' && toggleNav()} />

<div>
  {#if isNavOpen}
    <nav
      in:slide={{ delay: 100, duration: 1000, easing: bounceOut }}
      out:slide={{ duration: 500 }}
    >
      <a on:click={toggleNav} href="/"
        ><img class="logo" src="/logo.svg" alt="Fischer Imaging Logo" /></a
      >
      <span on:click={toggleNav}>&times;</span>

      <div>
        <a on:click={toggleNav} href="/">Home</a>
        <a on:click={toggleNav} href="/about">About Us</a>
        <a on:click={toggleNav} href="/blog">Blog</a>
        <a on:click={toggleNav} href="/components">Components</a>
        <a on:click={toggleNav} href="/contact">Contact Us</a>
      </div>
    </nav>
  {:else}
    <aside on:click={toggleNav} transition:fade>
      <a href="/"
        ><img class="logo" src="/logo.svg" alt="Fischer Imaging Logo" /></a
      >
      <span>&#9776;</span>
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
  }
  div div {
    width: 100%;
    position: relative;
    /* top: 25%; */
    margin-top: 30px;
    text-align: center;
  }
  a {
    display: block;
    padding: 0.5rem;
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 1em rgba(0, 0, 0, 1);
  }
  a:hover {
    color: gold;
  }
  div nav span {
    position: absolute;
    top: 0.25em;
    right: 0.25em;
    font-size: 4em;
    color: white;
    cursor: pointer;
  }
  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;
    /* background: #222; */
    color: white;
    /* text-align: right; */
    border: none;
    font-size: 2em;
    cursor: pointer;
  }
  img {
    padding-top: 20px;
  }
</style>
