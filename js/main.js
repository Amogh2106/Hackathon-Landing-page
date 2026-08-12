import {initContent} from "./content.js"; import {initNavigation} from "./navigation.js"; import {updateCountdown} from "./countdown.js"; import {initAnimations,initLenis} from "./animations.js";
initContent(); initNavigation(); updateCountdown(); setInterval(updateCountdown,1000);
window.addEventListener("load",()=>{initLenis();initAnimations();});
