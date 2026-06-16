import{r as N,A as W}from"./AvAccordion-CE-_r7S9.js";import{m as C,L as d,b as h,g as H,N as K,H as U,I as q,a2 as z,G as L}from"./iframe-D5noRA6K.js";import"./AvIcon-D3gUdp31.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-collapsable-Dwpdao2c.js";import"./icons-BJ4bGiUf.js";import"./preload-helper-ILsKNznc.js";const M={class:"av-accordions-group",role:"group","aria-label":"Accordion group"},v=C({__name:"AvAccordionsGroup",props:{activeAccordion:{}},emits:["update:activeAccordion"],setup(p,{emit:D}){const F=D,g=d(p.activeAccordion??-1),s=h({get:()=>g.value,set(o){g.value=o,F("update:activeAccordion",o)}}),u=d(new Map),T=d(0),a=d([]);function O(o,n){a.value[n]=o}function l(o){var n;(n=a.value[o])==null||n.focus()}function f(o,n){const e=a.value.length;if(!e)return;const A=(o+n+e)%e;l(A)}return q(N,o=>{const n=T.value++;u.value.set(n,o.value);const e=h(()=>n===s.value);z(o,()=>{u.value.set(n,o.value)});function A(){if(s.value===n){s.value=-1;return}s.value=n}function B(c){switch(c.key){case"ArrowDown":c.preventDefault(),f(n,1);break;case"ArrowUp":c.preventDefault(),f(n,-1);break;case"Home":c.preventDefault(),l(0);break;case"End":c.preventDefault(),l(a.value.length-1);break}}function E(c){c&&O(c,n)}return L(()=>{u.value.delete(n)}),{isActive:e,expand:A,onKeydown:B,setTriggerRef:E}}),(o,n)=>(U(),H("div",M,[K(o.$slots,"default")]))}});v.__docgenInfo={exportName:"default",displayName:"AvAccordionsGroup",description:"",tags:{},props:[{name:"activeAccordion",description:"Index of the currently active accordion.",required:!1,type:{name:"number"}}],events:[{name:"update:activeAccordion",type:{names:["union"],elements:[{name:"number"},{name:"undefined"}]},description:"Emitted when the active accordion changes."}],slots:[{name:"default",description:"Default slot for passing `AvAccordion` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue"]};const Y={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:v,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},m=p=>({components:{AvAccordionsGroup:v,AvAccordion:W},setup(){return{args:p}},template:`
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
  `}),r=m.bind({});r.args={};const t=m.bind({});t.args={activeAccordion:0};const i=m.bind({});i.args={activeAccordion:1};var b,G,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(y=(G=r.parameters)==null?void 0:G.docs)==null?void 0:y.source}}};var w,x,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,I,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Z=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];export{r as Default,t as WithFirstAccordionOpen,i as WithSecondAccordionOpen,Z as __namedExportsOrder,Y as default};
