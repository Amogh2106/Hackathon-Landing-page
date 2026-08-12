const target = new Date("2026-10-17T09:00:00+05:30");
const $ = id => document.getElementById(id);
export function updateCountdown(){
 const diff=target-new Date();
 if(diff<=0){ ["days","hours","mins","secs"].forEach(x=>$("cd-"+x).textContent="00"); const box=document.querySelector(".countdown"); if(box) box.setAttribute("data-status","started"); return; }
 const values=[Math.floor(diff/864e5),Math.floor(diff%864e5/36e5),Math.floor(diff%36e5/6e4),Math.floor(diff%6e4/1e3)];
 ["days","hours","mins","secs"].forEach((x,i)=>{const el=$("cd-"+x); const v=String(values[i]).padStart(2,"0"); if(el.textContent!==v){el.classList.remove("countdown-pop"); void el.offsetWidth; el.classList.add("countdown-pop");} el.textContent=v;});
}
