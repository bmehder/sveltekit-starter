<script>
  import { fly } from 'svelte/transition'

  export let image = 'https://picsum.photos/1000'

  let onLoad = false

  const doLoaded = () => (onLoad = true)
</script>

<section use:doLoaded>
  {#if onLoad}
    <img
      class="hero"
      src={image}
      alt="Hero"
      in:fly={{ delay: 500, duration: 300, x: -1000, y: 0, opacity: 0 }}
    />
    <div in:fly={{ delay: 500, duration: 300, x: 0, y: -500, opacity: 0 }}>
      <p in:fly={{ delay: 1000, duration: 600, x: -500, y: -500, opacity: 0 }}>
        Lorem ipsum dolor
      </p>

      <p in:fly={{ delay: 1200, duration: 600, x: 500, y: -500, opacity: 0 }}>
        Nesciunt quis
      </p>

      <p in:fly={{ delay: 1400, duration: 600, x: -500, y: 500, opacity: 0 }}>
        Pariatur nesciunt
      </p>

      <p in:fly={{ delay: 1600, duration: 600, x: 500, y: 500, opacity: 0 }}>
        Exercitationem animi
      </p>
    </div>
  {/if}
</section>

<style>
  section {
    position: relative;
    padding-top: 56.25%;
  }
  div {
    position: absolute;
    top: -5%;
    right: -5%;
    /* transform: translate(-50%, -50%); */
    padding: 3rem;
    background: rgba(250, 250, 250, 0.8);
    /* color: #0e345a; */
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 24px;
    transform: rotate(5deg);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14),
      -5px 0px 40px rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 0.75em;
    line-height: initial;
  }
  p:last-child {
    margin-bottom: 0;
  }
  img {
    display: block;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
  @media screen and (max-width: 640px) {
    section div {
      display: none;
    }
  }
</style>
