<script>
  import { onMount } from 'svelte'

  // Change the date/time for the countdown
  export let end = 'April 1, 2021 5:00:00 GMT'
  export let title = ''
  export let click = ''

  let later = new Date(`${end}`).getTime()
  let days = 0
  let hours = 0
  let mins = 0
  let seconds = 0
  let isEnded = false

  let countdown
  onMount(() => {
    const interval = setInterval(() => {
      // Time calculation
      const now = new Date().getTime()
      const difference = later - now

      days = Math.floor(difference / (1000 * 60 * 60 * 24))
      hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((difference % (1000 * 60)) / 1000)

      // If the end date/time has passed...
      if (difference < 0) {
        clearInterval(interval)
        isEnded = true
        countdown.style.color = '#307ad5'
        countdown.innerHTML = 'The Sale Has Ended.'
      }
    }, 1000)
  })

  function handleClick() {
    window.location = click
  }
</script>

<main>
  {#if !isEnded}
    <h3>{title}</h3>
  {/if}
  <section on:click={handleClick} bind:this={countdown}>
    <div style="background-color: #10c45c;">
      {days}<span>{days === 1 ? 'Day' : 'Days'}</span>
    </div>
    <div style="background-color: #307ad5;">
      {hours}<span>{hours === 1 ? 'Hour' : 'Hours'}</span>
    </div>
    <div style="background-color: #fdc735;">
      {mins}<span>{mins === 1 ? 'Minute' : 'Minutes'}</span>
    </div>
    <div style="background-color: #d94da6;">
      {seconds}<span>{seconds === 1 ? 'Second' : 'Seconds'}</span>
    </div>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    margin: 0 0 0.5em 0;
    font-size: 2em;
    font-weight: 300;
    line-height: 1.5em;
    text-align: center;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  section {
    cursor: pointer;
    font-size: 24px;
    color: #f0ffff;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.24);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 10px;
    background-color: #fdc735;
    border-color: transparent;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.24);
    background-image: linear-gradient(
      to bottom right,
      transparent,
      rgba(0, 0, 0, 0.05)
    );
    animation: spin 1.2s ease-in-out;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
      box-shadow: none;
      opacity: 0;
    }
    100% {
      transform: rotate3d(1, 1, 1, 360deg);
      opacity: 1;
    }
  }
  span {
    display: block;
    font-size: 16px;
    padding-top: 5px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  span:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }

  @media (max-width: 480px) {
    section {
      flex-direction: column;
    }
  }
</style>
