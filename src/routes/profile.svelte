<script>
  import { onMount } from 'svelte'
  import Section from '$lib/Section.svelte'

  let name, email, role, isReady

  onMount(async () => {
    const res = await fetch('http://localhost:1337/users/me', {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
      },
    })
    const json = await res.json()
    console.log(json)
    name = json.username
    email = json.email
    role = json.role.name

    isReady = true
  })
</script>

<Section padding="4rem 0">
  <h1>Welcome to your profile</h1>

  {#if isReady}
    <h2>Username: {name}</h2>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Role:</strong> {role}</p>
  {/if}

  {#if !isReady}
    <h2>Not logged in</h2>
  {/if}
</Section>
