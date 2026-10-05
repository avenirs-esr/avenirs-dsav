import{A as g}from"./AvCheckbox-BhV_297d.js";import{P as ne}from"./iframe-CGOhz9cP.js";import"./AvFieldsetElement-DXSsKkVf.js";import"./AvTooltip-WgK4o6ix.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-AN5LjLGN.js";import"./AvMessage-B8RtP7q6.js";import"./AvIconText-BFOrj6zg.js";import"./AvIcon-B15mic27.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-CFBFLXWO.js";import"./icons-B6bk2eYx.js";import"./preload-helper-ILsKNznc.js";const ve={title:"Components/Interaction/Checkboxes/AvCheckbox",component:g,tags:["autodocs"],argTypes:{icon:{control:"text"},name:{control:"text",required:!0},required:{control:"boolean"},value:{control:"text",required:!0},small:{control:"boolean"},inline:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{icon:void 0,name:"default-checkbox",required:!1,value:"1",small:!1,inline:!1,disabled:!1,label:"A default checkbox",errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvCheckbox</code> allows the user to select one or more options from a list.
  They are used to make multiple selections (from 0 to N items) or to allow a binary choice,
  where the user can select or deselect a single option.
</p>

<p class="b2-regular">
  Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict
  the choice to a single item, use radio buttons (see <code>AvRadioButton</code>).
</p>

<p class="b2-regular">
 Checkboxes must be used inside an <code>AvCheckboxesGroup</code> in order to benefit from <code>AvFieldset</code>.
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul class="b2-regular">
  <li>a checkbox <code>&lt;input type="checkbox"&gt;</code></li>
  <li>a label associated with the checkbox, defined by the <code>label</code> prop</li>
  <li>an information, error (<code>errorMessage</code> prop), or validation (<code>validMessage</code> prop) message, displayed below the checkbox</li>
</ul>`}}}},e=o=>({components:{AvCheckbox:g},setup(){const h=ne(o.modelValue??[]);return{args:o,model:h}},template:'<AvCheckbox v-bind="args" v-model="model" />'}),re=o=>({components:{AvCheckbox:g},setup(){const h=ne(o.modelValue??[]);return{args:o,model:h}},template:`
    <AvCheckbox v-bind="args" v-model="model">
      <template #label>
        <span class="b2-bold">
          Some title: 
          <span class="caption-regular">This is some description</span>
        </span>
      </template>
    </AvCheckbox>`}),n=e.bind({});n.args={};const r=e.bind({});r.args={name:"with-icon-checkbox",label:"A checkbox with icon",icon:"mdi:home-variant-outline"};const a=e.bind({});a.args={name:"required-checkbox",label:"A required checkbox",required:!0};const s=e.bind({});s.args={name:"disabled-checkbox",label:"A disabled checkbox",disabled:!0};const t=e.bind({});t.args={name:"disabled-and-checked-checkbox",label:"A disabled and checked checkbox",disabled:!0,value:"1",modelValue:["1"]};const l=e.bind({});l.args={name:"disabled-checkbox-with-tooltip",label:"A disabled checkbox with tooltip",disabled:!0,disabledTooltip:"This checkbox is disabled"};const c=e.bind({});c.args={name:"error-checkbox",label:"A checkbox with error",errorMessage:"An error has occured"};const d=e.bind({});d.args={name:"valid-checkbox",label:"A valid checkbox",validMessage:"Congratulations!"};const m=e.bind({});m.args={name:"hint-checkbox",label:"A checkbox with a hint",hint:"You should click this"};const i=e.bind({});i.args={name:"small-checkbox",label:"A small checkbox",small:!0};const b=e.bind({});b.args={name:"small-with-icon-checkbox",label:"A disabled checkbox with icon",small:!0,icon:"mdi:home-variant-outline"};const u=e.bind({});u.args={name:"small-required-checkbox",label:"A small required checkbox",small:!0,required:!0};const p=re.bind({});p.args={name:"label-slot-checkbox",label:""};var v,x,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var A,C,f;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,V,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(w=(V=a.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var q,T,D;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,y,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var W,R,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,H,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var B,F,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var N,O,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var Y,j,z;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,oe;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>(args.modelValue ?? []);
    return {
      args,
      model
    };
  },
  template: \`
    <AvCheckbox v-bind="args" v-model="model">
      <template #label>
        <span class="b2-bold">
          Some title: 
          <span class="caption-regular">This is some description</span>
        </span>
      </template>
    </AvCheckbox>\`
})`,...(oe=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const xe=["Default","WithIcon","Required","Disabled","DisabledAndChecked","DisabledWithTooltip","Error","Valid","Hint","Small","SmallWithIcon","SmallRequired","LabelSlot"];export{n as Default,s as Disabled,t as DisabledAndChecked,l as DisabledWithTooltip,c as Error,m as Hint,p as LabelSlot,a as Required,i as Small,u as SmallRequired,b as SmallWithIcon,d as Valid,r as WithIcon,xe as __namedExportsOrder,ve as default};
