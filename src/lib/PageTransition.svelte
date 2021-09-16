<script>
  import { scale } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:scale={{ x: -500, duration: 300, delay: 400 }}
    out:scale={{ x: 500, duration: 300 }}
  >
    <slot />
  </div>
{/key}
