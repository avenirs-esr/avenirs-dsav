import{n as j,d as p,h,e as u,l as H,z as X,$ as t,X as b,g as m,f as J,B as Q,L as f}from"./iframe-C30ZCNdO.js";import{A as Y}from"./AvIcon-DpzNr5hB.js";import{A as Z}from"./AvButton-BWZ9EIBJ.js";import{M as a}from"./icons-B6bk2eYx.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-C9SdE3ql.js";import"./date-picker-DAT4IxbQ.js";import"./string-Df4dPiyw.js";const ne=["id","role"],te={class:"av-alert__container av-row av-align-center av-justify-between av-w-full av-gap-md"},ae={class:"av-alert__content av-row av-align-center av-gap-sm"},se={class:"av-col"},re={key:0,class:"s2-bold"},oe={class:"b1-regular"},U=j({__name:"AvAlert",props:{closed:{type:Boolean},closeable:{type:Boolean},id:{},title:{default:""},description:{},small:{type:Boolean,default:!1},type:{default:"info"},closeButtonLabel:{default:"Fermer"}},emits:["close"],setup(e,{emit:F}){const P=F,V=e.id??`alert-${crypto.randomUUID()}`,W=()=>P("close"),$=p(()=>[`av-alert--${e.type}`,{"av-alert--sm av-p-sm":e.small,"av-p-md":!e.small}]),K=p(()=>{switch(e.type){case"error":return{name:a.ALERT_CIRCLE_OUTLINE,color:"var(--dark-background-error)"};case"success":return{name:a.CHECK_CIRCLE,color:"var(--dark-background-success)"};case"warning":return{name:a.WARNING_OUTLINE,color:"var(--dark-background-warn)"};case"info":default:return{name:a.INFORMATION_OUTLINE,color:"var(--dark-background-primary1)"}}}),G=p(()=>e.type==="error"||e.type==="warning"?"alert":"status");return(ie,de)=>e.closed?m("",!0):(f(),h("div",{key:0,id:t(V),class:Q(["av-alert av-radius-lg",t($)]),role:t(G)},[u("div",te,[u("div",ae,[H(Y,X(t(K),{size:3}),null,16),u("div",se,[e.small?m("",!0):(f(),h("span",re,b(e.title),1)),u("span",oe,b(e.description),1)])]),e.closeable?(f(),J(Z,{key:0,"icon-only":"",icon:t(a).CLOSE_CIRCLE_OUTLINE,label:e.closeButtonLabel,size:e.small?"MD":"LG",onClick:W},null,8,["icon","label","size"])):m("",!0)])],10,ne))}}),g=ee(U,[["__scopeId","data-v-3f3851be"]]);U.__docgenInfo={exportName:"default",displayName:"AvAlert",type:1,props:[{name:"closed",global:!1,description:"Indicates whether the alert is closed (`true`) or visible (`false`).\nManaged by the parent component (typically AvToaster).",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closeable",global:!1,description:"Indicates whether the alert can be closed using a button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"id",global:!1,description:"The alert unique identifier.",tags:[{name:"default",text:"`alert-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"title",global:!1,description:"The alert title.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"description",global:!1,description:"The alert description text.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"small",global:!1,description:"Indicates whether the alert should be displayed in a small format.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"type",global:!1,description:"The alert type. Affects the color and icon.",tags:[{name:"default",text:"'info'"}],required:!1,type:'"error" | "info" | "success" | "warning" | undefined',declarations:[],schema:{kind:"enum",type:'"error" | "info" | "success" | "warning" | undefined',schema:["undefined",'"error"','"info"','"success"','"warning"']},default:'"info"'},{name:"closeButtonLabel",global:!1,description:"The label and aria-label of the alert close button.",tags:[{name:"default",text:"'Fermer'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Fermer"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"close",description:"Event triggered when the alert closes.",tags:[],type:"[]",signature:'(event: "close"): void',declarations:[],schema:[]}],slots:[],exposed:[{name:"id",type:"string | undefined",description:"The alert unique identifier.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"type",type:'"error" | "info" | "success" | "warning" | undefined',description:"The alert type. Affects the color and icon.",declarations:[],schema:{kind:"enum",type:'"error" | "info" | "success" | "warning" | undefined',schema:["undefined",'"error"','"info"','"success"','"warning"']}},{name:"title",type:"string | undefined",description:"The alert title.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"small",type:"boolean | undefined",description:"Indicates whether the alert should be displayed in a small format.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closed",type:"boolean | undefined",description:"Indicates whether the alert is closed (`true`) or visible (`false`).\nManaged by the parent component (typically AvToaster).",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closeable",type:"boolean | undefined",description:"Indicates whether the alert can be closed using a button.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"description",type:"string | undefined",description:"The alert description text.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"closeButtonLabel",type:"string | undefined",description:"The label and aria-label of the alert close button.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/feedback/AvAlert/AvAlert.vue"};const Ae={title:"Components/Feedback/AvAlert",component:g,tags:["autodocs"],argTypes:{closed:{control:"boolean"},closeable:{control:"boolean"},id:{control:"text"},title:{control:"text"},description:{control:"text"},small:{control:"boolean"},type:{control:"select",options:["info","success","warning","error"]},closeButtonLabel:{control:"text"}},args:{closed:!1,closeable:!1,title:"Alert Title",description:"This is an alert description.",small:!1,type:"info",closeButtonLabel:"Close"},parameters:{docs:{description:{component:`<h1 class="n1">Alerts - <code>AvAlert</code></h1>

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
</p>`}}}},n=e=>({components:{AvAlert:g},setup(){return{args:e}},template:`
    <AvAlert v-bind="args" />
  `}),le=e=>({components:{AvAlert:g},setup(){return{alerts:e.alerts}},template:`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `}),s=n.bind({});s.args={};const r=n.bind({});r.args={closeable:!0};const o=n.bind({});o.args={small:!0};const l=n.bind({});l.args={type:"success",title:"Success Alert",description:"This is a success alert.",closeable:!0};const i=n.bind({});i.args={type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0};const d=n.bind({});d.args={type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0};const c=le.bind({});c.args={alerts:[{type:"info",title:"Info Alert",description:"This is an info alert.",closeable:!0},{type:"success",title:"Success Alert",description:"This is a success alert.",small:!0},{type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0},{type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0,small:!0}]};var y,v,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var k,w,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var I,x,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,E,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var B,q,M;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var N,_,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var D,R,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const ke=["Default","Closeable","Small","SuccessAlert","ErrorAlert","WarningAlert","MultipleAlerts"];export{r as Closeable,s as Default,i as ErrorAlert,c as MultipleAlerts,o as Small,l as SuccessAlert,d as WarningAlert,ke as __namedExportsOrder,Ae as default};
