
(() => {
  const toggle=document.querySelector('[data-menu-toggle]');
  const links=document.querySelector('[data-nav-links]');
  if(toggle&&links){
    toggle.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.textContent=open?'Cerrar menú':'Menú';
    });
    links.addEventListener('click',e=>{
      if(e.target.closest('a')){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menú';}
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&links.classList.contains('open')){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menú';toggle.focus();}
    });
  }
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('[data-nav-links] a').forEach(a=>{
    if(a.getAttribute('href')===page) a.setAttribute('aria-current','page');
  });
})();
