/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.dat=t():e.dat=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";e.exports={color:{Color:n(2),math:n(6),interpret:n(3)},controllers:{Controller:n(7),BooleanController:n(8),OptionController:n(10),StringController:n(11),NumberController:n(12),NumberControllerBox:n(13),NumberControllerSlider:n(14),FunctionController:n(20),ColorController:n(21)},dom:{dom:n(9)},gui:{GUI:n(22)},GUI:n(22)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(_.recalculateRGB(this,t,n),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(_.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=e}})}function a(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(_.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(_.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}t.__esModule=!0;var s=n(3),l=o(s),u=n(6),d=o(u),c=n(4),f=o(c),h=n(5),p=o(h),_=function(){function e(){if(i(this,e),this.__state=l["default"].apply(this,arguments),this.__state===!1)throw"Failed to interpret color arguments";this.__state.a=this.__state.a||1}return e.prototype.toString=function(){return f["default"](this)},e.prototype.toOriginal=function(){return this.__state.conversion.write(this)},e}();_.recalculateRGB=function(e,t,n){if("HEX"===e.__state.space)e.__state[t]=d["default"].component_from_hex(e.__state.hex,n);else{if("HSV"!==e.__state.space)throw"Corrupted color state";p["default"].extend(e.__state,d["default"].hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},_.recalculateHSV=function(e){var t=d["default"].rgb_to_hsv(e.r,e.g,e.b);p["default"].extend(e.__state,{s:t.s,v:t.v}),p["default"].isNaN(t.h)?p["default"].isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},_.COMPONENTS=["r","g","b","h","s","v","hex","a"],r(_.prototype,"r",2),r(_.prototype,"g",1),r(_.prototype,"b",0),a(_.prototype,"h"),a(_.prototype,"s"),a(_.prototype,"v"),Object.defineProperty(_.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(_.prototype,"hex",{get:function(){return"HEX"!==!this.__state.space&&(this.__state.hex=d["default"].rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}}),t["default"]=_,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),r=o(i),a=n(5),s=o(a),l=[{litmus:s["default"].isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null===t?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:r["default"]},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null===t?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:r["default"]},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null===t?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:r["default"]},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);return null===t?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:r["default"]}}},{litmus:s["default"].isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:s["default"].isArray,conversions:{RGB_ARRAY:{read:function(e){return 3!==e.length?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4!==e.length?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:s["default"].isObject,conversions:{RGBA_OBJ:{read:function(e){return s["default"].isNumber(e.r)&&s["default"].isNumber(e.g)&&s["default"].isNumber(e.b)&&s["default"].isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return s["default"].isNumber(e.r)&&s["default"].isNumber(e.g)&&s["default"].isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return s["default"].isNumber(e.h)&&s["default"].isNumber(e.s)&&s["default"].isNumber(e.v)&&s["default"].isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return s["default"].isNumber(e.h)&&s["default"].isNumber(e.s)&&s["default"].isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],u=void 0,d=void 0,c=function(){d=!1;var e=arguments.length>1?s["default"].toArray(arguments):arguments[0];return s["default"].each(l,function(t){return t.litmus(e)?(s["default"].each(t.conversions,function(t,n){return u=t.read(e),d===!1&&u!==!1?(d=u,u.conversionName=n,u.conversion=t,s["default"].BREAK):void 0}),s["default"].BREAK):void 0}),d};t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(5),r=o(i);t["default"]=function(e){if(1===e.a||r["default"].isUndefined(e.a)){for(var t=e.hex.toString(16);t.length<6;)t="0"+t;return"#"+t}return"rgba("+Math.round(e.r)+","+Math.round(e.g)+","+Math.round(e.b)+","+e.a+")"},e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0;var n=Array.prototype.forEach,o=Array.prototype.slice,i={BREAK:{},extend:function(e){return this.each(o.call(arguments,1),function(t){for(var n in t)this.isUndefined(t[n])||(e[n]=t[n])},this),e},defaults:function(e){return this.each(o.call(arguments,1),function(t){for(var n in t)this.isUndefined(e[n])&&(e[n]=t[n])},this),e},compose:function(){var e=o.call(arguments);return function(){for(var t=o.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,o){if(e)if(n&&e.forEach&&e.forEach===n)e.forEach(t,o);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;r>i;i++)if(i in e&&t.call(o,e[i],i)===this.BREAK)return}else for(var i in e)if(t.call(o,e[i],i)===this.BREAK)return},defer:function(e){setTimeout(e,0)},toArray:function(e){return e.toArray?e.toArray():o.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}};t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0;var n,o={hsv_to_rgb:function(e,t,n){var o=Math.floor(e/60)%6,i=e/60-Math.floor(e/60),r=n*(1-t),a=n*(1-i*t),s=n*(1-(1-i)*t),l=[[n,s,r],[a,n,r],[r,n,s],[r,a,n],[s,r,n],[n,r,a]][o];return{r:255*l[0],g:255*l[1],b:255*l[2]}},rgb_to_hsv:function(e,t,n){var o,i,r=Math.min(e,t,n),a=Math.max(e,t,n),s=a-r;return 0==a?{h:NaN,s:0,v:0}:(i=s/a,o=e==a?(t-n)/s:t==a?2+(n-e)/s:4+(e-t)/s,o/=6,0>o&&(o+=1),{h:360*o,s:i,v:a/255})},rgb_to_hex:function(e,t,n){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,t),o=this.hex_with_component(o,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,o){return o<<(n=8*t)|e&~(255<<n)}};t["default"]=o,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(5),a=(o(r),function(){function e(t,n){i(this,e),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return e.prototype.onChange=function(e){return this.__onChange=e,this},e.prototype.onFinishChange=function(e){return this.__onFinishChange=e,this},e.prototype.setValue=function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this},e.prototype.getValue=function(){return this.object[this.property]},e.prototype.updateDisplay=function(){return this},e.prototype.isModified=function(){return this.initialValue!==this.getValue()},e}());t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(7),s=o(a),l=n(9),u=o(l),d=n(5),c=(o(d),function(e){function t(n,o){function r(){a.setValue(!a.__prev)}i(this,t),e.call(this,n,o);var a=this;this.__prev=this.getValue(),this.__checkbox=document.createElement("input"),this.__checkbox.setAttribute("type","checkbox"),u["default"].bind(this.__checkbox,"change",r,!1),this.domElement.appendChild(this.__checkbox),this.updateDisplay()}return r(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n},t.prototype.updateDisplay=function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0):this.__checkbox.checked=!1,e.prototype.updateDisplay.call(this)},t}(s["default"]));t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){if("0"===e||a["default"].isUndefined(e))return 0;var t=e.match(u);return a["default"].isNull(t)?0:parseFloat(t[1])}t.__esModule=!0;var r=n(5),a=o(r),s={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},l={};a["default"].each(s,function(e,t){a["default"].each(e,function(e){l[e]=t})});var u=/(\d+(\.\d+)?)px/,d={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){a["default"].isUndefined(t)&&(t=!0),a["default"].isUndefined(n)&&(n=!0),e.style.position="absolute",t&&(e.style.left=0,e.style.right=0),n&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,o){n=n||{};var i=l[t];if(!i)throw new Error("Event type "+t+" not supported.");var r=document.createEvent(i);switch(i){case"MouseEvents":var s=n.x||n.clientX||0,u=n.y||n.clientY||0;r.initMouseEvent(t,n.bubbles||!1,n.cancelable||!0,window,n.clickCount||1,0,0,s,u,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var d=r.initKeyboardEvent||r.initKeyEvent;a["default"].defaults(n,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,n.bubbles||!1,n.cancelable,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode);break;default:r.initEvent(t,n.bubbles||!1,n.cancelable||!0)}a["default"].defaults(r,o),e.dispatchEvent(r)},bind:function(e,t,n,o){return o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,n),d},unbind:function(e,t,n,o){return o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n),d},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);-1==n.indexOf(t)&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(void 0===e.className);else if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),o=n.indexOf(t);-1!=o&&(n.splice(o,1),e.className=n.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return i(t["border-left-width"])+i(t["border-right-width"])+i(t["padding-left"])+i(t["padding-right"])+i(t.width)},getHeight:function(e){var t=getComputedStyle(e);return i(t["border-top-width"])+i(t["border-bottom-width"])+i(t["padding-top"])+i(t["padding-bottom"])+i(t.height)},getOffset:function(e){var t={left:0,top:0};if(e.offsetParent)do t.left+=e.offsetLeft,t.top+=e.offsetTop;while(e=e.offsetParent);return t},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}};t["default"]=d,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(7),s=o(a),l=n(9),u=o(l),d=n(5),c=o(d),f=function(e){function t(n,o,r){i(this,t),e.call(this,n,o);var a=this;if(this.__select=document.createElement("select"),c["default"].isArray(r)){var s={};c["default"].each(r,function(e){s[e]=e}),r=s}c["default"].each(r,function(e,t){var n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",e),a.__select.appendChild(n)}),this.updateDisplay(),u["default"].bind(this.__select,"change",function(){var e=this.options[this.selectedIndex].value;a.setValue(e)}),this.domElement.appendChild(this.__select)}return r(t,e),t.prototype.setValue=function(t){var n=e.prototype.setValue.call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n},t.prototype.updateDisplay=function(){return this.__select.value=this.getValue(),e.prototype.updateDisplay.call(this)},t}(s["default"]);t["default"]=f,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(7),s=o(a),l=n(9),u=o(l),d=n(5),c=(o(d),function(e){function t(n,o){function r(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}i(this,t),e.call(this,n,o);var s=this;this.__input=document.createElement("input"),this.__input.setAttribute("type","text"),u["default"].bind(this.__input,"keyup",r),u["default"].bind(this.__input,"change",r),u["default"].bind(this.__input,"blur",a),u["default"].bind(this.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),this.updateDisplay(),this.domElement.appendChild(this.__input)}return r(t,e),t.prototype.updateDisplay=function(){return u["default"].isActive(this.__input)||(this.__input.value=this.getValue()),e.prototype.updateDisplay.call(this)},t}(s["default"]));t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return e=e.toString(),e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}t.__esModule=!0;var s=n(7),l=o(s),u=n(5),d=o(u),c=function(e){function t(n,o,r){i(this,t),e.call(this,n,o),r=r||{},this.__min=r.min,this.__max=r.max,this.__step=r.step,d["default"].isUndefined(this.__step)?0==this.initialValue?this.__impliedStep=1:this.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(this.initialValue))/Math.LN10))/10:this.__impliedStep=this.__step,this.__precision=a(this.__impliedStep)}return r(t,e),t.prototype.setValue=function(t){return void 0!==this.__min&&t<this.__min?t=this.__min:void 0!==this.__max&&t>this.__max&&(t=this.__max),void 0!==this.__step&&t%this.__step!=0&&(t=Math.round(t/this.__step)*this.__step),e.prototype.setValue.call(this,t)},t.prototype.min=function(e){return this.__min=e,this},t.prototype.max=function(e){return this.__max=e,this},t.prototype.step=function(e){return this.__step=e,this.__impliedStep=e,this.__precision=a(e),this},t}(l["default"]);t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}t.__esModule=!0;var s=n(12),l=o(s),u=n(9),d=o(u),c=n(5),f=o(c),h=function(e){function t(n,o,r){function a(){var e=parseFloat(p.__input.value);f["default"].isNaN(e)||p.setValue(e)}function s(){a(),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}function l(e){d["default"].bind(window,"mousemove",u),d["default"].bind(window,"mouseup",c),h=e.clientY}function u(e){var t=h-e.clientY;p.setValue(p.getValue()+t*p.__impliedStep),h=e.clientY}function c(){d["default"].unbind(window,"mousemove",u),d["default"].unbind(window,"mouseup",c)}i(this,t),e.call(this,n,o,r),this.__truncationSuspended=!1;var h,p=this;this.__input=document.createElement("input"),this.__input.setAttribute("type","text"),d["default"].bind(this.__input,"change",a),d["default"].bind(this.__input,"blur",s),d["default"].bind(this.__input,"mousedown",l),d["default"].bind(this.__input,"keydown",function(e){13===e.keyCode&&(p.__truncationSuspended=!0,this.blur(),p.__truncationSuspended=!1)}),this.updateDisplay(),this.domElement.appendChild(this.__input)}return r(t,e),t.prototype.updateDisplay=function(){return this.__input.value=this.__truncationSuspended?this.getValue():a(this.getValue(),this.__precision),e.prototype.updateDisplay.call(this)},t}(l["default"]);t["default"]=h,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n,o,i){return o+(i-o)*((e-t)/(n-t))}t.__esModule=!0;var s=n(12),l=o(s),u=n(9),d=o(u),c=n(15),f=o(c),h=n(5),p=(o(h),n(16)),_=o(p),m=function(e){function t(n,o,r,s,l){function u(e){d["default"].bind(window,"mousemove",c),d["default"].bind(window,"mouseup",f),c(e)}function c(e){e.preventDefault();var t=d["default"].getOffset(h.__background),n=d["default"].getWidth(h.__background);return h.setValue(a(e.clientX,t.left,t.left+n,h.__min,h.__max)),!1}function f(){d["default"].unbind(window,"mousemove",c),d["default"].unbind(window,"mouseup",f),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}i(this,t),e.call(this,n,o,{min:r,max:s,step:l});var h=this;this.__background=document.createElement("div"),this.__foreground=document.createElement("div"),d["default"].bind(this.__background,"mousedown",u),d["default"].addClass(this.__background,"slider"),d["default"].addClass(this.__foreground,"slider-fg"),this.updateDisplay(),this.__background.appendChild(this.__foreground),this.domElement.appendChild(this.__background)}return r(t,e),t.prototype.updateDisplay=function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*t+"%",e.prototype.updateDisplay.call(this)},t}(l["default"]);m.useDefaultStyles=function(){f["default"].inject(_["default"])},t["default"]=m,e.exports=t["default"]},function(e,t){"use strict";e.exports={load:function(e,t){var n=t||document,o=n.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,n.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,t){var n=t||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e,n.getElementsByTagName("head")[0].appendChild(o)}}},function(e,t,n){var o=n(17);"string"==typeof o&&(o=[[e.id,o,""]]);n(19)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".slider{box-shadow:inset 0 2px 4px rgba(0,0,0,.15);height:1em;border-radius:1em;background-color:#eee;padding:0 .5em;overflow:hidden}.slider-fg{padding:1px 0 2px;background-color:#aaa;height:1em;margin-left:-.5em;padding-right:.5em;border-radius:1em 0 0 1em}.slider-fg:after{display:inline-block;border-radius:1em;background-color:#fff;border:1px solid #aaa;content:'';float:right;margin-right:-1em;margin-top:-1px;height:.9em;width:.9em}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=c[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(s(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(s(o.parts[r],t));c[o.id]={id:o.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],s=i[2],l=i[3],u={css:a,media:s,sourceMap:l};n[r]?n[r].parts.push(u):t.push(n[r]={id:r,parts:[u]})}return t}function r(){var e=document.createElement("style"),t=p();return e.type="text/css",t.appendChild(e),e}function a(){var e=document.createElement("link"),t=p();return e.rel="stylesheet",t.appendChild(e),e}function s(e,t){var n,o,i;if(t.singleton){var s=m++;n=_||(_=r()),o=l.bind(null,n,s,!1),i=l.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(),o=d.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=r(),o=u.bind(null,n),i=function(){n.parentNode.removeChild(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function l(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var n=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=(t.media,t.sourceMap);o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var c={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,m=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h());var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=c[s.id];l.refs--,r.push(l)}if(e){var u=i(e);o(u,t)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete c[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(7),s=o(a),l=n(9),u=o(l),d=n(5),c=(o(d),function(e){function t(n,o,r){i(this,t),e.call(this,n,o);var a=this;this.__button=document.createElement("div"),this.__button.innerHTML=void 0===r?"Fire":r,u["default"].bind(this.__button,"click",function(e){return e.preventDefault(),a.fire(),!1}),u["default"].addClass(this.__button,"button"),this.domElement.appendChild(this.__button)}return r(t,e),t.prototype.fire=function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},t}(s["default"]));t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n,o){e.style.background="",g["default"].each(v,function(i){e.style.cssText+="background: "+i+"linear-gradient("+t+", "+n+" 0%, "+o+" 100%); "})}function s(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}t.__esModule=!0;var l=n(7),u=o(l),d=n(9),c=o(d),f=n(2),h=o(f),p=n(3),_=o(p),m=n(5),g=o(m),b=function(e){function t(n,o){function r(e){f(e),c["default"].bind(window,"mousemove",f),c["default"].bind(window,"mouseup",l)}function l(){c["default"].unbind(window,"mousemove",f),c["default"].unbind(window,"mouseup",l)}function u(){var e=_["default"](this.value);e!==!1?(m.__color.__state=e,m.setValue(m.__color.toOriginal())):this.value=m.__color.toString()}function d(){c["default"].unbind(window,"mousemove",p),c["default"].unbind(window,"mouseup",d)}function f(e){e.preventDefault();var t=c["default"].getWidth(m.__saturation_field),n=c["default"].getOffset(m.__saturation_field),o=(e.clientX-n.left+document.body.scrollLeft)/t,i=1-(e.clientY-n.top+document.body.scrollTop)/t;return i>1?i=1:0>i&&(i=0),o>1?o=1:0>o&&(o=0),m.__color.v=i,m.__color.s=o,m.setValue(m.__color.toOriginal()),!1}function p(e){e.preventDefault();var t=c["default"].getHeight(m.__hue_field),n=c["default"].getOffset(m.__hue_field),o=1-(e.clientY-n.top+document.body.scrollTop)/t;return o>1?o=1:0>o&&(o=0),m.__color.h=360*o,m.setValue(m.__color.toOriginal()),!1}i(this,t),e.call(this,n,o),this.__color=new h["default"](this.getValue()),this.__temp=new h["default"](0);var m=this;this.domElement=document.createElement("div"),c["default"].makeSelectable(this.domElement,!1),this.__selector=document.createElement("div"),this.__selector.className="selector",this.__saturation_field=document.createElement("div"),this.__saturation_field.className="saturation-field",this.__field_knob=document.createElement("div"),this.__field_knob.className="field-knob",this.__field_knob_border="2px solid ",this.__hue_knob=document.createElement("div"),this.__hue_knob.className="hue-knob",this.__hue_field=document.createElement("div"),this.__hue_field.className="hue-field",this.__input=document.createElement("input"),this.__input.type="text",this.__input_textShadow="0 1px 1px ",c["default"].bind(this.__input,"keydown",function(e){13===e.keyCode&&u.call(this)}),c["default"].bind(this.__input,"blur",u),c["default"].bind(this.__selector,"mousedown",function(e){c["default"].addClass(this,"drag").bind(window,"mouseup",function(e){c["default"].removeClass(m.__selector,"drag")})});var b=document.createElement("div");g["default"].extend(this.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),g["default"].extend(this.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:this.__field_knob_border+(this.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),g["default"].extend(this.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),g["default"].extend(this.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),g["default"].extend(b.style,{width:"100%",height:"100%",background:"none"}),a(b,"top","rgba(0,0,0,0)","#000"),g["default"].extend(this.__hue_field.style,{width:"15px",height:"100px",display:"inline-block",border:"1px solid #555",cursor:"ns-resize"}),s(this.__hue_field),g["default"].extend(this.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:this.__input_textShadow+"rgba(0,0,0,0.7)"}),c["default"].bind(this.__saturation_field,"mousedown",r),c["default"].bind(this.__field_knob,"mousedown",r),c["default"].bind(this.__hue_field,"mousedown",function(e){p(e),c["default"].bind(window,"mousemove",p),c["default"].bind(window,"mouseup",d)}),this.__saturation_field.appendChild(b),this.__selector.appendChild(this.__field_knob),this.__selector.appendChild(this.__saturation_field),this.__selector.appendChild(this.__hue_field),this.__hue_field.appendChild(this.__hue_knob),
this.domElement.appendChild(this.__input),this.domElement.appendChild(this.__selector),this.updateDisplay()}return r(t,e),t.prototype.updateDisplay=function(){var e=_["default"](this.getValue());if(e!==!1){var t=!1;g["default"].each(h["default"].COMPONENTS,function(n){return g["default"].isUndefined(e[n])||g["default"].isUndefined(this.__color.__state[n])||e[n]===this.__color.__state[n]?void 0:(t=!0,{})},this),t&&g["default"].extend(this.__color.__state,e)}g["default"].extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,o=255-n;g["default"].extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,a(this.__saturation_field,"left","#fff",this.__temp.toString()),g["default"].extend(this.__input.style,{backgroundColor:this.__input.value=this.__color.toString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},t}(u["default"]),v=["-moz-","-o-","-webkit-","-ms-",""];t["default"]=b,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){var o=document.createElement("li");return t&&o.appendChild(t),n?e.__ul.insertBefore(o,params.before):e.__ul.appendChild(o),e.onResize(),o}function r(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];t?n.innerHTML=n.value+"*":n.innerHTML=n.value}function a(e,t,n){if(n.__li=t,n.__gui=e,K["default"].extend(n,{options:function(t){return arguments.length>1?(n.remove(),l(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[K["default"].toArray(arguments)]})):K["default"].isArray(t)||K["default"].isObject(t)?(n.remove(),l(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[t]})):void 0},name:function(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof j["default"])!function(){var e=new M["default"](n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});K["default"].each(["updateDisplay","onChange","onFinishChange"],function(t){var o=n[t],i=e[t];n[t]=e[t]=function(){var t=Array.prototype.slice.call(arguments);return o.apply(n,t),i.apply(e,t)}}),G["default"].addClass(t,"has-slider"),n.domElement.insertBefore(e.domElement,n.domElement.firstElementChild)}();else if(n instanceof M["default"]){var o=function(t){return K["default"].isNumber(n.__min)&&K["default"].isNumber(n.__max)?(n.remove(),l(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]})):t};n.min=K["default"].compose(o,n.min),n.max=K["default"].compose(o,n.max)}else n instanceof T["default"]?(G["default"].bind(t,"click",function(){G["default"].fakeEvent(n.__checkbox,"click")}),G["default"].bind(n.__checkbox,"click",function(e){e.stopPropagation()})):n instanceof R["default"]?(G["default"].bind(t,"click",function(){G["default"].fakeEvent(n.__button,"click")}),G["default"].bind(t,"mouseover",function(){G["default"].addClass(n.__button,"hover")}),G["default"].bind(t,"mouseout",function(){G["default"].removeClass(n.__button,"hover")})):n instanceof D["default"]&&(G["default"].addClass(t,"color"),n.updateDisplay=K["default"].compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=K["default"].compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&r(e.getRoot(),!0),t},n.setValue)}function s(e,t){var n=e.getRoot(),o=n.__rememberedObjects.indexOf(t.object);if(-1!==o){var i=n.__rememberedObjectIndecesToControllers[o];if(void 0===i&&(i={},n.__rememberedObjectIndecesToControllers[o]=i),i[t.property]=t,n.load&&n.load.remembered){var r=n.load.remembered,a=void 0;if(r[e.preset])a=r[e.preset];else{if(!r[Z])return;a=r[Z]}if(a[o]&&void 0!==a[o][t.property]){var s=a[o][t.property];t.initialValue=s,t.setValue(s)}}}}function l(e,t,n,o){if(void 0===t[n])throw new Error('Object "'+t+'" has no property "'+n+'"');var r=void 0;if(o.color)r=new D["default"](t,n);else{var l=[t,n].concat(o.factoryArgs);r=A["default"].apply(e,l)}o.before instanceof k["default"]&&(o.before=o.before.__li),s(e,r),G["default"].addClass(r.domElement,"c");var u=document.createElement("span");G["default"].addClass(u,"property-name"),u.innerHTML=r.property;var d=document.createElement("div");d.appendChild(u),d.appendChild(r.domElement);var c=i(e,d,o.before);return G["default"].addClass(c,oe.CLASS_CONTROLLER_ROW),r instanceof D["default"]?G["default"].addClass(c,"color"):G["default"].addClass(c,typeof r.getValue()),a(e,c,r),e.__controllers.push(r),r}function u(e,t){return document.location.href+"."+t}function d(e,t,n){var o=document.createElement("option");o.innerHTML=t,o.value=t,e.__preset_select.appendChild(o),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function c(e){e.style.display=gui.useLocalStorage?"block":"none"}function f(e){var t=e.__save_row=document.createElement("li");G["default"].addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),G["default"].addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",G["default"].addClass(n,"button gears");var o=document.createElement("span");o.innerHTML="Save",G["default"].addClass(o,"button"),G["default"].addClass(o,"save");var i=document.createElement("span");i.innerHTML="New",G["default"].addClass(i,"button"),G["default"].addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",G["default"].addClass(r,"button"),G["default"].addClass(r,"revert");var a=e.__preset_select=document.createElement("select");e.load&&e.load.remembered?K["default"].each(e.load.remembered,function(t,n){d(e,n,n===e.preset)}):d(e,Z,!1),G["default"].bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(n),t.appendChild(o),t.appendChild(i),t.appendChild(r),$&&!function(){var t=document.getElementById("dg-local-explain"),n=document.getElementById("dg-local-storage"),o=document.getElementById("dg-save-locally");o.style.display="block","true"===localStorage.getItem(u(e,"isLocal"))&&n.setAttribute("checked","checked"),c(t),G["default"].bind(n,"change",function(){e.useLocalStorage=!e.useLocalStorage,c(t)})}();var s=document.getElementById("dg-new-constructor");G["default"].bind(s,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||W.hide()}),G["default"].bind(n,"click",function(){s.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),W.show(),s.focus(),s.select()}),G["default"].bind(o,"click",function(){e.save()}),G["default"].bind(i,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),G["default"].bind(r,"click",function(){e.revert()})}function h(e){function t(t){return t.preventDefault(),e.width+=i-t.clientX,e.onResize(),i=t.clientX,!1}function n(){G["default"].removeClass(e.__closeButton,oe.CLASS_DRAG),G["default"].unbind(window,"mousemove",t),G["default"].unbind(window,"mouseup",n)}function o(o){return o.preventDefault(),i=o.clientX,G["default"].addClass(e.__closeButton,oe.CLASS_DRAG),G["default"].bind(window,"mousemove",t),G["default"].bind(window,"mouseup",n),!1}var i=void 0;e.__resize_handle=document.createElement("div"),K["default"].extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),G["default"].bind(e.__resize_handle,"mousedown",o),G["default"].bind(e.__closeButton,"mousedown",o),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function p(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function _(e,t){var n={};return K["default"].each(e.__rememberedObjects,function(o,i){var r={},a=e.__rememberedObjectIndecesToControllers[i];K["default"].each(a,function(e,n){r[n]=t?e.initialValue:e.getValue()}),n[i]=r}),n}function m(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function g(e){0!==e.length&&F["default"](function(){g(e)}),K["default"].each(e,function(e){e.updateDisplay()})}var b=n(15),v=o(b),y=n(23),x=o(y),w=n(24),E=o(w),C=n(26),A=o(C),S=n(7),k=o(S),O=n(8),T=o(O),L=n(20),R=o(L),N=n(13),M=o(N),B=n(14),j=o(B),P=n(10),V=(o(P),n(21)),D=o(V),H=n(27),F=o(H),I=n(28),U=o(I),z=n(9),G=o(z),X=n(5),K=o(X);v["default"].inject(E["default"]);var W,Y,J="dg",Q=72,q=20,Z="Default",$=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}(),ee=!0,te=!1,ne=[],oe=function ie(e){function t(){var e=n.getRoot();e.width+=1,K["default"].defer(function(){e.width-=1})}var n=this;this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),G["default"].addClass(this.domElement,J),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],e=e||{},e=K["default"].defaults(e,{autoPlace:!0,width:ie.DEFAULT_WIDTH}),e=K["default"].defaults(e,{resizable:e.autoPlace,hideable:e.autoPlace}),K["default"].isUndefined(e.load)?e.load={preset:Z}:e.preset&&(e.load.preset=e.preset),K["default"].isUndefined(e.parent)&&e.hideable&&ne.push(this),e.resizable=K["default"].isUndefined(e.parent)&&e.resizable,e.autoPlace&&K["default"].isUndefined(e.scrollable)&&(e.scrollable=!0);var o,r=$&&"true"===localStorage.getItem(u(this,"isLocal"));if(Object.defineProperties(this,{parent:{get:function(){return e.parent}},scrollable:{get:function(){return e.scrollable}},autoPlace:{get:function(){return e.autoPlace}},preset:{get:function(){return n.parent?n.getRoot().preset:e.load.preset},set:function(t){n.parent?n.getRoot().preset=t:e.load.preset=t,m(this),n.revert()}},width:{get:function(){return e.width},set:function(t){e.width=t,p(n,t)}},name:{get:function(){return e.name},set:function(t){e.name=t,s&&(s.innerHTML=e.name)}},closed:{get:function(){return e.closed},set:function(t){e.closed=t,e.closed?G["default"].addClass(n.__ul,ie.CLASS_CLOSED):G["default"].removeClass(n.__ul,ie.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=t?ie.TEXT_OPEN:ie.TEXT_CLOSED)}},load:{get:function(){return e.load}},useLocalStorage:{get:function(){return r},set:function(e){$&&(r=e,e?G["default"].bind(window,"unload",o):G["default"].unbind(window,"unload",o),localStorage.setItem(u(n,"isLocal"),e))}}}),K["default"].isUndefined(e.parent)){if(e.closed=!1,G["default"].addClass(this.domElement,ie.CLASS_MAIN),G["default"].makeSelectable(this.domElement,!1),$&&r){n.useLocalStorage=!0;var a=localStorage.getItem(u(this,"gui"));a&&(e.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=ie.TEXT_CLOSED,G["default"].addClass(this.__closeButton,ie.CLASS_CLOSE_BUTTON),this.domElement.appendChild(this.__closeButton),G["default"].bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===e.closed&&(e.closed=!0);var s=document.createTextNode(e.name);G["default"].addClass(s,"controller-name");var l=i(n,s),d=function(e){return e.preventDefault(),n.closed=!n.closed,!1};G["default"].addClass(this.__ul,ie.CLASS_CLOSED),G["default"].addClass(l,"title"),G["default"].bind(l,"click",d),e.closed||(this.closed=!1)}e.autoPlace&&(K["default"].isUndefined(e.parent)&&(ee&&(Y=document.createElement("div"),G["default"].addClass(Y,J),G["default"].addClass(Y,ie.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Y),ee=!1),Y.appendChild(this.domElement),G["default"].addClass(this.domElement,ie.CLASS_AUTO_PLACE)),this.parent||p(n,e.width)),G["default"].bind(window,"resize",function(){n.onResize()}),G["default"].bind(this.__ul,"webkitTransitionEnd",function(){n.onResize()}),G["default"].bind(this.__ul,"transitionend",function(){n.onResize()}),G["default"].bind(this.__ul,"oTransitionEnd",function(){n.onResize()}),this.onResize(),e.resizable&&h(this),o=function(){$&&"true"===localStorage.getItem(u(n,"isLocal"))&&localStorage.setItem(u(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=o;n.getRoot();e.parent||t()};oe.toggleHide=function(){te=!te,K["default"].each(ne,function(e){e.domElement.style.zIndex=te?-999:999,e.domElement.style.opacity=te?0:1})},oe.CLASS_AUTO_PLACE="a",oe.CLASS_AUTO_PLACE_CONTAINER="ac",oe.CLASS_MAIN="main",oe.CLASS_CONTROLLER_ROW="cr",oe.CLASS_TOO_TALL="taller-than-window",oe.CLASS_CLOSED="closed",oe.CLASS_CLOSE_BUTTON="close-button",oe.CLASS_DRAG="drag",oe.DEFAULT_WIDTH=245,oe.TEXT_CLOSED="Close Controls",oe.TEXT_OPEN="Open Controls",G["default"].bind(window,"keydown",function(e){"text"===document.activeElement.type||e.which!==Q&&e.keyCode!=Q||oe.toggleHide()},!1),K["default"].extend(oe.prototype,{add:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return l(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})}),addColor:function(e,t){return l(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;K["default"].defer(function(){t.onResize()})},destroy:function(){this.autoPlace&&Y.removeChild(this.domElement)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new oe(t);this.__folders[e]=n;var o=i(this,n.domElement);return G["default"].addClass(o,"folder"),n},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=G["default"].getOffset(e.__ul).top,n=0;K["default"].each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=G["default"].getHeight(t))}),window.innerHeight-t-q<n?(G["default"].addClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-q+"px"):(G["default"].removeClass(e.domElement,oe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K["default"].defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},remember:function(){if(K["default"].isUndefined(W)&&(W=new U["default"],W.domElement.innerHTML=x["default"]),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K["default"].each(Array.prototype.slice.call(arguments),function(t){0==e.__rememberedObjects.length&&f(e),-1==e.__rememberedObjects.indexOf(t)&&e.__rememberedObjects.push(t)}),this.autoPlace&&p(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_(this)),e.folders={},K["default"].each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_(this),r(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Z]=_(this,!0)),this.load.remembered[e]=_(this),this.preset=e,d(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K["default"].each(this.__controllers,function(t){this.getRoot().load.remembered?s(e||this.getRoot(),t):t.setValue(t.initialValue)},this),K["default"].each(this.__folders,function(e){e.revert(e)}),e||r(this.getRoot(),!1)},listen:function(e){var t=0==this.__listening.length;this.__listening.push(e),t&&g(this.__listening)}}),e.exports=oe},function(e,t){e.exports='<div id=dg-save class="dg dialogue">Here\'s the new load parameter for your <code>GUI</code>\'s constructor:<textarea id=dg-new-constructor></textarea><div id=dg-save-locally><input id=dg-local-storage type="checkbox"> Automatically save values to <code>localStorage</code> on exit.<div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>\'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do.</div></div></div>'},function(e,t,n){var o=n(25);"string"==typeof o&&(o=[[e.id,o,""]]);n(19)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:9pt 0;display:block;width:440px;overflow-y:scroll;height:75pt;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande',sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:81pt}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:1pc;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:0}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}",""])},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(10),r=o(i),a=n(13),s=o(a),l=n(14),u=o(l),d=n(11),c=o(d),f=n(20),h=o(f),p=n(8),_=o(p),m=n(5),g=o(m),b=function(e,t){var n=e[t];return g["default"].isArray(arguments[2])||g["default"].isObject(arguments[2])?new r["default"](e,t,arguments[2]):g["default"].isNumber(n)?g["default"].isNumber(arguments[2])&&g["default"].isNumber(arguments[3])?g["default"].isNumber(arguments[4])?new u["default"](e,t,arguments[2],arguments[3],arguments[4]):new u["default"](e,t,arguments[2],arguments[3]):new s["default"](e,t,{min:arguments[2],max:arguments[3]}):g["default"].isString(n)?new c["default"](e,t):g["default"].isFunction(n)?new h["default"](e,t,""):g["default"].isBoolean(n)?new _["default"](e,t):void 0};t["default"]=b,e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(){function e(e){window.setTimeout(e,1e3/60)}return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||e},e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(9),a=o(r),s=n(5),l=o(s),u=function(){function e(){i(this,e),this.backgroundElement=document.createElement("div"),l["default"].extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),a["default"].makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),l["default"].extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;a["default"].bind(this.backgroundElement,"click",function(){t.hide()})}return e.prototype.show=function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),l["default"].defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})},e.prototype.hide=function t(){var e=this,t=function n(){e.domElement.style.display="none",e.backgroundElement.style.display="none",a["default"].unbind(e.domElement,"webkitTransitionEnd",n),a["default"].unbind(e.domElement,"transitionend",n),a["default"].unbind(e.domElement,"oTransitionEnd",n)};a["default"].bind(this.domElement,"webkitTransitionEnd",t),a["default"].bind(this.domElement,"transitionend",t),a["default"].bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},e.prototype.layout=function(){this.domElement.style.left=window.innerWidth/2-a["default"].getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-a["default"].getHeight(this.domElement)/2+"px"},e}();t["default"]=u,e.exports=t["default"]}])});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var MineCore = function (parameters) {
    this.explode = parameters.explode;
    this.win = parameters.win;
    this.group = parameters.group;
    this.picked = parameters.picked;
    this.basic = parameters.basic;
    this.numbers = parameters.numbers;
    this.random = parameters.random;
    this.mine = parameters.mine;
    this.marker = parameters.marker;
    this.r = parameters.interval;
    this.a = parameters.a;
    this.b = parameters.b;
    this.c = parameters.c;
    this.previousCellPosition = undefined;
    this.pickable = true;

    this.minesNumber = 0;
    this.question = undefined;
    this.cell = new Array(this.a);
    for (var i = 0; i < this.a; i++) {
        this.cell[i] = new Array(this.b);
    }
    for (i = 0; i < this.a; i++)
        for (j = 0; j < this.b; j++) {
            this.cell[i][j] = new Array(this.c);
        }
    for (i = 0; i < this.a; i++)
        for (var j = 0; j < this.b; j++)
            for (var k = 0; k < this.c; k++) {
                this.cell[i][j][k] = {
                    danger: 0,
                    position: {x: i * this.r, y: j * this.r, z: k * this.r},
                    vector: {x: i, y: j, z: k},
                    object: this.basic.clone(),
                    mine: false,
                    marker: false,
                    empty: false
                };
                this.cell[i][j][k].object.position.copy(this.cell[i][j][k].position);
                this.group.add(this.cell[i][j][k].object);
                this.center = {
                    x: this.a * this.r / 2,
                    y: this.b * this.r / 2,
                    z: this.c * this.r / 2
                };
                this.cellsNumber = this.a * this.b * this.c;
            }
    this.previousCellPosition = this.cell[0][0][0].position;
    this.addMine = function (obj) {
        var x1 = obj.x, y1 = obj.y, z1 = obj.z;
        if (this.cell[x1][y1][z1].mine == false) {
            this.cell[x1][y1][z1].mine = true;
            for (var x = x1 - 1; x <= x1 + 1; x++)
                for (var y = y1 - 1; y <= y1 + 1; y++)
                    for (var z = z1 - 1; z <= z1 + 1; z++) {
                        if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) this.cell[x][y][z].danger++;
                    }
            this.cell[x1][y1][z1].danger--;
            this.minesNumber++;
        }
    };
    this.removeMine = function (obj) {
        var x1 = obj.x, y1 = obj.y, z1 = obj.z;
        if (this.cell[x1][y1][z1].mine == true) {
            this.cell[x1][y1][z1].mine = true;
            for (var x = x1 - 1; x <= x1 + 1; x++)
                for (var y = y1 - 1; y <= y1 + 1; y++)
                    for (var z = z1 - 1; z <= z1 + 1; z++) {
                        if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) this.cell[x][y][z].danger--;
                    }
        }
    };
    this.recursiveChecker = function (cell) {
        for (var x = cell.x - 1; x <= cell.x + 1; x++)
            for (var y = cell.y - 1; y <= cell.y + 1; y++)
                for (var z = cell.z - 1; z <= cell.z + 1; z++)
                    if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z]) {
                        if (this.cell[x][y][z].empty == false) {
                            if (this.cell[x][y][z].danger == 0) {
                                this.checkCell(this.cell[x][y][z].vector);
                                this.recursiveChecker({x: x, y: y, z: z});
                            } else {
                                this.checkCell(this.cell[x][y][z].vector);
                            }
                        }
                    }
    };
    this.setCell = function (cell, obj) {
        if (obj) {
            this.group.remove(this.cell[cell.x][cell.y][cell.z].object);
            this.cell[cell.x][cell.y][cell.z].object = obj.clone();
            this.cell[cell.x][cell.y][cell.z].object.position.copy(this.cell[cell.x][cell.y][cell.z].position);
            this.group.add(this.cell[cell.x][cell.y][cell.z].object);
        } else {
            if (this.cell[cell.x][cell.y][cell.z].object) {
                this.group.remove(this.cell[cell.x][cell.y][cell.z].object);
                this.cell[cell.x][cell.y][cell.z].object = undefined;
                this.cell[cell.x][cell.y][cell.z].empty = true;
            }
        }
    };
    this.pickCellOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        if (!(this.previousCellPosition.x == cell.x && this.previousCellPosition.y == cell.y && this.previousCellPosition.z == cell.z)) {
            if (this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].empty == false) {
                this.group.remove(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object);
                this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object = (this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].marker == true ? this.marker : this.basic).clone();
                this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object.position.copy(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].position);
                this.group.add(this.cell[this.previousCellPosition.x][this.previousCellPosition.y][this.previousCellPosition.z].object);
            }
            if (this.cell[cell.x][cell.y][cell.z].empty == false) {
                this.setCell(cell, this.picked);
                this.question = this.cell[cell.x][cell.y][cell.z].object;
            }
            this.previousCellPosition = {
                x: cell.x,
                y: cell.y,
                z: cell.z
            };
        }
    };
    this.setMarkerOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        this.setMarker(cell);
    };
    this.setMarker = function (cell) {
        if (this.cell[cell.x][cell.y][cell.z].empty == true) return;
        this.setCell(cell, this.cell[cell.x][cell.y][cell.z].marker == true ? this.basic : this.marker);
        this.cell[cell.x][cell.y][cell.z].marker = !this.cell[cell.x][cell.y][cell.z].marker;
    };
    this.checkCellOnPosition = function (position) {
        if (!this.pickable) return;
        let cell = {
            x: position.x / this.r,
            y: position.y / this.r,
            z: position.z / this.r
        };
        if (this.cell[cell.x][cell.y][cell.z]) {
            this.checkCell(cell);
        }
    };
    this.checkCell = function (cell) {
        if (this.cell[cell.x][cell.y][cell.z].marker == true) return;
        let around = 0;
        let array = [{x: cell.x - 1, y: cell.y, z: cell.z}, {x: cell.x + 1, y: cell.y, z: cell.z},
            {x: cell.x, y: cell.y - 1, z: cell.z}, {x: cell.x, y: cell.y + 1, z: cell.z},
            {x: cell.x, y: cell.y, z: cell.z - 1}, {x: cell.x, y: cell.y, z: cell.z + 1}];
        for (let i = 0; i < array.length; i++) {
            let x = array[i].x;
            let y = array[i].y;
            let z = array[i].z;
            if (this.cell[x] && this.cell[x][y] && this.cell[x][y][z] && (this.cell[x][y][z].empty == false)) {
                around++;
            }
        }
        if (around == 6) return;
        if (this.cell[cell.x][cell.y][cell.z].mine == true) {
            this.explode();
            this.pickable = false;
            for (let i = 0; i < this.a; i++)
                for (let j = 0; j < this.b; j++)
                    for (let k = 0; k < this.c; k++) {
                        if (this.cell[i][j][k].mine == true) {
                            this.setCell(this.cell[i][j][k].vector, this.mine);
                        }
                    }
            return true;
        }
        this.cellsNumber--;
        if (this.cellsNumber == this.minesNumber) {
            this.win();
            this.pickable = false;
            for (let i = 0; i < this.a; i++)
                for (let j = 0; j < this.b; j++)
                    for (let k = 0; k < this.c; k++) {
                        if (this.cell[i][j][k].mine == true) {
                            this.setCell(this.cell[i][j][k].vector, this.mine);
                        }
                    }
        }
        this.setCell(this.cell[cell.x][cell.y][cell.z].vector);
        if (this.cell[cell.x][cell.y][cell.z].danger > 0) {
            this.setCell(this.cell[cell.x][cell.y][cell.z].vector, this.numbers[this.cell[cell.x][cell.y][cell.z].danger]);
        } else {
            this.recursiveChecker(this.cell[cell.x][cell.y][cell.z].vector);
        }
    };
    if (this.random) {
        var getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        while (this.minesNumber < this.random) {
            this.addMine({
                x: getRandomInt(0, this.a - 1),
                y: getRandomInt(0, this.b - 1),
                z: getRandomInt(0, this.c - 1)
            });
        }
    }
};

