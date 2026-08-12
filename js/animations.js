export function initAnimations(){
 const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches; if(reduced)return;
 const gs=window.gsap, ST=window.ScrollTrigger;
 if(!gs||!ST)return; gs.registerPlugin(ST);
 document.querySelectorAll("section:not(#hero), footer").forEach(section=>{gs.fromTo(section.querySelectorAll(".section-label,.section-title,.reveal"),{y:35,opacity:0},{y:0,opacity:1,duration:.7,stagger:.06,ease:"power2.out",scrollTrigger:{trigger:section,start:"top 82%",once:true}})});
 document.querySelectorAll(".tl-item").forEach((el,i)=>gs.fromTo(el,{x:i%2?-25:25,opacity:0},{x:0,opacity:1,duration:.55,delay:i*.02,scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
 const hero=document.querySelector("#hero"); if(hero){hero.addEventListener("pointermove",e=>{const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);gs.to(hero.querySelector(".hero-grid"),{x:x*12,y:y*8,duration:.8,overwrite:true});gs.to(hero.querySelector(".floating-blocks"),{x:x*20,y:y*14,duration:1,overwrite:true});});}
 const cta=document.querySelector("#final-cta"); if(cta)gs.fromTo(cta,{backgroundPosition:"50% 0%"},{backgroundPosition:"50% 100%",scrollTrigger:{trigger:cta,start:"top bottom",end:"bottom top",scrub:true}});
 gs.to(document.documentElement,{"--world-night":0,scrollTrigger:{trigger:"#timeline-section",start:"top bottom",end:"bottom top",scrub:true}});
}
export function initLenis(){
 if(matchMedia("(prefers-reduced-motion: reduce)").matches||!window.Lenis)return;
 const lenis=new Lenis({duration:1.05,smoothWheel:true}); function raf(t){lenis.raf(t);requestAnimationFrame(raf)} requestAnimationFrame(raf);
}
