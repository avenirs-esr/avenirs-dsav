import{r as I,A as O}from"./AvAccordion-vRoYLiHn.js";import{d as T,r as a,c as A,a as k,y as W,o as D,z as E,w as N,A as z}from"./iframe-BQ7qKONV.js";import"./AvIcon-DsbNWGPN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-collapsable-C2ubtYvR.js";import"./icons-DLse1evt.js";import"./preload-helper-ILsKNznc.js";const B={class:"av-accordions-group",role:"group","aria-label":"Accordion group"},d=T({__name:"AvAccordionsGroup",props:{activeAccordion:{}},emits:["update:activeAccordion"],setup(t,{emit:S}){const _=S,u=a(t.activeAccordion??-1),i=A({get:()=>u.value,set(n){u.value=n,_("update:activeAccordion",n)}}),s=a(new Map),w=a(0);return E(I,n=>{const o=w.value++;s.value.set(o,n.value);const x=A(()=>o===i.value);N(n,()=>{s.value.set(o,n.value)});function F(){if(i.value===o){i.value=-1;return}i.value=o}return z(()=>{s.value.delete(o)}),{isActive:x,expand:F}}),(n,o)=>(D(),k("div",B,[W(n.$slots,"default")]))}});d.__docgenInfo={exportName:"default",displayName:"AvAccordionsGroup",description:"",tags:{},props:[{name:"activeAccordion",description:"Index of the currently active accordion.",required:!1,type:{name:"number"}}],events:[{name:"update:activeAccordion",type:{names:["union"],elements:[{name:"number"},{name:"undefined"}]},description:"Emitted when the active accordion changes."}],slots:[{name:"default",description:"Default slot for passing `AvAccordion` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue"]};const H={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:d,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAccordionsGroup</code> component automatically manages the addition of <code>AvAccordion</code> in a group according to the <code>AvAccordion</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    Accordions allow users to show and hide sections of content presented on a page.
  </span>
</p>

<p>
  <span class="b2-regular">
    The accordions group lets you group several accordions into a single coherent unit. It manages active selection logic between child accordions, allowing you to open one accordion while closing the others. This component is essential for organizing interactively linked accordion sets.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">None.</span>
</p>`}}}},p=t=>({components:{AvAccordionsGroup:d,AvAccordion:O},setup(){return{args:t}},template:`
    <AvAccordionsGroup v-bind="args" v-model="args.activeAccordion">
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
  `}),c=p.bind({});c.args={};const e=p.bind({});e.args={activeAccordion:0};const r=p.bind({});r.args={activeAccordion:1};var l,v,m;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
    <AvAccordionsGroup v-bind="args" v-model="args.activeAccordion">
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
})`,...(m=(v=c.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var g,h,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
    <AvAccordionsGroup v-bind="args" v-model="args.activeAccordion">
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
})`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var G,b,y;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
    <AvAccordionsGroup v-bind="args" v-model="args.activeAccordion">
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
})`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const J=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];export{c as Default,e as WithFirstAccordionOpen,r as WithSecondAccordionOpen,J as __namedExportsOrder,H as default};
