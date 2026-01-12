import{A as U}from"./AvButton-Dci_2BeC.js";import{d as J,T as K,r as C,c as L,e as o,i as l,R as G,K as k,A,u as t,B as b,h as P,W as Q,J as X,g as n}from"./iframe-BY5iJQ77.js";import{M as T}from"./icons-DLse1evt.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-cV2yP7uA.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const ee=["id","aria-hidden"],te={key:0,class:"av-card__body"},ae={key:1,class:"av-card__footer"},j=J({__name:"AvCard",props:{titleOnly:{type:Boolean,default:!1},backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},setup(e){X(r=>({v3a7be2c4:r.borderColor}));const h=K(),a=C(e.collapsed),v=L(()=>`av-card-${crypto.randomUUID()}`),g=C(null);function z(r){e.collapsible&&g.value&&r.target!==g.value.$el&&!g.value.$el.contains(r.target)&&(a.value=!a.value)}return(r,y)=>{const M=U;return n(),o("div",{class:A(["av-card av-col av-p-sm av-justify-start",{"av-card--collapsible":e.collapsible}]),style:k({borderColor:e.borderColor,background:e.backgroundColor}),onClick:z},[h.title?(n(),o("header",{key:0,class:A(["av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm",{"av-card__title--collapsed":t(a),"av-card__title--title-only":e.titleOnly}]),style:k({background:e.titleBackground,minHeight:e.titleHeight,maxHeight:e.titleHeight})},[b(r.$slots,"title",{},void 0,!0),e.collapsible?(n(),P(M,{key:0,ref_key:"buttonRef",ref:g,"aria-controls":`${t(v)}-content`,"aria-expanded":!t(a),icon:t(a)?t(T).CHEVRON_DOWN:t(T).CHEVRON_LEFT,"icon-only":"",label:"Details",onClick:y[0]||(y[0]=ne=>a.value=!t(a))},null,8,["aria-controls","aria-expanded","icon"])):l("",!0)],6)):l("",!0),e.titleOnly?l("",!0):G((n(),o("div",{key:1,id:`${t(v)}-content`,"aria-hidden":e.collapsible&&t(a),class:"av-card__content-collapsible av-col av-justify-between av-h-full av-pt-sm av-gap-sm"},[b(r.$slots,"default",{},void 0,!0),h.body?(n(),o("div",te,[b(r.$slots,"body",{},void 0,!0)])):l("",!0),h.footer?(n(),o("div",ae,[b(r.$slots,"footer",{},void 0,!0)])):l("",!0)],8,ee)),[[Q,!e.collapsible||!t(a)]])],6)}}}),f=Z(j,[["__scopeId","data-v-689c256d"]]);j.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"titleOnly",description:"If true, the card will be displayed in title-only mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}},{name:"collapsible",description:`Whether the card is collapsible. When collapsed, the title is still shown.
This requires a title slot to be provided.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"collapsed",description:"Whether the card is collapsed by default (only if collapsible is true).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"title",description:"Slot for the card title."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const ue={title:"Components/Cards/AvCard",component:f,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCard</code> component is used to create customizable, styled containers.
    It provides a structured layout with optional sections and can include collapsible behavior
    for advanced interactions.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">A main wrapper <code>div</code>.</span>
  </li>
  <li>
    <span class="b2-regular">A title area rendered through the <code>title</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A <code>default</code> slot for general content.</span>
  </li>
  <li>
    <span class="b2-regular">A body section rendered through the <code>body</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A footer section rendered through the <code>footer</code> slot.</span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    When the <code>collapsible</code> prop is enabled, the card displays only the
    <code>title</code> slot along with a toggle button that expands or collapses
    the rest of the content.
  </span>
</p>`}}}},m=e=>({components:{AvCard:f},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  `}),re=e=>({components:{AvCard:f},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),s=m.bind({});s.args={};const c=m.bind({});c.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const d=re.bind({});d.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const i=m.bind({});i.args={collapsible:!0};const p=m.bind({});p.args={collapsible:!0,collapsed:!0};const u=m.bind({});u.args={titleOnly:!0};var S,B,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var D,w,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(H=(w=c.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var W,$,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  \`
})`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,F,I;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var x,N,Y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var E,R,V;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const me=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault","TitleOnly"];export{p as CollapsedByDefault,i as Collapsible,s as Default,u as TitleOnly,c as WithCustomColors,d as WithOnlyDefaultSlot,me as __namedExportsOrder,ue as default};
