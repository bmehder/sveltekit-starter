<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Head />

<Header background="darkorange" />
<slot />
<Footer background="#111" color="white" padding="2rem 0">
  <p>© 2021 Acme Company. All rights reserved.</p>
</Footer>
