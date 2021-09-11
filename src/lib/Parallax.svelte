<script>
  export let speed = 0.1

  let scrollY

  const parallax = element => {
    let y = window.innerHeight - element.getBoundingClientRect().top

    element.style.transform = 'translate3d(0, -' + speed * y + 'px ,0)'

    return {
      update(scrollY) {
        parallax(element, scrollY)
      },
    }
  }
</script>

<svelte:window bind:scrollY />

<div use:parallax={scrollY}>
  <slot />
</div>
