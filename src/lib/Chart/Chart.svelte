<script context="module">
  // import Chart from 'chart.js/auto'
</script>

<script>
  export let config

  const handleChart = (element, config) => {
    let theChart = new Chart(element, config)

    return {
      update(config) {
        theChart.destroy()
        theChart = new Chart(element, config)
      },
      destroy() {
        theChart.destroy()
      },
    }
  }
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
</svelte:head>

<canvas use:handleChart={config} />

<style>
  canvas {
    max-width: 1200px;
    max-height: 80vh;
  }
</style>
