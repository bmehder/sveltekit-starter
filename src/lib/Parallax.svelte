<script>
  export let speed = 0.16

  let scrollY

  const doParallaxAction = element => {
    let y = window.innerHeight - element.getBoundingClientRect().top

    element.style.transform = `translateY(${speed * (y * 1.5)}px)`

    return {
      update(newScrollY) {
        doParallaxAction(element)
      },
    }
  }
</script>

<svelte:window bind:scrollY />

<div use:doParallaxAction={scrollY}>
  <slot />
</div>
