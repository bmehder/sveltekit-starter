<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<section>
  {#each posts as { id, title, body }}
    <article>
      <h2><a sveltekit:prefetch href="/blog/{id}">{title}</a></h2>
      <p>{body.substring(0, 152)}...</p>
      <p><a sveltekit:prefetch href="/blog/{id}">Read more &raquo;</a></p>
    </article>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  article {
    border: 1px solid #ddd;
    line-height: 1.5rem;
    border-radius: 2px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  }
  h2 {
    margin: 0;
    padding: 2rem;
    min-height: 6rem;
    line-height: 1.25em;
    background: #f1f1f1;
    color: #02075d;
    text-transform: capitalize;
  }
  p {
    padding: 1rem 2rem;
  }
  a {
    color: #02075d;
    font-weight: bold;
    text-align: right;
    text-decoration: none;
  }
  p:last-child {
    text-align: right;
  }
  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 900px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
