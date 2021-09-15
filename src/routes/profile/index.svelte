<script>
  import { onMount } from 'svelte'

  let name

  onMount(async () => {
    const res = await fetch('http://localhost:1337/users/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
    const json = await res.json()
    console.log(json)
    name = json.username
  })
</script>

{#if name}
  <h2>{name}</h2>
{/if}

{#if !name}
  <h2>Not logged in</h2>
{/if}
