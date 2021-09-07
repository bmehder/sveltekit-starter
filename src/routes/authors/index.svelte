<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const authors = await res.json()

    return {
      props: {
        authors,
      },
    }
  }
</script>

<script>
  export let authors
</script>

<h1>Authors</h1>

<ul>
  {#each authors as { name, id }}
    <li><a href="/authors/{id}">{name}</a></li>
  {/each}
</ul>

<style>
  li {
    margin-bottom: 0.5rem;
  }
</style>
