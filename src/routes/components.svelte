<script>
  import Accordion from '$lib/Accordion/Accordion.svelte'
  import Audio from '$lib/Audio.svelte'
  import Chart from '$lib/Chart/App.svelte'
  import Countdown from '$lib/Countdown.svelte'
  import FlashCards from '$lib/FlashCards/FlashCards.svelte'
  import FlexGallery from '$lib/FlexGallery/App.svelte'
  import Gooey from '$lib/Gooey.svelte'
  import Hero from '$lib/Hero.svelte'
  import Hoverton from '$lib/Hoverton.svelte'
  import Isometric from '$lib/Isometric.svelte'
  import Modal from '$lib/Modal/App.svelte'
  import Neumorphism from '$lib/Neumorphism.svelte'
  import Notice from '$lib/Notice.svelte'
  import Slider from '$lib/Slider/Slider.svelte'
  import Skills from '$lib/Skills/Skills.svelte'
  import StickyNotes from '$lib/StickyNotes/App.svelte'
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

<div class="components">
  <Section
    padding="4rem 0"
    title="Web Components"
    titleColor="white"
    background="var(--primary-dark)"
    color="white"
  >
    <Flex justify="center">
      <aside>
        <p>Select a component:</p>
        <select bind:value on:change={handleOnChange}>
          <option value="#Accordion">Accordion</option>
          <option value="#Audio">Audio</option>
          <option value="#Chart">Chart</option>
          <option value="#Countdown">Countdown</option>
          <option value="#FlashCards">Flash Cards</option>
          <option value="#FlexGallery">Flex Gallery</option>
          <option value="#Gooey">Gooey</option>
          <option value="#Hero">Hero</option>
          <option value="#Hoverton">Hoverton</option>
          <option value="#Isometric">Isometric</option>
          <option value="#Modal">Modal</option>
          <option value="#Neuomorphism">Neuomorphism</option>
          <option value="#Notice">Notice</option>
          <option value="#Slider">Slider</option>
          <option value="#Skills">Skills</option>
          <option value="#StickyNotes">Sticky Notes</option>
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
    background="var(--primary-dark)"
    titleColor="white"
  >
    <div id="Audio">
      <Audio />
    </div>
  </Section>

  <div id="Chart">
    <Chart />
  </div>

  <Section padding="4rem 0 8rem" title="Countdown">
    <div id="Countdown">
      <Countdown end="April 1, 2022 5:00:00 GMT" />
    </div>
  </Section>

  <Section padding="4rem 0 6rem" background="#f1f1f1" title="Flash Cards">
    <div id="FlashCards">
      <FlashCards />
    </div>
  </Section>

  <div id="FlexGallery">
    <FlexGallery />
  </div>

  <Section
    padding="4rem 0 6rem"
    title="Gooey SVG Spinner"
    background="var(--primary-dark)"
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

  <Section
    relative
    background="url('https://source.unsplash.com/random/800x800/') no-repeat
      center/cover;"
  >
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
      <Notice padding="2em" fontSize="2em"
        ><p>
          Click the "x", and I will disapear. I am have lots of props (padding,
          background, fontSize, color, borderRadius, boxShadow)
        </p></Notice
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
          src="https://via.placeholder.com/300x200"
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
    background="var(--primary-dark)"
    title="Slider"
    titleColor="white"
  >
    <div style="max-width: 600px;margin:auto;border-radius:8px;">
      <div id="Slider">
        <Slider />
      </div>
    </div>
  </Section>

  <Section background="#307ad5" padding="4rem 0" title="Sticky Notes">
    <div id="StickyNotes">
      <StickyNotes />
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
    background="var(--primary-dark)"
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
</div>

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
