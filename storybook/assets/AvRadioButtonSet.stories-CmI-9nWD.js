import{_ as Z}from"./AvRadioButton-Crb-EIoC.js";import{_ as ie}from"./AvFieldset-_xcdOldP.js";import{n as _,f as h,a9 as I,L as u,e as V,z as re,R as de,B as le,d as R,a3 as ue,P as me,a7 as F,$ as l,h as ce,F as N,Q as pe,v as ve,U as ge}from"./iframe-BTd5WVUI.js";import{_ as fe}from"./AvFieldsetElement-BVwjdnq7.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-CuSthu-Q.js";import"./AvIconText-BRv4zwlj.js";import"./AvIcon-Dy7uUo3w.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-tVqAVxBh.js";import"./use-text-truncation-D0FnmO5q.js";import"./icons-CJ0cZR5z.js";import"./preload-helper-ILsKNznc.js";const Be=["name","value","checked","disabled"],ee=_({inheritAttrs:!1,__name:"RadioButton",props:{value:{type:[String,Number,Boolean]},modelValue:{type:[String,Number,Boolean]},disabled:{type:Boolean},small:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},name:{default:""}},emits:["update:modelValue"],setup(e,{emit:A}){const y=A,d=`av-radio-button-${crypto.randomUUID()}`;return(a,f)=>{const S=fe;return u(),h(S,{inline:e.inline,disabled:e.disabled},{default:I(()=>[V("div",{class:le(["av-radio-group av-row av-align-center av-gap-xs",{"av-radio-group--sm":e.small}])},[V("input",re({id:d,type:"radio",name:e.name,value:e.value,checked:e.modelValue===e.value,disabled:e.disabled},a.$attrs,{onClick:f[0]||(f[0]=x=>y("update:modelValue",e.value))}),null,16,Be),V("label",{for:d,class:"av-label av-p-none"},[de(a.$slots,"default",{},void 0,!0)])],2)]),_:3},8,["inline","disabled"])}}}),ne=be(ee,[["__scopeId","data-v-cfe03b4c"]]);ee.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"value",description:`Value of the radio button.
This value will be emitted when the radio is selected.`,required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"modelValue",description:"Model value of the radio button.",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"undefined"}]}},{name:"disabled",description:"If true, disables this radio button.",required:!1,type:{name:"boolean"}},{name:"small",description:"If true, displays the button in its small version.",required:!1,type:{name:"boolean"}},{name:"inline",description:"If true, displays the button in its inline version.",required:!1,type:{name:"boolean"}},{name:"name",description:`Name of the input field.
Must be the same for each AvRadioButton in an AvRadioButtonSet`,tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Emitted when the selected radio button changes.",properties:[{type:{names:["mixed"]},name:"value",description:"The newly selected value."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"The newly selected value."}]}],slots:[{name:"default",description:"Default slot used to fully customize the radio label."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/radios/AvRadioButtonSet/components/RadioButton.vue"]};const w=_({__name:"AvRadioButtonSet",props:{id:{},name:{},legend:{default:""},modelValue:{type:[String,Number,Boolean]},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},small:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},errorMessage:{},validMessage:{},hint:{default:""}},emits:["update:modelValue"],setup(e,{expose:A,emit:y}){const d=y,a=R(()=>e.id??`radio-button-set-${crypto.randomUUID()}`),f=R(()=>e.errorMessage||e.validMessage);function S(n){n!==e.modelValue&&d("update:modelValue",n)}const x=R(()=>f.value?`messages-${a.value}`:void 0),q=ue();function te(n){return n!=null&&typeof n=="object"&&"type"in n&&n.type===Z}function M(n){return n?n.flatMap(t=>!t||typeof t!="object"||!("type"in t)?[]:t.type===N&&Array.isArray(t.children)?M(t.children):te(t)?[t]:[]):[]}function ae(n){const t=n.props,b=t==null?void 0:t["data-testid"];return typeof b=="string"?b:void 0}const oe=R(()=>{var n;return M((n=q.default)==null?void 0:n.call(q))}),o=me(e.modelValue);return F(()=>e.modelValue,n=>{o.value=n}),F(o,n=>{n&&d("update:modelValue",n)}),A({selected:o}),(n,t)=>{const b=ie;return u(),h(b,{id:l(a),legend:e.legend,hint:e.hint,required:e.required,disabled:e.disabled,"aria-labelledby":l(a),"aria-describedby":l(x),role:e.errorMessage||e.validMessage?"group":void 0,"error-message":e.errorMessage,"success-message":e.validMessage,inline:e.inline},{default:I(()=>[(u(!0),ce(N,null,pe(l(oe),(B,se)=>{var D,T;return u(),h(ne,{key:se,modelValue:l(o),"onUpdate:modelValue":[t[0]||(t[0]=s=>ve(o)?o.value=s:null),t[1]||(t[1]=s=>S(s))],value:(D=B.props)==null?void 0:D.value,disabled:((T=B.props)==null?void 0:T.disabled)??e.disabled,small:e.small,inline:e.inline,name:e.name,"data-testid":ae(B)},{default:I(()=>{var s;return[(u(),h(ge((s=B.children)==null?void 0:s.default)))]}),_:2},1032,["modelValue","value","disabled","small","inline","name","data-testid"])}),128))]),_:1},8,["id","legend","hint","required","disabled","aria-labelledby","aria-describedby","role","error-message","success-message","inline"])}}});w.__docgenInfo={exportName:"default",displayName:"AvRadioButtonSet",description:"",tags:{},expose:[{name:"selected"}],props:[{name:"id",description:"ID of the legend element",tags:{default:[{description:"`radio-button-set-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Name of the radio group, applied to each radio `<input name>`.\nUsed for form submission and accessibility.",required:!0,type:{name:"string"}},{name:"legend",description:`Label (legend) for the radio group, rendered visually as a title.
Helps screen readers understand the group context.`,tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:`Current selected value in the radio group.
Must match one of the options values.`,required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"undefined"}]}},{name:"disabled",description:"If true, disables all radio buttons in the group.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"required",description:"If true, marks the group as required and shows a required indicator.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"small",description:"If true, displays the radio buttons in compact (small) mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"inline",description:"If true, displays the radio buttons inline (horizontally).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"errorMessage",description:`Optional global error message displayed below the group.
If set, indicates a validation error.`,required:!1,type:{name:"string"}},{name:"validMessage",description:`Optional global valid message displayed below the group.
If set, confirms successful validation.`,required:!1,type:{name:"string"}},{name:"hint",description:`Optional hint text displayed below the legend.
Provides guidance or extra information.`,required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Emitted when the selected radio button changes.",properties:[{type:{names:["mixed"]},name:"value",description:"The newly selected value."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"The newly selected value."}]}],slots:[{name:"default",description:"Default slot to pass in one or more `AvRadioButton` components.\n\nEach `AvRadioButton` defines the props and content for a single radio option.\nThe content of each button will be injected into the `label` slot of `AvRadioButton`.",tags:{slot:[{description:"default",title:"slot"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.vue"]};const Fe={title:"Components/Interaction/Radios/AvRadioButtonSet",component:w,tags:["autodocs"],argTypes:{name:{type:{name:"string",required:!0},control:"text"},modelValue:{type:{name:"string",required:!0},control:"text"},legend:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},small:{control:"boolean"},inline:{control:"boolean"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{name:"RadioButtonSet",modelValue:"1",legend:"",disabled:!1,required:!1,small:!1,inline:!1,errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h1 class="n1">Radio button set - <code>AvRadioButtonSet</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvRadioButtonSet</code> automatically manages the addition of <code>AvRadioButton</code>
    in a group according to the <code>AvRadioButton</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    Radio buttons allow the user to select a single option from a list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The radio button cannot be used on its own: a minimum of 2 options is required. It is preferable not to select a default option,
    so that the user choice is conscious (especially if the choice is mandatory).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The <code>AvRadioButtonSet</code> component consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">A <code>&lt;div&gt;</code> element encompassing the entire radio group.</span></li>
  <li><span class="b2-regular">A <code>&lt;fieldset&gt;</code> element containing the radio buttons and associated messages.</span></li>
  <li><span class="b2-regular">A legend (<code>legend</code>) defined by the <code>legend</code> prop and customizable with the <code>legend</code> slot.</span></li>
  <li><span class="b2-regular">A hint (<code>hint</code>) defined by the <code>hint</code> prop and customizable with the <code>hint</code> slot.</span></li>
  <li><span class="b2-regular">A group of individual radio buttons rendered by the <code>AvRadioButton</code> component.</span></li>
  <li><span class="b2-regular">An information, error or validation message, displayed below the group of radio buttons (optional).</span></li>
</ul>`}}}},r=e=>({components:{AvRadioButtonSet:w,AvRadioButton:Z,RadioButton:ne},setup(){return{args:e}},template:`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  `}),i=r.bind({});i.args={name:"Default"};i.parameters={docs:{source:{code:`
        <AvRadioButtonSet v-model="selected">
          <AvRadioButton value="1">
            <span>First option</span>
          </AvRadioButton>
          <AvRadioButton value="2">
            <span>Second option</span>
          </AvRadioButton>
        </AvRadioButtonSet>
      `}}};const m=r.bind({});m.args={name:"Inline",inline:!0};const c=r.bind({});c.args={name:"Disabled",disabled:!0};const p=r.bind({});p.args={name:"Small",small:!0};const v=r.bind({});v.args={name:"Error",errorMessage:"This is an error message"};const g=r.bind({});g.args={name:"SuccessInline",inline:!0,validMessage:"This is a sucess message"};var k,E,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...($=(E=i.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var U,C,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(z=(C=m.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var O,j,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(L=(j=c.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var P,H,Q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(Q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ne=["Default","Inline","Disabled","Small","Error","SuccessInline"];export{i as Default,c as Disabled,v as Error,m as Inline,p as Small,g as SuccessInline,Ne as __namedExportsOrder,Fe as default};
