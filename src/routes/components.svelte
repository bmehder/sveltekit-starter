<script>
  import Accordion from '$lib/Accordion/Accordion.svelte'
  import Audio from '$lib/Audio.svelte'
  import Countdown from '$lib/Countdown.svelte'
  import Dragable from '$lib/Dragable.svelte'
  import Gooey from '$lib/Gooey.svelte'
  import Hero from '$lib/Hero.svelte'
  import Hoverton from '$lib/Hoverton.svelte'
  import Isometric from '$lib/Isometric.svelte'
  import Modal from '$lib/Modal/App.svelte'
  import Neumorphism from '$lib/Neumorphism.svelte'
  import Notice from '$lib/Notice.svelte'
  import Slider from '$lib/Slider/Slider.svelte'
  import Skills from '$lib/Skills/Skills.svelte'
  import Parallax from '$lib/Parallax.svelte'
  import Tabs from '$lib/Tabs/Tabs.svelte'
  import Timeline from '$lib/Timeline/App.svelte'
  import Typewriter from '$lib/Typewriter.svelte'
  import Video from '$lib/Video.svelte'
  import Section from '$lib/Section.svelte'
</script>

<Section
  padding="4rem 0"
  background="black"
  title="Svelte Components"
  titleColor="white"
>
  <h3>More coming soon...</h3>
</Section>

<Section minHeight="100vh" padding="4rem 0" title="Accordion">
  <div id="#Accordion">
    <Accordion />
  </div>
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  title="Audio Player"
  background="black"
  titleColor="white"
>
  <Audio />
</Section>

<Section minHeight="100vh" padding="4rem 2rem" title="Countdown">
  <Countdown end="April 1, 2022 5:00:00 GMT" />
</Section>

<Section
  padding="4rem 0"
  minHeight="100vh"
  background="url('https://source.unsplash.com/random/') no-repeat center center/cover"
  title="Dragable"
  titleColor="white"
>
  <Dragable>
    <h3>Dragable</h3>
  </Dragable>
  <Dragable>
    <h3>Dragable 2</h3>
  </Dragable>
  <Dragable>
    <h3>Dragable 3</h3>
  </Dragable>
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  title="Gooey SVG Spinner"
  background="black"
  titleColor="white"
>
  <Gooey />
</Section>

<Section minHeight="100vh" padding="4rem 0" background="#f1f1f1" title="Hero">
  <Hero />
</Section>

<Section minHeight="100vh" padding="4rem 0" title="Hover Button">
  <Hoverton />
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  title="Isometric Text"
  background="black"
  titleColor="white"
>
  <Isometric />
</Section>

<Section>
  <Modal />
</Section>

<Section padding="4rem 0 2rem" background="#e8eaf6" title="Neumorphism">
  <Neumorphism />
</Section>

<Section minHeight="50vh" padding="4rem 0" title="Notice">
  <Notice padding="2em"
    ><span style="font-size: 1.5em;line-height: 1.5em;"
      >Click the "x", and I will disapear. I am have lots of props (padding,
      background, fontSize, color, borderRadius, boxShadow)</span
    ></Notice
  >
</Section>

<Section
  height="100vh"
  padding="4rem 0"
  background="url('https://source.unsplash.com/random/') no-repeat center center/cover"
  title="Parallax"
  titleColor="white"
>
  <Parallax>
    <img
      style="width:100%;box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5)"
      src="https://via.placeholder.com/800x400"
      alt="1"
    />
  </Parallax>
</Section>

<Section minHeight="100vh" padding="4rem 0" title="Skills">
  <Skills />
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  background="black"
  title="Slider"
  titleColor="white"
>
  <div style="max-width: 600px;margin:auto;border-radius:8px;">
    <Slider />
  </div>
</Section>

<Section minHeight="100vh" background="#f1f1f1" padding="4rem 0" title="Tabs">
  <div style="max-width: 600px; margin:auto;">
    <Tabs />
  </div>
</Section>

<Section
  padding="4rem 0 6rem"
  title="Timeline"
  background="black"
  titleColor="white"
>
  <Timeline />
</Section>

<Section padding="4rem 0 0" title="Typewriter">
  <Typewriter />
</Section>

<Section
  minHeight="100vh"
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
  }
</style>
