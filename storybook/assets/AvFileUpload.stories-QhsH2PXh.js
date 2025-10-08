import{A as b}from"./AvVIcon-8vmFNpku.js";import{d as $,b as d,f as M,i as o,y as F,B as t,c as h,r as X,k as y,e as i,w as Z,z as k,M as _,a as V,F as ee,C as ae,n as ne,t as A,G as te}from"./iframe-CM3fYS2g.js";import{c as se}from"./vue-dsfr-keweR0Qw.js";import{A as le}from"./AvButton-BM5d_lLZ.js";import{A as oe}from"./AvIconText-DWt2zngB.js";import{M as v}from"./icons-DLnh1uvi.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const re="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",de={key:0,class:"messages-group",role:"alert"},P=$({__name:"AvFileUploadAlert",props:{error:{default:void 0},validMessage:{default:void 0}},setup(e){return(w,s)=>e.error||e.validMessage?(o(),d("div",de,[F(oe,{icon:e.error?t(v).CLOSE_CIRCLE_OUTLINE:t(v).CHECK_CIRCLE_OUTLINE,"icon-color":e.error?"var(--dark-background-error)":"var(--dark-background-success)",text:e.error?e.error:e.validMessage,"text-color":e.error?"var(--dark-background-error)":"var(--dark-background-success)","typography-class":"caption-regular"},null,8,["icon","icon-color","text","text-color"])])):M("",!0)}});P.__docgenInfo={exportName:"default",displayName:"AvFileUploadAlert",description:"",tags:{},props:[{name:"error",description:"Error message to be displayed in case of upload problem.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"validMessage",description:"Message indicating that the uploaded file is valid.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadAlert.vue"]};const pe={class:"file-upload-content"},ce={class:"left-content-container"},ue={class:"content-container"},me={key:0},fe={class:"b2-bold"},ge={key:1,class:"title-container"},be={class:"b2-regular"},ve={class:"caption-light"},he={key:0,class:"right-icon-container"},ye=["id","aria-describedby","disabled","aria-disabled","accept"],Ae={class:"caption-light"},z=$({inheritAttrs:!1,__name:"AvFileUpload",props:{id:{default:()=>se("file-upload")},ariaLabel:{default:""},accept:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{default:null},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{},onDeleteFile:{type:Function},enableMultiple:{type:Boolean,default:!1}},emits:["update:modelValue","update:validMessage","update:error","change","onDropAcceptTypeError"],setup(e,{emit:w}){ae(a=>({v38bbeb48:a.maxWidth}));const s=w,U=h(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),g=X(!1);function j(a){const n=U.value;return n?n.split(",").map(l=>l.trim().toLowerCase()).some(l=>l.startsWith(".")?a.name.toLowerCase().endsWith(l):l.includes("/")?a.type===l||a.type.startsWith(`${l.split("/")[0]}/`):!1):!0}async function H(a){var p,l;if(a.preventDefault(),g.value=!1,e.disabled||!((l=(p=a.dataTransfer)==null?void 0:p.files)!=null&&l.length))return;const n=Array.from(a.dataTransfer.files).filter(j);await te(),n.length?(s("change",n),s("update:modelValue",n[0]??"")):s("onDropAcceptTypeError")}function Y(a){a.preventDefault(),e.disabled||(g.value=!0)}function G(){g.value=!1}function K(a){const n=a.target.files;s("change",n),s("update:modelValue",(n==null?void 0:n[0])??null)}const r=h(()=>e.fileName||e.modelValue&&!e.enableMultiple),J=h(()=>({for:e.id,class:["fr-upload-group",{"fr-upload-group--error":e.error,"fr-upload-group--valid":e.validMessage,"fr-upload-group--disabled":e.disabled,"drag-over":g.value}],"aria-label":e.ariaLabel,onDragover:Y,onDragleave:G,onDrop:H}));function Q(a){var n;a?(s("update:modelValue",null),s("update:validMessage",null),s("update:error",null),s("change",[])):(n=e.onDeleteFile)==null||n.call(e)}return(a,n)=>(o(),d(ee,null,[(o(),y(_(t(r)?"div":"label"),k(t(r)?{}:t(J),{class:t(r)?"file-preview-container":""}),{default:Z(()=>[i("div",{class:ne(t(r)?"":"file-upload-container")},[i("div",pe,[i("div",ce,[V(a.$slots,"left",{},()=>[F(b,{size:2.5,name:t(v).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),i("div",ue,[t(r)?(o(),d("div",me,[i("span",fe,A(e.fileName||e.modelValue.name),1)])):(o(),d("div",ge,[i("span",be,A(e.title),1),i("span",ve,A(e.description),1)])),F(P,{"valid-message":e.validMessage,error:e.error},null,8,["valid-message","error"])]),e.disabled?M("",!0):(o(),d("div",he,[t(r)?(o(),y(le,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:n[0]||(n[0]=()=>Q(e.modelValue))},null,8,["label"])):(o(),y(b,{key:1,size:1.5,name:t(v).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),t(r)?M("",!0):(o(),d("input",k({key:1,id:e.id,class:"fr-upload",type:"file","aria-describedby":e.error||e.validMessage?`${e.id}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:t(U),onChange:n[1]||(n[1]=p=>K(p))}),null,16,ye))])],2)]),_:3},16,["class"])),i("span",Ae,[V(a.$slots,"hint",{},void 0,!0)])],64))}}),x=ie(z,[["__scopeId","data-v-2c0c549f"]]);z.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file download component.
If not specified, a random ID is generated.`,tags:{default:[{description:"() => useRandomId(...)",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file download button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"error",description:"Error message to be displayed in case of download problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the downloaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value linked to file upload input template.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"File"},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",tags:{default:[{description:"undefined",title:"default"}]},required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"delete button label",required:!1,type:{name:"string"}},{name:"fileName",description:"Name of actual file.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"onDeleteFile",description:"Method executed on delete file button click.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"TSFunctionType"}},{name:"enableMultiple",description:"Whether the file upload input enable multiple file selection or not.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"null"}]},description:"Event emitted when the model value linked to the file is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (File or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (File or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"change",type:{names:["FileList"]},description:"Event emitted when the selected file is changed.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList)."}]},{name:"onDropAcceptTypeError",description:"Event emitted when a file of wrong type is dropped."}],slots:[{name:"left",description:"Slot for the left content."},{name:"hint",description:"Slot for the hint description."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const De={title:"Components/Interaction/Files/AvFileUpload",component:x,tags:["autodocs"],argTypes:{id:{control:"text"},ariaLabel:{control:"text"},accept:{control:"text"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},onDeleteFile:{type:{name:"function"},control:!1},enableMultiple:{control:"boolean"}},args:{id:"test",ariaLabel:"",accept:"",error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Add a new",description:"or drag and drop here",deleteButtonLabel:"Delete",onDeleteFile:void 0,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area.
  </span>
</p>`}}}},T=e=>({components:{AvFileUpload:x,AvVIcon:b},setup(){return{args:e}},template:`
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
  `}),c=T.bind({});c.args={};const u=T.bind({});u.args={error:"This is an error message"};const m=T.bind({});m.args={validMessage:"This is a success message"};const Me=e=>({components:{AvFileUpload:x,AvVIcon:b},setup(){return{args:e}},template:`
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
  `}),f=Me.bind({});f.args={leftImageSrc:re};var I,D,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvVIcon
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
})`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var C,E,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvVIcon
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
})`,...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var N,q,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvVIcon
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
})`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var W,O,R;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvVIcon
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
})`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Le=["Default","Error","Success","LeftSlot"];export{c as Default,u as Error,f as LeftSlot,m as Success,Le as __namedExportsOrder,De as default};
