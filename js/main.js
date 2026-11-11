(function(){
  document.documentElement.classList.remove('no-js');
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  function openMenu(){d.classList.add('open');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
  function closeMenu(){d.classList.remove('open');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
  if(t&&d&&o){
    t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?closeMenu():openMenu();});
    if(c)c.addEventListener('click',closeMenu);
    o.addEventListener('click',closeMenu);
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
    window.addEventListener('resize',function(){if(window.innerWidth>768)closeMenu();});
  }
  document.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var item=b.parentNode,open=item.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  });
  var f=document.getElementById('call-float'),foot=document.getElementById('site-footer');
  if(f){
    var show=function(){
      var y=window.scrollY||window.pageYOffset,nearFoot=false;
      if(foot){var r=foot.getBoundingClientRect();nearFoot=r.top<window.innerHeight-40;}
      if(y>500&&!nearFoot)f.classList.add('show');else f.classList.remove('show');
    };
    window.addEventListener('scroll',show,{passive:true});show();
  }
})();
