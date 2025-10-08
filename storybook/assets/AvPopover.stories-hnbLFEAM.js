import{A as ke}from"./AvButton-BM5d_lLZ.js";import{r as _,o as De,g as Pe,G as me,d as Re,x as Ce,Z as Oe,b as oe,e as Ie,k as Be,a as se,B as k,f as Le,Q as xe,p as Ke,A as Me,_ as _e,C as je,i as $}from"./iframe-CM3fYS2g.js";import{_ as ze}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-dsfr-keweR0Qw.js";import"./icons-DLnh1uvi.js";import"./preload-helper-ILsKNznc.js";function Ue(r,e){const t=_(!1),a=_({top:0,left:0}),s=async()=>{if(t.value=!t.value,t.value&&r.value){await me();const c=r.value.getBoundingClientRect(),v=c.bottom+window.scrollY+4;let m=c.left+window.scrollX;if(e.value){const w=e.value.getBoundingClientRect(),f=window.innerWidth;m+w.width>f&&(m=f-w.width-16,m<0&&(m=16))}a.value={top:v/16,left:m/16}}},l=()=>{t.value=!1},n=c=>{r.value&&!r.value.contains(c.target)&&l()};return De(()=>{document.addEventListener("click",n)}),Pe(()=>{document.removeEventListener("click",n)}),{showPopover:t,popoverPosition:a,togglePopover:s,closePopover:l}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var he=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],j=he.join(","),ge=typeof Element>"u",P=ge?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,z=!ge&&Element.prototype.getRootNode?function(r){var e;return r==null||(e=r.getRootNode)===null||e===void 0?void 0:e.call(r)}:function(r){return r==null?void 0:r.ownerDocument},U=function r(e,t){var a;t===void 0&&(t=!0);var s=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),l=s===""||s==="true",n=l||t&&e&&r(e.parentNode);return n},Ye=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},ye=function(e,t,a){if(U(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(j));return t&&P.call(e,j)&&s.unshift(e),s=s.filter(a),s},we=function r(e,t,a){for(var s=[],l=Array.from(e);l.length;){var n=l.shift();if(!U(n,!1))if(n.tagName==="SLOT"){var c=n.assignedElements(),v=c.length?c:n.children,m=r(v,!0,a);a.flatten?s.push.apply(s,m):s.push({scopeParent:n,candidates:m})}else{var w=P.call(n,j);w&&a.filter(n)&&(t||!e.includes(n))&&s.push(n);var f=n.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(n),A=!U(f,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(n));if(f&&A){var E=r(f===!0?n.children:f.children,!0,a);a.flatten?s.push.apply(s,E):s.push({scopeParent:n,candidates:E})}else l.unshift.apply(l,n.children)}}return s},Te=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},D=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Ye(e))&&!Te(e)?0:e.tabIndex},Ge=function(e,t){var a=D(e);return a<0&&t&&!Te(e)?0:a},Ve=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ae=function(e){return e.tagName==="INPUT"},qe=function(e){return Ae(e)&&e.type==="hidden"},$e=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},We=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},He=function(e){if(!e.name)return!0;var t=e.form||z(e),a=function(c){return t.querySelectorAll('input[type="radio"][name="'+c+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=a(window.CSS.escape(e.name));else try{s=a(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var l=We(s,e.form);return!l||l===e},Ze=function(e){return Ae(e)&&e.type==="radio"},Xe=function(e){return Ze(e)&&!He(e)},Qe=function(e){var t,a=e&&z(e),s=(t=a)===null||t===void 0?void 0:t.host,l=!1;if(a&&a!==e){var n,c,v;for(l=!!((n=s)!==null&&n!==void 0&&(c=n.ownerDocument)!==null&&c!==void 0&&c.contains(s)||e!=null&&(v=e.ownerDocument)!==null&&v!==void 0&&v.contains(e));!l&&s;){var m,w,f;a=z(s),s=(m=a)===null||m===void 0?void 0:m.host,l=!!((w=s)!==null&&w!==void 0&&(f=w.ownerDocument)!==null&&f!==void 0&&f.contains(s))}}return l},le=function(e){var t=e.getBoundingClientRect(),a=t.width,s=t.height;return a===0&&s===0},Je=function(e,t){var a=t.displayCheck,s=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var l=P.call(e,"details>summary:first-of-type"),n=l?e.parentElement:e;if(P.call(n,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof s=="function"){for(var c=e;e;){var v=e.parentElement,m=z(e);if(v&&!v.shadowRoot&&s(v)===!0)return le(e);e.assignedSlot?e=e.assignedSlot:!v&&m!==e.ownerDocument?e=m.host:e=v}e=c}if(Qe(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return le(e);return!1},et=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var s=t.children.item(a);if(s.tagName==="LEGEND")return P.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},Y=function(e,t){return!(t.disabled||U(t)||qe(t)||Je(t,e)||$e(t)||et(t))},H=function(e,t){return!(Xe(t)||D(t)<0||!Y(e,t))},tt=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},at=function r(e){var t=[],a=[];return e.forEach(function(s,l){var n=!!s.scopeParent,c=n?s.scopeParent:s,v=Ge(c,n),m=n?r(s.candidates):c;v===0?n?t.push.apply(t,m):t.push(c):a.push({documentOrder:l,tabIndex:v,item:s,isScope:n,content:m})}),a.sort(Ve).reduce(function(s,l){return l.isScope?s.push.apply(s,l.content):s.push(l.content),s},[]).concat(t)},rt=function(e,t){t=t||{};var a;return t.getShadowRoot?a=we([e],t.includeContainer,{filter:H.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:tt}):a=ye(e,t.includeContainer,H.bind(null,t)),at(a)},nt=function(e,t){t=t||{};var a;return t.getShadowRoot?a=we([e],t.includeContainer,{filter:Y.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=ye(e,t.includeContainer,Y.bind(null,t)),a},R=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,j)===!1?!1:H(t,e)},it=he.concat("iframe").join(","),W=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,it)===!1?!1:Y(t,e)};/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Z(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,a=Array(e);t<e;t++)a[t]=r[t];return a}function ot(r){if(Array.isArray(r))return Z(r)}function st(r,e,t){return(e=vt(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function lt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,a)}return t}function ce(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ue(Object(t),!0).forEach(function(a){st(r,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))})}return r}function ct(r){return ot(r)||lt(r)||ft(r)||ut()}function dt(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var a=t.call(r,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function vt(r){var e=dt(r,"string");return typeof e=="symbol"?e:e+""}function ft(r,e){if(r){if(typeof r=="string")return Z(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(r,e):void 0}}var de={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a._setPausedState(!0)}var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},pt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},bt=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},x=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},mt=function(e){return x(e)&&!e.shiftKey},ht=function(e){return x(e)&&e.shiftKey},ve=function(e){return setTimeout(e,0)},L=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,a):e},M=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},gt=[],yt=function(e,t){var a=(t==null?void 0:t.document)||document,s=(t==null?void 0:t.trapStack)||gt,l=ce({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:mt,isKeyBackward:ht},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c,v=function(i,o,u){return i&&i[o]!==void 0?i[o]:l[u||o]},m=function(i,o){var u=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return n.containerGroups.findIndex(function(p){var b=p.container,g=p.tabbableNodes;return b.contains(i)||(u==null?void 0:u.includes(b))||g.find(function(d){return d===i})})},w=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=o.hasFallback,p=u===void 0?!1:u,b=o.params,g=b===void 0?[]:b,d=l[i];if(typeof d=="function"&&(d=d.apply(void 0,ct(g))),d===!0&&(d=void 0),!d){if(d===void 0||d===!1)return d;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var y=d;if(typeof d=="string"){try{y=a.querySelector(d)}catch(T){throw new Error("`".concat(i,'` appears to be an invalid selector; error="').concat(T.message,'"'))}if(!y&&!p)throw new Error("`".concat(i,"` as selector refers to no known node"))}return y},f=function(){var i=w("initialFocus",{hasFallback:!0});if(i===!1)return!1;if(i===void 0||i&&!W(i,l.tabbableOptions))if(m(a.activeElement)>=0)i=a.activeElement;else{var o=n.tabbableGroups[0],u=o&&o.firstTabbableNode;i=u||w("fallbackFocus")}else i===null&&(i=w("fallbackFocus"));if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},A=function(){if(n.containerGroups=n.containers.map(function(i){var o=rt(i,l.tabbableOptions),u=nt(i,l.tabbableOptions),p=o.length>0?o[0]:void 0,b=o.length>0?o[o.length-1]:void 0,g=u.find(function(T){return R(T)}),d=u.slice().reverse().find(function(T){return R(T)}),y=!!o.find(function(T){return D(T)>0});return{container:i,tabbableNodes:o,focusableNodes:u,posTabIndexesFound:y,firstTabbableNode:p,lastTabbableNode:b,firstDomTabbableNode:g,lastDomTabbableNode:d,nextTabbableNode:function(S){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=o.indexOf(S);return F<0?I?u.slice(u.indexOf(S)+1).find(function(B){return R(B)}):u.slice(0,u.indexOf(S)).reverse().find(function(B){return R(B)}):o[F+(I?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(i){return i.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},E=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?E(o.shadowRoot):o},N=function(i){if(i!==!1&&i!==E(document)){if(!i||!i.focus){N(f());return}i.focus({preventScroll:!!l.preventScroll}),n.mostRecentlyFocusedNode=i,pt(i)&&i.select()}},X=function(i){var o=w("setReturnFocus",{params:[i]});return o||(o===!1?!1:i)},Q=function(i){var o=i.target,u=i.event,p=i.isBackward,b=p===void 0?!1:p;o=o||M(u),A();var g=null;if(n.tabbableGroups.length>0){var d=m(o,u),y=d>=0?n.containerGroups[d]:void 0;if(d<0)b?g=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:g=n.tabbableGroups[0].firstTabbableNode;else if(b){var T=n.tabbableGroups.findIndex(function(V){var q=V.firstTabbableNode;return o===q});if(T<0&&(y.container===o||W(o,l.tabbableOptions)&&!R(o,l.tabbableOptions)&&!y.nextTabbableNode(o,!1))&&(T=d),T>=0){var S=T===0?n.tabbableGroups.length-1:T-1,I=n.tabbableGroups[S];g=D(o)>=0?I.lastTabbableNode:I.lastDomTabbableNode}else x(u)||(g=y.nextTabbableNode(o,!1))}else{var F=n.tabbableGroups.findIndex(function(V){var q=V.lastTabbableNode;return o===q});if(F<0&&(y.container===o||W(o,l.tabbableOptions)&&!R(o,l.tabbableOptions)&&!y.nextTabbableNode(o))&&(F=d),F>=0){var B=F===n.tabbableGroups.length-1?0:F+1,ie=n.tabbableGroups[B];g=D(o)>=0?ie.firstTabbableNode:ie.firstDomTabbableNode}else x(u)||(g=y.nextTabbableNode(o))}}else g=w("fallbackFocus");return g},K=function(i){var o=M(i);if(!(m(o,i)>=0)){if(L(l.clickOutsideDeactivates,i)){c.deactivate({returnFocus:l.returnFocusOnDeactivate});return}L(l.allowOutsideClick,i)||i.preventDefault()}},J=function(i){var o=M(i),u=m(o,i)>=0;if(u||o instanceof Document)u&&(n.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var p,b=!0;if(n.mostRecentlyFocusedNode)if(D(n.mostRecentlyFocusedNode)>0){var g=m(n.mostRecentlyFocusedNode),d=n.containerGroups[g].tabbableNodes;if(d.length>0){var y=d.findIndex(function(T){return T===n.mostRecentlyFocusedNode});y>=0&&(l.isKeyForward(n.recentNavEvent)?y+1<d.length&&(p=d[y+1],b=!1):y-1>=0&&(p=d[y-1],b=!1))}}else n.containerGroups.some(function(T){return T.tabbableNodes.some(function(S){return D(S)>0})})||(b=!1);else b=!1;b&&(p=Q({target:n.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(n.recentNavEvent)})),N(p||n.mostRecentlyFocusedNode||f())}n.recentNavEvent=void 0},Fe=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=i;var u=Q({event:i,isBackward:o});u&&(x(i)&&i.preventDefault(),N(u))},ee=function(i){(l.isKeyForward(i)||l.isKeyBackward(i))&&Fe(i,l.isKeyBackward(i))},te=function(i){bt(i)&&L(l.escapeDeactivates,i)!==!1&&(i.preventDefault(),c.deactivate())},ae=function(i){var o=M(i);m(o,i)>=0||L(l.clickOutsideDeactivates,i)||L(l.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},re=function(){if(n.active)return de.activateTrap(s,c),n.delayInitialFocusTimer=l.delayInitialFocus?ve(function(){N(f())}):N(f()),a.addEventListener("focusin",J,!0),a.addEventListener("mousedown",K,{capture:!0,passive:!1}),a.addEventListener("touchstart",K,{capture:!0,passive:!1}),a.addEventListener("click",ae,{capture:!0,passive:!1}),a.addEventListener("keydown",ee,{capture:!0,passive:!1}),a.addEventListener("keydown",te),c},ne=function(){if(n.active)return a.removeEventListener("focusin",J,!0),a.removeEventListener("mousedown",K,!0),a.removeEventListener("touchstart",K,!0),a.removeEventListener("click",ae,!0),a.removeEventListener("keydown",ee,!0),a.removeEventListener("keydown",te),c},Se=function(i){var o=i.some(function(u){var p=Array.from(u.removedNodes);return p.some(function(b){return b===n.mostRecentlyFocusedNode})});o&&N(f())},G=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Se):void 0,O=function(){G&&(G.disconnect(),n.active&&!n.paused&&n.containers.map(function(i){G.observe(i,{subtree:!0,childList:!0})}))};return c={get active(){return n.active},get paused(){return n.paused},activate:function(i){if(n.active)return this;var o=v(i,"onActivate"),u=v(i,"onPostActivate"),p=v(i,"checkCanFocusTrap");p||A(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=E(a),o==null||o();var b=function(){p&&A(),re(),O(),u==null||u()};return p?(p(n.containers.concat()).then(b,b),this):(b(),this)},deactivate:function(i){if(!n.active)return this;var o=ce({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},i);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,ne(),n.active=!1,n.paused=!1,O(),de.deactivateTrap(s,c);var u=v(o,"onDeactivate"),p=v(o,"onPostDeactivate"),b=v(o,"checkCanReturnFocus"),g=v(o,"returnFocus","returnFocusOnDeactivate");u==null||u();var d=function(){ve(function(){g&&N(X(n.nodeFocusedBeforeActivation)),p==null||p()})};return g&&b?(b(X(n.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(i){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,i)):this},unpause:function(i){return n.active?(n.manuallyPaused=!1,s[s.length-1]!==this?this:this._setPausedState(!1,i)):this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return n.containers=o.map(function(u){return typeof u=="string"?a.querySelector(u):u}),n.active&&A(),O(),this}},Object.defineProperties(c,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(i,o){if(n.paused===i)return this;if(n.paused=i,i){var u=v(o,"onPause"),p=v(o,"onPostPause");u==null||u(),ne(),O(),p==null||p()}else{var b=v(o,"onUnpause"),g=v(o,"onPostUnpause");b==null||b(),A(),re(),O(),g==null||g()}return this}}}),c.updateContainerElements(e),c};function wt(r,e){let t=null;function a(){!r.value||!r.value.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')||(t=yt(r.value,{escapeDeactivates:!0,onDeactivate:e,returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0}),t.activate())}function s(){t==null||t.deactivate(),t=null}return{initializeFocusTrap:a,cleanupFocusTrap:s}}const Tt={class:"av-popover-wrapper"},Ee=Re({__name:"AvPopover",props:{width:{default:"12.5rem"},padding:{default:"var(--spacing-md)"}},setup(r,{expose:e}){je(f=>({v75959032:f.width,v330e9906:f.padding}));const t=_(null),a=_(null),{showPopover:s,popoverPosition:l,togglePopover:n,closePopover:c}=Ue(t,a),{initializeFocusTrap:v,cleanupFocusTrap:m}=wt(a,c);function w(f){if(!f){t.value=null;return}if(f instanceof HTMLElement){t.value=f;return}const A=f.$el;A instanceof HTMLElement?t.value=A:t.value=null}return e({setTriggerRef:w,triggerRef:t}),Ce(s,async f=>{f?(await me(),v()):m()}),Oe(()=>{m()}),(f,A)=>($(),oe("div",Tt,[Ie("div",{ref:w,class:"av-popover-trigger-wrapper"},[se(f.$slots,"trigger",{toggle:k(n)},void 0,!0)]),($(),Be(_e,{to:"body"},[k(s)?($(),oe("div",{key:0,ref_key:"popoverRef",ref:a,tabindex:"-1",class:"av-popover",style:Ke(`top: ${k(l).top}rem; left: ${k(l).left}rem;`),onKeydown:A[0]||(A[0]=xe(Me((...E)=>k(c)&&k(c)(...E),["prevent"]),["esc"]))},[se(f.$slots,"popover",{close:k(c)},void 0,!0)],36)):Le("",!0)]))]))}}),Ne=ze(Ee,[["__scopeId","data-v-6a5eaa47"]]);Ee.__docgenInfo={exportName:"default",displayName:"AvPopover",description:"",tags:{},expose:[{name:"setTriggerRef"},{name:"triggerRef"}],props:[{name:"width",description:"Popover width.",tags:{default:[{description:"'12.5rem'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'12.5rem'"}},{name:"padding",description:"Internal popover padding.",tags:{default:[{description:"'var(--spacing-md)'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'var(--spacing-md)'"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"toggle",title:"binding"}],description:`Slot for the popover trigger.
Provides the prop:
- toggle: function to open/close the popover`},{name:"popover",scoped:!0,bindings:[{name:"close",title:"binding"}],description:`Slot for the popover content.
Provides the prop:
- close: function to close the popover`}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/popovers/AvPopover/AvPopover.vue"]};const Pt={title:"Components/Overlay/Popovers/AvPopover",component:Ne,tags:["autodocs"],argTypes:{width:{control:"text"},padding:{control:"text"}},args:{width:"12.5rem",padding:"var(--spacing-md)"},parameters:{docs:{description:{component:`<h1 class="n1">Popovers - <code>AvPopover</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The popover is a contextual container that is displayed as an overlay near its trigger element.
    This component can be used to display additional content or interactions, without leaving the current page or completely obscuring its context.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvPopover</code> component is designed to offer accessible, ergonomic content,
    by trapping the focus inside the popover when it's open, and managing closure via the Escape key.
    It offers great flexibility via dedicated trigger (<code>trigger</code>) and content (<code>popover</code>) slots,
    allowing any content or interaction to be inserted.
  </span>
