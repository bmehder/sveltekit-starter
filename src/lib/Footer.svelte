<script>
  import { scrollToTop } from './utils'

  export let background = 'rgba(82, 98, 125, 0.8)'
  export let color = 'white'
  export let height = ''

  const date = new Date().getFullYear()
</script>

<footer style="height:{height};background:{background};color:{color};">
  <div>
    <slot />
    <p on:click={scrollToTop}>
      Back to Top <i class="fa fa-arrow-up" aria-hidden="true" />
    </p>
  </div>
</footer>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: auto;
    padding: 2em;
  }
  i {
    width: 25px;
    height: 25px;
    margin-left: 0.5em;
    background-color: white;
    color: black;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    animation: pulse 2s ease infinite alternate;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.25);
    }
  }
</style>
