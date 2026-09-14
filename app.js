(()=>{"use strict";
const cfg=window.ETERNAL_SONATA||{};
const links=cfg.links||{};
const dialog=document.getElementById("comingSoon");
const close=document.getElementById("closeDialog");

document.querySelectorAll("[data-link]").forEach(el=>{
  const key=el.dataset.link;
  const url=links[key];

  el.addEventListener("click",event=>{
    if(!url){
      event.preventDefault();
      if(dialog?.showModal) dialog.showModal();
      return;
    }

    el.href=url;
    el.target="_blank";
    el.rel="noopener noreferrer";
  });

  if(url){
    el.href=url;
    el.target="_blank";
    el.rel="noopener noreferrer";
  }
});

close?.addEventListener("click",()=>dialog.close());

dialog?.addEventListener("click",event=>{
  const rect=dialog.getBoundingClientRect();
  const inside=
    event.clientX>=rect.left && event.clientX<=rect.right &&
    event.clientY>=rect.top && event.clientY<=rect.bottom;
  if(!inside) dialog.close();
});
})();