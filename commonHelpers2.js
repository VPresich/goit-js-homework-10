import{i as h}from"./assets/bi-x-octagon-3022abf6.js";/* empty css                      */import{f as y,i as b}from"./assets/vendor-651d7991.js";function k(e){const n=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return B({days:n,hours:u,minutes:m,seconds:p})}function B(e){return Object.keys(e).reduce((a,s,c)=>{const n=e[s],u=typeof n=="number"&&n<10?n.toString().padStart(2,"0"):typeof n=="string"&&n.length===1?n.padStart(2,"0"):n;return{...a,[s]:u}},{})}const t={days:document.querySelector(".value[data-days]"),hours:document.querySelector(".value[data-hours]"),minutes:document.querySelector(".value[data-minutes]"),seconds:document.querySelector(".value[data-seconds]"),startBtn:document.querySelector("button[data-start]"),picker:document.getElementById("datetime-picker"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.disabled=!0;t.stopBtn.disabled=!0;t.startBtn.addEventListener("click",g);t.stopBtn.addEventListener("click",x);const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=new Date(e[0]);o-new Date>0?(i=o,t.startBtn.disabled=!1):b.show({message:"Please choose a date in the future",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${h}`,iconColor:"#fafafb"})}},S=y("input#datetime-picker",C);let i=null;const v=1e3;let r;function g(){d(),r=setInterval(d,v),D()}function x(){f()}function d(){if(!i)return;const e=i-new Date;if(e<=0){f();return}const o=k(e);l(o)}function l(e){if(e){const{days:o,hours:a,minutes:s,seconds:c}=e;t.days.textContent=o,t.hours.textContent=a,t.minutes.textContent=s,t.seconds.textContent=c}else t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00"}function f(){i=new Date,r&&clearInterval(r),r=null,S.setDate(new Date),l(),t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.picker.disabled=!1}function D(){t.startBtn.disabled=!t.startBtn.disabled,t.picker.disabled=!t.picker.disabled,t.stopBtn.disabled=!t.stopBtn.disabled}
//# sourceMappingURL=commonHelpers2.js.map
