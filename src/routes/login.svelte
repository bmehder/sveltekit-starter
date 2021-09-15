<script>
  import Section from '$lib/Section.svelte'
  import { loginUser, setUserJWT } from '$lib/utils.js'

  let username
  let password
  const loginUrl = 'http://localhost:1337/auth/local'

  async function handleLogin() {
    const json = await loginUser(loginUrl, {
      identifier: username,
      password,
    })
    console.log(json)
    if (json?.jwt) {
      setUserJWT('jwt', json.jwt)
    }
  }
</script>

<Section padding="4rem 0">
  <form on:submit|preventDefault>
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
  </form>
</Section>

<style>
  form {
    width: 300px;
    margin: auto;
  }
  input,
  button {
    width: 100%;
    display: block;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: darkorange;
    color: white;
    border: none;
  }
</style>
