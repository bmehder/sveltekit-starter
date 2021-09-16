<script>
  import '../app.css'
  import Head from '$lib/Head.svelte'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Head />

<Header background="darkorange" />
<slot />
<Footer background="#111" color="white">Acme Company</Footer>
