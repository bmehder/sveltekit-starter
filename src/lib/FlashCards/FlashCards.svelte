<script>
  import { fade, fly } from 'svelte/transition'
  import { data } from './data'

  export let frontBgColor = '#307ad5'
  export let backBgColor = '#fdc735'
  export let backColor = 'black'

  let index = 0
  let isFlippedOver = false
  let xOffset = 300

  const flipCard = () => (isFlippedOver = !isFlippedOver)

  const goToPrevCard = () => {
    xOffset = -300
    isFlippedOver = false
    if (index === 0) {
      index = data.length - 1
      return
    }
    index -= 1
  }

  const goToNextCard = () => {
    xOffset = 300
    isFlippedOver = false
    if (index === data.length - 1) {
      index = 0
      return
    }
    index += 1
  }
</script>

<article>
  <main>
    <div class="inner" class:flipped={isFlippedOver}>
      {#key index}
        <div
          style="background:{frontBgColor};"
          class="front"
          in:fly={{ x: -xOffset, delay: 400 }}
          out:fly={{ x: xOffset }}
        >
          <img src={data[index].image} alt="answer" />
        </div>
        <div
          style="background:{backBgColor};color:{backColor};"
          class="back"
          in:fade={{ duration: 2000 }}
        >
          <h2>{data[index].word}</h2>
        </div>
      {/key}
    </div>
  </main>

  <footer>
    <button on:click={goToPrevCard}>
      <i class="fas fa-chevron-left" />
    </button>

    <button on:click={flipCard}> Flip Card </button>

    <button on:click={goToNextCard}>
      <i class="fas fa-chevron-right" />
    </button>
  </footer>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    padding: 1em;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }
  :global(.flipped) {
    transform: rotateY(180deg);
  }
  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    backface-visibility: hidden;
  }
  .back {
    display: grid;
    place-items: center;
    transform: rotateY(180deg);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  footer {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    margin-top: 1em;
  }
  button {
    padding: 0.5em 1em;
    background: black;
    color: white;
    outline: none;
    cursor: pointer;
  }
</style>
