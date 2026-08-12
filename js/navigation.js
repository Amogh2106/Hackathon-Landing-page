export function initNavigation(){
 const ham=document.getElementById("nav-ham"), mob=document.getElementById("mobile-menu"); if(!ham||!mob)return;
 const close=()=>{mob.classList.remove("open");ham.setAttribute("aria-expanded","false");ham.textContent="☰";document.body.classList.remove("menu-open");};
 ham.addEventListener("click",()=>{const open=mob.classList.toggle("open");ham.setAttribute("aria-expanded",String(open));ham.textContent=open?"✕":"☰";document.body.classList.toggle("menu-open",open);});
 document.querySelectorAll(".mobile-menu a,.mobile-menu button").forEach(el=>el.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
 const nav=document.querySelector("nav"); window.addEventListener("scroll",()=>nav?.classList.toggle("scrolled",scrollY>30),{passive:true});
}
