<script>
  import { testimonials } from './data.js'
  import { fly } from 'svelte/transition'

  export const speed = 3

  let testimonialNum = 0

  const goForward = () => {
    testimonialNum < testimonials.length - 1
      ? (testimonialNum += 1)
      : (testimonialNum = 0)
  }

  const goBack = () => {
    testimonialNum > 0
      ? (testimonialNum -= 1)
      : (testimonialNum = testimonials.length - 1)
  }
</script>

<!-- <svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head> -->

<aside>
  <i class="fa fa-angle-left fa-2x" on:click={goBack} />

  {#key testimonialNum}
    <blockquote in:fly={{ x: 400 }}>
      <p>"{testimonials[testimonialNum].text}"</p>
      <cite>
        <a href={testimonials[testimonialNum].url} target="_blank">
          <span>
            {#each Array(5) as item}
              <i class="fa fa-star" />
            {/each}
          </span>
        </a>
        <p>{testimonials[testimonialNum].name}</p>
      </cite>
    </blockquote>
  {/key}

  <i class="fa fa-angle-right fa-2x" on:click={goForward} />
</aside>

<style>
  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    min-height: 150px;
  }
  blockquote {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2em;
    line-height: 1.5;
    font-style: italic;
    text-align: justify;
  }
  cite {
    text-align: center;
  }
  span {
    display: flex;
    gap: 2px;
    min-width: 100px;
    padding-top: 0.5em;
  }
  p {
    margin: 0;
  }
  i {
    padding: 5px;
    background: #3fbbc0;
    color: white;
    border-radius: 4px;
  }
</style>
