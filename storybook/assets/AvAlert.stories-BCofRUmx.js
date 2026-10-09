import{u as K,n as b,k as u,r as G,L as J,ag as t,ab as h,m,l as Q,P as X,$ as f,j as g}from"./iframe-BAltxv45.js";import{A as Y}from"./AvIcon-DIONtdP-.js";import{A as Z}from"./AvButton-1Ni9UELl.js";import{M as o}from"./icons-2YM_gKQ7.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-BcE9a6PC.js";import"./string-BZgCOP9D.js";const ne=["id","role"],te={class:"av-alert__container av-row av-align-center av-justify-between av-w-full av-gap-md"},oe={class:"av-alert__content av-row av-align-center av-gap-sm"},ae={class:"av-col"},re={key:0,class:"s2-bold"},se={class:"b1-regular"},p=K({__name:"AvAlert",props:{closed:{type:Boolean},closeable:{type:Boolean},id:{},title:{default:""},description:{},small:{type:Boolean,default:!1},type:{default:"info"},closeButtonLabel:{default:"Fermer"}},emits:["close"],setup(e,{emit:O}){const F=O,z=e.id??`alert-${crypto.randomUUID()}`,P=()=>F("close"),W=g(()=>[`av-alert--${e.type}`,{"av-alert--sm av-p-sm":e.small,"av-p-md":!e.small}]),$=g(()=>{switch(e.type){case"error":return{name:o.ALERT_CIRCLE_OUTLINE,color:"var(--dark-background-error)"};case"success":return{name:o.CHECK_CIRCLE,color:"var(--dark-background-success)"};case"warning":return{name:o.WARNING_OUTLINE,color:"var(--dark-background-warn)"};case"info":default:return{name:o.INFORMATION_OUTLINE,color:"var(--dark-background-primary1)"}}}),j=g(()=>e.type==="error"||e.type==="warning"?"alert":"status");return(le,ie)=>e.closed?m("",!0):(f(),b("div",{key:0,id:t(z),class:X(["av-alert av-radius-lg",t(W)]),role:t(j)},[u("div",te,[u("div",oe,[G(Y,J(t($),{size:3}),null,16),u("div",ae,[e.small?m("",!0):(f(),b("span",re,h(e.title),1)),u("span",se,h(e.description),1)])]),e.closeable?(f(),Q(Z,{key:0,"icon-only":"",icon:t(o).CLOSE_CIRCLE_OUTLINE,label:e.closeButtonLabel,size:e.small?"MD":"LG",onClick:P},null,8,["icon","label","size"])):m("",!0)])],10,ne))}}),y=ee(p,[["__scopeId","data-v-3f3851be"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"AvAlert",type:1,props:[{name:"closed",global:!1,description:"Indicates whether the alert is closed (`true`) or visible (`false`).\nManaged by the parent component (typically AvToaster).",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"closeable",global:!1,description:"Indicates whether the alert can be closed using a button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"id",global:!1,description:"The alert unique identifier.",tags:[{name:"default",text:"`alert-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"title",global:!1,default:'""',description:"The alert title.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"description",global:!1,description:"The alert description text.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"small",global:!1,default:"false",description:"Indicates whether the alert should be displayed in a small format.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"type",global:!1,default:'"info"',description:"The alert type. Affects the color and icon.",tags:[{name:"default",text:"'info'"}],required:!1,type:'"error" | "info" | "warning" | "success" | undefined',schema:{kind:"enum",type:'"error" | "info" | "warning" | "success" | undefined',schema:["undefined",'"error"','"info"','"warning"','"success"']},declarations:[]},{name:"closeButtonLabel",global:!1,default:'"Fermer"',description:"The label and aria-label of the alert close button.",tags:[{name:"default",text:"'Fermer'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"close",description:"Event triggered when the alert closes.",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/feedback/AvAlert/AvAlert.vue"});const ve={title:"Components/Feedback/AvAlert",component:y,tags:["autodocs"],argTypes:{closed:{control:"boolean"},closeable:{control:"boolean"},id:{control:"text"},title:{control:"text"},description:{control:"text"},small:{control:"boolean"},type:{control:"select",options:["info","success","warning","error"]},closeButtonLabel:{control:"text"}},args:{closed:!1,closeable:!1,title:"Alert Title",description:"This is an alert description.",small:!1,type:"info",closeButtonLabel:"Close"},parameters:{docs:{description:{component:`<h1 class="n1">Alerts - <code>AvAlert</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvAlert</code> component is intended for use in the <code>AvToaster</code> component.
  Alerts draw the user attention to information without interrupting their current task.
</p>

<p class="b2-regular">
  The alert is available in two sizes:
  <ul>
    <li>medium size (MD, by default, if the <code>small</code> prop is absent or set to <code>false</code>)</li>
    <li>small size (SM) if the <code>small</code> prop is set to <code>true</code>)</li>
  </ul>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  The alert consists of the following elements:
  <ul>
    <li>a title (prop <code>title</code>, of type <code>string</code>):
      <ul>
        <li>mandatory on the MD version (if the <code>small</code> prop is absent or set to <code>false</code>)</li>
        <li>optional on the SM version (if the <code>small</code> prop is set to <code>true</code>)</li>
      </ul>
    </li>
    <li>an icon and a color determined by the <code>type</code> prop:
      <ul>
        <li><code>info</code> (default if <code>type</code> is absent)</li>
        <li><code>success</code></li>
        <li><code>warning</code></li>
        <li><code>error</code></li>
      </ul>
    </li>
    <li>a description text (prop <code>description</code>, of type <code>string</code>):
      <ul>
        <li>optional on the MD version</li>
        <li>mandatory on the SM version</li>
      </ul>
    </li>
    <li>a closing cross if the <code>closeable</code> prop is set to <code>true</code></li>
  </ul>
</p>

<p class="b2-regular">
  Other props:
  <ul>
    <li><code>closed</code> indicates whether the alert should be present (<code>false</code>) or not (<code>true</code>) in the DOM</li>
    <li><code>closeButtonLabel</code> specifies the label and aria-label of the alert close button; default is <code>Close</code></li>
  </ul>
</p>`}}}},n=e=>({components:{AvAlert:y},setup(){return{args:e}},template:`
    <AvAlert v-bind="args" />
  `}),de=e=>({components:{AvAlert:y},setup(){return{alerts:e.alerts}},template:`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `}),a=n.bind({});a.args={};const r=n.bind({});r.args={closeable:!0};const s=n.bind({});s.args={small:!0};const d=n.bind({});d.args={type:"success",title:"Success Alert",description:"This is a success alert.",closeable:!0};const l=n.bind({});l.args={type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0};const i=n.bind({});i.args={type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0};const c=de.bind({});c.args={alerts:[{type:"info",title:"Info Alert",description:"This is an info alert.",closeable:!0},{type:"success",title:"Success Alert",description:"This is a success alert.",small:!0},{type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0},{type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0,small:!0}]};const ke=["Default","Closeable","Small","SuccessAlert","ErrorAlert","WarningAlert","MultipleAlerts"];var v,k,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var N,V,M;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(M=(V=r.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var w,H,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(T=(H=s.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var E,R,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var x,C,q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(q=(C=l.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var S,U,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAlert v-bind="args" />
  \`
})`,...(L=(U=i.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var _,B,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvAlert
  },
  setup() {
    return {
      alerts: args.alerts
    };
  },
  template: \`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  \`
})`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};export{r as Closeable,a as Default,l as ErrorAlert,c as MultipleAlerts,s as Small,d as SuccessAlert,i as WarningAlert,ke as __namedExportsOrder,ve as default};