if (module) module.exports = MineCore;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {var MultiFlags = function (n, func, cx) {
    var result = function () {
        number--;
        if (number == 0) {
            exec.apply(context);
        }
    };
    var number = n;
    var exec = func;
    var context = cx ? cx : (window ? window : (process ? process : this));
    return result;
};

if (module) module.exports = MultiFlags;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var orbitCamera = {};
orbitCamera.update = function () {
    orbitCamera.camera.position.x = Math.cos(orbitCamera.fi) * Math.cos(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.x;
    orbitCamera.camera.position.z = Math.sin(orbitCamera.fi) * Math.cos(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.z;
    orbitCamera.camera.position.y = Math.sin(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.y;
    if (orbitCamera.lookAt) orbitCamera.camera.lookAt(orbitCamera.target);
};
orbitCamera.reset = function (camera, target) {
    let Rxz = Math.pow((Math.pow(camera.position.z - target.z, 2) + Math.pow(camera.position.x - target.x, 2)), 1 / 2);
    orbitCamera.r = Math.pow((Math.pow(camera.position.z - target.z, 2) + Math.pow(camera.position.x - target.x, 2) + Math.pow(camera.position.y - target.y, 2)), 1 / 2);
    orbitCamera.fi = (camera.position.x - target.x) > 0 ? Math.asin((camera.position.z - target.z) / Rxz) : Math.PI - Math.asin((camera.position.z - target.z) / Rxz);
    orbitCamera.fi2 = (camera.position.y - target.y) < 0 ? -Math.acos(Rxz / orbitCamera.r) : Math.acos(Rxz / orbitCamera.r);
    //orbitCamera.fi2 = Math.abs(orbitCamera.fi2) <= Math.PI / 2 - 0.2 ? orbitCamera.fi2 : Math.PI / Math.sign(orbitCamera.fi2) * (Math.PI/2 - 0.2);
};
orbitCamera.init = function (element, camera, target, lookAt) {
    orbitCamera.lookAt = lookAt;
    orbitCamera.target = target;
    orbitCamera.camera = camera;
    orbitCamera.reset(camera, target);
    element.oncontextmenu = function () {
        event.preventDefault();
    };
    element.onmousedown = function (event) {
        event.preventDefault();
        if (event.which == 3) {
            element.onmousemove = function (event) {
                orbitCamera.fi += (event.movementX) / 100;
                //orbitCamera.fi2 = orbitCamera.fi2 + (event.movementY) / 100;
                orbitCamera.fi2 = Math.abs(orbitCamera.fi2 + (event.movementY) / 100) <= Math.PI / 2 - 0.2 ? orbitCamera.fi2 + (event.movementY) / 100 : orbitCamera.fi2;
                orbitCamera.update();
            }
        }
    };
    element.onmouseup = function () {
        element.onmousemove = function () {
        }
    };
    element.onmousewheel = function (event) {
        event.preventDefault();
        orbitCamera.r = orbitCamera.r + event.deltaY / 40 >= 5 ? orbitCamera.r + event.deltaY / 40 : 5;
        orbitCamera.update();
    };
};

if (module) module.exports = orbitCamera;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {findParentBefore = function (father, obj) {
    let current = obj;
    while (current.parent) {
        if (current.parent == father) {
            //console.dir(current);
            return current;
        }
        current = current.parent;
    }
    console.warn('The parent is not found');
};
if (module)module.exports = findParentBefore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Motion = function (object, property, parameters) {
    this.x = object[property];
    this.object = object;
    this.property = property;
    this.stopped = true;
    this.lastTime = 0;
    this.V = 0;
    this.E = 0;
    this.t = 0;
    this.dt = 2;
    if (parameters) {
        this.T1 = parameters.T1;
        this.T2 = parameters.T2;
    } else {
        this.T2 = 0;
        this.T1 = 0.5;
    }
    this.stop = function () {
        this.V = 0;
        this.E = 0;
        this.stopped = true;
    };
    this.checkStopCondition = function (toPoint) {
        if (Math.abs(this.x - toPoint) < 0.01 && Math.abs(this.V) < 0.05) {
            this.x = toPoint;
            this.apply(toPoint);
            this.V = 0;
            this.stopped = true;
        }
    };
    this.apply = function () {
        this.object[this.property] = this.x;
    };
    this.checkStanding = function () {
        if (this.stopped == true) {
            this.stopped = false;
            this.lastTime = this.t;
        }
    };
    this.step = function (toPoint) {
        if (this.object[this.property] != toPoint) {
            this.t = (new Date()).getTime();
            this.checkStanding();
            if (this.T2 == 0) {
                this.de1(toPoint);
            } else {
                this.de2(toPoint);
                this.speedStep();
            }
            this.lineStep();
            this.checkStopCondition(toPoint);
            this.lastTime = this.t;
            this.apply();
        }
    };
    this.stepFixed = function (toPoint) {
        if (this.object[this.property] != toPoint) {
            if (this.stopped) this.t = (new Date()).getTime();
            this.checkStanding();
            while (((new Date()).getTime() - this.t) > 2 * this.dt) {
                this.t = this.lastTime + this.dt;
                if (this.T2 == 0) {
                    this.de1(toPoint);
                } else {
                    this.de2(toPoint);
                    this.speedStep();
                }
                this.lineStep();
                this.checkStopCondition(toPoint);
                this.lastTime = this.t;
                this.apply();
            }
        }
    };
    this.de2 = function (toPoint) {
        this.E = (toPoint - this.x - this.T1 * this.V) / Math.pow(this.T2,2);
    };
    this.speedStep = function () {
        this.V = this.V + this.E * (this.t - this.lastTime) / 1000;
    };
    this.de1 = function (toPoint) {
        this.V = (toPoint - this.x) / this.T1;
    };
    this.lineStep = function () {
        this.x = this.x + this.V * (this.t - this.lastTime) / 1000;
    }
};

var MotionGroup = function (object, properties, parameters) {
    this.motions = [];
    this.add = function (object, property, parameters) {
        this.motions.push(new Motion(object, property, parameters));
    };
    if (object && properties && parameters) {
        for (let i = 0; i < properties.length; i++) {
            this.add(object, properties[i], parameters);
        }
    }
    this.stepFixed=function (toPoints) {
        this.motions.forEach(function (motion, i) {
            motion.stepFixed(toPoints[i]);
        });
    };
    this.step=function (toPoints) {
        this.motions.forEach(function (motion, i) {
            motion.step(toPoints[i]);
        });
    };
};
if(module) module.exports=MotionGroup;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dat = __webpack_require__(1);
var cameraControl = __webpack_require__(4);
var Motion = __webpack_require__(6);
var MineCore = __webpack_require__(2);
var MultiFlags = __webpack_require__(3);
var findParentBefore = __webpack_require__(5);
var div = document.getElementById('canvas_container');

var canvas = document.getElementById('canvas3d');
var global = window;
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(global.innerWidth, global.innerHeight);
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xbbbbbb);
var camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 5000);
var aim_moving = new THREE.Vector3();
var aim = new THREE.Vector3();
var target_camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 5000);
camera.position.set(100, 100, 100);
target_camera.position.set(100, 100, 100);
var cameraMotion = new Motion(camera.position, ['x', 'y', 'z'], {T2: 0.1, T1: 0.2});
var cameraAimMotion = new Motion(aim_moving, ['x', 'y', 'z'], {T2: 0, T1: 0.1});
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
var directionalLight = new THREE.DirectionalLight(0xffffff);
var directionalLight1 = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-1, 1, 1).normalize();
directionalLight1.position.set(1, 1, 1).normalize();
scene.add(directionalLight, directionalLight);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var intersects = [];
var a = 5, b = 5, c = 5;
var basis = 10;


var explode = function () {
    cube.children[0].material.opacity = 0.6;
    cube.children[0].material.transparent = true;
};
var win = function () {
    cubeMine.children[0].material.color.set(0x00ff00);
};
var cube = new THREE.Group();
var cubeMine = new THREE.Group();
var cubeLight = new THREE.Group();
var cubeMarker = new THREE.Group();
var indicator = new Array(26);
var mineObj = undefined;
var mines = undefined;
var cameraTarget = new THREE.Vector3();

var mainScript = function () {
    var pickedGroup = new THREE.Group();
    pickedGroup.add(cubeLight, indicator[0]);
    //console.dir(pickedGroup);
    //scene.add(dot);
    var mineParameters = {
        explode: explode,
        win: win,
        a: a,
        b: b,
        c: c,
        group: scene,
        picked: pickedGroup,
        basic: cube,
        numbers: indicator,
        interval: basis,
        random: 10,
        marker: cubeMarker,
        mine: cubeMine
    };
    mines = new MineCore(mineParameters);
    cameraTarget=aim;
    aim.copy(mines.center);
    cameraControl.init(canvas, target_camera, aim);
    render();

};

function render() {
    raycaster.setFromCamera(mouse, camera);
    intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects[0]) {
        mines.pickCellOnPosition(findParentBefore(scene, intersects[0].object).position);
    }
    cameraMotion.stepFixed([target_camera.position.x, target_camera.position.y, target_camera.position.z]);
    cameraAimMotion.stepFixed([aim.x, aim.y, aim.z]);
    camera.lookAt(aim_moving);
    indicator[0].lookAt({x: camera.position.x, z: camera.position.z, y: 0});
    renderer.render(scene, camera);
    if (mines.question) {
        mines.question.children[1].rotation.y += 0.25;
        mines.question.children[1].rotation.x = 0;
        mines.question.children[1].rotation.z = 0;
    }
    cameraControl.update();
    requestAnimationFrame(render);
}

