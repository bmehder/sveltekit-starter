<script>
  import Section from '$lib/Section.svelte'
  import { loginUser, setUserJWT } from '$lib/utils.js'

  const loginUrl = 'http://localhost:1337/auth/local'

  let username = ''
  let password = ''

  $: isNoEmptyFields = username.length < 1 || password.length < 1

  $: console.log(isNoEmptyFields)

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

<Section padding="6rem 0" background="darkorange" title="Login">
  <form on:submit|preventDefault>
    <input
      type="text"
      name="username"
      bind:value={username}
      placeholder="Enter your username..."
      autocomplete="off"
    />
    <input
      type="password"
      name="password"
      bind:value={password}
      placeholder="Enter your password..."
    />
    <button disabled={isNoEmptyFields} on:click={handleLogin}>Login</button>
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
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    /* border: 1px solid #ccc; */
    border: none;
    outline: none;
    border-radius: 4px;
    border-radius: 50px;
    background: #ff8c00;
    box-shadow: 5px 5px 11px #c76d00, 2px 2px 2px #ffab00 inset;
  }
  ::placeholder {
    color: #333;
    font-size: 1.2rem;
  }
  button {
    background-color: #02075d;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 300ms;
  }
  button:disabled {
    cursor: not-allowed;
    transform: scale(0.98);
  }
  button:hover:not(:disabled) {
    box-shadow: 2px 2px 11px #c76d00, 2px 2px 2px #ffab00 inset;
    transform: scale(0.99);
  }
</style>
