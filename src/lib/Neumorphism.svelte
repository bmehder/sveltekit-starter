<script>
  import { fly } from 'svelte/transition'
</script>

<section in:fly={{ duration: 600, x: 1000, y: 0, opacity: 0.5 }}>
  <!-- <h3>Neumorphism</h3> -->
  <div class="iPhone" />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #e8eaf6;
    overflow-x: hidden;
  }
  .iPhone {
    position: relative;
    width: 230px;
    height: 410px;
    background: url('/iPhone.png') #fff;
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(-40deg) skew(20deg, 10deg);
    box-shadow: -120px 110px 5px rgba(0, 0, 0, 0.08);
    transition: 3.2s;
  }
  .iPhone:hover {
    transform: rotate(-40deg) skew(20deg, 10deg) translate(30px, -30px);
    box-shadow: -150px 140px 10px rgba(0, 0, 0, 0.08);
  }
  .iPhone:before {
    content: '';
    position: absolute;
    top: 0;
    left: -90px;
    width: 90px;
    height: 100%;
    background: url('/text.png') #f2f2f2;
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
    transform-origin: right;
    transform: skewY(-43deg);
  }
  .iPhone:after {
    content: '';
    position: absolute;
    bottom: -82px;
    left: 0;
    width: 100%;
    height: 82px;
    background: url(/assets/logo.png) #e5e5e5;
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
    transform-origin: top;
    transform: skewX(-47deg);
  }
</style>
