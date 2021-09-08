<script>
  import { presidents } from "./presidents.js";
  import { tennis } from "./tennis.js";
  import Nav from "./Nav.svelte";
  import Timeline from "./Timeline.svelte";

  let data = presidents;
  const handleToggle = (e) => {
    switch (e.detail) {
      case "Presidents":
        data = presidents;
        break;
      case "Tennis":
        data = tennis;
        break;
    }
  };
</script>

<Nav on:toggle={handleToggle} />
<main>
  <Timeline {data} />
</main>

<style>
  main {
    margin: 40px 0;
  }
</style>
