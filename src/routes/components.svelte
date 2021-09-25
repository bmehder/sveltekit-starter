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
  import Flex from '$lib/Flex.svelte'

  let sectionEl, value

  const handleOnChange = e => {
    sectionEl = document.querySelector(value)
    sectionEl.scrollIntoView({ block: 'center' })
  }
</script>

<Section
  padding="4rem 0"
  title="Web Components"
  titleColor="white"
  background="black"
  color="white"
>
  <Flex justify="center">
    <aside>
      <p>Select a component:</p>
      <select bind:value on:change={handleOnChange}>
        <option value="#Accordion">Accordion</option>
        <option value="#Audio">Audio</option>
        <option value="#Countdown">Countdown</option>
        <option value="#Gooey">Gooey</option>
        <option value="#Hero">Hero</option>
        <option value="#Hoverton">Hoverton</option>
        <option value="#Isometric">Isometric</option>
        <option value="#Modal">Modal</option>
        <option value="#Neuomorphism">Neuomorphism</option>
        <option value="#Notice">Notice</option>
        <option value="#Slider">Slider</option>
        <option value="#Skills">Skills</option>
        <option value="#Parallax">Parallax</option>
        <option value="#Tabs">Tabs</option>
        <option value="#Timeline">Timeline</option>
        <option value="#Video">Video</option>
      </select>
    </aside>
  </Flex>
</Section>

<Section padding="4rem 0" title="Accordion">
  <div id="Accordion">
    <Accordion />
  </div>
</Section>

<Section
  padding="4rem 0 6rem"
  title="Audio Player"
  background="black"
  titleColor="white"
>
  <div id="Audio">
    <Audio />
  </div>
</Section>

<Section padding="4rem 0 8rem" title="Countdown">
  <div id="Countdown">
    <Countdown end="April 1, 2022 5:00:00 GMT" />
  </div>
</Section>

<Section
  padding="4rem 0 6rem"
  title="Gooey SVG Spinner"
  background="black"
  titleColor="white"
>
  <div id="Gooey">
    <Gooey />
  </div>
</Section>

<Section
  padding="4rem 0 8rem"
  background="#02075d"
  titleColor="white"
  title="Hero"
>
  <div id="Hero">
    <Hero />
  </div>
</Section>

<Section padding="4rem 0 6rem" title="Hover Button">
  <div id="Hoverton">
    <Hoverton />
  </div>
</Section>

<Section padding="4rem 0 8rem" title="Isometric Text" background="#f1f1f1">
  <div id="Isometric">
    <Isometric />
  </div>
</Section>

<Section>
  <div id="Modal">
    <Modal />
  </div>
</Section>

<Section
  minHeight="100vh"
  padding="4rem 0"
  background="#e8eaf6"
  title="Neumorphism"
>
  <div id="Neuomorphism">
    <Neumorphism />
  </div>
</Section>

<Section padding="4rem 0 6rem" title="Notice">
  <div id="Notice">
    <Notice padding="2em"
      ><span style="font-size: 1.5em;line-height: 1.5em;"
        >Click the "x", and I will disapear. I am have lots of props (padding,
        background, fontSize, color, borderRadius, boxShadow)</span
      ></Notice
    >
  </div>
</Section>

<Section
  height="100vh"
  padding="4rem 0"
  background="url('https://source.unsplash.com/random/') no-repeat center center/cover"
  title="Parallax"
  titleColor="white"
>
  <div id="Parallax">
    <Parallax>
      <img
        style="display:block;margin:auto;box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5)"
        src="https://via.placeholder.com/400x200"
        alt="1"
      />
    </Parallax>
  </div>
</Section>

<Section minHeight="100vh" padding="4rem 0" title="Skills">
  <div id="Skills">
    <Skills />
  </div>
</Section>

<Section
  padding="4rem 0 8rem"
  background="black"
  title="Slider"
  titleColor="white"
>
  <div style="max-width: 600px;margin:auto;border-radius:8px;">
    <div id="Slider">
      <Slider />
    </div>
  </div>
</Section>

<Section background="#f1f1f1" padding="4rem 0 8rem" title="Tabs">
  <div id="Tabs">
    <div style="max-width: 600px; margin:auto;">
      <Tabs />
    </div>
  </div>
</Section>

<Section
  padding="4rem 0 2rem"
  title="Timeline"
  background="black"
  titleColor="white"
>
  <div id="Timeline">
    <Timeline />
  </div>
</Section>

<Section padding="4rem 0 8rem" title="Video Player">
  <div id="Video">
    <Video />
  </div>
</Section>

<style>
  aside {
    text-align: center;
  }
  p {
    display: block;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  select {
    display: inline-block;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    text-align: center;
    outline: none;
    font-size: 1.25rem;
  }
</style>
