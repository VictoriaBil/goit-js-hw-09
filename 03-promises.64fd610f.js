!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=i);var t=i("h6c0i"),r=document.querySelector(".form");function a(e,n){return new Promise((function(o,i){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();var n=Number(r.delay.value),o=Number(r.step.value),i=Number(r.amount.value);if(n<0||o<0||i<0)return void t.Notify.failure("Please, add positive number");for(var u=1;u<=i;u+=1)a(u,n).then((function(e){var n=e.position,o=e.delay;t.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;t.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.64fd610f.js.map
