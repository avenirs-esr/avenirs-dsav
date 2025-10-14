import{d as T,u as _,g as n,n as c,a as s,y as u,o as l}from"./iframe-DRmKsEoR.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const B={key:1,class:"av-card__body"},D={key:2,class:"av-card__footer"},k=T({__name:"AvCard",props:{backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{}},setup(e){const d=_();return(o,q)=>(l(),n("div",{class:"av-card",style:u({borderColor:e.borderColor,background:e.backgroundColor})},[d.title?(l(),n("div",{key:0,class:"av-card__title",style:u({background:e.titleBackground,height:e.titleHeight})},[s(o.$slots,"title",{},void 0,!0)],4)):c("",!0),s(o.$slots,"default",{},void 0,!0),d.body?(l(),n("div",B,[s(o.$slots,"body",{},void 0,!0)])):c("",!0),d.footer?(l(),n("div",D,[s(o.$slots,"footer",{},void 0,!0)])):c("",!0)],4))}}),i=S(k,[["__scopeId","data-v-740c9a3b"]]);k.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}}],slots:[{name:"title",description:"Slot for the card title."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const x={title:"Components/Cards/AvCard",component:i,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCard</code> card is a component for creating customizable styled containers.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    The card is composed of a main <code>div</code> containing a div for the title (slot <code>title</code>),
    a generic slot by default, a div for the body (slot <code>body</code>) as well as a div for the footer
    (slot <code>footer</code>).
  </span>
</p>`}}}},A=e=>({components:{AvCard:i},setup(){return{args:e}},template:`
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
  `}),H=e=>({components:{AvCard:i},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),t=A.bind({});t.args={};const r=A.bind({});r.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const a=H.bind({});a.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,v,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,C,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const I=["Default","WithCustomColors","WithOnlyDefaultSlot"];export{t as Default,r as WithCustomColors,a as WithOnlyDefaultSlot,I as __namedExportsOrder,x as default};
