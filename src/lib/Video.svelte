<script>
  export let src =
    'https://player.vimeo.com/external/305211631.sd.mp4?s=3d46306a3d07d1c56eb64f1fcb1ba96232e34d90&profile_id=164&oauth2_token_id=57447761'
  export let loop = false
  export let poster = ''

  // DOM Elements
  let videoEl, playEl, progressEl, timestampEl

  // App state
  let mins = 0
  let secs = 0
  let isPlaying = false

  $: mins = mins.toLocaleString('en-GB', { minimumIntegerDigits: 2 })
  $: secs = secs.toLocaleString('en-GB', { minimumIntegerDigits: 2 })

  const togglePlayOrPauseVideo = () =>
    isPlaying ? videoEl.pause() : videoEl.play()

  const handleOnTimeUpdate = () => {
    progressEl.value = (videoEl.currentTime / videoEl.duration) * 100
    mins = Math.floor(videoEl.currentTime / 60)
    secs = Math.floor(videoEl.currentTime % 60)
  }

  const handleOnChange = () =>
    (videoEl.currentTime = (progressEl.value * videoEl.duration) / 100)
</script>

<article>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    bind:this={videoEl}
    on:click={togglePlayOrPauseVideo}
    on:timeupdate={handleOnTimeUpdate}
    on:playing={() => (isPlaying = true)}
    on:pause={() => (isPlaying = false)}
    {src}
    {poster}
    {loop}
  />

  <div>
    <button bind:this={playEl} on:click={togglePlayOrPauseVideo}>
      <i class="fa {isPlaying ? 'fa-pause' : 'fa-play'} fa-2x" />
    </button>

    <input
      bind:this={progressEl}
      on:change={handleOnChange}
      type="range"
      min="0"
      max="100"
      step="0.1"
      value="0"
    />

    <span bind:this={timestampEl}>{mins}:{secs}</span>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  video {
    width: 80%;
    background-color: #333 !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-sizing: border-box;
  }
  button {
    margin: 0;
    padding: 0 5px;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
  span {
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin: 0;
    margin-left: 5px;
  }
  :global(.fa-play) {
    color: #28a745;
  }
  :global(.fa-pause) {
    color: #dc3545;
  }
</style>
