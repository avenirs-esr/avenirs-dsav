import{j as G,c as p,l as b,K as m,v as d,E as P,x as J,H as Q,u,k as X,C as A,A as Y,m as f}from"./iframe-CSphQWYT.js";import{A as Z}from"./AvIcon-CveYywC2.js";import{A as ee}from"./AvButton-D9_GuLjy.js";import{M as r}from"./icons-Cf51SoRU.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const re=["id","role"],ne={class:"av-alert__container"},se={class:"av-alert__content"},ae={class:"av-alert__title"},oe={key:0,class:"s2-bold"},le={class:"b1-regular"},z=G({__name:"AvAlert",props:{alert:{type:Boolean,default:!1},closed:{type:Boolean},closeable:{type:Boolean},id:{},title:{default:""},description:{},small:{type:Boolean,default:!1},type:{default:"info"},closeButtonLabel:{default:"Fermer"}},emits:["close"],setup(e,{emit:F}){const W=F,$=p(()=>e.id??`alert-${crypto.randomUUID()}`),V=()=>W("close"),H=p(()=>[`av-alert--${e.type}`,{"av-alert--sm":e.small}]),K=p(()=>{switch(e.type){case"error":return{name:r.ALERT_CIRCLE_OUTLINE,color:"var(--dark-background-error)"};case"success":return{name:r.CHECK_CIRCLE,color:"var(--dark-background-success)"};case"warning":return{name:r.WARNING_OUTLINE,color:"var(--dark-background-warn)"};case"info":default:return{name:r.INFORMATION_OUTLINE,color:"var(--dark-background-primary1)"}}});return(j,ce)=>e.closed?m("",!0):(f(),b("div",{key:0,id:u($),class:Y(["av-alert",u(H)]),role:e.alert?"alert":void 0},[d("div",ne,[d("div",se,[J(Z,Q(u(K),{size:3}),null,16),d("div",ae,[e.small?m("",!0):(f(),b("span",oe,A(e.title),1)),X(j.$slots,"default",{},()=>[d("span",le,A(e.description),1)],!0)])]),e.closeable?(f(),P(ee,{key:0,"icon-only":"",icon:u(r).CLOSE_CIRCLE_OUTLINE,label:e.closeButtonLabel,small:e.small,onClick:V},null,8,["icon","label","small"])):m("",!0)])],10,re))}}),g=te(z,[["__scopeId","data-v-f32d9c3d"]]);z.__docgenInfo={exportName:"default",displayName:"AvAlert",description:"",tags:{},props:[{name:"alert",description:"If true, the alert is displayed with the `alert` role.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closed",description:"Indicates whether the alert is closed (`true`) or visible (`false`).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeable",description:"Indicates whether the alert can be closed using a button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"The alert unique identifier.",tags:{default:[{description:"`alert-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"The alert title.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"description",description:"The alert description text.",required:!1,type:{name:"string"}},{name:"small",description:"Indicates whether the alert should be displayed in a small format.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"type",description:"The alert type. Affects the color and icon.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]}},{name:"closeButtonLabel",description:"The label and aria-label of the alert close button.",tags:{default:[{description:"'Fermer'",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"close",description:"Event triggered when the alert closes."}],slots:[{name:"default",description:"Default slot for global content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/feedback/AvAlert/AvAlert.vue"]};const Ae={title:"Components/Feedback/AvAlert",component:g,tags:["autodocs"],argTypes:{alert:{control:"boolean"},closed:{control:"boolean"},closeable:{control:"boolean"},id:{control:"text"},title:{control:"text"},description:{control:"text"},small:{control:"boolean"},type:{control:"select",options:["info","success","warning","error"]},closeButtonLabel:{control:"text"}},args:{alert:!1,closed:!1,closeable:!1,title:"Alert Title",description:"This is an alert description.",small:!1,type:"info",closeButtonLabel:"Close"},parameters:{docs:{description:{component:`<h1 class="n1">Alerts - <code>AvAlert</code></h1>

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
  `}),ie=e=>({components:{AvAlert:g},setup(){return{alerts:e.alerts}},template:`
    <div>
      <AvAlert
        v-for="(alert, index) in alerts"
        :key="index"
        v-bind="alert"
      />
    </div>
  `}),n=t.bind({});n.args={};const s=t.bind({});s.args={closeable:!0};const a=t.bind({});a.args={small:!0};const o=t.bind({});o.args={type:"success",title:"Success Alert",description:"This is a success alert.",closeable:!0};const l=t.bind({});l.args={type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0};const i=t.bind({});i.args={type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0};const c=ie.bind({});c.args={alerts:[{type:"info",title:"Info Alert",description:"This is an info alert.",closeable:!0},{type:"success",title:"Success Alert",description:"This is a success alert.",small:!0},{type:"error",title:"Error Alert",description:"This is an error alert.",closeable:!0},{type:"warning",title:"Warning Alert",description:"This is a warning alert.",closeable:!0,small:!0}]};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,I,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,S,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,_,x;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var B,L,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,D,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var q,U,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(R=(U=c.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};const he=["Default","Closeable","Small","SuccessAlert","ErrorAlert","WarningAlert","MultipleAlerts"];export{s as Closeable,n as Default,l as ErrorAlert,c as MultipleAlerts,a as Small,o as SuccessAlert,i as WarningAlert,he as __namedExportsOrder,Ae as default};
