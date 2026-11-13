import"./AvBreadcrumb-BbmcuBsq.js";import{a as I}from"./AvStepper-ezqN6kTA.js";import"./AvSideMenu-CY5f6vyM.js";import"./AvSideNavigation-N6J1V1m5.js";import"./AvSkipLinks-Be_CA7gD.js";import{r as _}from"./iframe-FzHOyO0g.js";import"./AvButton-Ct0OpwRu.js";import"./AvTooltip-igNKyoRw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CrRGSehT.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-CWwu1e-2.js";import"./icons-D5SKHg5c.js";import"./string--WCOsvs9.js";import"./use-av-breakpoints-D-FuVPhx.js";import"./index-ISNAAtG1.js";import"./use-collapsable-BdnQtAPp.js";import"./AvCheckboxListItem-CbNAR_UO.js";import"./AvList-Mo0oQ4sg.js";import"./utils-BIlgUrNJ.js";import"./AvCheckbox-BiVjpuPp.js";import"./AvFieldsetElement-eXkiHNXw.js";import"./AvMessage-kWjOXT0j.js";import"./AvIconText-B1wgOEUy.js";import"./AvSortableList-B5my1ec9.js";import"./AvCard-D2l7l5nv.js";import"./preload-helper-ILsKNznc.js";function $(c){return Array.from({length:c.value},(E,N)=>{const p=N+1;return{title:`${p}`,label:`${p}`,href:`#page-${p}`}})}const pa={title:"Components/Navigation/AvPagination",component:I,tags:["autodocs"],argTypes:{compact:{control:"boolean"},truncLimit:{control:"number"},currentPage:{control:"number"},firstPageLabel:{control:"text"},lastPageLabel:{control:"text"},nextPageLabel:{control:"text"},prevPageLabel:{control:"text"},compactCurrentPageLabel:{control:"text"},ariaLabel:{control:"text"}},args:{compact:!1,truncLimit:5,currentPage:0,firstPageLabel:"First page",lastPageLabel:"Last page",nextPageLabel:"Next page",prevPageLabel:"Previous page",compactCurrentPageLabel:"Page 1",ariaLabel:"Pagination navigation",pages:$(_(10))},parameters:{docs:{description:{component:`<h1 class="n1">Pagination - <code>AvPagination</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvPagination</code> is a pagination system compliant with good ergonomic and accessibility practices (ARIA).
  It allows easy navigation through multiple pages, with advanced features such as page display limitation and event management.
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  This component displays links for the first, previous, middle, next, and last pages,
  with adaptive controls according to pagination status.
</p>`}}}},a=c=>({components:{AvPagination:I},setup(){return{args:c}},template:'<AvPagination v-bind="args" />'}),e=a.bind({});e.args={};const t=a.bind({});t.args={currentPage:4};const n=a.bind({});n.args={currentPage:9};const r=a.bind({});r.args={truncLimit:1};const o=a.bind({});o.args={compact:!0};const s=a.bind({});s.args={compact:!0,currentPage:4,compactCurrentPageLabel:"Page 5"};const i=a.bind({});i.args={compact:!0,currentPage:9,compactCurrentPageLabel:"Page 10"};const ga=["Default","DefaultMiddlePage","DefaultLastPage","DefaultTruncated","Compact","CompactMiddlePage","CompactLastPage"];var g,m,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,d,P;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(P=(d=t.parameters)==null?void 0:d.docs)==null?void 0:P.source}}};var v,b,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(A=(b=n.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var L,f,h;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,C,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,y,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,F,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvPagination
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPagination v-bind="args" />\`
})`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};export{o as Compact,i as CompactLastPage,s as CompactMiddlePage,e as Default,n as DefaultLastPage,t as DefaultMiddlePage,r as DefaultTruncated,ga as __namedExportsOrder,pa as default};
