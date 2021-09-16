<script context="module">
  export const load = async ({ page, fetch }) => {
    const id = page.params.id

    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}?_expand=user`
    )
    const post = await postRes.json()
    const user = post.user

    return {
      props: {
        post,
        user,
      },
    }
  }
</script>

<script>
  export let post
  export let user

  const { title, body } = post
  const { id, name } = user
</script>

<h1>{title}</h1>
<p>{body}</p>
<p>
  -Written by <a sveltekit:prefetch href={`/authors/${id}`}>{name}</a>
</p>

<style>
  h1 {
    line-height: 1.25em;
    margin-bottom: 0.5em;
    text-transform: capitalize;
  }
</style>
