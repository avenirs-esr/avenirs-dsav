import{d as P,c as u,e as v,i as m,z as p,h as J,f as Q,F as X,u as r,B as Y,I as b,A as Z,g as f}from"./iframe-DMLTaAVQ.js";import{A as ee}from"./AvIcon-C0rUoNVl.js";import{A as te}from"./AvButton-B1kdSzdu.js";import{M as n}from"./icons-CvJnIbum.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const ne=["id","role"],se={class:"av-alert__container av-row av-align-center av-justify-between av-w-full av-gap-md"},ae={class:"av-alert__content av-row av-align-center av-gap-sm"},oe={class:"av-alert__title"},le={key:0,class:"s2-bold"},ie={class:"b1-regular"},F=P({__name:"AvAlert",props:{closed:{type:Boolean},closeable:{type:Boolean},id:{},title:{default:""},description:{},small:{type:Boolean,default:!1},type:{default:"info"},closeButtonLabel:{default:"Fermer"}},emits:["close"],setup(e,{emit:R}){const W=R,$=u(()=>e.id??`alert-${crypto.randomUUID()}`),V=()=>W("close"),j=u(()=>[`av-alert--${e.type}`,{"av-alert--sm av-p-sm":e.small,"av-p-md":!e.small}]),G=u(()=>{switch(e.type){case"error":return{name:n.ALERT_CIRCLE_OUTLINE,color:"var(--dark-background-error)"};case"success":return{name:n.CHECK_CIRCLE,color:"var(--dark-background-success)"};case"warning":return{name:n.WARNING_OUTLINE,color:"var(--dark-background-warn)"};case"info":default:return{name:n.INFORMATION_OUTLINE,color:"var(--dark-background-primary1)"}}}),H=u(()=>e.type==="error"||e.type==="warning"?"alert":"status");return(K,de)=>e.closed?m("",!0):(f(),v("div",{key:0,id:r($),class:Z(["av-alert",r(j)]),role:r(H)},[p("div",se,[p("div",ae,[Q(ee,X(r(G),{size:3}),null,16),p("div",oe,[e.small?m("",!0):(f(),v("span",le,b(e.title),1)),Y(K.$slots,"default",{},()=>[p("span",ie,b(e.description),1)],!0)])]),e.closeable?(f(),J(te,{key:0,"icon-only":"",icon:r(n).CLOSE_CIRCLE_OUTLINE,label:e.closeButtonLabel,small:e.small,onClick:V},null,8,["icon","label","small"])):m("",!0)])],10,ne))}}),g=re(F,[["__scopeId","data-v-8d8544c0"]]);F.__docgenInfo={exportName:"default",displayName:"AvAlert",description:"",tags:{},props:[{name:"closed",description:"Indicates whether the alert is closed (`true`) or visible (`false`).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeable",description:"Indicates whether the alert can be closed using a button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"The alert unique identifier.",tags:{default:[{description:"`alert-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"The alert title.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"description",description:"The alert description text.",required:!1,type:{name:"string"}},{name:"small",description:"Indicates whether the alert should be displayed in a small format.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"type",description:"The alert type. Affects the color and icon.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]}},{name:"closeButtonLabel",description:"The label and aria-label of the alert close button.",tags:{default:[{description:"'Fermer'",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"close",description:"Event triggered when the alert closes."}],slots:[{name:"default",description:"Default slot for global content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/feedback/AvAlert/AvAlert.vue"]};const Ae={title:"Components/Feedback/AvAlert",component:g,tags:["autodocs"],argTypes:{closed:{control:"boolean"},closeable:{control:"boolean"},id:{control:"text"},title:{control:"text"},description:{control:"text"},small:{control:"boolean"},type:{control:"select",options:["info","success","warning","error"]},closeButtonLabel:{control:"text"}},args:{closed:!1,closeable:!1,title:"Alert Title",description:"This is an alert description.",small:!1,type:"info",closeButtonLabel:"Close"},parameters:{docs:{description:{component:`<h1 class="n1">Alerts - <code>AvAlert</code></h1>

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
        <li>the default <code>slot</code> can be used as a description</li>
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
  `}),ce=e=>({components:{AvAlert:g},setup(){return{alerts:e.alerts}},template:`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `}),s=t.bind({});s.args={};const a=t.bind({});a.args={closeable:!0};const o=t.bind({});o.args={small:!0};const l=t.bind({});l.args={type:"success",title:"Success Alert",description:"This is a success alert.",closeable:!0};const i=t.bind({});i.args={type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0};const c=t.bind({});c.args={type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0};const d=ce.bind({});d.args={alerts:[{type:"info",title:"Info Alert",description:"This is an info alert.",closeable:!0},{type:"success",title:"Success Alert",description:"This is a success alert.",small:!0},{type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0},{type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0,small:!0}]};var A,h,y;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,B,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var x,N,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var M,D,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var q,U,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const he=["Default","Closeable","Small","SuccessAlert","ErrorAlert","WarningAlert","MultipleAlerts"];export{a as Closeable,s as Default,i as ErrorAlert,d as MultipleAlerts,o as Small,l as SuccessAlert,c as WarningAlert,he as __namedExportsOrder,Ae as default};