</p>

<p>
  <span class="b2-regular">
    It uses a dynamic positioning system to display itself in the right place in relation to its trigger,
    while guaranteeing good keyboard control and a good user experience.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The popover consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">The trigger (slot <code>trigger</code>), mandatory: Interactive element (for example, a button) that opens or closes the popover.</span></li>
  <li><span class="b2-regular">The content (slot <code>popover</code>), mandatory: Content area that can contain text, buttons, lists or any other interactive element. This zone is displayed close to the trigger and captures the focus when opened.</span></li>
</ul>

<p><span class="b2-regular">The popover integrates :</span></p>

<ul>
  <li><span class="b2-regular">Focus trap for keyboard accessibility.</span></li>
  <li><span class="b2-regular">Close by pressing the Escape key or clicking outside the popover.</span></li>
</ul>`}}}},At=r=>({components:{AvPopover:Ne,AvButton:ke},setup(){return{args:r}},template:`
    <AvPopover
      v-bind="args"
    >
      <template #trigger="{ toggle }">
        <AvButton
          label="Open popover"
          :on-click="toggle"
        />
      </template>
      <template #popover>
        <ul style="list-style-type:none; padding: 0; margin: 0;">
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Manage profile"
              icon="mdi:pencil-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="See calendar"
              icon="mdi:calendar-month-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to ENT"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to skills"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Logout"
              icon="mdi:logout"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
        </ul>
      </template>
    </AvPopover>
  `}),C=At.bind({});C.args={};C.parameters={docs:{source:{code:`
    <AvPopover
      v-bind="args"
    >
      <template #trigger="{ toggle }">
        <AvButton
          label="Open popover"
          :on-click="toggle"
        />
      </template>
      <template #popover>
        <ul style="list-style-type:none; padding: 0; margin: 0;">
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Manage profile"
              icon="mdi:pencil-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="See calendar"
              icon="mdi:calendar-month-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to ENT"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to skills"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Logout"
              icon="mdi:logout"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
        </ul>
      </template>
    </AvPopover>
  `}}};var fe,pe,be;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    AvPopover,
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvPopover
      v-bind="args"
    >
      <template #trigger="{ toggle }">
        <AvButton
          label="Open popover"
          :on-click="toggle"
        />
      </template>
      <template #popover>
        <ul style="list-style-type:none; padding: 0; margin: 0;">
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Manage profile"
              icon="mdi:pencil-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="See calendar"
              icon="mdi:calendar-month-outline"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to ENT"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Go to skills"
              icon="mdi:arrow-top-right-thick"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
          <li>
            <AvButton
              style="width: 100% !important;"
              label="Logout"
              icon="mdi:logout"
              variant="DEFAULT"
              theme="SECONDARY"
              size="sm"
              no-radius
            />
          </li>
        </ul>
      </template>
    </AvPopover>
  \`
})`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};const Rt=["Default"];export{C as Default,Rt as __namedExportsOrder,Pt as default};
