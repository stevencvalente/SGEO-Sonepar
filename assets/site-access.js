(function(){
  var storageKey='sgeo-site-access';
  var gate=document.getElementById('site-access-gate');
  if(!gate) return;

  function unlock(){
    document.body.classList.remove('locked');
    gate.hidden=true;
    var destination=gate.querySelector('form').dataset.redirect;
    if(destination) window.location.replace(destination);
  }

  if(sessionStorage.getItem(storageKey)==='ok'){
    unlock();
    return;
  }

  gate.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    var input=gate.querySelector('input');
    if(input.value==='Sonepar-SGEO-2026'){
      sessionStorage.setItem(storageKey,'ok');
      unlock();
      return;
    }
    gate.querySelector('[role=status]').textContent='Mot de passe incorrect.';
    input.select();
  });
})();
