import{A as d}from"./AvIcon-D73z_sAu.js";import{u as h,l as a,aq as b,ai as k,$ as i,k as s,L as v,m as l,a6 as N}from"./iframe-D4Ai9mOO.js";import{A as V}from"./AvTooltip-DKUUDH_R.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as u,g as c}from"./storybook-lFQJCmDz.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./icons-Dyb4xUo3.js";const H=["aria-label"],M={class:"av-rich-button__line av-row av-align-center av-w-full"},A={class:"av-rich-button__left av-row av-align-center av-w-full av-gap-sm av-pr-sm"},o=h({inheritAttrs:!1,__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"},enableTooltip:{type:Boolean,default:!1}},emits:["click"],setup(e){return k(n=>({v2b0f4641:n.customPadding})),(n,r)=>(i(),a(V,{class:"av-rich-button__tooltip",content:e.label,"full-width":"",disabled:!e.enableTooltip},{default:b(()=>[s("button",v(n.$attrs,{"aria-label":e.label,class:"av-rich-button av-row av-w-full av-align-center av-justify-between",onClick:r[0]||(r[0]=y=>n.$emit("click",y))}),[s("div",M,[s("div",A,[e.iconLeft?(i(),a(d,{key:0,name:e.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0),N(n.$slots,"default",{},void 0,!0)]),e.iconRight?(i(),a(d,{key:0,name:e.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0)])],16,H)]),_:3},8,["content","disabled"]))}}),g=R(o,[["__scopeId","data-v-59c522e8"]]);o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"AvRichButton",type:1,props:[{name:"label",global:!1,description:"Button aria label and title for accessibility.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"iconLeft",global:!1,default:"undefined",description:`Icon displayed on the left of the button.
Must be an icon name.`,tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"iconRight",global:!1,default:"undefined",description:`Icon displayed on the right of the button.
Must be an icon name.`,tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"customPadding",global:!1,default:'"var(--spacing-sm)"',description:"Allows you to change the padding of the button.",tags:[{name:"default",text:"'1rem'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"enableTooltip",global:!1,default:"false",description:"Enables the tooltip on the button. The tooltip will display the content of the `label` prop.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"click",description:"Emitted when the button is clicked.",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',schema:[{kind:"object",type:"MouseEvent"}],declarations:[]}],slots:[{name:"default",type:"any[]",description:"Default slot for rich button content.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"});const T={title:"Components/Interaction/Buttons/AvRichButton",component:g,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"select",options:c,mapping:u},iconRight:{control:"select",options:c,mapping:u}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

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
</ul>`}}}},B=e=>({components:{AvRichButton:g,AvIcon:d},setup(){return{args:e}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">Custom label defined in slot</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),t=B.bind({});t.args={};const L=["Default"];var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};export{t as Default,L as __namedExportsOrder,T as default};
