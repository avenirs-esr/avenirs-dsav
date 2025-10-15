import"./AvIconText-0kPqGBqQ.js";import"./AvNotice-B74A2cEs.js";import{A as c}from"./AvVIcon-CpQItURD.js";import{M as f,R as x}from"./icons-DLnh1uvi.js";import"./iframe-BxXJz-6C.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-dsfr-B20psRaW.js";import"./string-BZgCOP9D.js";const z={title:"Foundations/3. DSAV icons"},i=()=>({components:{AvVIcon:c},setup(){const e=Object.entries(f).map(([t,s])=>[`MDI_ICONS.${t}`,s]),n=Object.entries(x).map(([t,s])=>[`RI_ICONS.${t}`,s]);return{icons:[...e,...n]}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `}),o=()=>({components:{AvVIcon:c},setup(){return{icons:Object.entries(f).map(([e,n])=>[`MDI_ICONS.${e}`,n])}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `}),r=()=>({components:{AvVIcon:c},setup(){return{icons:Object.entries(x).map(([e,n])=>[`RI_ICONS.${e}`,n])}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
      <div 
        v-for="[key, icon] in icons" 
        :key="key" 
        style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
      >
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  `});var a,l,p;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => ({
  components: {
    AvVIcon
  },
  setup() {
    const mdiIcons = Object.entries(MDI_ICONS).map(([key, icon]) => [\`MDI_ICONS.\${key}\`, icon]);
    const riIcons = Object.entries(RI_ICONS).map(([key, icon]) => [\`RI_ICONS.\${key}\`, icon]);
    const icons = [...mdiIcons, ...riIcons];
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
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => ({
  components: {
    AvVIcon
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
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var v,I,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    AvVIcon
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
        <AvVIcon :name="icon" size="2" color="var(--icon)" />
        <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
      </div>
    </div>
  \`
})`,...(k=(I=r.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const V=["AllIcons","MdiIcons","RiIcons"];export{i as AllIcons,o as MdiIcons,r as RiIcons,V as __namedExportsOrder,z as default};
