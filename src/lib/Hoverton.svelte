<script>
  import { fly } from "svelte/transition";
</script>

<section in:fly={{ duration: 600, x: 1000, y: 0, opacity: 0.5 }}>
  <!-- <h3>Hoverton</h3> -->
  <button class="button" on:click|preventDefault>
    Continue
    <span />
  </button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button {
    border: none;
    display: block;
    position: relative;
    padding: 0.5em 2.2em;
    font-size: 25px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    color: darkorange;
    overflow: hidden;
  }

  .button:hover,
  .button:focus {
    color: white;
  }

  .button span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 5px solid darkorange;
  }

  .button span::before {
    content: "";
    position: absolute;
    width: 8%;
    height: 500%;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.6s;
  }

  .button:hover span::before,
  .button:focus span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: darkorange;
    transition: all 0.6s;
  }
</style>
