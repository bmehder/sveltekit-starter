<script>
  let popUpElem

  const openPopUp = () => popUpElem.classList.add('open')
  const closePopUp = () => popUpElem.classList.remove('open')

  const handleKeydown = event => event.code === 'Escape' && closePopUp()
</script>

<svelte:window on:keydown={handleKeydown} />

<section>
  <h1>HERE IS SOME CONTENT</h1>
  <button on:click={openPopUp}>Click me</button>
</section>

<div class="popUp body360 body360--center" bind:this={popUpElem}>
  <div class="popUp-closer" on:click={() => closePopUp()}>
    <div class="popUp-closer-barre" />
    <div class="popUp-closer-barre" />
    <div class="popUp-closer-barre" />
    <div class="popUp-closer-barre" />
  </div>
  <div class="body360-content">
    <div class="body360-title">HERE IS A POPUP</div>
  </div>
</div>

<style>
  :global(.popUp) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(5px);
    z-index: 50;
    background-color: #00000099;
    background-size: cover, 100% 125%, cover;
    background-position: center 200%;
    background-repeat: no-repeat;
    opacity: 0;
    pointer-events: none;
    transition: 0.1s 0.6s;
  }
  :global(.popUp *) {
    pointer-events: none;
  }
  :global(.popUp-closer) {
    position: fixed;
    top: 0em;
    right: 0em;
    height: 314vw;
    min-height: 314vh;
    width: 314vw;
    min-width: 314vh;
    z-index: 50;
    background-color: #dbb098;
    cursor: pointer;
    pointer-events: none;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: translate(50%, -50%);
    transition: width 0.3s 0.25s ease-out, height 0.3s 0.25s ease-out,
      min-width 0.3s 0.25s ease-out, min-height 0.3s 0.25s ease-out,
      top 0.3s 0s cubic-bezier(0.15, 2, 0.9, 1.5),
      right 0.3s 0s cubic-bezier(0.15, 2, 0.9, 1.5),
      transform 0.3s 0s cubic-bezier(0.15, 2, 0.9, 1.5);
  }
  :global(.popUp-closer-barre) {
    opacity: 0;
  }
  :global(.popUp.open) {
    transition: 0.1s 0s;
    opacity: 1;
    pointer-events: all;
  }
  :global(.popUp.open *) {
    pointer-events: all;
  }
  :global(.popUp.open .popUp-closer) {
    transition: width 0.3s 0.1s ease-out, height 0.3s 0.1s ease-out,
      min-width 0.3s 0.1s ease-out, min-height 0.3s 0.1s ease-out,
      top 0.3s 0.35s cubic-bezier(0.1, -1, 0.85, -0.5),
      right 0.3s 0.35s cubic-bezier(0.1, -0.5, 0.85, -0.5),
      transform 0.3s 0.35s cubic-bezier(0.1, -0.5, 0.85, -0.5);
    transform: translate(0%, 0%);
    position: fixed;
    top: 1em;
    right: 1em;
    height: 3em;
    width: 3em;
    min-height: 3em;
    min-width: 3em;
    background-color: #dbb098;
    cursor: pointer;
  }
  :global(.popUp.open .popUp-closer-barre) {
    opacity: 1;
    background-color: #fff;
    display: block;
    width: 1em;
    height: 4px;
    border-radius: 4px;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    transform-origin: 0% 50%;
    transition: opacity 0.4s 0.4s;
  }
  :global(.popUp.open .popUp-closer-barre:nth-of-type(1)) {
    transform: rotate(135deg) translate(0, 0);
  }
  :global(.popUp.open .popUp-closer-barre:nth-of-type(2)) {
    transform: rotate(225deg) translate(0, 0);
  }
  :global(.popUp.open .popUp-closer-barre:nth-of-type(3)) {
    transform: rotate(315deg) translate(0, 0);
  }
  :global(.popUp.open .popUp-closer-barre:nth-of-type(4)) {
    transform: rotate(405deg) translate(0, 0);
  }
  :global(.popUp.open .popUp-closer:hover) {
    animation: popUpCloserAnim 0.5s linear 0s 1 normal forwards;
  }
  :global(.popUp.open .popUp-closer:hover .popUp-closer-barre:nth-of-type(1)) {
    animation: popUpCloserBarreAnim1 0.5s linear 0s 1 normal forwards;
  }
  :global(.popUp.open .popUp-closer:hover .popUp-closer-barre:nth-of-type(2)) {
    animation: popUpCloserBarreAnim2 0.5s linear 0s 1 normal forwards;
  }
  .popUp.open .popUp-closer:hover .popUp-closer-barre:nth-of-type(3) {
    animation: popUpCloserBarreAnim3 0.5s linear 0s 1 normal forwards;
  }
  .popUp.open .popUp-closer:hover .popUp-closer-barre:nth-of-type(4) {
    animation: popUpCloserBarreAnim4 0.5s linear 0s 1 normal forwards;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-allign: center;
    background-size: cover;
    background-position: center;
    background-image: url(https://images.unsplash.com/photo-1618935262538-2c8f334afca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80);
    color: #fff;
  }
  section h1 {
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
  }
  section button {
    font-weight: 700;
    width: 7em;
    background: #000000;
    color: #fff;
    font-size: 2rem;
    border: solid thick #fff;
    padding: 0.5em;
    margin: 1em;
    box-shadow: 0em 0em inset #fff, 0em 0em inset #fff;
    transition: 0.3s;
    mix-blend-mode: screen;
  }
  section button:hover {
    color: #000;
    box-shadow: 3.5em 0em inset #fff, -3.5em 0em inset #fff;
  }

  @keyframes popUpCloserAnim {
    0% {
      border-bottom-left-radius: 50%;
    }
    20% {
      border-bottom-left-radius: 0%;
      border-top-left-radius: 50%;
    }
    40% {
      border-bottom-left-radius: 50%;
      border-top-left-radius: 0%;
      border-top-right-radius: 50%;
    }
    60% {
      border-top-left-radius: 50%;
      border-top-right-radius: 0%;
      border-bottom-right-radius: 50%;
    }
    80% {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 0%;
    }
    100% {
      border-bottom-right-radius: 50%;
    }
  }
  @keyframes popUpCloserBarreAnim1 {
    0% {
      transform: rotate(135deg) translate(0em, 0);
    }
    20% {
      transform: rotate(135deg) translate(0.5em, 0);
    }
    40% {
      transform: rotate(135deg) translate(0em, 0);
    }
  }
  @keyframes popUpCloserBarreAnim2 {
    20% {
      transform: rotate(225deg) translate(0em, 0);
    }
    40% {
      transform: rotate(225deg) translate(0.5em, 0);
    }
    60% {
      transform: rotate(225deg) translate(0em, 0);
    }
  }
  @keyframes popUpCloserBarreAnim3 {
    40% {
      transform: rotate(315deg) translate(0em, 0);
    }
    60% {
      transform: rotate(315deg) translate(0.5em, 0);
    }
    80% {
      transform: rotate(315deg) translate(0em, 0);
    }
  }
  @keyframes popUpCloserBarreAnim4 {
    60% {
      transform: rotate(405deg) translate(0em, 0);
    }
    80% {
      transform: rotate(405deg) translate(0.5em, 0);
    }
    100% {
      transform: rotate(405deg) translate(0em, 0);
    }
  }
  .body360 {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
  }
  .body360--center .body360-content {
    right: 50%;
    transform: translate(50%, 0);
  }
  .body360-content {
    color: #c1c1c1;
    position: absolute;
    top: 2em;
    right: 2em;
    background-color: #fff;
    width: 540px;
    width: calc(100% - 4em);
    border-radius: 1em;
    height: calc(100% - 4em);
    overflow-y: scroll;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Track */
    /* Handle */
  }
  .body360-content::-webkit-scrollbar {
    width: 1em;
  }
  .body360-content::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.5em;
  }
  .body360-content::-webkit-scrollbar-thumb {
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-top-left-radius: 0.15em;
    border-bottom-left-radius: 0.15em;
    background: #c1c1c1;
  }
  .body360-content::-webkit-scrollbar-thumb:hover {
    background: #dbb098;
  }
  .body360-title {
    font-family: oswald;
    font-weight: 700;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    font-size: 4rem;
    color: #c09373;
  }
  :global(.body360 a) {
    font-weight: normal;
  }

  @media only screen and (min-width: 1024px) {
    .body360-content {
      color: #c1c1c1;
      position: absolute;
      top: 2em;
      right: 4em;
      background-color: #fff;
      width: 540px;
      max-width: calc(100% - 8em);
      border-radius: 1em;
      height: calc(100% - 4em);
      overflow-y: scroll;
      text-align: center;
    }
  }
</style>
