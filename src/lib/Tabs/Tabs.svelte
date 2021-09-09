<script>
  import Header from './Header.svelte'
  import Bugs from './Bugs.svelte'
  import Time from './Time.svelte'
  import Reduce from './Reduce.svelte'

  const items = [
    { tab: 'Bugs', component: Bugs },
    { tab: 'Time', component: Time },
    { tab: 'Reduce', component: Reduce },
  ]

  let selectedItem = 0

  $: item = items[selectedItem].component
</script>

<Header {items} bind:selectedTab={selectedItem} />

<svelte:component this={item} />
