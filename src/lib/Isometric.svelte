<script>
  const init = element => {
    let shadow = ''
    for (let i = 0; i < 32; i++) {
      shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #d9d9d9'
    }
    element.style.textShadow = shadow
  }
</script>

<article>
  <div use:init>Text</div>
</article>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    background: #f1f1f1;
    overflow-x: hidden;
  }

  div {
    position: relative;
    max-width: 80vw;
    color: #fff;
    font-weight: 700;
    font-size: 8em;
    line-height: 1.1em;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-28deg) skew(25deg);
  }

  div::before {
    content: attr(data-text);
    position: absolute;
    top: 30px;
    left: -30px;
    color: rgba(0, 0, 0, 0.3);
    text-shadow: none;
    filter: blur(8px);
    z-index: -1;
  }
</style>
