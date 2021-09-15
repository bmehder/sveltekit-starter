<script>
  import { fetchData } from './utils'
  import Gooey from './Gooey.svelte'

  export let endpoint =
    'https://raw.githubusercontent.com/bmehder/projects/master/json/covid.json'

  let promise = fetchData(endpoint)
</script>

<section id="fetcher" class="carbon">
  {#await promise}
    <Gooey />
  {:then data}
    <article class="heading shadow">
      <div>
        <strong>Business</strong>
      </div>
      <div>
        <strong>Address</strong>
      </div>
      <div>
        <strong>Category</strong>
      </div>
      <div>
        <strong>Rating</strong>
      </div>
    </article>
    {#each data as { business, address, cat, rating }}
      <article>
        <div>{business}</div>
        <div>{address}</div>
        <div>{cat}</div>
        <div>{rating}%</div>
      </article>
    {/each}
  {:catch error}
    <p>Something has gone horribly wrong. :-(</p>
    <p style="color: red">{error.message}</p>
  {/await}
</section>

<style>
  section {
    padding-top: 0;
  }
  article {
    display: flex;
    padding: 0 2em;
  }
  article:nth-child(odd) {
    background-color: #fff;
  }
  article:nth-child(even) {
    background-color: #f1f1f1;
  }
  article div {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 25%;
    line-height: 2em;
    padding: 1em 0;
  }
  .heading {
    background-color: darkorange !important;
    color: #fff;
    margin-top: 50px;
  }
  p {
    display: flex;
    justify-content: center;
    margin: 1em 0;
    text-align: center;
  }
  a {
    color: darkorange;
    text-decoration: none;
  }
  a:hover {
    color: darkorange;
    border-bottom: 1px solid darkorange;
  }
</style>
