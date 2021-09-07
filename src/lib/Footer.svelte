<script>
  import Grid from './Grid.svelte'
  export let background = 'rgba(82, 98, 125, 0.8)'
  export let color = 'white'
  export let height = ''

  const date = new Date().getFullYear()

  const scrollToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
</script>

<footer style="height:{height};background:{background};color:{color};">
  <div>
    <slot />
  </div>
</footer>

<style>
  footer {
    width: 100%;
    margin: auto;
    /* padding: 1.5rem; */
    color: white;
    text-align: center;
  }
  div {
    max-width: 960px;
    margin: 2em auto;
  }
</style>
