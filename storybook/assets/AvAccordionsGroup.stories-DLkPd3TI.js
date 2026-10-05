import{r as B,A as C}from"./AvAccordion-6gA8vt8I.js";import{n as E,P as d,d as y,h as K,R as N,L as P,M as V,a7 as W,K as L}from"./iframe-gg2ZS4dM.js";import"./AvIcon-uLxr48Eu.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-collapsable-YixK8bhj.js";import"./icons-B6bk2eYx.js";import"./preload-helper-ILsKNznc.js";const M={class:"av-accordions-group",role:"group","aria-label":"Accordion group"},A=E({__name:"AvAccordionsGroup",props:{activeAccordion:{}},emits:["update:activeAccordion"],setup(u,{emit:D}){const O=D,f=d(u.activeAccordion??-1),a=y({get:()=>f.value,set(e){f.value=e,O("update:activeAccordion",e)}}),p=d(new Map),R=d(0),s=d([]);function q(e,n){s.value[n]=e}function l(e){var n;(n=s.value[e])==null||n.focus()}function g(e,n){const c=s.value.length;if(!c)return;const m=(e+n+c)%c;l(m)}return V(B,e=>{const n=R.value++;p.value.set(n,e.value);const c=y(()=>n===a.value);W(e,()=>{p.value.set(n,e.value)});function m(){if(a.value===n){a.value=-1;return}a.value=n}function F(o){switch(o.key){case"ArrowDown":o.preventDefault(),g(n,1);break;case"ArrowUp":o.preventDefault(),g(n,-1);break;case"Home":o.preventDefault(),l(0);break;case"End":o.preventDefault(),l(s.value.length-1);break}}function T(o){o&&q(o,n)}return L(()=>{p.value.delete(n)}),{isActive:c,expand:m,onKeydown:F,setTriggerRef:T}}),(e,n)=>(P(),K("div",M,[N(e.$slots,"default")]))}});A.__docgenInfo={exportName:"default",displayName:"AvAccordionsGroup",type:1,props:[{name:"activeAccordion",global:!1,description:"Index of the currently active accordion.",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:activeAccordion",description:"Emitted when the active accordion changes.",tags:[],type:"[value: number | undefined]",signature:'(event: "update:activeAccordion", value: number | undefined): void',declarations:[],schema:[{kind:"enum",type:"number | undefined",schema:["undefined","number"]}]}],slots:[{name:"default",type:"any",description:"Default slot for passing `AvAccordion` components.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"activeAccordion",type:"number | undefined",description:"Index of the currently active accordion.",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue"};const Y={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:A,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},v=u=>({components:{AvAccordionsGroup:A,AvAccordion:C},setup(){return{args:u}},template:`
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
  `}),r=v.bind({});r.args={};const t=v.bind({});t.args={activeAccordion:0};const i=v.bind({});i.args={activeAccordion:1};var h,b,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var _,w,G;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(G=(w=t.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var S,x,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const Z=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];export{r as Default,t as WithFirstAccordionOpen,i as WithSecondAccordionOpen,Z as __namedExportsOrder,Y as default};
