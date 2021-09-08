<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let file =
    "https://player.vimeo.com/external/305211631.sd.mp4?s=3d46306a3d07d1c56eb64f1fcb1ba96232e34d90&profile_id=164&oauth2_token_id=57447761";
  export let loop;
  export let poster;
  onMount(() => {
    // Grab the DOM Objects
    const video = document.getElementById("video");
    const play = document.getElementById("play");
    const stop = document.getElementById("stop");
    const progress = document.getElementById("progress");
    const timestamp = document.getElementById("timestamp");
    // Play and pause video
    const toggleVideoStatus = () => {
      console.log("fired");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };
    // Toggle play and pause icon
    const updatePlayIcon = () => {
      if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
      } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
      }
    };
    // Update time counter
    const updateProgress = () => {
      progress.value = (video.currentTime / video.duration) * 100;
      let mins = Math.floor(video.currentTime / 60);
      if (mins < 10) {
        mins = "0" + String(mins);
      }
      let seconds = Math.floor(video.currentTime % 60);
      if (seconds < 10) {
        seconds = "0" + String(seconds);
      }
      timestamp.innerHTML = `${mins}:${seconds}`;
    };
    // Update the video to the time set by the progress bar.
    const setVideoProgress = () => {
      video.currentTime = (+progress.value * video.duration) / 100;
    };
    // Stops the video and resets the time to 0.
    const stopVideo = () => {
      video.currentTime = 0;
      video.pause();
    };
    // Event Listeners
    video.addEventListener("click", toggleVideoStatus);
    video.addEventListener("pause", updatePlayIcon);
    video.addEventListener("play", updatePlayIcon);
    video.addEventListener("timeupdate", updateProgress);
    play.addEventListener("click", toggleVideoStatus);
    stop.addEventListener("click", stopVideo);
    progress.addEventListener("change", setVideoProgress);
  });
</script>

<section in:fly={{ duration: 600, x: 1000, y: 0, opacity: 0.5 }}>
  <!-- <h3>Video Player</h3> -->
  <!-- svelte-ignore a11y-media-has-caption -->
  <video src={file} id="video" class="screen shadow" {poster} {loop} />

  <div class="controls">
    <button class="btn" id="play">
      <i class="fa fa-play fa-2x" />
    </button>
    <button class="btn" id="stop">
      <i class="fa fa-stop fa-2x" />
    </button>
    <input
      type="range"
      id="progress"
      class="progress"
      min="0"
      max="100"
      step="0.1"
      value="0" />
    <span class="timestamp" id="timestamp">00:00</span>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .screen {
    cursor: pointer;
    width: 80%;
    background-color: #333 !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .controls {
    width: 80%;
    background-color: #333;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .controls .btn {
    border: 0;
    background: transparent;
    padding: 0 5px;
    cursor: pointer;
  }
  :global(.controls .fa-play) {
    color: #28a745;
  }
  .controls .fa-stop {
    color: #dc3545;
  }
  :global(.controls .fa-pause) {
    color: #fff;
  }
  .controls .timestamp {
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
  }
  .controls .progress {
    width: 100%;
    margin-left: 5px;
  }
  .btn:focus {
    outline: 0;
  }
  @media (max-width: 800px) {
    .screen,
    .controls {
      width: 90%;
    }
  }
</style>
