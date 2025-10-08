import{_ as $}from"./AvAccordion-DxfHwMF7.js";import{d as B,O as b,U as E,c as T,P as M,k as t,w as p,B as l,i as o,b as N,F as U,j as W,e as u,M as z,f as j,t as q}from"./iframe-CM3fYS2g.js";import{a as L,E as P}from"./vue-dsfr-keweR0Qw.js";import{A as H}from"./AvVIcon-8vmFNpku.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const K={class:"title-container"},Q={class:"n6"},R={class:"accordion-content-container"},V=B({__name:"AvAccordionsGroup",props:b({activeAccordion:{}},{activeAccordion:{},activeAccordionModifiers:{}}),emits:b(["update:activeAccordion"],["update:activeAccordion"]),setup(a){const s=E(),D=T(()=>{var d;return((d=s.default)==null?void 0:d.call(s))||[]}),m=M(a,"activeAccordion"),O=`accordion-group-${crypto.randomUUID()}`;return(d,v)=>(o(),t(l(P),{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=n=>m.value=n),role:"group","aria-label":"Accordion group"},{default:p(()=>[(o(!0),N(U,null,W(l(D),(n,i)=>(o(),t(l(L),{id:`${O}-accordion-${i}`,key:i,"aria-labelledby":`accordion-title-${i}`,"aria-describedby":`accordion-content-${i}`},{title:p(()=>{var g,h,f;return[u("div",K,[(g=n.props)!=null&&g.icon?(o(),t(H,{key:0,size:2,name:(h=n.props)==null?void 0:h.icon,color:"var(--icon)"},null,8,["name"])):j("",!0),u("h6",Q,q((f=n.props)==null?void 0:f.title),1)])]}),default:p(()=>[u("div",R,[(o(),t(z(n.children.default)))])]),_:2},1032,["id","aria-labelledby","aria-describedby"]))),128))]),_:1},8,["modelValue"]))}}),C=J(V,[["__scopeId","data-v-efeab1a6"]]);V.__docgenInfo={exportName:"default",displayName:"AvAccordionsGroup",description:"",tags:{},props:[{name:"activeAccordion",description:"Index of the currently active accordion.",required:!1,type:{name:"number"}}],events:[{name:"update:activeAccordion",type:{names:["union"],elements:[{name:"number"},{name:"undefined"}]},description:"Emitted when the active accordion changes."}],slots:[{name:"default",description:"Default slot for passing `AvAccordion` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue"]};const cn={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:C,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAccordionsGroup</code> component automatically manages the addition of <code>AvAccordion</code>
    in a group according to the <code>AvAccordion</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    Accordions allow users to show and hide sections of content presented on a page.
  </span>
</p>

<p>
  <span class="b2-regular">
    The accordions group lets you group several accordions into a single coherent unit. It manages active selection logic between
    child accordions, allowing you to open one accordion while closing the others. This component is essential for organizing
    interactively linked accordion sets.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul class="b2-regular">
  <li>A header (<code>title</code> prop, type <code>string</code>) — mandatory, represents the section title.</li>
  <li>A left icon (<code>icon</code> prop, type <code>string</code>) — optional, must follow VICon naming convention.</li>
  <li>A right icon — <code>v</code> when the panel is closed, <code>^</code> when open.</li>
  <li>A separator.</li>
  <li>A content zone — hidden by default and shown when expanded, accepting any content via the default <code>slot</code>.</li>
</ul>`}}}},A=a=>({components:{AvAccordionsGroup:C,AvAccordion:$},setup(){return{args:a}},template:`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  `}),e=A.bind({});e.args={};const c=A.bind({});c.args={activeAccordion:0};const r=A.bind({});r.args={activeAccordion:1};var y,_,G;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(G=(_=e.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var w,I,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var F,k,x;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const rn=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];export{e as Default,c as WithFirstAccordionOpen,r as WithSecondAccordionOpen,rn as __namedExportsOrder,cn as default};
