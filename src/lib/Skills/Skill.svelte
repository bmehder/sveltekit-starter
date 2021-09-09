<script>
  import { fade } from 'svelte/transition'
  import { tweened } from 'svelte/motion'

  export let skill
  export let percent
  export let color
  export let delay
  export let duration
  export let easing

  const progress = tweened(0, { delay, duration, easing })

  progress.set(percent)
</script>

<article>
  <span>{skill}</span>
  <div
    style="width:{$progress}%;
							background-color: {color};
							opacity:{parseInt($progress)};"
  >
    {parseInt($progress)}%
  </div>
</article>

<style>
  article {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    background-color: rgba(2, 48, 71, 0.14);
    font-weight: bold;
    overflow: hidden;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.24),
      1px 1px 2px rgba(0, 0, 0, 0.24) inset;
    border-radius: 50px;
  }
  span {
    position: absolute;
    top: 1em;
    left: 16px;
    padding: 0.5em 1.5em;
    background: #f5f5f5;
    color: #023047;
    font-weight: 500;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  }
  div {
    box-sizing: border-box;
    text-align: right;
    padding: 1.5em 2em 1.5em 0;
    color: white;
    border-radius: 50px;
    box-shadow: -4px 0px 4px rgba(200, 200, 200, 0.24) inset,
      0px 4px 4px rgba(255, 255, 255, 0.4) inset;
  }
</style>
