<script>
  import { tweened } from 'svelte/motion'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import Modal from './Modal.svelte'

  let modal = false

  const open = () => {
    amount.set(20, {
      duration: 400,
      easing: cubicIn,
    })
    toggle()
  }

  const close = () => {
    amount.set(0, {
      duration: 400,
      delay: 300,
      easing: cubicOut,
    })
    toggle()
  }

  const toggle = () => (modal = !modal)

  let amount = tweened(0)
</script>

{#if modal}
  <Modal on:close={close}>
    <!-- <Form on:close={close} /> -->
    <h3>Hi, I'm a modal.</h3>
  </Modal>
{/if}

<main style="filter: blur({$amount}px);">
  <h1>Modal</h1>
  <button on:click={open}> Show Modal </button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('https://source.unsplash.com/random/800x800/') no-repeat
      center/cover;
    margin: 0 -100%;
  }
  h1 {
    color: white;
    font-size: 3rem;
    text-shadow: 0 0 5px black;
  }
  button {
    background: darkorange;
    border: none;
    outline: none;
    padding: 1em 1.5em;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  }
</style>
