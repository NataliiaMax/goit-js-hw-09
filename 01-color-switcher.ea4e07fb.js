const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.ea4e07fb.js.map
