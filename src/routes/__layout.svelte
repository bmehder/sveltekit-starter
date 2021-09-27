<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
  import '../app.css'
  import PageTransition from '$lib/PageTransition.svelte'
  import Head from '$lib/Head.svelte'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'

  export let key
</script>

<Head />

<Header background="var(--primary)" />
<PageTransition refresh={key}>
  <slot />
</PageTransition>
<Footer background="var(--primary-dark)" color="white">Acme Company</Footer>
