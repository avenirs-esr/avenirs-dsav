import{A as L}from"./AvIcon-BK4_gd6w.js";import{s as Ie,m as $,b as C,g as b,W as e,F as Ve,M as Se,f as N,d as v,k as E,R as P,w as fe,N as F,H as o,e as M,Y as Ce,P as Le,a4 as k,y as Pe,Z as ke,U as Ee,L as Ne,v as H,x as ze,I as $e}from"./iframe-C98QC7f0.js";import{_ as ve}from"./AvMessage-BIFStZUl.js";import{A as qe,g as We}from"./AvFilePill-CJEbc1oZ.js";import{M as z}from"./icons-0dWeWY1j.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Re}from"./AvButton-KZSiEY1k.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-Cb8a5aqg.js";import"./AvTooltip-d6nrvgS8.js";import"./string-BZgCOP9D.js";const ge=Symbol("AvFileUploadContext");function be(){const d=Ie(ge);if(!d)throw new Error("useFileUploadContext must be used within AvFileUpload component");return d}const je={class:"av-compact-upload"},Oe={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},He={class:"b2-regular"},Ye=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Ke={class:"caption-light"},he=$({__name:"AvFileUploadCompact",setup(d){Ce(u=>({b10782dc:e(a).maxWidth}));const{props:a,modelValue:i,realId:l,acceptTypes:s,uploadLabelAttrs:_,onChange:h,onClear:y}=be(),c=C(()=>{var u;return(u=i.value)!=null&&u.length?i.value.map(r=>({name:r.name,size:r.size,type:We(r.name)})):a.fileName?[{name:a.fileName,size:void 0,type:void 0}]:[]});return(u,r)=>{const U=ve;return o(),b("div",je,[e(c).length>0?(o(),b("div",Oe,[(o(!0),b(Ve,null,Se(e(c),(m,g)=>(o(),M(qe,{key:`${m.name}-${g}`,name:m.name,size:m.size,type:m.type,deletable:!e(a).disabled,"download-prefix-label":e(a).filePillDownloadPrefixLabel,"delete-prefix-label":e(a).filePillDeletePrefixLabel,onDelete:()=>{var A;return e(y)((A=e(i))!=null&&A.length?e(i)[g]:g)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):N("",!0),v("label",fe(e(_),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[E(L,{size:1.5,name:e(z).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),v("span",He,P(e(a).title),1),v("input",{id:e(l),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(l)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(s),multiple:e(a).enableMultiple,onChange:r[0]||(r[0]=m=>e(h)(m))},null,40,Ye)],16),E(U,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"]),v("span",Ke,[F(u.$slots,"hint",{},void 0,!0)])])}}}),Ze=q(he,[["__scopeId","data-v-b4c7d725"]]);he.__docgenInfo={exportName:"default",displayName:"AvFileUploadCompact",description:"",tags:{},slots:[{name:"hint"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"]};const Ge={class:"av-default-upload"},Je={class:"av-row av-align-center av-gap-xs"},Qe={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},Xe={class:"content-container av-col"},ea={key:0},aa={class:"b2-bold"},na={key:1,class:"av-col av-gap-xxs"},ta={class:"b2-regular"},la={class:"caption-light"},sa={key:0,class:"av-px-xs"},oa=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],ia={class:"caption-light"},ye=$({__name:"AvFileUploadDefault",setup(d){const{props:a,modelValue:i,realId:l,acceptTypes:s,uploadLabelAttrs:_,onChange:h,onClear:y}=be(),c=C(()=>!!a.fileName||i.value&&i.value.length>0);return(u,r)=>{const U=ve;return o(),b("div",Ge,[(o(),M(Le(e(c)?"div":"label"),fe(e(c)?{}:e(_),{class:e(c)?"file-preview-container av-radius-lg av-p-xs":""}),{default:k(()=>{var m;return[v("div",{class:Pe(e(c)?"":"file-upload-container av-radius-lg av-p-xs")},[v("div",Je,[v("div",Qe,[F(u.$slots,"left",{},()=>[E(L,{size:2.5,name:e(z).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),v("div",Xe,[e(c)?(o(),b("div",ea,[v("span",aa,P(e(a).fileName||((m=e(i))==null?void 0:m.map(g=>g.name).join(", "))),1)])):(o(),b("div",na,[v("span",ta,P(e(a).title),1),v("span",la,P(e(a).description),1)])),E(U,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"])]),e(a).disabled?N("",!0):(o(),b("div",sa,[e(c)?(o(),M(Re,{key:0,label:e(a).deleteButtonLabel??"Remove",theme:"SECONDARY",onClick:r[0]||(r[0]=()=>e(y)())},null,8,["label"])):(o(),M(L,{key:1,size:1.5,name:e(z).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),e(c)?N("",!0):(o(),b("input",{key:1,id:e(l),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(l)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(s),multiple:e(a).enableMultiple,onChange:r[1]||(r[1]=g=>e(h)(g))},null,40,oa))])],2)]}),_:3},16,["class"])),v("span",ia,[F(u.$slots,"hint",{},void 0,!0)])])}}}),ra=q(ye,[["__scopeId","data-v-852e63f9"]]);ye.__docgenInfo={exportName:"default",displayName:"AvFileUploadDefault",description:"",tags:{},slots:[{name:"left"},{name:"hint"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"]};const Ae=$({inheritAttrs:!1,__name:"AvFileUpload",props:H({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{default:void 0},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"}},{modelValue:{},modelModifiers:{}}),emits:H(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],["update:modelValue"]),setup(d,{emit:a}){const i=d,l=a,s=ke(d,"modelValue"),{id:_,accept:h,maxFileSizeMb:y,ariaLabel:c,disabled:u,validMessage:r,error:U}=Ee(i),m=C(()=>_.value??`file-upload-${crypto.randomUUID()}`),g=C(()=>Array.isArray(h.value)?h.value.join(","):h.value),A=Ne(!1);function R(n){const t=g.value;return t?t.split(",").map(f=>f.trim().toLowerCase()).some(f=>f.startsWith(".")?n.name.toLowerCase().endsWith(f):f.includes("/")?n.type===f||n.type.startsWith(`${f.split("/")[0]}/`):!1):!0}function j(n){return y.value===void 0||y.value<=0?!0:n.size<=y.value*1024*1024}async function Fe(n){var f,O;if(n.preventDefault(),A.value=!1,u.value||!((O=(f=n.dataTransfer)==null?void 0:f.files)!=null&&O.length))return;const t=Array.from(n.dataTransfer.files).filter(R),p=t.filter(j);await ze(),p.length?(i.enableMultiple?s.value=[...s.value??[],...p]:s.value=[p[0]],l("change",p)):t.length?l("fileSizeError"):l("acceptTypeError")}function Me(n){n.preventDefault(),u.value||(A.value=!0)}function xe(){A.value=!1}function _e(n){const t=n.target.files,p=t==null?void 0:t[0];if(p&&!R(p)){l("acceptTypeError");return}if(p&&!j(p)){l("fileSizeError");return}!t||!t.length||(i.enableMultiple?s.value=[...s.value??[],...Array.from(t)]:s.value=[t[0]],l("change",t))}const Ue=C(()=>({for:m.value,class:["av-upload-group",{"av-upload-group--error":U.value,"av-upload-group--valid":r.value,"av-upload-group--disabled":u.value,"drag-over":A.value}],"aria-label":c.value,onDragover:Me,onDragleave:xe,onDrop:Fe}));function Be(n){const t=(s.value??[]).filter(p=>p!==n);s.value=t.length>0?t:null}function De(n){const t=(s.value??[]).filter((p,f)=>f!==n);s.value=t.length>0?t:null}function we(n){n!==void 0?typeof n=="number"?De(n):Be(n):s.value=null,l("deleteFile",n),l("update:validMessage",null),l("update:error",null),l("change",[])}const Te={props:i,modelValue:s,realId:m.value,acceptTypes:g,uploadLabelAttrs:Ue,onChange:_e,onClear:we};return $e(ge,Te),(n,t)=>d.compact?(o(),M(Ze,{key:0},{hint:k(()=>[F(n.$slots,"hint",{},void 0,!0)]),_:3})):(o(),M(ra,{key:1},{left:k(()=>[F(n.$slots,"left",{},void 0,!0)]),hint:k(()=>[F(n.$slots,"hint",{},void 0,!0)]),_:3}))}}),W=q(Ae,[["__scopeId","data-v-81bf4f41"]]);Ae.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"ARIA label for file upload button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"maxFileSizeMb",description:"Maximum allowed file size in megabytes.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"error",description:"Error message to be displayed in case of upload problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validMessage",description:"Message indicating that the uploaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",description:"Array of selected files.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'none'"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"Delete button label.",tags:{default:[{description:"'Remove'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Remove'"}},{name:"fileName",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"compact",description:"Display in compact mode with file pills.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"enableMultiple",description:"Enable multiple file uploads.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filePillDownloadPrefixLabel",description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:{default:[{description:"'Download'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Download'"}},{name:"filePillDeletePrefixLabel",description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:{default:[{description:"'Delete'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Delete'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]},description:"Event emitted when the model value is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated files array (File[] or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated files array (File[] or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated message (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated error message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated error message (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file(s) change.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"deleteFile",type:{names:["union"],elements:[{name:"File"},{name:"number"}]},description:"Event emitted when a file is deleted.",properties:[{type:{names:["mixed"]},name:"payload",description:"Optional: the File object or index that was deleted."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"Optional: the File object or index that was deleted."}]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected."},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit."}],slots:[{name:"hint",description:"Slot for the hint description."},{name:"left",description:"Slot for the left content."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const pa="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",xa={title:"Components/Interaction/Files/AvFileUpload",component:W,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
  </span>
</p>`}}}},x=d=>({components:{AvFileUpload:W,AvIcon:L},setup(){return{args:d}},template:`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),B=x.bind({});B.args={};const D=x.bind({});D.args={error:"This is an error message"};const w=x.bind({});w.args={validMessage:"File uploaded successfully"};const da=d=>({components:{AvFileUpload:W,AvIcon:L},setup(){return{args:d}},template:`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),T=da.bind({});T.args={leftImageSrc:pa};const I=x.bind({});I.args={compact:!0,title:"Attach documents",description:""};const V=x.bind({});V.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const S=x.bind({});S.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};var Y,K,Z;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(Z=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var G,J,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,ae;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,le;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(le=(te=T.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var se,oe,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,pe,de;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(de=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,ue,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const _a=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];export{I as Compact,V as CompactWithFiles,B as Default,D as Error,T as LeftSlot,S as MultipleFiles,w as Success,_a as __namedExportsOrder,xa as default};
