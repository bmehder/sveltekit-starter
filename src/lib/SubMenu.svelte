<script>
  export let items = []
</script>

<ul>
  {#each items as { href, linkText }}
    <li><a {href}>{linkText}</a></li>
  {/each}
</ul>

<style>
  ul {
    display: none;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1.5rem;
    background: #333;
    list-style: none;
    font-size: 1.1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.24);
    z-index: 1000;
  }
  li {
    margin-bottom: 1rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
  a {
    color: #eee;
    font-weight: normal;
    text-decoration: none;
  }
  a:hover {
    border-bottom: 2px solid;
  }
  @media screen and (max-width: 900px) {
    ul {
      display: inline-block;
      position: relative;
      top: 0;
      left: auto;
      transform: none;
    }
  }
</style>
