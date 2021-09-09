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
  section {
    width: 90%;
    margin: 2em auto;
  }
</style>
