<script>
  import Accordion from '$lib/Accordion/Accordion.svelte'
  import Audio from '$lib/Audio.svelte'
  import Fetcher from '$lib/Fetcher.svelte'
  import Gooey from '$lib/Gooey.svelte'
  import Hoverton from '$lib/Hoverton.svelte'
  import Isometric from '$lib/Isometric.svelte'
  import Neumorphism from '$lib/Neumorphism.svelte'
  import Timeline from '$lib/Timeline/App.svelte'
  import Typewriter from '$lib/Typewriter.svelte'
  import Video from '$lib/Video.svelte'
  import Section from '$lib/Section.svelte'
</script>

<Section
  padding="4rem 2rem"
  background="black"
  title="Svelte Components"
  titleColor="white"
>
  <h3>More coming soon...</h3>
</Section>

<Section padding="4rem 2rem" title="Accordion">
  <div id="#Accordion">
    <Accordion />
  </div>
</Section>

<Section
  padding="4rem 2rem"
  title="Audio Player"
  background="black"
  titleColor="white"
>
  <Audio />
</Section>

<Section padding="4rem 0" title="Client-Side Fetcher">
  <Fetcher />
</Section>

<Section
  height="50vh"
  padding="4rem 0"
  title="Gooey SVG Spinner"
  background="black"
  titleColor="white"
>
  <Gooey />
</Section>

<Section padding="4rem 0" title="Hover Button">
  <Hoverton />
</Section>

<Section
  padding="4rem 0"
  title="Isometric Text"
  background="black"
  titleColor="white"
>
  <Isometric />
</Section>

<Section padding="4rem 0 6rem" title="Neumorphism">
  <Neumorphism />
</Section>

<Section
  padding="4rem 0 6rem"
  title="Timeline"
  background="black"
  titleColor="white"
>
  <Timeline />
</Section>

<Section padding="4rem 0" title="Typewriter">
  <Typewriter />
</Section>

<Section
  padding="4rem 0 6rem"
  title="Video Player"
  background="black"
  titleColor="white"
>
  <Video />
</Section>

<style>
  h3 {
    color: white;
    text-align: center;
    font-style: italic;
  }
</style>
