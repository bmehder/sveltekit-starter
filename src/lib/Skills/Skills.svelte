<script>
  import { skillsData } from './data'
  import Skill from './Skill.svelte'

  let refresher = false
</script>

<svelte:window on:click={() => (refresher = !refresher)} />

{#key refresher}
  <section>
    {#each skillsData as { skill, percent, color, delay, duration, easing }}
      <Skill {skill} {percent} {color} {delay} {duration} {easing} />
    {/each}
  </section>
{/key}

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-image: radial-gradient(transparent, rgba(2, 48, 71, 0.2) 100%);
  }
  section {
    width: 90%;
    margin: 2em auto;
  }
</style>
