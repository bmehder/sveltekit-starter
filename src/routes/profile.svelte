<script>
  import { onMount } from 'svelte'
  import Section from '$lib/Section.svelte'

  let name

  onMount(async () => {
    const res = await fetch('http://localhost:1337/users/me', {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
    })
    const json = await res.json()
    console.log(json)
    name = json.username
  })
</script>

<Section>
  <h1>Welcome to your profile</h1>

  {#if name}
    <h2>{name}</h2>
  {/if}

  {#if !name}
    <h2>Not logged in</h2>
  {/if}
</Section>
