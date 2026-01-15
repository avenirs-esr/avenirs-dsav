import"./AvFieldset-D71rlEY7.js";import"./AvFieldsetElement-D1o0H6Y2.js";import{A as c}from"./AvIcon-Ba416Ekm.js";import"./AvIconText-B9tbF8EB.js";import"./AvNotice-Cv9gccpe.js";import{M as u,R as O,I as _}from"./icons-CvJnIbum.js";import"./AvMessage-B95pG80_.js";import"./iframe-BteZ1Kap.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./string-BZgCOP9D.js";const L={title:"Foundations/3. DSAV icons"},r=()=>({components:{AvIcon:c},setup(){const e=Object.entries(u).map(([t,i])=>[`MDI_ICONS.${t}`,i]),n=Object.entries(O).map(([t,i])=>[`RI_ICONS.${t}`,i]),A=Object.entries(_).map(([t,i])=>[`ICONS_DATA_URL.${t}`,i]);return{icons:[...e,...n,...A]}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <img v-if="icon.startsWith('data:')" :src="icon" :alt="key" style="width: 2rem; height: 2rem; filter: var(--icon-filter);" />
        <AvIcon v-else :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `}),s=()=>({components:{AvIcon:c},setup(){return{icons:Object.entries(u).map(([e,n])=>[`MDI_ICONS.${e}`,n])}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `}),o=()=>({components:{AvIcon:c},setup(){return{icons:Object.entries(O).map(([e,n])=>[`RI_ICONS.${e}`,n])}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `}),a=()=>({components:{AvIcon:c},setup(){return{icons:Object.entries(_).map(([e,n])=>[`ICONS_DATA_URL.${e}`,n])}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <img :src="icon" :alt="key" style="width: 2rem; height: 2rem;" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `});var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    AvIcon
  },
  setup() {
    const mdiIcons = Object.entries(MDI_ICONS).map(([key, icon]) => [\`MDI_ICONS.\${key}\`, icon]);
    const riIcons = Object.entries(RI_ICONS).map(([key, icon]) => [\`RI_ICONS.\${key}\`, icon]);
    const dataUrlIcons = Object.entries(ICONS_DATA_URL).map(([key, icon]) => [\`ICONS_DATA_URL.\${key}\`, icon]);
    const icons = [...mdiIcons, ...riIcons, ...dataUrlIcons];
    return {
      icons
    };
  },
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <img v-if="icon.startsWith('data:')" :src="icon" :alt="key" style="width: 2rem; height: 2rem; filter: var(--icon-filter);" />
        <AvIcon v-else :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,y,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      icons: Object.entries(MDI_ICONS).map(([key, icon]) => [\`MDI_ICONS.\${key}\`, icon])
    };
  },
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,I,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      icons: Object.entries(RI_ICONS).map(([key, icon]) => [\`RI_ICONS.\${key}\`, icon])
    };
  },
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var g,x,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      icons: Object.entries(ICONS_DATA_URL).map(([key, icon]) => [\`ICONS_DATA_URL.\${key}\`, icon])
    };
  },
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <img :src="icon" :alt="key" style="width: 2rem; height: 2rem;" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const T=["AllIcons","MdiIcons","RiIcons","DataUrlIcons"];export{r as AllIcons,a as DataUrlIcons,s as MdiIcons,o as RiIcons,T as __namedExportsOrder,L as default};
