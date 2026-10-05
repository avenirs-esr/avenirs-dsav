import{A as P}from"./AvBadge-DzipcgFV.js";import{n as j,a2 as L,a0 as K,d as s,f as z,a9 as H,$ as a,y as X,a1 as G,L as m,e as n,B as p,h,R as J,X as b,g as Q}from"./iframe-gg2ZS4dM.js";import{A as Y}from"./AvTooltip-C-gHPtit.js";import{i as y,g as ee}from"./utils-AN5LjLGN.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as ae}from"./icons-B6bk2eYx.js";import"./use-text-truncation-Btzk4NTf.js";import"./date-picker-20c-wtnQ.js";import"./string-DpXhLkA7.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";const ne="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23929292'%20/%3e%3c/svg%3e",ie="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",se="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23929292'%20/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%23929292'%20/%3e%3c/svg%3e",de="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",oe=["id","disabled","aria-disabled","checked","aria-describedby","name","data-testid"],le=["id","for","data-testid"],re={class:"av-col"},ce={width:"34",height:"14"},ue=["href"],ge={class:"av-col toggle-value"},me=["data-status"],pe={key:0,class:"caption-regular"},N=j({inheritAttrs:!1,__name:"AvToggle",props:X({modelValue:{type:Boolean},description:{},id:{},activeText:{default:"On"},inactiveText:{default:"Off"},name:{},statusTextWidth:{default:"1.8rem"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){G(i=>({d135e8b0:i.statusTextWidth}));const t=L(e,"modelValue"),U=K(),g=s(()=>e.id??`toggle-${crypto.randomUUID()}`),f=s(()=>`${g.value}-label`);function Z(){return e.disabled?t.value?ne:se:t.value?ie:de}function E(i){t.value=i.target.checked}const v=s(()=>U["data-testid"]??(e.id||"av-toggle")),_=s(()=>`${v.value}-input`),F=s(()=>`${v.value}-label`);return(i,ve)=>(m(),z(Y,{content:a(ee)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!a(y)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"force-focusable":a(y)({disabled:e.disabled,disabledTooltip:e.disabledTooltip})},{default:H(()=>[n("input",{id:a(g),class:"av-toggle-input",disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:t.value,"aria-describedby":a(f),name:e.name,"data-testid":a(_),onInput:E},null,40,oe),n("label",{id:a(f),for:a(g),class:p(["av-toggle av-row av-justify-center av-gap-xs av-align-baseline",{"av-toggle--disabled":e.disabled}]),"data-testid":a(F)},[n("div",{class:p(["toggle av-row av-justify-start av-align-baseline av-gap-xxs",{"toggle--disabled":e.disabled,"toggle--custom":i.$slots.default!==void 0}])},[n("div",re,[(m(),h("svg",ce,[n("image",{href:Z(),width:"34",height:"14"},null,8,ue)]))]),n("div",ge,[J(i.$slots,"default",{active:t.value},()=>[n("span",{class:p(["status toggle-text no-select",{"caption-bold":t.value,"caption-regular":!t.value}]),"data-status":t.value},b(t.value?e.activeText:e.inactiveText),11,me)],!0)])],2),e.description?(m(),h("span",pe,b(e.description),1)):Q("",!0)],10,le)]),_:3},8,["content","disabled","force-focusable"]))}}),u=te(N,[["__scopeId","data-v-28f54080"]]);N.__docgenInfo={exportName:"default",displayName:"AvToggle",type:1,props:[{name:"modelValue",global:!1,description:"Boolean value linked to the input.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"description",global:!1,description:"Indicates the purpose of the toggle.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"id",global:!1,description:"Unique id for the toggle. Used for accessibility.",tags:[{name:"default",text:"`toggle-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"activeText",global:!1,description:"Text to display next to the toggle (right) when it is active.",tags:[{name:"default",text:"'On'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"On"'},{name:"inactiveText",global:!1,description:"Text to display next to the toggle (right) when it is inactive.",tags:[{name:"default",text:"'Off'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Off"'},{name:"name",global:!1,description:"`name` attribute of the input",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"statusTextWidth",global:!1,description:"Width of the active/inactive texts",tags:[{name:"default",text:"'1.8rem'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"1.8rem"'},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"[{ active: boolean; }]",description:"",declarations:[],schema:{kind:"array",type:"[{ active: boolean; }]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"disabled",type:"boolean | undefined",description:"Indicates if the element is disabled.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabledTooltip",type:"string | undefined",description:"Tooltip text to display when the element is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",type:"string | undefined",description:"`name` attribute of the input",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"id",type:"string | undefined",description:"Unique id for the toggle. Used for accessibility.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"boolean | undefined",description:"Boolean value linked to the input.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"description",type:"string | undefined",description:"Indicates the purpose of the toggle.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"activeText",type:"string | undefined",description:"Text to display next to the toggle (right) when it is active.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"inactiveText",type:"string | undefined",description:"Text to display next to the toggle (right) when it is inactive.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"statusTextWidth",type:"string | undefined",description:"Width of the active/inactive texts",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"};const Se={title:"Components/Interaction/Toggles/AvToggle",component:u,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"},statusTextWidth:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0,statusTextWidth:"1.8rem"},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},R=e=>({components:{AvToggle:u},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),d=R.bind({});d.args={};const o=R.bind({});o.args={modelValue:!0};const fe=e=>({components:{AvToggle:u},setup(){return{args:e}},template:`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),l=fe.bind({});l.args={description:"A long description to see how this works"};const $=e=>({components:{AvToggle:u,AvBadge:P,MDI_ICONS:ae},setup(){return{args:e}},template:`<AvToggle v-bind="args" v-model="args.modelValue">
    <template #default="{ active }">
      <AvBadge
        :label="active ? 'Active' : 'Inactive'"
        color="white"
        :background-color="active ? 'darkblue' : 'darkred'"
        :icon="active ? 'mdi:check-circle-outline' : 'mdi:warning-outline'"
      />
    </template>
  </AvToggle>`}),r=$.bind({});r.args={};const c=$.bind({});c.args={modelValue:!0};var T,x,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,A,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,V,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(S=(V=l.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var D,B,q;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(q=(B=r.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var W,M,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const De=["Default","InitActive","WidthRestrict","WithSlot","WithSlotActive"];export{d as Default,o as InitActive,l as WidthRestrict,r as WithSlot,c as WithSlotActive,De as __namedExportsOrder,Se as default};
