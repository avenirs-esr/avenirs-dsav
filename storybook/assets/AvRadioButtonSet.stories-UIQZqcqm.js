import{_ as j}from"./AvRadioButton-B4bzbQfX.js";import{d as W,V as $,c as G,r as J,x as h,k as b,w as y,z as K,B as s,i as c,b as X,F as S,j as Y,W as Z,M as ee}from"./iframe-CCrYptT9.js";import{Q as ne,O as te}from"./vue-dsfr-CBTjZMzH.js";import"./preload-helper-ILsKNznc.js";const B=W({__name:"AvRadioButtonSet",props:{name:{},legend:{},modelValue:{type:[String,Number,Boolean]},disabled:{type:Boolean},required:{type:Boolean},small:{type:Boolean},inline:{type:Boolean},errorMessage:{},validMessage:{},hint:{}},emits:["update:modelValue"],setup(m,{expose:z,emit:L}){const t=m,P=L,v=$();function Q(e){return e!=null&&typeof e=="object"&&"type"in e&&e.type===j}function f(e){return e?e.flatMap(n=>!n||typeof n!="object"||!("type"in n)?[]:n.type===S&&Array.isArray(n.children)?f(n.children):Q(n)?[n]:[]):[]}const U=G(()=>{var e;return f((e=v.default)==null?void 0:e.call(v))}),o=J(t.modelValue);return h(()=>t.modelValue,e=>{o.value=e}),h(o,e=>{e&&P("update:modelValue",e)}),z({selected:o}),(e,n)=>(c(),b(s(te),K(t,{"model-value":s(o)}),{default:y(()=>[(c(!0),X(S,null,Y(s(U),(g,H)=>{var A,R;return c(),b(s(ne),{key:H,modelValue:s(o),"onUpdate:modelValue":n[0]||(n[0]=p=>Z(o)?o.value=p:null),value:(A=g.props)==null?void 0:A.value,disabled:((R=g.props)==null?void 0:R.disabled)??t.disabled,small:t.small,inline:t.inline,name:t.name},{label:y(()=>{var p;return[(c(),b(ee((p=g.children)==null?void 0:p.default)))]}),_:2},1032,["modelValue","value","disabled","small","inline","name"])}),128))]),_:1},16,["model-value"]))}});B.__docgenInfo={exportName:"default",displayName:"AvRadioButtonSet",description:"",tags:{},expose:[{name:"selected"}],props:[{name:"name",description:"Name of the radio group, applied to each radio `<input name>`.\nUsed for form submission and accessibility.",required:!0,type:{name:"string"}},{name:"legend",description:`Label (legend) for the radio group, rendered visually as a title.
Helps screen readers understand the group context.`,required:!1,type:{name:"string"}},{name:"modelValue",description:`Current selected value in the radio group.
Must match one of the options values.`,required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"undefined"}]}},{name:"disabled",description:"If true, disables all radio buttons in the group.",required:!1,type:{name:"boolean"}},{name:"required",description:"If true, marks the group as required and shows a required indicator.",required:!1,type:{name:"boolean"}},{name:"small",description:"If true, displays the radio buttons in compact (small) mode.",required:!1,type:{name:"boolean"}},{name:"inline",description:"If true, displays the radio buttons inline (horizontally).",required:!1,type:{name:"boolean"}},{name:"errorMessage",description:`Optional global error message displayed below the group.
If set, indicates a validation error.`,required:!1,type:{name:"string"}},{name:"validMessage",description:`Optional global valid message displayed below the group.
If set, confirms successful validation.`,required:!1,type:{name:"string"}},{name:"hint",description:`Optional hint text displayed below the legend.
Provides guidance or extra information.`,required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]},description:"Emitted when the selected radio button changes.",properties:[{type:{names:["mixed"]},name:"value",description:"The newly selected value."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"The newly selected value."}]}],slots:[{name:"default",description:"Default slot to pass in one or more `AvRadioButton` components.\n\nEach `AvRadioButton` defines the props and content for a single radio option.\nThe content of each button will be injected into the `label` slot of `DsfrRadioButton`.",tags:{slot:[{description:"default",title:"slot"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/radios/AvRadioButtonSet/AvRadioButtonSet.vue"]};const re={title:"Components/Interaction/Radios/AvRadioButtonSet",component:B,tags:["autodocs"],argTypes:{name:{type:{name:"string",required:!0},control:"text"},modelValue:{type:{name:"string",required:!0},control:"text"},legend:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},small:{control:"boolean"},inline:{control:"boolean"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{name:"RadioButtonSet",modelValue:"1",legend:"",disabled:!1,required:!1,small:!1,inline:!1,errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h1 class="n1">Radio button set - <code>AvRadioButtonSet</code></h1>

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
</ul>`}}}},u=m=>({components:{AvRadioButtonSet:B,AvRadioButton:j},setup(){return{args:m}},template:`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  `}),a=u.bind({});a.args={name:"Default"};a.parameters={docs:{source:{code:`
        <AvRadioButtonSet v-model="selected">
          <AvRadioButton value="1">
            <span>First option</span>
          </AvRadioButton>
          <AvRadioButton value="2">
            <span>Second option</span>
          </AvRadioButton>
        </AvRadioButtonSet>
      `}}};const i=u.bind({});i.args={name:"Inline",inline:!0};const r=u.bind({});r.args={name:"Disabled",disabled:!0};const d=u.bind({});d.args={name:"Error",errorMessage:"This is an error message"};const l=u.bind({});l.args={name:"SuccessInline",inline:!0,validMessage:"This is a sucess message"};var q,x,V;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(V=(x=a.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var w,I,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var _,F,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(T=(F=r.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var D,k,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var O,C,N;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const de=["Default","Inline","Disabled","Error","SuccessInline"];export{a as Default,r as Disabled,d as Error,i as Inline,l as SuccessInline,de as __namedExportsOrder,re as default};
