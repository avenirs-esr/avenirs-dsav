import{A as b}from"./AvIcon-CoSC8puL.js";import{_ as Z}from"./AvMessage-DcKFmRb9.js";import{m as _,b as h,L as ee,g as p,e as y,a4 as ae,w as U,W as s,P as ne,d as i,N as I,F as te,Y as se,H as r,y as le,k as L,R as A,f as V,x as oe}from"./iframe-CXSe4Kt-.js";import{A as ie}from"./AvButton-NqIWjqRp.js";import{M as D}from"./icons-BJ4bGiUf.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icon-path-u9rVYwcY.js";import"./AvIconText-hzFPB6yN.js";import"./AvTooltip-BUyM3cur.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const de={class:"av-row av-align-center av-gap-xs"},pe={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},ce={class:"content-container av-col"},me={key:0},ue={class:"b2-bold"},fe={key:1,class:"av-col av-gap-xxs"},ge={class:"b2-regular"},be={class:"caption-light"},ve={key:0,class:"av-px-xs"},he=["id","aria-describedby","disabled","aria-disabled","accept"],ye={class:"caption-light"},j=_({inheritAttrs:!1,__name:"AvFileUpload",props:{id:{},ariaLabel:{default:""},accept:{default:()=>{}},maxFileSizeMb:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{default:null},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{}},emits:["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],setup(e,{emit:H}){se(a=>({v4dc19e69:a.maxWidth}));const t=H,v=e.id??`file-upload-${crypto.randomUUID()}`,x=h(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),g=ee(!1);function w(a){const n=x.value;return n?n.split(",").map(l=>l.trim().toLowerCase()).some(l=>l.startsWith(".")?a.name.toLowerCase().endsWith(l):l.includes("/")?a.type===l||a.type.startsWith(`${l.split("/")[0]}/`):!1):!0}function T(a){return e.maxFileSizeMb===void 0||e.maxFileSizeMb<=0?!0:a.size<=e.maxFileSizeMb*1024*1024}async function Y(a){var l,S;if(a.preventDefault(),g.value=!1,e.disabled||!((S=(l=a.dataTransfer)==null?void 0:l.files)!=null&&S.length))return;const n=Array.from(a.dataTransfer.files).filter(w),o=n.filter(T);await oe(),o.length?(t("change",o),t("update:modelValue",o[0]??null)):n.length?t("fileSizeError"):t("acceptTypeError")}function G(a){a.preventDefault(),e.disabled||(g.value=!0)}function J(){g.value=!1}function K(a){const n=a.target.files,o=n==null?void 0:n[0];if(o&&!w(o)){t("acceptTypeError");return}if(o&&!T(o)){t("fileSizeError");return}t("change",n),t("update:modelValue",(n==null?void 0:n[0])??null)}const d=h(()=>e.fileName||e.modelValue),Q=h(()=>({for:v,class:["av-upload-group",{"av-upload-group--error":e.error,"av-upload-group--valid":e.validMessage,"av-upload-group--disabled":e.disabled,"drag-over":g.value}],"aria-label":e.ariaLabel,onDragover:G,onDragleave:J,onDrop:Y}));function X(a){a?(t("update:modelValue",null),t("update:validMessage",null),t("update:error",null),t("change",[])):t("deleteFile")}return(a,n)=>{const o=Z;return r(),p(te,null,[(r(),y(ne(s(d)?"div":"label"),U(s(d)?{}:s(Q),{class:s(d)?"file-preview-container av-radius-lg av-p-xs":""}),{default:ae(()=>[i("div",{class:le(s(d)?"":"file-upload-container av-radius-lg av-p-xs")},[i("div",de,[i("div",pe,[I(a.$slots,"left",{},()=>[L(b,{size:2.5,name:s(D).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),i("div",ce,[s(d)?(r(),p("div",me,[i("span",ue,A(e.fileName||e.modelValue.name),1)])):(r(),p("div",fe,[i("span",ge,A(e.title),1),i("span",be,A(e.description),1)])),L(o,{type:e.error?"error":"success",message:e.error?e.error:e.validMessage},null,8,["type","message"])]),e.disabled?V("",!0):(r(),p("div",ve,[s(d)?(r(),y(ie,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:n[0]||(n[0]=()=>X(e.modelValue))},null,8,["label"])):(r(),y(b,{key:1,size:1.5,name:s(D).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),s(d)?V("",!0):(r(),p("input",U({key:1,id:s(v),class:"av-upload",type:"file","aria-describedby":e.error||e.validMessage?`${s(v)}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:s(x),onChange:n[1]||(n[1]=l=>K(l))}),null,16,he))])],2)]),_:3},16,["class"])),i("span",ye,[I(a.$slots,"hint",{},void 0,!0)])],64)}}}),M=re(j,[["__scopeId","data-v-989c419d"]]);j.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file download component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file download button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"maxFileSizeMb",description:"Maximum allowed file size in megabytes.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Error message to be displayed in case of download problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the downloaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value linked to file upload input template.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"File"},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"delete button label",required:!1,type:{name:"string"}},{name:"fileName",description:"Name of actual file.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"null"}]},description:"Event emitted when the model value linked to the file is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (File or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (File or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file is changed.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"deleteFile",description:"Event emitted when the delete button is clicked."},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected."},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit."}],slots:[{name:"left",description:"Slot for the left content."},{name:"hint",description:"Slot for the hint description."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const Ae="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",ke={title:"Components/Interaction/Files/AvFileUpload",component:M,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Add a new",description:"or drag and drop here",deleteButtonLabel:"Delete"},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

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
  `}),c=F.bind({});c.args={};const m=F.bind({});m.args={error:"This is an error message"};const u=F.bind({});u.args={validMessage:"This is a success message"};const Me=e=>({components:{AvFileUpload:M,AvIcon:b},setup(){return{args:e}},template:`
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
  `}),f=Me.bind({});f.args={leftImageSrc:Ae};var E,k,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,N,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var B,W,$;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...($=(W=u.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var P,R,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(O=(R=f.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const ze=["Default","Error","Success","LeftSlot"];export{c as Default,m as Error,f as LeftSlot,u as Success,ze as __namedExportsOrder,ke as default};
