const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),timerId=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3)})),r.addEventListener("click",(()=>{e.removeAttribute("disabled"),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.49c42aec.js.map
