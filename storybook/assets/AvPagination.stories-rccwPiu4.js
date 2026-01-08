import"./AvBreadcrumb-C4Tlh7NF.js";import{d as ge,c as x,a as r,e as s,u as t,v as n,G as d,C as m,B as A,F as de,E as ue,o as i,M as me,r as pe}from"./iframe-BQ7qKONV.js";import{A as k}from"./AvIcon-DsbNWGPN.js";import{M as C}from"./icons-DLse1evt.js";import{_ as Pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvSideMenu-CdpqvTRp.js";import"./AvSideNavigation-s2i7GAd6.js";import"./AvStepper-xMKITGL-.js";import"./AvButton-DJhlCexR.js";import"./string-BZgCOP9D.js";import"./use-av-breakpoints-CFoWriRx.js";import"./index-BfQvOPuM.js";import"./use-collapsable-C2ubtYvR.js";import"./preload-helper-ILsKNznc.js";import"./AvListItem-CRinB-gJ.js";const ve=["aria-label"],fe={class:"av-pagination__list av-row av-row-wrap av-align-center av-gap-sm"},be={key:0},he={class:"b2-regular"},Le=["href","title","aria-disabled"],ye={class:"av-sr-only"},xe=["href","title","aria-disabled"],Ae={key:0,class:"caption-regular av-hidden av-unhidden-md"},ke=["href","title","aria-current","onClick"],Ce={key:0},Te={key:1},Me=["href","title","disabled","aria-disabled"],Ie={key:0,class:"caption-regular av-hidden av-unhidden-md"},Ne=["href","title","disabled","aria-disabled"],Se={class:"av-sr-only"},ee=ge({__name:"AvPagination",props:{compact:{type:Boolean,default:!1},pages:{},currentPage:{default:0},firstPageLabel:{},lastPageLabel:{},nextPageLabel:{},prevPageLabel:{},compactCurrentPageLabel:{},truncLimit:{default:2},ariaLabel:{}},emits:["update:current-page"],setup(e,{emit:M}){const T=M,l=x(()=>Math.min(e.pages.length-1-e.truncLimit,Math.max(e.currentPage-(e.truncLimit-e.truncLimit%2)/2,0))),I=x(()=>Math.min(e.pages.length-1,l.value+e.truncLimit)),y=x(()=>e.pages.length>e.truncLimit?e.pages.slice(l.value,I.value+1):e.pages),te=x(()=>e.pages.length>0),ne=g=>T("update:current-page",g),u=g=>ne(g),re=()=>u(0),ie=()=>u(Math.max(0,e.currentPage-1)),se=()=>u(Math.min(e.pages.length-1,e.currentPage+1)),oe=()=>u(e.pages.length-1),le=g=>e.pages.indexOf(g)===e.currentPage;return(g,o)=>{var N,S,q,w;return t(te)?(i(),r("nav",{key:0,role:"navigation",class:"av-pagination av-nav","aria-label":e.ariaLabel},[n("ul",fe,[e.compact&&e.compactCurrentPageLabel?(i(),r("li",be,[n("span",he,d(e.compactCurrentPageLabel),1)])):s("",!0),n("li",null,[e.compact?s("",!0):(i(),r("a",{key:0,href:(N=e.pages[0])==null?void 0:N.href,class:"av-pagination__link",title:e.firstPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:o[0]||(o[0]=m(a=>re(),["prevent"]))},[A(k,{name:t(C).PAGE_FIRST,size:1.5},null,8,["name"]),n("span",ye,d(e.firstPageLabel),1)],8,Le))]),n("li",null,[n("a",{href:(S=e.pages[Math.max(e.currentPage-1,0)])==null?void 0:S.href,class:"av-pagination__link",title:e.prevPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:o[1]||(o[1]=m(a=>ie(),["prevent"]))},[A(k,{name:t(C).NAVIGATE_BEFORE,size:1.5},null,8,["name"]),e.compact?s("",!0):(i(),r("span",Ae,d(e.prevPageLabel),1))],8,xe)]),e.compact?s("",!0):(i(!0),r(de,{key:1},ue(t(y),(a,ce)=>(i(),r("li",{key:ce},[n("a",{href:a==null?void 0:a.href,class:"av-pagination__link",title:a.title,"aria-current":le(a)?"page":void 0,onClick:m(we=>u(e.pages.indexOf(a)),["prevent"])},[t(y).indexOf(a)===0&&t(l)>0?(i(),r("span",Ce,"...")):s("",!0),me(" "+d(a.label)+" ",1),t(y).indexOf(a)===t(y).length-1&&t(I)<e.pages.length-1?(i(),r("span",Te,"...")):s("",!0)],8,ke)]))),128)),n("li",null,[n("a",{href:(q=e.pages[Math.min(e.currentPage+1,e.pages.length-1)])==null?void 0:q.href,class:"av-pagination__link",title:e.nextPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:o[2]||(o[2]=m(a=>se(),["prevent"]))},[e.compact?s("",!0):(i(),r("span",Ie,d(e.nextPageLabel),1)),A(k,{name:t(C).NAVIGATE_NEXT,size:1.5},null,8,["name"])],8,Me)]),n("li",null,[e.compact?s("",!0):(i(),r("a",{key:0,class:"av-pagination__link",href:(w=e.pages[e.pages.length-1])==null?void 0:w.href,title:e.lastPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:o[3]||(o[3]=m(a=>oe(),["prevent"]))},[n("span",Se,d(e.lastPageLabel),1),A(k,{name:t(C).PAGE_LAST,size:1.5},null,8,["name"])],8,Ne))])])],8,ve)):s("",!0)}}}),ae=Pe(ee,[["__scopeId","data-v-e50ee994"]]);ee.__docgenInfo={exportName:"default",displayName:"AvPagination",description:"",tags:{},props:[{name:"compact",description:`Allows compact display:
"Page x of y" with only navigation icons (no text).`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"pages",description:"List of pages.\nEach page is an object containing information such as `href` and `label`.",required:!0,type:{name:"Array",elements:[{name:"Page"}]}},{name:"currentPage",description:"Index of currently selected page (starts at 0).",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"}},{name:"firstPageLabel",description:"Tooltip text for first page link.",required:!1,type:{name:"string"}},{name:"lastPageLabel",description:"Tooltip text for last page link.",required:!1,type:{name:"string"}},{name:"nextPageLabel",description:"Tooltip text for next page link.",required:!1,type:{name:"string"}},{name:"prevPageLabel",description:"Tooltip text for previous page link.",required:!1,type:{name:"string"}},{name:"compactCurrentPageLabel",description:"Text for compact current page.",required:!1,type:{name:"string"}},{name:"truncLimit",description:"Maximum number of pages displayed in pagination.",tags:{default:[{description:"2",title:"default"}]},required:!1,type:{name:"number"}},{name:"ariaLabel",description:"ARIA label of pagination for accessibility.",required:!1,type:{name:"string"}}],events:[{name:"update:current-page",type:{names:["number"]},description:"Événement émis lorsque l'utilisateur change de page.",properties:[{type:{names:["mixed"]},name:"payload",description:"L'index de la nouvelle page sélectionnée."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"L'index de la nouvelle page sélectionnée."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvPagination/AvPagination.vue"]};function qe(e){return Array.from({length:e.value},(M,T)=>{const l=T+1;return{title:`${l}`,label:`${l}`,href:`#page-${l}`}})}const Qe={title:"Components/Navigation/AvPagination",component:ae,tags:["autodocs"],argTypes:{compact:{control:"boolean"},truncLimit:{control:"number"},currentPage:{control:"number"},firstPageLabel:{control:"text"},lastPageLabel:{control:"text"},nextPageLabel:{control:"text"},prevPageLabel:{control:"text"},compactCurrentPageLabel:{control:"text"},ariaLabel:{control:"text"}},args:{compact:!1,truncLimit:5,currentPage:0,firstPageLabel:"First page",lastPageLabel:"Last page",nextPageLabel:"Next page",prevPageLabel:"Previous page",compactCurrentPageLabel:"Page 1",ariaLabel:"Pagination navigation",pages:qe(pe(10))},parameters:{docs:{description:{component:`<h1 class="n1">Pagination - <code>AvPagination</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvPagination</code> is a pagination system compliant with good ergonomic and accessibility practices (ARIA).
  It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  This component displays links for the first, previous, middle, next, and last pages,
  with adaptive controls according to pagination status.
</p>`}}}},c=e=>({components:{AvPagination:ae},setup(){return{args:e}},template:'<AvPagination v-bind="args" />'}),p=c.bind({});p.args={};const P=c.bind({});P.args={currentPage:4};const v=c.bind({});v.args={currentPage:9};const f=c.bind({});f.args={truncLimit:1};const b=c.bind({});b.args={compact:!0};const h=c.bind({});h.args={compact:!0,currentPage:4,compactCurrentPageLabel:"Page 5"};const L=c.bind({});L.args={compact:!0,currentPage:9,compactCurrentPageLabel:"Page 10"};var E,D,$;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...($=(D=p.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var O,B,F;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(F=(B=P.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var V,G,z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var R,j,X;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,Z,_;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(_=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const Ue=["Default","DefaultMiddlePage","DefaultLastPage","DefaultTruncated","Compact","CompactMiddlePage","CompactLastPage"];export{b as Compact,L as CompactLastPage,h as CompactMiddlePage,p as Default,v as DefaultLastPage,P as DefaultMiddlePage,f as DefaultTruncated,Ue as __namedExportsOrder,Qe as default};
