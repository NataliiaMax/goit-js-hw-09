const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3),t.setAttribute("disabled",!1)})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.5df6d96e.js.map
