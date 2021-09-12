<script>
  import Accordion from '$lib/Accordion/Accordion.svelte'
  import Audio from '$lib/Audio.svelte'
  import Countdown from '$lib/Countdown.svelte'
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

<Section padding="4rem 0" title="Accordion">
  <div id="#Accordion">
    <Accordion />
  </div>
</Section>

<Section
  padding="4rem 0 6rem"
  title="Audio Player"
  background="black"
  titleColor="white"
>
  <Audio />
</Section>

<Section padding="4rem 0 8rem" title="Countdown">
  <Countdown end="April 1, 2022 5:00:00 GMT" />
</Section>

<Section
  padding="4rem 0 6rem"
  title="Gooey SVG Spinner"
  background="black"
  titleColor="white"
>
  <Gooey />
</Section>

<Section
  padding="4rem 0 8rem"
  background="#02075d"
  titleColor="white"
  title="Hero"
>
  <Hero />
</Section>

<Section padding="4rem 0 6rem" title="Hover Button">
  <Hoverton />
</Section>

<Section padding="4rem 0 8rem" title="Isometric Text" background="#f1f1f1">
  <Isometric />
</Section>

<Section
  background="url('https://source.unsplash.com/random/800x800/?3') no-repeat
      center/cover;"
>
  <Modal />
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  background="#e8eaf6"
  title="Neumorphism"
>
  <Neumorphism />
</Section>

<Section padding="4rem 0 6rem" title="Notice">
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
      style="display:block;margin:auto;box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5)"
      src="https://via.placeholder.com/400x200"
      alt="1"
    />
  </Parallax>
</Section>

<Section minHeight="100vh" padding="4rem 0" title="Skills">
  <Skills />
</Section>

<Section
  padding="4rem 0 8rem"
  background="black"
  title="Slider"
  titleColor="white"
>
  <div style="max-width: 600px;margin:auto;border-radius:8px;">
    <Slider />
  </div>
</Section>

<Section background="#f1f1f1" padding="4rem 0 8rem" title="Tabs">
  <div style="max-width: 600px; margin:auto;">
    <Tabs />
  </div>
</Section>

<Section
  padding="4rem 0 2rem"
  title="Timeline"
  background="black"
  titleColor="white"
>
  <Timeline />
</Section>

<Section padding="4rem 0 8rem" title="Video Player">
  <Video />
</Section>

<style>
  h3 {
    color: white;
    text-align: center;
  }
</style>
