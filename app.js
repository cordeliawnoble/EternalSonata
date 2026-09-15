(()=>{"use strict";
const cfg=window.ETERNAL_SONATA||{},links=cfg.links||{};
const coming=document.getElementById("comingSoon"),music=document.getElementById("musicSoon");
function wireDialog(d,closeId){document.getElementById(closeId)?.addEventListener("click",()=>d.close());d?.addEventListener("click",e=>{const r=d.getBoundingClientRect();if(!(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom))d.close()})}
document.querySelectorAll("[data-link]").forEach(el=>{const url=links[el.dataset.link];if(url){el.href=url;el.target="_blank";el.rel="noopener noreferrer"}else el.addEventListener("click",e=>{e.preventDefault();coming?.showModal()})});
document.getElementById("musicButton")?.addEventListener("click",()=>music?.showModal());
wireDialog(coming,"closeDialog");wireDialog(music,"closeMusic");
})();
