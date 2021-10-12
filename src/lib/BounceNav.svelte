<script>
  import { slide, fade } from 'svelte/transition'
  import { bounceOut } from 'svelte/easing'
  import SubMenu from '$lib/SubMenu.svelte'

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
          ><img class="logo" src="/logo.svg" alt="Acme Logo" /></a
        >
        <span on:click|self={toggleNav}>&times;</span>
      </div>
      <div>
        <ul>
          <li on:click={toggleNav}><a href="/">Home</a></li>
          <li on:click={toggleNav}>
            <a href="/about">About</a>
            <SubMenu
              items={[{ href: '/about/subpage', linkText: 'Subpage' }]}
            />
          </li>
          <li on:click={toggleNav}><a href="/blog">Blog</a></li>
          <li on:click={toggleNav}><a href="/components">Components</a></li>
          <!-- <a href="/contact">Contact Us</a> -->
          <li on:click={toggleNav}><a href="/login">Login</a></li>
          <li on:click={toggleNav}><a href="/profile">Profile</a></li>
        </ul>
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
    padding: 1em 2em;
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
    color: black;
    text-shadow: 1px 1px 1em rgba(255, 255, 255, 0.5);
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
