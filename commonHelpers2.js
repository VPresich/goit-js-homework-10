import{i as h}from"./assets/bi-x-octagon-3022abf6.js";/* empty css                      */import{f as d,i as y}from"./assets/vendor-651d7991.js";let i=null;const b=1e3;let s;const t={days:document.querySelector(".value[data-days]"),hours:document.querySelector(".value[data-hours]"),minutes:document.querySelector(".value[data-minutes]"),seconds:document.querySelector(".value[data-seconds]"),startBtn:document.querySelector("button[data-start]"),picker:document.getElementById("datetime-picker"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.disabled=!0;t.stopBtn.disabled=!0;t.startBtn.addEventListener("click",S);t.stopBtn.addEventListener("click",D);const B={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=new Date(e[0]);o-new Date>0?(i=o,t.startBtn.disabled=!1):y.show({message:"Please choose a date in the future",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${h}`,iconColor:"#fafafb",overlay:!0})}},k=d("input#datetime-picker",B);function u(){if(!i)return;const e=i-new Date;if(console.log("restTime",e),e<=0){l(),clearInterval(s),s=null;return}const o=g(e);C(o)}function g(e){const n=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return v({days:n,hours:c,minutes:m,seconds:p})}function v(e){return Object.keys(e).reduce((r,a,f)=>{const n=e[a],c=typeof n=="number"&&n<10?n.toString().padStart(2,"0"):typeof n=="string"&&n.length===1?n.padStart(2,"0"):n;return{...r,[a]:c}},{})}function S(){u(),s=setInterval(u,b),l()}function C({days:e,hours:o,minutes:r,seconds:a}){t.days.textContent=e,t.hours.textContent=o,t.minutes.textContent=r,t.seconds.textContent=a}function D(){w()}function l(){t.startBtn.disabled=!t.startBtn.disabled,t.picker.disabled=!t.picker.disabled,t.stopBtn.disabled=!t.stopBtn.disabled}function w(){i=new Date,d.Date=new Date,clearInterval(s),s=null,t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.picker.disabled=!1,k.setDate(new Date)}
//# sourceMappingURL=commonHelpers2.js.map