function onMouseMove(event) {
    mouse.x = ( event.clientX / global.innerWidth ) * 2 - 1;
    mouse.y = -( event.clientY / global.innerHeight ) * 2 + 1;
}
function onMouseMove1(event) {
    console.log('awdawd');
}
function onMiddleClick(event) {
    if (event.which == 3) {
        if (intersects[0]) {
            aim.copy(intersects[0].point);
            cameraControl.reset(target_camera,aim);
        }
    }
}
function onMouseClick(event) {
    mouse.x = ( event.clientX / global.innerWidth ) * 2 - 1;
    mouse.y = -( event.clientY / global.innerHeight ) * 2 + 1;
    intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects[0]) {
        if (!event.altKey) {
            mines.checkCellOnPosition(findParentBefore(scene, intersects[0].object).position);
        } else {
            mines.setMarkerOnPosition(findParentBefore(scene, intersects[0].object).position);
        }
    }
}

function onResize() {
    camera.aspect = global.innerWidth / global.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(global.innerWidth, global.innerHeight);
}
global.addEventListener('mousemove', onMouseMove, false);
global.addEventListener('click', onMouseClick, false);
global.addEventListener('resize', onResize, false);
global.addEventListener('mousedown', onMiddleClick, false);


var afterLoaders = new MultiFlags(4, mainScript, this);


