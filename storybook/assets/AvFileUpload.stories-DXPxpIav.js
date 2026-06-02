import{A as b}from"./AvIcon-BuCegd2I.js";import{_ as Q}from"./AvMessage-DyFY4ZoC.js";import{m as X,b as h,L as Z,g as p,e as y,a4 as _,w,W as t,P as ee,d as o,N as U,F as ae,Y as ne,H as i,y as te,k as D,R as A,f as I,x as se}from"./iframe-B34Sh4Km.js";import{A as le}from"./AvButton-Cagq9Vp8.js";import{M as L}from"./icons-jAutzxlg.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icon-path-u9rVYwcY.js";import"./AvIconText-Bu5iCjq7.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const ie={class:"av-row av-align-center av-gap-xs"},re={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},de={class:"content-container av-col"},pe={key:0},ce={class:"b2-bold"},ue={key:1,class:"av-col av-gap-xxs"},me={class:"b2-regular"},fe={class:"caption-light"},ge={key:0,class:"av-px-xs"},be=["id","aria-describedby","disabled","aria-disabled","accept"],ve={class:"caption-light"},O=X({inheritAttrs:!1,__name:"AvFileUpload",props:{id:{},ariaLabel:{default:""},accept:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{default:null},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{},onDeleteFile:{type:Function},enableMultiple:{type:Boolean,default:!1}},emits:["update:modelValue","update:validMessage","update:error","change","acceptTypeError"],setup(e,{emit:j}){ne(n=>({v25f2c89c:n.maxWidth}));const l=j,v=e.id??`file-upload-${crypto.randomUUID()}`,x=h(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),g=Z(!1);function T(n){const a=x.value;return a?a.split(",").map(s=>s.trim().toLowerCase()).some(s=>s.startsWith(".")?n.name.toLowerCase().endsWith(s):s.includes("/")?n.type===s||n.type.startsWith(`${s.split("/")[0]}/`):!1):!0}async function z(n){var d,s;if(n.preventDefault(),g.value=!1,e.disabled||!((s=(d=n.dataTransfer)==null?void 0:d.files)!=null&&s.length))return;const a=Array.from(n.dataTransfer.files).filter(T);await se(),a.length?(l("change",a),l("update:modelValue",a[0]??null)):l("acceptTypeError")}function H(n){n.preventDefault(),e.disabled||(g.value=!0)}function Y(){g.value=!1}function G(n){const a=n.target.files;if(a!=null&&a.length&&!Array.from(a).filter(T).length){l("acceptTypeError");return}l("change",a),l("update:modelValue",(a==null?void 0:a[0])??null)}const r=h(()=>e.fileName||e.modelValue&&!e.enableMultiple),J=h(()=>({for:v,class:["av-upload-group",{"av-upload-group--error":e.error,"av-upload-group--valid":e.validMessage,"av-upload-group--disabled":e.disabled,"drag-over":g.value}],"aria-label":e.ariaLabel,onDragover:H,onDragleave:Y,onDrop:z}));function K(n){var a;n?(l("update:modelValue",null),l("update:validMessage",null),l("update:error",null),l("change",[])):(a=e.onDeleteFile)==null||a.call(e)}return(n,a)=>{const d=Q;return i(),p(ae,null,[(i(),y(ee(t(r)?"div":"label"),w(t(r)?{}:t(J),{class:t(r)?"file-preview-container av-radius-lg av-p-xs":""}),{default:_(()=>[o("div",{class:te(t(r)?"":"file-upload-container av-radius-lg av-p-xs")},[o("div",ie,[o("div",re,[U(n.$slots,"left",{},()=>[D(b,{size:2.5,name:t(L).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),o("div",de,[t(r)?(i(),p("div",pe,[o("span",ce,A(e.fileName||e.modelValue.name),1)])):(i(),p("div",ue,[o("span",me,A(e.title),1),o("span",fe,A(e.description),1)])),D(d,{type:e.error?"error":"success",message:e.error?e.error:e.validMessage},null,8,["type","message"])]),e.disabled?I("",!0):(i(),p("div",ge,[t(r)?(i(),y(le,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:a[0]||(a[0]=()=>K(e.modelValue))},null,8,["label"])):(i(),y(b,{key:1,size:1.5,name:t(L).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),t(r)?I("",!0):(i(),p("input",w({key:1,id:t(v),class:"av-upload",type:"file","aria-describedby":e.error||e.validMessage?`${t(v)}-desc`:void 0},n.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:t(x),onChange:a[1]||(a[1]=s=>G(s))}),null,16,be))])],2)]),_:3},16,["class"])),o("span",ve,[U(n.$slots,"hint",{},void 0,!0)])],64)}}}),M=oe(O,[["__scopeId","data-v-e5c14747"]]);O.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file download component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file download button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"error",description:"Error message to be displayed in case of download problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the downloaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value linked to file upload input template.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"File"},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",tags:{default:[{description:"undefined",title:"default"}]},required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"delete button label",required:!1,type:{name:"string"}},{name:"fileName",description:"Name of actual file.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"onDeleteFile",description:"Method executed on delete file button click.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"TSFunctionType"}},{name:"enableMultiple",description:"Whether the file upload input enable multiple file selection or not.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"null"}]},description:"Event emitted when the model value linked to the file is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (File or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (File or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file is changed.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected."}],slots:[{name:"left",description:"Slot for the left content."},{name:"hint",description:"Slot for the hint description."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const he="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",Ve={title:"Components/Interaction/Files/AvFileUpload",component:M,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},onDeleteFile:{type:{name:"function"},control:!1},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Add a new",description:"or drag and drop here",deleteButtonLabel:"Delete",onDeleteFile:void 0,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area.
  </span>
</p>`}}}},F=e=>({components:{AvFileUpload:M,AvIcon:b},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  `}),c=F.bind({});c.args={};const u=F.bind({});u.args={error:"This is an error message"};const m=F.bind({});m.args={validMessage:"This is a success message"};const ye=e=>({components:{AvFileUpload:M,AvIcon:b},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  `}),f=ye.bind({});f.args={leftImageSrc:he};var V,k,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,E,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var q,B,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var $,P,R;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ke=["Default","Error","Success","LeftSlot"];export{c as Default,u as Error,f as LeftSlot,m as Success,ke as __namedExportsOrder,Ve as default};
