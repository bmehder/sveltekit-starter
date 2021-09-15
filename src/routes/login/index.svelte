<script>
  import Section from '$lib/Section.svelte'
  import { post, browserSet } from '$lib/req_util'

  let username
  let password

  async function handleLogin() {
    const json = await post(fetch, 'http://localhost:1337/auth/local', {
      identifier: username,
      password,
    })
    console.log(json)
    if (json.jwt) {
      browserSet('jwt', json.jwt)
    }
  }
</script>

<Section padding="4rem 0">
  <input
    type="text"
    name="username"
    bind:value={username}
    placeholder="Enter your username"
  />
  <input
    type="password"
    name="password"
    bind:value={password}
    placeholder="Enter your password"
  />
  <button on:click={handleLogin}>Login</button>
</Section>

<style>
  input {
    width: 100%;
    display: block;
    margin-bottom: 0.5rem;
  }
</style>
