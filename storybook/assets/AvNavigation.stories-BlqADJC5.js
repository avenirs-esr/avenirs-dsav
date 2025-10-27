import{r as l}from"./vue-dsfr-H2_knAwr.js";import{d as p,a as m,B as v,x as u,V as k,e as g}from"./iframe-DoGY7sZo.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./iconify-CzR5Nfuu.js";import"./preload-helper-ILsKNznc.js";const x={style:{position:"relative"},class:"my-nav-wrapper"},o=p({__name:"AvNavigation",props:{navItems:{}},setup(n){const r=n;return(L,f)=>{const c=l;return g(),m("div",x,[v(c,u(k(r)),null,16)])}}}),s=d(o,[["__scopeId","data-v-433349ab"]]);o.__docgenInfo={exportName:"default",displayName:"AvNavigation",description:"",tags:{},props:[{name:"navItems",description:"List of navigation items.\nEach item can be:\n- A direct navigation link (`DsfrNavigationMenuLinkProps`) with `to` and `text` props.\n- A navigation submenu (`DsfrNavigationMenuProps`) with `title`, `links` and `active` props.\n- A mega-navigation menu (`DsfrNavigationMegaMenuProps`) with `title`, `link`, `active` and `menus` props.",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvNavigation/AvNavigation.vue"]};const w={title:"Components/Navigation/AvNavigation",component:s,tags:["autodocs"],args:{navItems:[{text:"Direct link",to:"#home",active:!0},{title:"Menu",links:[{text:"Link 1",to:"#menu-link1"},{text:"Link 2",to:"#menu-link2"},{text:"Link 3",to:"#menu-link3"},{text:"Link 4",to:"#menu-link4"},{text:"Link 5",to:"#menu-link5"}]},{title:"Mega menu",link:{to:"#",text:"See all"},menus:[{title:"Category 1",links:[{text:"Link 1",to:"#cat1-link1"},{text:"Link 2",to:"#cat1-link2"},{text:"Link 3",to:"#cat1-link3"},{text:"Link 4",to:"#cat1-link4"},{text:"Link 5",to:"#cat1-link5"}]},{title:"Category 2",links:[{text:"Link 1",to:"#cat2-link1"},{text:"Link 2",to:"#cat2-link2"},{text:"Link 3",to:"#cat2-link3"},{text:"Link 4",to:"#cat2-link4"},{text:"Link 5",to:"#cat2-link5"}]},{title:"Category 3",links:[{text:"Link 1",to:"#cat3-link1"},{text:"Link 2",to:"#cat3-link2"},{text:"Link 3",to:"#cat3-link3"},{text:"Link 4",to:"#cat3-link4"},{text:"Link 5",to:"#cat3-link5"}]}]}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvNavigation</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvNavigation</code> is the main navigation therefore the central navigation system within a site.
    It guides the user through the site main and secondary sections.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The navigation component can be used to create a navigation bar with different types of navigation items:</span></p>

<ul>
  <li><span class="b2-regular">direct link</span></li>
  <li><span class="b2-regular">submenu</span></li>
  <li><span class="b2-regular">mega-menu</span></li>
</ul>`}}}},h=n=>({components:{AvNavigation:s},setup(){return{args:n}},template:'<AvNavigation v-bind="args" />'}),t=h.bind({});t.args={};t.parameters={docs:{story:{height:"420px"}}};var e,a,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AvNavigation
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNavigation v-bind="args" />\`
})`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,w as default};
