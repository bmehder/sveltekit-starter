<script>
  import { fade, fly } from 'svelte/transition'
  import { images } from './imageData.js'
  import Slide from './Slide.svelte'
  import Caption from './Caption.svelte'
  import Thumbnail from './Thumbnail.svelte'

  /* IMAGE TO SHOW */
  let imageShowingIndex = 0
  $: image = images[imageShowingIndex]
  $: console.log(imageShowingIndex)

  const nextSlide = () => {
    if (imageShowingIndex === images.length - 1) {
      imageShowingIndex = 0
    } else {
      imageShowingIndex += 1
    }
  }

  const prevSlide = () => {
    if (imageShowingIndex === 0) {
      imageShowingIndex = images.length - 1
    } else {
      imageShowingIndex -= 1
    }
  }

  const goToSlide = number => (imageShowingIndex = number)
</script>

<section in:fly={{ duration: 600, x: 1000, y: 0, opacity: 0.5 }}>
  <main>
    <!-- image gallery -->
    <div class="container">
      <Slide
        image={image.imgurl}
        altTag={image.name}
        attr={image.attribution}
        slideNo={image.id + 1}
        totalSlides={images.length}
      />
    </div>

    <!-- Image text -->
    <Caption
      caption={image.name}
      on:prevClick={prevSlide}
      on:nextClick={nextSlide}
    />

    <!-- Thumbnail images -->
    <div class="thumbnails-row">
      {#each images as { id, imgurl, name }}
        <Thumbnail
          thumbImg={imgurl}
          altTag={name}
          {id}
          selected={imageShowingIndex === id}
          on:click={() => goToSlide(id)}
        />
      {/each}
    </div>
  </main>
</section>

<style>
  main {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    background-color: #222;
    font-family: 'Josefin Sans', sans-serif;
    box-shadow: 0 20px 34px rgba(0, 0, 0, 0.24);
  }
  section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #001;
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.5) 15%,
        transparent 16%
      ),
      radial-gradient(rgba(255, 255, 255, 0.5) 15%, transparent 16%);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px; */
  }
  section * {
    z-index: 2;
  }
  section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* z-index: -1; */
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.1), dodgerblue); */
    opacity: 0.25;
  }

  .container {
    position: relative;
  }

  .thumbnails-row {
    width: 100%;
    display: flex;
    align-self: flex-end;
  }
</style>
