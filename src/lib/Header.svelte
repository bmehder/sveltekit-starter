<script>
  import BounceNav from '$lib/BounceNav.svelte'

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
      <li><a href="/login">Login</a></li>
      <li><a href="/profile">Profile</a></li>
    </ul>
  </nav>
  <span class="mobile">
    <BounceNav />
  </span>
</header>

<style>
  header {
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
    max-width: 1140px;
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
  .mobile {
    display: none;
  }
  @media screen and (max-width: 900px) {
    header {
      padding: 0;
    }
    nav.main {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
</style>
