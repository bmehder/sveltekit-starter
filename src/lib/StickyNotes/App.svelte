<script>
  import Note from './Note.svelte'

  let allNotes = []

  function getNotes() {
    return JSON.parse(localStorage.getItem('stickynotes')) || []
  }

  function saveNotes() {
    localStorage.setItem('stickynotes', JSON.stringify(allNotes))
  }

  function addNote() {
    allNotes = [
      ...allNotes,
      {
        id: Math.floor(Math.random() * 100000),
        content: '',
      },
    ]
  }

  function deleteNote(id) {
    const isDelete = confirm('You want to delete this note, yeah?')

    if (isDelete) {
      allNotes = allNotes.filter(note => note.id !== id)
      saveNotes()
    }
  }

  const getNotesFromLocalStorage = () => (allNotes = getNotes())
</script>

<main use:getNotesFromLocalStorage>
  {#each allNotes as note (note.id)}
    <Note
      bind:content={note.content}
      on:blur={saveNotes}
      on:click={() => deleteNote(note.id)}
    />
  {/each}
  <button on:click={addNote}>+</button>
</main>

<style>
  main {
    max-width: 1020px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    padding: 1.5rem;
    gap: 1.5rem;
  }
  button {
    height: 300px;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 120px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 600px) {
    main {
      grid-template-columns: repeat(auto-fill, 100%);
      max-width: 320px;
      padding: 0;
    }
  }
</style>
