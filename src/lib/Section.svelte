<script>
  export let boxed = false
  export let title = false
  export let margin = ''
  export let padding = ''
  export let background = ''
  export let color = ''
  export let titleColor = '#001515'
  export let align = 'center'
  export let height = ''
  export let minHeight = ''
</script>

<section
  class:boxed
  style="height:{height};min-height:{minHeight};background:{background};color:{color};margin:{margin};padding:{padding};"
>
  <div class="content-wrap">
    {#if title}
      <h3 style="color:{titleColor};text-align:{align};">{title}</h3>
    {/if}
    <slot />
  </div>
</section>

<style>
  .boxed {
    max-width: 960px;
    margin: auto;
  }
  .content-wrap {
    max-width: 960px;
    margin: auto;
    padding: 0 2em;
  }
  h3 {
    margin: 0 auto 1em;
    text-align: center;
    font-size: 2.5em;
    line-height: 1em;
    color: #227ad2;
  }
  @media screen and (max-width: 640px) {
    .content-wrap {
      padding: 0 1em;
    }
  }
</style>
