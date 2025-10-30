import{A as o}from"./AvIcon-COwFhIF4.js";import{d as f,a as g,b as i,H as c,B as l,h as b,Q as v,o as a}from"./iframe-B0Y85Vql.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const k=["title","aria-label"],R={class:"av-rich-button__line"},B={class:"av-rich-button__left"},p=f({__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"},onClick:{type:Function}},setup(n){return v(e=>({v56192f55:e.customPadding})),(e,s)=>(a(),g("button",{class:"av-rich-button",title:n.label,"aria-label":n.label,onClick:s[0]||(s[0]=(...h)=>n.onClick&&n.onClick(...h))},[i("div",R,[i("div",B,[n.iconLeft?(a(),c(o,{key:0,name:n.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0),b(e.$slots,"default",{},void 0,!0)]),n.iconRight?(a(),c(o,{key:0,name:n.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0)])],8,k))}}),m=y(p,[["__scopeId","data-v-5907eac1"]]);p.__docgenInfo={exportName:"default",displayName:"AvRichButton",description:"",tags:{},props:[{name:"label",description:"Button aria label and title for accessibility.",required:!0,type:{name:"string"}},{name:"iconLeft",description:`Icon displayed on the left of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"iconRight",description:`Icon displayed on the right of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"customPadding",description:"Allows you to change the padding of the button.",tags:{default:[{description:"'1rem'",title:"default"}]},required:!1,type:{name:"string"}},{name:"onClick",description:"Function called when button is clicked.",tags:{params:[{title:"param",type:{name:"mixed"},name:"event",description:"The MouseEvent of the click."}]},required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default",description:"Default slot for rich button content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"]};const T={title:"Components/Interaction/Buttons/AvRichButton",component:m,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"text"},iconRight:{control:"text"},customPadding:{control:"text"},onClick:{type:{name:"function"},control:!1,action:"click"}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

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
</ul>`}}}},A=n=>({components:{AvRichButton:m,AvIcon:o},setup(){return{args:n}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">{{ args.label }}</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),t=A.bind({});t.args={};var r,u,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
        <span class="ellipsis b1-regular">{{ args.label }}</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  \`
})`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,T as default};
