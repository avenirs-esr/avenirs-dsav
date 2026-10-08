import{A as j}from"./AvBadge-33J2bnwF.js";import{u as P,aj as K,ah as z,l as _,aq as G,ag as n,K as J,ai as L,$ as p,k as a,P as f,n as y,a6 as Q,ab as b,m as X,j as d}from"./iframe-D4Ai9mOO.js";import{A as Y}from"./AvTooltip-DKUUDH_R.js";import{i as k,g as ee}from"./utils-BIlgUrNJ.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as ne}from"./icons-Dyb4xUo3.js";import"./use-text-truncation-DRYVjaUF.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";const ae="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23929292'%20/%3e%3c/svg%3e",oe="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",de="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23929292'%20/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%23929292'%20/%3e%3c/svg%3e",ie="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",se=["id","disabled","aria-disabled","checked","aria-describedby","name","data-testid"],le=["id","for","data-testid"],re={class:"av-col"},ce={width:"34",height:"14"},ue=["href"],ge={class:"av-col toggle-value"},me=["data-status"],pe={key:0,class:"caption-regular"},u=P({inheritAttrs:!1,__name:"AvToggle",props:J({modelValue:{type:Boolean},description:{},id:{},activeText:{default:"On"},inactiveText:{default:"Off"},name:{},statusTextWidth:{default:"1.8rem"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){L(o=>({d135e8b0:o.statusTextWidth}));const t=K(e,"modelValue"),E=z(),m=d(()=>e.id??`toggle-${crypto.randomUUID()}`),v=d(()=>`${m.value}-label`);function W(){return e.disabled?t.value?ae:de:t.value?oe:ie}function $(o){t.value=o.target.checked}const h=d(()=>E["data-testid"]??(e.id||"av-toggle")),F=d(()=>`${h.value}-input`),Z=d(()=>`${h.value}-label`);return(o,ve)=>(p(),_(Y,{content:n(ee)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!n(k)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"force-focusable":n(k)({disabled:e.disabled,disabledTooltip:e.disabledTooltip})},{default:G(()=>[a("input",{id:n(m),class:"av-toggle-input",disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:t.value,"aria-describedby":n(v),name:e.name,"data-testid":n(F),onInput:$},null,40,se),a("label",{id:n(v),for:n(m),class:f(["av-toggle av-row av-justify-center av-gap-xs av-align-baseline",{"av-toggle--disabled":e.disabled}]),"data-testid":n(Z)},[a("div",{class:f(["toggle av-row av-justify-start av-align-baseline av-gap-xxs",{"toggle--disabled":e.disabled,"toggle--custom":o.$slots.default!==void 0}])},[a("div",re,[(p(),y("svg",ce,[a("image",{href:W(),width:"34",height:"14"},null,8,ue)]))]),a("div",ge,[Q(o.$slots,"default",{active:t.value},()=>[a("span",{class:f(["status toggle-text no-select",{"caption-bold":t.value,"caption-regular":!t.value}]),"data-status":t.value},b(t.value?e.activeText:e.inactiveText),11,me)],!0)])],2),e.description?(p(),y("span",pe,b(e.description),1)):X("",!0)],10,le)]),_:3},8,["content","disabled","force-focusable"]))}}),g=te(u,[["__scopeId","data-v-28f54080"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"AvToggle",type:1,props:[{name:"modelValue",global:!1,default:"false",description:"Boolean value linked to the input.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"description",global:!1,description:"Indicates the purpose of the toggle.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"id",global:!1,description:"Unique id for the toggle. Used for accessibility.",tags:[{name:"default",text:"`toggle-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"activeText",global:!1,default:'"On"',description:"Text to display next to the toggle (right) when it is active.",tags:[{name:"default",text:"'On'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"inactiveText",global:!1,default:'"Off"',description:"Text to display next to the toggle (right) when it is inactive.",tags:[{name:"default",text:"'Off'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"name",global:!1,description:"`name` attribute of the input",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"statusTextWidth",global:!1,default:'"1.8rem"',description:"Width of the active/inactive texts",tags:[{name:"default",text:"'1.8rem'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',schema:[{kind:"enum",type:"boolean",schema:["false","true"]}],declarations:[]}],slots:[{name:"default",type:"[{ active: boolean; }]",description:"",tags:[],schema:{kind:"array",type:"[{ active: boolean; }]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"});const Ce={title:"Components/Interaction/Toggles/AvToggle",component:g,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"},statusTextWidth:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0,statusTextWidth:"1.8rem"},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},U=e=>({components:{AvToggle:g},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),i=U.bind({});i.args={};const s=U.bind({});s.args={modelValue:!0};const fe=e=>({components:{AvToggle:g},setup(){return{args:e}},template:`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),l=fe.bind({});l.args={description:"A long description to see how this works"};const O=e=>({components:{AvToggle:g,AvBadge:j,MDI_ICONS:ne},setup(){return{args:e}},template:`<AvToggle v-bind="args" v-model="args.modelValue">
    <template #default="{ active }">
      <AvBadge
        :label="active ? 'Active' : 'Inactive'"
        color="white"
        :background-color="active ? 'darkblue' : 'darkred'"
        :icon="active ? 'mdi:check-circle-outline' : 'mdi:warning-outline'"
      />
    </template>
  </AvToggle>`}),r=O.bind({});r.args={};const c=O.bind({});c.args={modelValue:!0};const Me=["Default","InitActive","WidthRestrict","WithSlot","WithSlotActive"];var V,T,x;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var N,w,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,M,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(H=(M=l.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var D,I,q;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvToggle,
    AvBadge,
    MDI_ICONS
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue">
    <template #default="{ active }">
      <AvBadge
        :label="active ? 'Active' : 'Inactive'"
        color="white"
        :background-color="active ? 'darkblue' : 'darkred'"
        :icon="active ? 'mdi:check-circle-outline' : 'mdi:warning-outline'"
      />
    </template>
  </AvToggle>\`
})`,...(q=(I=r.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var R,S,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvToggle,
    AvBadge,
    MDI_ICONS
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue">
    <template #default="{ active }">
      <AvBadge
        :label="active ? 'Active' : 'Inactive'"
        color="white"
        :background-color="active ? 'darkblue' : 'darkred'"
        :icon="active ? 'mdi:check-circle-outline' : 'mdi:warning-outline'"
      />
    </template>
  </AvToggle>\`
})`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};export{i as Default,s as InitActive,l as WidthRestrict,r as WithSlot,c as WithSlotActive,Me as __namedExportsOrder,Ce as default};
