<script>
  export let data = []
</script>

<main>
  <div class="timeline">
    {#each data as { year, name, src }, i}
      <div class="container {i % 2 === 0 ? 'left' : 'right'}">
        <div class="content">
          <figure><img {src} alt={name} /></figure>
          <article>
            <h2>{year}</h2>
            <p>{name}</p>
          </article>
        </div>
      </div>
    {:else}
      <div class="container">
        <div class="content">No data available.</div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 960px;
    margin: auto;
  }
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: -12px;
    bottom: -72px;
    left: 50%;
    transform: translateX(-3px);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 1);
  }
  @media screen and (max-width: 600px) {
    .timeline::after {
      left: 31px;
    }
  }
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  .left {
    left: 0;
  }
  .right {
    left: 50%;
  }
  .left::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
  .right::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  .right::after {
    left: -16px;
  }
  .content {
    display: flex;
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.24);
  }
  article {
    margin-left: 31px;
  }
  figure {
    margin: 0;
    padding: 0;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.24);
    border-radius: 50%;
  }
  h2 {
    margin: 0;
  }
  p {
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
    .left::after,
    .right::after {
      left: 15px;
    }
    .right {
      left: 0%;
    }
  }
</style>
