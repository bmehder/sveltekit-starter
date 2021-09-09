<script>
  export let left = 100
  export let top = 100

  let moving = false
  const handleMouseDown = () => (moving = true)
  const handleMouseUp = () => (moving = false)

  const handleMouseMove = e => {
    if (moving) {
      left += e.movementX
      top += e.movementY
    }
  }
</script>

<svelte:window on:mouseup={handleMouseUp} on:mousemove={handleMouseMove} />

<section on:mousedown={handleMouseDown} style="left:{left}px; top:{top}px">
  <slot />
</section>

<style>
  section {
    position: absolute;
    display: grid;
    place-items: center;
    width: 200px;
    height: 150px;
    user-select: none;
    cursor: move;
    padding: 0 1em;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.8) inset,
      10px 10px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    text-align: center;
    color: white;
  }
</style>
