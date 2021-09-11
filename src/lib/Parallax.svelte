<script>
  import { onMount } from 'svelte'

  export let speed = 0

  let parallaxElement
  onMount(() => {
    const parallax = element => {
      let y = window.innerHeight - element.getBoundingClientRect().top
      if (y > 0) {
        element.style.transform = 'translate3d(0, -' + speed * y + 'px ,0)'
      }
    }

    parallax(parallaxElement)

    window.onscroll = () => parallax(parallaxElement)
  })
</script>

<div bind:this={parallaxElement}>
  <slot />
</div>
