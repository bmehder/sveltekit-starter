<script>
  export let speed = 0.16

  let scrollY

  const doParallax = (element, scrollY) => {
    let y = window.innerHeight - element.getBoundingClientRect().top

    element.style.transform = `translateY(${speed * (y * 1.5)}px)`

    return {
      update(scrollY) {
        doParallax(element)
      },
    }
  }
</script>

<svelte:window bind:scrollY />

<div use:doParallax={scrollY}>
  <slot />
</div>
