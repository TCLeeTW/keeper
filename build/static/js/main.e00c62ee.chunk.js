(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{32:function(t,e,n){t.exports=n(37)},37:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r),a=n(29),i=n.n(a),c=n(10),u=n(16),l=n(2),f=n(8);var s=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Keeper"))};var h=function(){var t=(new Date).getFullYear();return o.a.createElement("footer",null,o.a.createElement("p",null,"Copyright \u24d2 ",t))};var p=function(t){return o.a.createElement("div",{className:"note"},o.a.createElement("button",{onClick:function(){t.onEdit(t.id)}},"Edit"),o.a.createElement("h1",null,t.title),o.a.createElement("p",null,t.content),o.a.createElement("button",{onClick:function(){t.onDelete(t.id)}},"DELETE"))},d=n(6);var v=function(t){var e=Object(r.useState)({title:"",content:""}),n=Object(f.a)(e,2),a=n[0],i=n[1];function c(t){var e=t.target,n=e.name,r=e.value;i((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(d.a)({},n,r))}))}return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{name:"title",onChange:c,value:a.title,placeholder:"Title"}),o.a.createElement("textarea",{name:"content",onChange:c,value:a.content,placeholder:"Take a note...",rows:"3"}),o.a.createElement("button",{onClick:function(e){t.onAdd(a),i({title:"",content:""}),e.preventDefault()}},"Add")))},y=n(30),m=n(23),g=Object(y.a)({apiKey:"AIzaSyAfFbTsjQpAb1S7TjURtZJpATVagkasTAE",authDomain:"keeper-213ed.firebaseapp.com",projectId:"keeper-213ed",storageBucket:"keeper-213ed.appspot.com",messagingSenderId:"513721806895",appId:"1:513721806895:web:98e8f20d648073860496da"}),b=Object(m.f)(g),w=n(20);function E(){E=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new k(o||[]);return r(i,"_invoke",{value:j(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var s={};function h(){}function p(){}function d(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==e&&n.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e((function(o,i){!function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(r,a,o,i)}))}return o=o?o.then(i,i):i()}})}function j(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,r(g,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var j=function(){var t=Object(r.useState)([]),e=Object(f.a)(t,2),n=e[0],a=e[1],i=Object(w.b)(b,"notes");Object(r.useEffect)((function(){(function(){var t=Object(l.a)(E().mark((function t(){var e,n,r;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.e)(i);case 2:e=t.sent,n=e.docs.map((function(t){return Object(u.a)({id:t.id},t.data())})),r=e.docs.map((function(t){return Object(u.a)({},t.data())})),console.log(e),console.log(n),console.log(r),a(n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=function(){var t=Object(l.a)(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.a)(i,{title:e.title,content:e.content});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function y(t){}var m=function(){var t=Object(l.a)(E().mark((function t(e){var n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(w.d)(b,"notes",e),t.next=3,Object(w.c)(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function g(t){m(t),a((function(e){return e.filter((function(e,n){return e.id!==t}))}))}return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(v,{onAdd:function(t){d(t),a((function(e){return[].concat(Object(c.a)(e),[t])}))}}),n.map((function(t,e){return o.a.createElement(p,{key:e,id:t.id,title:t.title,content:t.content,onDelete:g,onEdit:y})})),o.a.createElement(h,null))};i.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e00c62ee.chunk.js.map