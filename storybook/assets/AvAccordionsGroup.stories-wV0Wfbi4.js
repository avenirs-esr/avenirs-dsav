import{r as D,A as S}from"./AvAccordion-Y7FLs8FK.js";import{u as F,a4 as u,n as I,a6 as O,$ as T,a1 as C,ao as B,Z as K,j as y}from"./iframe-BAltxv45.js";import"./AvIcon-DIONtdP-.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-collapsable-CBXtB8ah.js";import"./icons-2YM_gKQ7.js";import"./preload-helper-ILsKNznc.js";const P={class:"av-accordions-group",role:"group","aria-label":"Accordion group"},a=F({__name:"AvAccordionsGroup",props:{activeAccordion:{}},emits:["update:activeAccordion"],setup(p,{emit:G}){const _=G,f=u(p.activeAccordion??-1),i=y({get:()=>f.value,set(n){f.value=n,_("update:activeAccordion",n)}}),l=u(new Map),E=u(0),s=u([]);function U(n,e){s.value[e]=n}function m(n){var e;(e=s.value[n])==null||e.focus()}function g(n,e){const r=s.value.length;if(!r)return;const v=(n+e+r)%r;m(v)}return C(D,n=>{const e=E.value++;l.value.set(e,n.value);const r=y(()=>e===i.value);B(n,()=>{l.value.set(e,n.value)});function v(){if(i.value===e){i.value=-1;return}i.value=e}function q(o){switch(o.key){case"ArrowDown":o.preventDefault(),g(e,1);break;case"ArrowUp":o.preventDefault(),g(e,-1);break;case"Home":o.preventDefault(),m(0);break;case"End":o.preventDefault(),m(s.value.length-1);break}}function x(o){o&&U(o,e)}return K(()=>{l.value.delete(e)}),{isActive:r,expand:v,onKeydown:q,setTriggerRef:x}}),(n,e)=>(T(),I("div",P,[O(n.$slots,"default")]))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"AvAccordionsGroup",type:1,props:[{name:"activeAccordion",global:!1,description:"Index of the currently active accordion.",tags:[],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:activeAccordion",description:"Emitted when the active accordion changes.",tags:[],type:"[value: number | undefined]",signature:'(event: "update:activeAccordion", value: number | undefined): void',schema:[{kind:"enum",type:"number | undefined",schema:["undefined","number"]}],declarations:[]}],slots:[{name:"default",type:"any",description:"Default slot for passing `AvAccordion` components.",tags:[],schema:"any",declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/accordions/AvAccordionsGroup/AvAccordionsGroup.vue"});const X={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:a,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},A=p=>({components:{AvAccordionsGroup:a,AvAccordion:S},setup(){return{args:p}},template:`
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
  `}),t=A.bind({});t.args={};const d=A.bind({});d.args={activeAccordion:0};const c=A.bind({});c.args={activeAccordion:1};const Y=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];var k,h,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(N=(h=t.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var V,b,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(b=d.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var M,R,w;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};export{t as Default,d as WithFirstAccordionOpen,c as WithSecondAccordionOpen,Y as __namedExportsOrder,X as default};
