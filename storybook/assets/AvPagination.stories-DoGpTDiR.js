import"./AvBreadcrumb-BfQKy1Xc.js";import{j as ce,c as T,l as n,v as t,K as o,C as d,y as m,x as y,u as r,F as ge,B as de,m as i,M as ue,r as me}from"./iframe-B7F8rOvE.js";import{A}from"./AvIcon-AsxSATAl.js";import{M as k}from"./icons-Dfz1JRVz.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvSideMenu-CUl6PjDi.js";import"./AvSideNavigation-0X9urQpj.js";import"./AvStepper-Dzo4Guya.js";import"./AvButton-CXRe67rO.js";import"./string-BZgCOP9D.js";import"./use-av-breakpoints-DZvhU6BD.js";import"./index-MpFsQ0Qs.js";import"./use-collapsable-BO78MkZs.js";import"./preload-helper-ILsKNznc.js";import"./AvListItem-DZk6DEL_.js";const Pe=["aria-label"],ve={class:"av-pagination__list"},fe={key:0},be={class:"b2-regular"},he=["href","title","aria-disabled"],Le={class:"av-sr-only"},xe=["href","title","aria-disabled"],ye={key:0,class:"caption-regular av-hidden av-unhidden-md"},Ae=["href","title","aria-current","onClick"],ke={key:0},Ce={key:1},Te=["href","title","disabled","aria-disabled"],Me={key:0,class:"caption-regular av-hidden av-unhidden-md"},Ie=["href","title","disabled","aria-disabled"],Ne={class:"av-sr-only"},ee=ce({__name:"AvPagination",props:{compact:{type:Boolean,default:!1},pages:{},currentPage:{default:0},firstPageLabel:{},lastPageLabel:{},nextPageLabel:{},prevPageLabel:{},compactCurrentPageLabel:{},truncLimit:{default:2},ariaLabel:{}},emits:["update:current-page"],setup(e,{emit:M}){const C=M,l=T(()=>Math.min(e.pages.length-1-e.truncLimit,Math.max(e.currentPage-(e.truncLimit-e.truncLimit%2)/2,0))),I=T(()=>Math.min(e.pages.length-1,l.value+e.truncLimit)),x=T(()=>e.pages.length>e.truncLimit?e.pages.slice(l.value,I.value+1):e.pages),te=g=>C("update:current-page",g),u=g=>te(g),ne=()=>u(0),re=()=>u(Math.max(0,e.currentPage-1)),ie=()=>u(Math.min(e.pages.length-1,e.currentPage+1)),se=()=>u(e.pages.length-1),oe=g=>e.pages.indexOf(g)===e.currentPage;return(g,s)=>{var N,S,q,D;return i(),n("nav",{role:"navigation",class:"av-pagination av-nav","aria-label":e.ariaLabel},[t("ul",ve,[e.compact&&e.compactCurrentPageLabel?(i(),n("li",fe,[t("span",be,d(e.compactCurrentPageLabel),1)])):o("",!0),t("li",null,[e.compact?o("",!0):(i(),n("a",{key:0,href:(N=e.pages[0])==null?void 0:N.href,class:"av-pagination__link",title:e.firstPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:s[0]||(s[0]=m(a=>ne(),["prevent"]))},[y(A,{name:r(k).PAGE_FIRST,size:1.5},null,8,["name"]),t("span",Le,d(e.firstPageLabel),1)],8,he))]),t("li",null,[t("a",{href:(S=e.pages[Math.max(e.currentPage-1,0)])==null?void 0:S.href,class:"av-pagination__link",title:e.prevPageLabel,"aria-disabled":e.currentPage===0?!0:void 0,onClick:s[1]||(s[1]=m(a=>re(),["prevent"]))},[y(A,{name:r(k).NAVIGATE_BEFORE,size:1.5},null,8,["name"]),e.compact?o("",!0):(i(),n("span",ye,d(e.prevPageLabel),1))],8,xe)]),e.compact?o("",!0):(i(!0),n(ge,{key:1},de(r(x),(a,le)=>(i(),n("li",{key:le},[t("a",{href:a==null?void 0:a.href,class:"av-pagination__link",title:a.title,"aria-current":oe(a)?"page":void 0,onClick:m(qe=>u(e.pages.indexOf(a)),["prevent"])},[r(x).indexOf(a)===0&&r(l)>0?(i(),n("span",ke,"...")):o("",!0),ue(" "+d(a.label)+" ",1),r(x).indexOf(a)===r(x).length-1&&r(I)<e.pages.length-1?(i(),n("span",Ce,"...")):o("",!0)],8,Ae)]))),128)),t("li",null,[t("a",{href:(q=e.pages[Math.min(e.currentPage+1,e.pages.length-1)])==null?void 0:q.href,class:"av-pagination__link",title:e.nextPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:s[2]||(s[2]=m(a=>ie(),["prevent"]))},[e.compact?o("",!0):(i(),n("span",Me,d(e.nextPageLabel),1)),y(A,{name:r(k).NAVIGATE_NEXT,size:1.5},null,8,["name"])],8,Te)]),t("li",null,[e.compact?o("",!0):(i(),n("a",{key:0,class:"av-pagination__link",href:(D=e.pages[e.pages.length-1])==null?void 0:D.href,title:e.lastPageLabel,disabled:e.currentPage===e.pages.length-1?!0:void 0,"aria-disabled":e.currentPage===e.pages.length-1?!0:void 0,onClick:s[3]||(s[3]=m(a=>se(),["prevent"]))},[t("span",Ne,d(e.lastPageLabel),1),y(A,{name:r(k).PAGE_LAST,size:1.5},null,8,["name"])],8,Ie))])])],8,Pe)}}}),ae=pe(ee,[["__scopeId","data-v-3cc7cb33"]]);ee.__docgenInfo={exportName:"default",displayName:"AvPagination",description:"",tags:{},props:[{name:"compact",description:`Allows compact display:
"Page x of y" with only navigation icons (no text).`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"pages",description:"List of pages.\nEach page is an object containing information such as `href` and `label`.",required:!0,type:{name:"Array",elements:[{name:"Page"}]}},{name:"currentPage",description:"Index of currently selected page (starts at 0).",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"}},{name:"firstPageLabel",description:"Tooltip text for first page link.",required:!1,type:{name:"string"}},{name:"lastPageLabel",description:"Tooltip text for last page link.",required:!1,type:{name:"string"}},{name:"nextPageLabel",description:"Tooltip text for next page link.",required:!1,type:{name:"string"}},{name:"prevPageLabel",description:"Tooltip text for previous page link.",required:!1,type:{name:"string"}},{name:"compactCurrentPageLabel",description:"Text for compact current page.",required:!1,type:{name:"string"}},{name:"truncLimit",description:"Maximum number of pages displayed in pagination.",tags:{default:[{description:"2",title:"default"}]},required:!1,type:{name:"number"}},{name:"ariaLabel",description:"ARIA label of pagination for accessibility.",required:!1,type:{name:"string"}}],events:[{name:"update:current-page",type:{names:["number"]},description:"Événement émis lorsque l'utilisateur change de page.",properties:[{type:{names:["mixed"]},name:"payload",description:"L'index de la nouvelle page sélectionnée."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"L'index de la nouvelle page sélectionnée."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvPagination/AvPagination.vue"]};function Se(e){return Array.from({length:e.value},(M,C)=>{const l=C+1;return{title:`${l}`,label:`${l}`,href:`#page-${l}`}})}const Je={title:"Components/Navigation/AvPagination",component:ae,tags:["autodocs"],argTypes:{compact:{control:"boolean"},truncLimit:{control:"number"},currentPage:{control:"number"},firstPageLabel:{control:"text"},lastPageLabel:{control:"text"},nextPageLabel:{control:"text"},prevPageLabel:{control:"text"},compactCurrentPageLabel:{control:"text"},ariaLabel:{control:"text"}},args:{compact:!1,truncLimit:5,currentPage:0,firstPageLabel:"First page",lastPageLabel:"Last page",nextPageLabel:"Next page",prevPageLabel:"Previous page",compactCurrentPageLabel:"Page 1",ariaLabel:"Pagination navigation",pages:Se(me(10))},parameters:{docs:{description:{component:`<h1 class="n1">Pagination - <code>AvPagination</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvPagination</code> is a pagination system compliant with good ergonomic and accessibility practices (ARIA).
  It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  This component displays links for the first, previous, middle, next, and last pages,
  with adaptive controls according to pagination status.
</p>`}}}},c=e=>({components:{AvPagination:ae},setup(){return{args:e}},template:'<AvPagination v-bind="args" />'}),p=c.bind({});p.args={};const P=c.bind({});P.args={currentPage:4};const v=c.bind({});v.args={currentPage:9};const f=c.bind({});f.args={truncLimit:1};const b=c.bind({});b.args={compact:!0};const h=c.bind({});h.args={compact:!0,currentPage:4,compactCurrentPageLabel:"Page 5"};const L=c.bind({});L.args={compact:!0,currentPage:9,compactCurrentPageLabel:"Page 10"};var E,w,$;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...($=(w=p.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var O,B,F;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(F=(B=P.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var V,z,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var R,j,K;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(K=(j=f.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var X,H,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,U,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(_=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const Qe=["Default","DefaultMiddlePage","DefaultLastPage","DefaultTruncated","Compact","CompactMiddlePage","CompactLastPage"];export{b as Compact,L as CompactLastPage,h as CompactMiddlePage,p as Default,v as DefaultLastPage,P as DefaultMiddlePage,f as DefaultTruncated,Qe as __namedExportsOrder,Je as default};
