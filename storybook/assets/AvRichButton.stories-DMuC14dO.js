import{A as i}from"./AvIcon-BMa1HAa-.js";import{m as b,e as a,a4 as v,Y as y,H as o,d as s,w as R,f as r,N as A}from"./iframe-pANazJ9X.js";import{A as B}from"./AvTooltip-CjeDA0b8.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as c,g as p}from"./storybook-BU4y9mzL.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./icons-Cm2C8MUK.js";const w=["aria-label"],_={class:"av-rich-button__line av-row av-align-center av-w-full"},x={class:"av-rich-button__left av-row av-align-center av-w-full av-gap-sm av-pr-sm"},f=b({inheritAttrs:!1,__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"},enableTooltip:{type:Boolean,default:!1}},emits:["click"],setup(t){return y(e=>({v54a7d969:e.customPadding})),(e,l)=>(o(),a(B,{class:"av-rich-button__tooltip",content:t.label,"trigger-class":"av-w-full",disabled:!t.enableTooltip},{default:v(()=>[s("button",R(e.$attrs,{"aria-label":t.label,class:"av-rich-button av-row av-w-full av-align-center av-justify-between",onClick:l[0]||(l[0]=g=>e.$emit("click",g))}),[s("div",_,[s("div",x,[t.iconLeft?(o(),a(i,{key:0,name:t.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):r("",!0),A(e.$slots,"default",{},void 0,!0)]),t.iconRight?(o(),a(i,{key:0,name:t.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):r("",!0)])],16,w)]),_:3},8,["content","disabled"]))}}),h=k(f,[["__scopeId","data-v-ceabd43a"]]);f.__docgenInfo={exportName:"default",displayName:"AvRichButton",description:"",tags:{},props:[{name:"label",description:"Button aria label and title for accessibility.",required:!0,type:{name:"string"}},{name:"iconLeft",description:`Icon displayed on the left of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"iconRight",description:`Icon displayed on the right of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"customPadding",description:"Allows you to change the padding of the button.",tags:{default:[{description:"'1rem'",title:"default"}]},required:!1,type:{name:"string"}},{name:"enableTooltip",description:"Enables the tooltip on the button. The tooltip will display the content of the `label` prop.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["MouseEvent"]},description:"Emitted when the button is clicked."}],slots:[{name:"default",description:"Default slot for rich button content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"]};const V={title:"Components/Interaction/Buttons/AvRichButton",component:h,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"select",options:p,mapping:c},iconRight:{control:"select",options:p,mapping:c}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The rich button is an interaction element with an interface enabling the user to perform an action.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvRichButton</code> is an elegant, reusable Vue component designed to simplify the creation of custom rich buttons.
    It features optional icons and a click manager. It is easy to use, with the flexibility to adapt to different contexts.
  </span>
</p>

<p>
  <span class="b2-regular">
    With a default slot, button content is highly customizable. The <code>label</code> property lets you assign the button <code>title</code> and <code>aria-label</code>.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">Rich buttons consist of a button composed of :</span></p>

<ul>
  <li><span class="b2-regular">an optional left icon</span></li>
  <li><span class="b2-regular">a default slot for button content</span></li>
  <li><span class="b2-regular">an optional right icon</span></li>
</ul>`}}}},I=t=>({components:{AvRichButton:h,AvIcon:i},setup(){return{args:t}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">Custom label defined in slot</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),n=I.bind({});n.args={};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    AvRichButton,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">Custom label defined in slot</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  \`
})`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,V as default};
