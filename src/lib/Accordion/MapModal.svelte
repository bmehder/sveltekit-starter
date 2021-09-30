<script>
  import { fade, fly } from 'svelte/transition'
  export let mapurl
</script>

<aside transition:fade>
  <div in:fly={{ y: -500 }} out:fade>
    <span on:click>&times;</span>
    <img src={mapurl} alt="map" />
  </div>
</aside>

<style>
  aside {
    display: grid;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  div {
    background-color: #fefefe;
    margin: auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  img {
    width: 50%;
  }

  span {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  span:hover,
  span:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
