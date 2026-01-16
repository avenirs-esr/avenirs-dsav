import"./AvBreadcrumb-CWV6xl7v.js";import{d as ge,c as x,e as r,i as s,u as t,z as n,I as d,Y as m,f as A,L as de,M as ue,g as i,N as me,r as pe}from"./iframe-Dc-nSAC4.js";import{A as k}from"./AvIcon-D_k_tlEE.js";import{M as C}from"./icons-CvJnIbum.js";import{_ as Pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvSideMenu-Dn4XCzZA.js";import"./AvSideNavigation-I3vG6ZRz.js";import"./AvStepper-DGVc1Sk0.js";import"./AvButton-Ba8N_zya.js";import"./string-BZgCOP9D.js";import"./use-av-breakpoints-D2g8b7we.js";import"./index-DDdImxqO.js";import"./use-collapsable-BYiRGyMU.js";import"./preload-helper-ILsKNznc.js";import"./AvListItem-qA3CiwnD.js";const ve=["aria-label"],fe={class:"av-pagination__list av-row av-row-wrap av-align-center av-gap-sm"},be={key:0},he={class:"b2-regular"},Le=["href","title","aria-disabled"],ye={class:"av-sr-only"},xe=["href","title","aria-disabled"],Ae={key:0,class:"caption-regular av-hidden av-unhidden-md"},ke=["href","title","aria-current","onClick"],Ce={key:0},Te={key:1},Ie=["href","title","disabled","aria-disabled"],Me={key:0,class:"caption-regular av-hidden av-unhidden-md"},Ne=["href","title","disabled","aria-disabled"],Se={class:"av-sr-only"},ee=ge({__name:"AvPagination",props:{compact:{type:Boolean,default:!1},pages:{},currentPage:{default:0},firstPageLabel:{},lastPageLabel:{},nextPageLabel:{},prevPageLabel:{},compactCurrentPageLabel:{},truncLimit:{default:2},ariaLabel:{}},emits:["update:current-page"],setup(e,{emit:I}){const T=I,l=x(()=>Math.min(e.pages.length-1-e.truncLimit,Math.max(e.currentPage-(e.truncLimit-e.truncLimit%2)/2,0))),M=x(()=>Math.min(e.pages.length-1,l.value+e.truncLimit)),y=x(()=>e.pages.length>e.truncLimit?e.pages.slice(l.value,M.value+1):e.pages),te=x(()=>e.pages.length>0),ne=g=>T("update:current-page",g),u=g=>ne(g),re=()=>u(0),ie=()=>u(Math.max(0,e.currentPage-1)),se=()=>u(Math.min(e.pages.length-1,e.currentPage+1)),oe=()=>u(e.pages.length-1),le=g=>e.pages.indexOf(g)===e.currentPage;return(g,o)=>{var N,S,q,w;return t(te)?(i(),r("nav",{key:0,role:"navigation",class:"av-pagination av-nav","aria-label":e.ariaLabel},[n("ul",fe,[e.compact&&e.compactCurrentPageLabel?(i(),r("li",be,[n("span",he,d(e.compactCurrentPageLabel),1)])):s("",!0),n("li",null,[e.compact?s("",!0):(i(),r("a",{key:0,href:(N=e.pages[0])==null?void 0:N.href,class:"av-pagination__link",title:e.firstPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:o[0]||(o[0]=m(a=>re(),["prevent"]))},[A(k,{name:t(C).PAGE_FIRST,size:1.5},null,8,["name"]),n("span",ye,d(e.firstPageLabel),1)],8,Le))]),n("li",null,[n("a",{href:(S=e.pages[Math.max(e.currentPage-1,0)])==null?void 0:S.href,class:"av-pagination__link",title:e.prevPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:o[1]||(o[1]=m(a=>ie(),["prevent"]))},[A(k,{name:t(C).NAVIGATE_BEFORE,size:1.5},null,8,["name"]),e.compact?s("",!0):(i(),r("span",Ae,d(e.prevPageLabel),1))],8,xe)]),e.compact?s("",!0):(i(!0),r(de,{key:1},ue(t(y),(a,ce)=>(i(),r("li",{key:ce},[n("a",{href:a==null?void 0:a.href,class:"av-pagination__link",title:a.title,"aria-current":le(a)?"page":void 0,onClick:m(we=>u(e.pages.indexOf(a)),["prevent"])},[t(y).indexOf(a)===0&&t(l)>0?(i(),r("span",Ce,"...")):s("",!0),me(" "+d(a.label)+" ",1),t(y).indexOf(a)===t(y).length-1&&t(M)<e.pages.length-1?(i(),r("span",Te,"...")):s("",!0)],8,ke)]))),128)),n("li",null,[n("a",{href:(q=e.pages[Math.min(e.currentPage+1,e.pages.length-1)])==null?void 0:q.href,class:"av-pagination__link",title:e.nextPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:o[2]||(o[2]=m(a=>se(),["prevent"]))},[e.compact?s("",!0):(i(),r("span",Me,d(e.nextPageLabel),1)),A(k,{name:t(C).NAVIGATE_NEXT,size:1.5},null,8,["name"])],8,Ie)]),n("li",null,[e.compact?s("",!0):(i(),r("a",{key:0,class:"av-pagination__link",href:(w=e.pages[e.pages.length-1])==null?void 0:w.href,title:e.lastPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:o[3]||(o[3]=m(a=>oe(),["prevent"]))},[n("span",Se,d(e.lastPageLabel),1),A(k,{name:t(C).PAGE_LAST,size:1.5},null,8,["name"])],8,Ne))])])],8,ve)):s("",!0)}}}),ae=Pe(ee,[["__scopeId","data-v-e50ee994"]]);ee.__docgenInfo={exportName:"default",displayName:"AvPagination",description:"",tags:{},props:[{name:"compact",description:`Allows compact display:
"Page x of y" with only navigation icons (no text).`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"pages",description:"List of pages.\nEach page is an object containing information such as `href` and `label`.",required:!0,type:{name:"Array",elements:[{name:"Page"}]}},{name:"currentPage",description:"Index of currently selected page (starts at 0).",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"}},{name:"firstPageLabel",description:"Tooltip text for first page link.",required:!1,type:{name:"string"}},{name:"lastPageLabel",description:"Tooltip text for last page link.",required:!1,type:{name:"string"}},{name:"nextPageLabel",description:"Tooltip text for next page link.",required:!1,type:{name:"string"}},{name:"prevPageLabel",description:"Tooltip text for previous page link.",required:!1,type:{name:"string"}},{name:"compactCurrentPageLabel",description:"Text for compact current page.",required:!1,type:{name:"string"}},{name:"truncLimit",description:"Maximum number of pages displayed in pagination.",tags:{default:[{description:"2",title:"default"}]},required:!1,type:{name:"number"}},{name:"ariaLabel",description:"ARIA label of pagination for accessibility.",required:!1,type:{name:"string"}}],events:[{name:"update:current-page",type:{names:["number"]},description:"Événement émis lorsque l'utilisateur change de page.",properties:[{type:{names:["mixed"]},name:"payload",description:"L'index de la nouvelle page sélectionnée."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"L'index de la nouvelle page sélectionnée."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvPagination/AvPagination.vue"]};function qe(e){return Array.from({length:e.value},(I,T)=>{const l=T+1;return{title:`${l}`,label:`${l}`,href:`#page-${l}`}})}const Ke={title:"Components/Navigation/AvPagination",component:ae,tags:["autodocs"],argTypes:{compact:{control:"boolean"},truncLimit:{control:"number"},currentPage:{control:"number"},firstPageLabel:{control:"text"},lastPageLabel:{control:"text"},nextPageLabel:{control:"text"},prevPageLabel:{control:"text"},compactCurrentPageLabel:{control:"text"},ariaLabel:{control:"text"}},args:{compact:!1,truncLimit:5,currentPage:0,firstPageLabel:"First page",lastPageLabel:"Last page",nextPageLabel:"Next page",prevPageLabel:"Previous page",compactCurrentPageLabel:"Page 1",ariaLabel:"Pagination navigation",pages:qe(pe(10))},parameters:{docs:{description:{component:`<h1 class="n1">Pagination - <code>AvPagination</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvPagination</code> is a pagination system compliant with good ergonomic and accessibility practices (ARIA).
  It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  This component displays links for the first, previous, middle, next, and last pages,
  with adaptive controls according to pagination status.
</p>`}}}},c=e=>({components:{AvPagination:ae},setup(){return{args:e}},template:'<AvPagination v-bind="args" />'}),p=c.bind({});p.args={};const P=c.bind({});P.args={currentPage:4};const v=c.bind({});v.args={currentPage:9};const f=c.bind({});f.args={truncLimit:1};const b=c.bind({});b.args={compact:!0};const h=c.bind({});h.args={compact:!0,currentPage:4,compactCurrentPageLabel:"Page 5"};const L=c.bind({});L.args={compact:!0,currentPage:9,compactCurrentPageLabel:"Page 10"};var D,E,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...($=(E=p.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var O,V,z;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(z=(V=P.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,F,G;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var R,j,X;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Y,H,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Z,_;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(_=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const Qe=["Default","DefaultMiddlePage","DefaultLastPage","DefaultTruncated","Compact","CompactMiddlePage","CompactLastPage"];export{b as Compact,L as CompactLastPage,h as CompactMiddlePage,p as Default,v as DefaultLastPage,P as DefaultMiddlePage,f as DefaultTruncated,Qe as __namedExportsOrder,Ke as default};
