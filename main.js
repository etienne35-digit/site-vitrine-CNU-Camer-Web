
(function(){
  const drawer = document.getElementById('drawer');
  const search = document.getElementById('search');
  const openMenuBtn = document.getElementById('openMenu');
  const openSearchBtns = [document.getElementById('openSearch'), document.getElementById('openSearch2')].filter(Boolean);

  function open(el){ el.setAttribute('aria-hidden','false'); }
  function close(el){ el.setAttribute('aria-hidden','true'); }

  if(openMenuBtn){
    openMenuBtn.addEventListener('click', ()=>{
      const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true';
      if(expanded){ close(drawer); openMenuBtn.setAttribute('aria-expanded','false'); }
      else { open(drawer); openMenuBtn.setAttribute('aria-expanded','true'); }
    });
  }

  if(drawer){
    drawer.addEventListener('click', (e)=>{
      if(e.target===drawer){ close(drawer); openMenuBtn && openMenuBtn.setAttribute('aria-expanded','false'); }
    });
  }

  openSearchBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if(expanded){ close(search); btn.setAttribute('aria-expanded','false'); }
      else { open(search); btn.setAttribute('aria-expanded','true'); }
    });
  });

  if(search){
    search.addEventListener('click', (e)=>{
      if(e.target===search){
        close(search);
        openSearchBtns.forEach(b=>b.setAttribute('aria-expanded','false'));
      }
    });
  }

  // ESC to close any overlay
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      close(drawer); close(search);
      openMenuBtn && openMenuBtn.setAttribute('aria-expanded','false');
      openSearchBtns.forEach(b=>b.setAttribute('aria-expanded','false'));
    }
  });
})();