//-----------------------------------LOADING MANAGERS---------------------------------//


var manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
};
var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
};
var onError = function (xhr) {
};
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('/Rollermine/');
mtlLoader.texturePath = '/Rollermine/Texture/';
mtlLoader.load('Rollermine.mtl', function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('./Rollermine/Rollermine.obj', function (object) {
        mineObj = object;
        afterLoaders();
    }, onProgress, onError);
});

new THREE.FontLoader(manager).load('../fonts/optimer_regular.typeface.json', function (res) {
    var font = {
        font: res,
        size: .6 * basis,
        height: .1 * basis,
        curveSegments: 10,
        bevelThickness: 1,
        bevelSize: 1,
        bevelEnabled: false
    };
    for (let i = 1; i < 10; i++) {
        let mesh = new THREE.Mesh(new THREE.TextGeometry(i, font), new THREE.MeshStandardMaterial());
        mesh.position.set(.3 * basis, .2 * basis, .5 * basis);
        mesh.material.color.set(0x66FF00);
        indicator[i] = new THREE.Group().add(mesh);
    }
    for (let i = 10; i < 26; i++) {
        let mesh = new THREE.Mesh(new THREE.TextGeometry(i, font), new THREE.MeshStandardMaterial());
        mesh.position.set(0.05 * basis, .2 * basis, .5 * basis);
        mesh.material.color.set(0x66FF00);
        indicator[i] = new THREE.Group().add(mesh);
    }
    mesh = new THREE.Mesh(new THREE.TextGeometry('?', font), new THREE.MeshStandardMaterial());
    mesh.position.set(.5 * basis, .2 * basis, .5 * basis);
    mesh.material.color.set(0xFFA100);
    indicator[0] = mesh;
    afterLoaders();
});

