<script>
  import { slide } from 'svelte/transition'
  import Flex from './Flex.svelte'

  export let sticky = false
  export let uppercase = false
  export let background = 'white'
  export let color = '#001515'

  let mobile = false
  const showMobile = () => {
    mobile = !mobile
  }
</script>

<header class:sticky style="background:{background};color:{color};">
  <nav class="main">
    <a href="/"
      ><img class="logo" src="/logo.svg" alt="Fischer Imaging Logo" /></a
    >
    <ul class:uppercase>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/components">Components</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
  <nav class="mobile">
    <Flex justify="space-between" align="center">
      <a href="/"><img class="logo-mobile" src="/logo.svg" alt="Acme Logo" /></a
      >
      <div class="bun">
        <div on:click={showMobile} class="hamburger">&#9776;</div>
      </div>
    </Flex>
    {#if mobile}
      <ul class="mobile" class:uppercase transition:slide>
        <li>
          <a on:click={showMobile} href="/">Home</a>
        </li>
        <li><a on:click={showMobile} href="/about">About Us</a></li>
        <li>
          <a on:click={showMobile} href="/blog">Blog</a>
        </li>
        <li><a on:click={showMobile} href="/components">Components</a></li>
        <li>
          <a on:click={showMobile} href="/contact">Contact Us</a>
        </li>
      </ul>
    {/if}
  </nav>
</header>

<style>
  header {
    /* position: fixed; */
    width: 100%;
    padding: 3em 0;
    background: darkorange;
    color: #222;
    text-align: center;
  }
  .sticky {
    position: fixed;
    z-index: 100;
  }
  .logo {
    display: block;
    width: 300px;
    height: auto;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 1em;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
  nav ul li {
    list-style-type: none;
    padding: 0 1rem;
    font-weight: 600;
  }
  nav ul li:last-child {
    padding-right: 0;
  }
  nav ul li a {
    height: auto;
    color: #222;
    font-size: 1.2em;
    text-decoration: none;
  }
  nav ul li a:hover {
    padding-bottom: 1em;
    color: #02075d;
    border-bottom: 4px solid #02075d;
  }
  .uppercase {
    text-transform: uppercase;
  }
  ul.mobile {
    width: 100%;
    flex-direction: column;
    margin: 0;
    text-align: center;
  }
  nav div {
    display: flex;
    justify-content: space-between;
  }
  .logo-mobile {
    display: block;
    width: 120px;
  }
  ul.mobile li {
    padding: 1em 0;
  }
  .bun {
    align-items: center;
  }
  .hamburger {
    font-size: 3em;
    /* padding-right: 0.5em; */
  }
  .hamburger,
  nav.mobile {
    display: none;
  }
  @media screen and (max-width: 900px) {
    header {
      padding: 1em;
    }
    nav.main {
      display: none;
    }
    nav.mobile {
      display: block;
    }
    .hamburger {
      display: block;
    }
  }
</style>
