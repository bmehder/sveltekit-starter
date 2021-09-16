<script context="module">
  import { setUserJWT } from '$lib/utils'

  export const load = async ({ page, fetch }) => {
    const id = page.params.id
    const endpoint = `https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`

    const res = await fetch(endpoint)
    const author = await res.json()

    const posts = author.posts

    return {
      props: {
        author,
        posts,
      },
    }
  }
</script>

<script>
  export let author
  export let posts

  const { name, website, email } = author
</script>

<h1>{name}</h1>
<h3>Website: {website}</h3>
<p>
  Email: <a href="mailto:{email}" rel="external" target="_blank">{email}</a>
</p>

<h3>Posts by {name}</h3>
<ul>
  {#each posts as { id, title }}
    <li><a sveltekit:prefetch href="/blog/{id}">{title}</a></li>
  {/each}
</ul>

<style>
  h1,
  h3 {
    line-height: 1.25em;
    margin-bottom: 0.5em;
  }
  li {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
</style>