new THREE.TextureLoader().load("textures/crate_1.jpg", function (tex) {
    let box = new THREE.BoxGeometry(basis, basis, basis);
    let mesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.1,
        color: 0xE9B097
    }));
    mesh.position.set(basis / 2, basis / 2, basis / 2);
    cube.add(mesh);
    let mesh1 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.7,
        color: 0x005555
    }));
    mesh1.position.set(basis / 2, basis / 2, basis / 2);
    cubeLight.add(mesh1);
    let mesh2 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.7,
        color: 0xff0000
    }));
    mesh2.position.set(basis / 2, basis / 2, basis / 2);
    cubeMine.add(mesh2);
    let mesh3 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.7,
        color: "yellow"
    }));
    mesh3.position.set(basis / 2, basis / 2, basis / 2);
    cubeMarker.add(mesh3);
    afterLoaders();
});

new THREE.CubeTextureLoader().setPath('./cubemap/').load([
    'posx.jpg',
    'negx.jpg',
    'posy.jpg',
    'negy.jpg',
    'posz.jpg',
    'negz.jpg'
], function (res) {
    scene.background = res;
    afterLoaders();
});

//var Stats = require('./stats.min.js');
//var stats = new Stats();
//stats.showPanel(0);
//div.appendChild(stats.dom);
//stats.update();


/***/ })
/******/ ]);