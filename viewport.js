/* Ajusta a ilustração à maior área disponível SEM rolagem da janela.
   Coordenadas percentuais dos hotspots continuam alinhadas com a arte. */
(() => {
  'use strict';
  const screen = document.getElementById('game-screen');
  const main = document.querySelector('.game-main');
  const frame = document.getElementById('scene-frame');
  const heading = document.querySelector('.scene-masthead');
  const footnote = document.querySelector('.below-scene');
  const RATIO = 1000 / 560;
  let raf = 0;

  function fitScene() {
    if (screen.hidden || !main.clientWidth || !main.clientHeight) return;
    const headingMargin = parseFloat(getComputedStyle(heading).marginBottom) || 0;
    const availableHeight = Math.max(1, main.clientHeight - heading.offsetHeight - headingMargin - footnote.offsetHeight - 2);
    const width = Math.floor(Math.min(main.clientWidth, availableHeight * RATIO));
    frame.style.width = `${width}px`;
    frame.style.height = `${Math.floor(width / RATIO)}px`;
  }

  function scheduleFit() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(fitScene);
  }

  window.addEventListener('resize', scheduleFit, {passive:true});
  if (window.visualViewport) window.visualViewport.addEventListener('resize', scheduleFit, {passive:true});
  const resize = new ResizeObserver(scheduleFit);
  resize.observe(main);
  resize.observe(heading);
  resize.observe(footnote);
  new MutationObserver(scheduleFit).observe(screen, {attributes:true, attributeFilter:['hidden']});
  if (document.fonts?.ready) document.fonts.ready.then(scheduleFit);
  scheduleFit();
})();
