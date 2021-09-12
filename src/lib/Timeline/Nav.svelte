<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<header>
  <nav>
    <ul>
      <li>
        <button
          on:click={() => {
            dispatch('toggle', 'Presidents')
          }}
        >
          Presidents
        </button>
      </li>
      <li>
        <button
          on:click={() => {
            dispatch('toggle', 'Tennis')
          }}
        >
          Tennis
        </button>
      </li>
    </ul>
  </nav>
</header>

<style>
  ul {
    display: flex;
    justify-content: center;
    margin: 1em 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0.5em;
    font-weight: bold;
  }
  button {
    background: #ff9f55;
    color: #474e5d;
    outline: none;
    border: none;
    font-weight: bold;
    padding: 1em;
    border-radius: 6px;
    cursor: pointer;
  }
  button:hover {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    );
    color: white;
  }
</style>
