!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(){var n=setInterval((function(){e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0})),t.disabled=!0,e.disabled=!1;var d="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor="".concat(d)}),1e3)}))}();
//# sourceMappingURL=01-color-switcher.53ef2e23.js.map
