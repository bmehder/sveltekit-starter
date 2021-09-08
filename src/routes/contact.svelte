<script>
  import Section from '$lib/Section.svelte'
</script>

<Section padding="2rem 0 4rem">
  <h1>Contact Us</h1>
  <form>
    <input type="text" placeholder="Enter Name..." />
    <input type="email" placeholder="Enter Email..." />
    <textarea placeholder="Enter message..." />
    <button>Submit</button>
  </form>
</Section>

<style>
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
  }
  input,
  textarea {
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.14);
  }
  textarea {
    min-height: 200px;
  }
  button {
    padding: 1em;
    background: #02075d;
    color: white;
    font-size: 1em;
    font-weight: bold;
    border-radius: 4px;
  }
</style>
