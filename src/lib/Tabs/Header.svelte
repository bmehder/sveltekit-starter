<script>
  export let items
  export let selectedTab
</script>

<header>
  {#each items as { tab }, index}
    <span
      class:active={selectedTab === index}
      on:click={() => (selectedTab = index)}
    >
      {tab}
    </span>
  {/each}
</header>

<style>
  header {
    display: flex;
  }
  span {
    background: #f1f1f1;
    width: 80px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #bbb;
    border-left: none;
    border-right: 0.5px solid #ddd;
    border-bottom: none;
  }
  span:first-child {
    border-left: 1px solid #bbb;
  }
  span:last-child {
    border-right: 1px solid #bbb;
  }
  .active {
    background: white;
  }
</style>
