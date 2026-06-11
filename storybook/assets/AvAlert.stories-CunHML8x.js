import{m as K,b as u,g as v,d as p,k as P,w as J,W as r,R as b,f as m,e as Q,y as X,H as f}from"./iframe-C9LyPrHq.js";import{A as Y}from"./AvIcon-C18Go1P5.js";import{A as Z}from"./AvButton-6-BEieKC.js";import{M as n}from"./icons-BJ4bGiUf.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";const te=["id","role"],re={class:"av-alert__container av-row av-align-center av-justify-between av-w-full av-gap-md"},ne={class:"av-alert__content av-row av-align-center av-gap-sm"},se={class:"av-col"},ae={key:0,class:"s2-bold"},oe={class:"b1-regular"},W=K({__name:"AvAlert",props:{closed:{type:Boolean},closeable:{type:Boolean},id:{},title:{default:""},description:{},small:{type:Boolean,default:!1},type:{default:"info"},closeButtonLabel:{default:"Fermer"}},emits:["close"],setup(e,{emit:z}){const F=z,V=e.id??`alert-${crypto.randomUUID()}`,$=()=>F("close"),H=u(()=>[`av-alert--${e.type}`,{"av-alert--sm av-p-sm":e.small,"av-p-md":!e.small}]),j=u(()=>{switch(e.type){case"error":return{name:n.ALERT_CIRCLE_OUTLINE,color:"var(--dark-background-error)"};case"success":return{name:n.CHECK_CIRCLE,color:"var(--dark-background-success)"};case"warning":return{name:n.WARNING_OUTLINE,color:"var(--dark-background-warn)"};case"info":default:return{name:n.INFORMATION_OUTLINE,color:"var(--dark-background-primary1)"}}}),G=u(()=>e.type==="error"||e.type==="warning"?"alert":"status");return(ie,ce)=>e.closed?m("",!0):(f(),v("div",{key:0,id:r(V),class:X(["av-alert av-radius-lg",r(H)]),role:r(G)},[p("div",re,[p("div",ne,[P(Y,J(r(j),{size:3}),null,16),p("div",se,[e.small?m("",!0):(f(),v("span",ae,b(e.title),1)),p("span",oe,b(e.description),1)])]),e.closeable?(f(),Q(Z,{key:0,"icon-only":"",icon:r(n).CLOSE_CIRCLE_OUTLINE,label:e.closeButtonLabel,small:e.small,onClick:$},null,8,["icon","label","small"])):m("",!0)])],10,te))}}),g=ee(W,[["__scopeId","data-v-ca1d56c7"]]);W.__docgenInfo={exportName:"default",displayName:"AvAlert",description:"",tags:{},props:[{name:"closed",description:"Indicates whether the alert is closed (`true`) or visible (`false`).\nManaged by the parent component (typically AvToaster).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeable",description:"Indicates whether the alert can be closed using a button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"The alert unique identifier.",tags:{default:[{description:"`alert-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"The alert title.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"description",description:"The alert description text.",required:!1,type:{name:"string"}},{name:"small",description:"Indicates whether the alert should be displayed in a small format.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"type",description:"The alert type. Affects the color and icon.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]}},{name:"closeButtonLabel",description:"The label and aria-label of the alert close button.",tags:{default:[{description:"'Fermer'",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"close",description:"Event triggered when the alert closes."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/feedback/AvAlert/AvAlert.vue"]};const Ae={title:"Components/Feedback/AvAlert",component:g,tags:["autodocs"],argTypes:{closed:{control:"boolean"},closeable:{control:"boolean"},id:{control:"text"},title:{control:"text"},description:{control:"text"},small:{control:"boolean"},type:{control:"select",options:["info","success","warning","error"]},closeButtonLabel:{control:"text"}},args:{closed:!1,closeable:!1,title:"Alert Title",description:"This is an alert description.",small:!1,type:"info",closeButtonLabel:"Close"},parameters:{docs:{description:{component:`<h1 class="n1">Alerts - <code>AvAlert</code></h1>

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
</p>`}}}},t=e=>({components:{AvAlert:g},setup(){return{args:e}},template:`
    <AvAlert v-bind="args" />
  `}),le=e=>({components:{AvAlert:g},setup(){return{alerts:e.alerts}},template:`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `}),s=t.bind({});s.args={};const a=t.bind({});a.args={closeable:!0};const o=t.bind({});o.args={small:!0};const l=t.bind({});l.args={type:"success",title:"Success Alert",description:"This is a success alert.",closeable:!0};const i=t.bind({});i.args={type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0};const c=t.bind({});c.args={type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0};const d=le.bind({});d.args={alerts:[{type:"info",title:"Info Alert",description:"This is an info alert.",closeable:!0},{type:"success",title:"Success Alert",description:"This is a success alert.",small:!0},{type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0},{type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0,small:!0}]};var A,h,y;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,w,I;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,S,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,x,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(L=(x=l.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var B,M,N;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,O,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var q,U,R;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};const he=["Default","Closeable","Small","SuccessAlert","ErrorAlert","WarningAlert","MultipleAlerts"];export{a as Closeable,s as Default,i as ErrorAlert,d as MultipleAlerts,o as Small,l as SuccessAlert,c as WarningAlert,he as __namedExportsOrder,Ae as default};
