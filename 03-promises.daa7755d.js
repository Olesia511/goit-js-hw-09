function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=l.elements[0],f=l.elements[1],d=l.elements[2];function s(n,t){return new Promise((()=>{Math.random()>.3?e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t} ms`):e(i).Notify.failure(`❌ Rejected promise ${n} in ${t} ms`)}))}l.addEventListener("submit",(function(n){n.preventDefault();let t=Number(d.value),o=Number(u.value),r=Number(f.value);if(t<1||o<1||r<1)return void e(i).Notify.info(" Fill in all fields 😉 😉 😉");for(let e=1;e<=t;e+=1){let n=o;setTimeout((()=>{s(e,n)}),o),o+=r}})),e(i).Notify.init({info:{background:"#f9a170",textColor:"#4a0404"}});
//# sourceMappingURL=03-promises.daa7755d.js.map