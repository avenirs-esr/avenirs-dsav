import{A as K}from"./AvButton-Ct0OpwRu.js";import{_ as Y}from"./AvCancelConfirmButtons-BpyJEFK0.js";import{A as Z}from"./AvInput-DmnQxJWS.js";import{A as Q}from"./AvRichTextEditor-ChiaGdlo.js";import{a as q}from"./AvList-Mo0oQ4sg.js";import{A as t}from"./AvSortableList-B5my1ec9.js";import{M as r}from"./icons-D5SKHg5c.js";import{d as X,r as g}from"./iframe-FzHOyO0g.js";import"./AvTooltip-igNKyoRw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CrRGSehT.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-CWwu1e-2.js";import"./string--WCOsvs9.js";import"./AvCheckbox-BiVjpuPp.js";import"./AvFieldsetElement-eXkiHNXw.js";import"./utils-BIlgUrNJ.js";import"./AvMessage-kWjOXT0j.js";import"./AvIconText-B1wgOEUy.js";import"./AvCheckboxesGroup-CUSKmDav.js";import"./AvFieldset-DC2XZRQ_.js";import"./AvCheckboxListItem-CbNAR_UO.js";import"./AvRadioButton-BljtbCed.js";import"./AvRadioButtonSet-Bg8TeDIH.js";import"./format-Dv6JKX9m.js";import"./AvPopover-BhjXpPyB.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvDropdown-bQnG03Z0.js";import"./AvCard-D2l7l5nv.js";import"./preload-helper-ILsKNznc.js";const _e={title:"Components/Interaction/Lists/AvSortableList",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},disabledTooltip:{control:"text"},dragLabel:{control:"text"},moveUpLabel:{control:"text"},moveUpDisabledTooltip:{control:"text"},moveDownLabel:{control:"text"},moveDownDisabledTooltip:{control:"text"},announcementFormatter:{control:!1}},args:{moveUpLabel:"Monter",moveDownLabel:"Descendre",dragLabel:"Déplacer",moveUpDisabledTooltip:"Cet élément est déjà en première position",moveDownDisabledTooltip:"Cet élément est déjà en dernière position",modelValue:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvSortableList</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvSortableList</code> component displays items that can be reordered by dragging
    or with move-up and move-down buttons. It exposes the current order through <code>v-model</code>
    and announces reorder operations to assistive technologies.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    Each item is wrapped in an <code>AvCard</code> and includes move controls, a drag handle,
    and either the default slot content or the item's label. The default slot receives the item
    and its zero-based index; the list loop remains inside the component.
  </span>
</p>

<p>
  <span class="b2-regular">
    Items must have a unique <code>id</code> and a <code>label</code>. Move buttons are disabled
    at the list boundaries, and a live region announces the old and new positions after reordering.
  </span>
</p>`}}}},b=e=>({components:{AvSortableList:t},setup(){return{args:e}},template:'<AvSortableList v-bind="args" />'}),$=e=>({components:{AvSortableList:t,AvListItem:q},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :role="null"
          :index="index + 1"
          :title="element.label"
          :description="element.description"
        />
      </template>
    </AvSortableList>
  `}),ee=e=>({components:{AvSortableList:t,AvListItem:q},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :role="null"
          :index="index + 1"
          :title="element.label"
          :description="element.description"
          :icon="element.icon"
        />
      </template>
    </AvSortableList>
  `}),te=e=>({components:{AvSortableList:t,AvButton:K},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <AvButton
          :label="element.label"
          :icon="element.icon"
          :aria-label="element.label"
        />
      </template>
    </AvSortableList>
  `}),ne=e=>({components:{AvSortableList:t},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <span class="b2-regular">Étape {{ index + 1 }} : {{ element.label }}</span>
      </template>
    </AvSortableList>
  `}),ae={editorLabel:"Consigne",toolbarLabel:"Barre d’outils de la consigne",undoLabel:"Annuler (CTRL + Z)",redoLabel:"Rétablir (CTRL + Y)",paragraphLabel:"Paragraphe",headingLabel:"Titre",boldLabel:"Gras (CTRL + B)",italicLabel:"Italique (CTRL + I)",underlineLabel:"Souligné (CTRL + U)",linkLabel:"Lien (CTRL + K)",linkNameLabel:"Nom du lien",linkNamePlaceholder:"Exemple de lien",linkUrlLabel:"URL du lien",unsetLinkLabel:"Supprimer le lien (CTRL + SHIFT + K)",imageLabel:"Image (CTRL + SHIFT + I)",imageNameLabel:"Nom de l’image",imageNamePlaceholder:"Exemple d’image",imageUrlLabel:"URL de l’image",removeImageLabel:"Supprimer l’image",insertTableLabel:"Insérer un tableau",tableSettingsLabel:"Paramètres du tableau",deleteTableLabel:"Supprimer le tableau",addColumnBeforeLabel:"Ajouter une colonne avant",addColumnAfterLabel:"Ajouter une colonne après",deleteColumnLabel:"Supprimer la colonne",addRowBeforeLabel:"Ajouter une ligne avant",addRowAfterLabel:"Ajouter une ligne après",deleteRowLabel:"Supprimer la ligne",alignLeftLabel:"Aligner à gauche (CTRL + SHIFT + L)",alignCenterLabel:"Centrer (CTRL + SHIFT + E)",alignRightLabel:"Aligner à droite (CTRL + SHIFT + R)",alignJustifyLabel:"Justifier (CTRL + SHIFT + J)",bulletListLabel:"Liste à puces (CTRL + SHIFT + 8)",orderedListLabel:"Liste numérotée (CTRL + SHIFT + 7)",decreaseIndentLabel:"Diminuer le retrait (CTRL + [)",increaseIndentLabel:"Augmenter le retrait (CTRL + ])",popoversCancelLabel:"Annuler",popoversConfirmLabel:"Confirmer"},re=X({components:{AvInput:Z,AvRichTextEditor:Q,AvCancelConfirmButtons:Y},props:{subActivity:{type:Object,required:!0}},emits:["save"],setup(e,{emit:v}){const n=g({...e.subActivity}),a=g(!1);function L(){n.value={...e.subActivity}}async function G(){a.value=!0,await new Promise(J=>setTimeout(J,500)),v("save",{...n.value}),a.value=!1}return{draft:n,isSaving:a,cancel:L,save:G,richTextEditorLabels:ae}},template:`
    <form class="av-col av-gap-md av-w-full" @submit.prevent="save">
      <AvInput
        v-model="draft.label"
        label="Titre"
        required
      />
      <div class="av-col av-gap-xs">
        <span class="b2-light">Consigne</span>
        <AvRichTextEditor
          v-model="draft.instruction"
          v-bind="richTextEditorLabels"
        />
      </div>
      <AvInput
        v-model="draft.context"
        label="Contexte(s) de réalisation conseillé(s)"
        is-textarea
      />
      <AvCancelConfirmButtons
        cancel-label="Annuler"
        confirm-label="Enregistrer"
        :cancel-disabled="isSaving"
        :confirm-is-loading="isSaving"
        @cancel="cancel"
        @confirm="save"
      />
    </form>
  `}),se=e=>({components:{AvSortableList:t,SubActivityForm:re},setup(){function v(n){const a=e.modelValue.findIndex(L=>L.id===n.id);a!==-1&&(e.modelValue[a]=n)}return{args:e,saveSubActivity:v}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <SubActivityForm
          :sub-activity="element"
          @save="saveSubActivity"
        />
      </template>
    </AvSortableList>
  `}),u=b.bind({}),s=b.bind({});s.args={disabled:!0,disabledTooltip:"Mode lecture seule activée"};const o=b.bind({});o.args={isLoading:!0};const l=$.bind({});l.args={modelValue:[{id:"1",label:"Préparer le dossier",description:"Rassembler les pièces nécessaires"},{id:"2",label:"Envoyer la candidature",description:"Vérifier les informations avant envoi"},{id:"3",label:"Suivre la réponse",description:"Consulter régulièrement les messages reçus"}]};const i=ee.bind({});i.args={modelValue:[{id:"1",label:"Accueil",description:"Retrouver votre espace personnel",icon:r.HOME_VARIANT_OUTLINE},{id:"2",label:"Mon profil",description:"Consulter vos informations",icon:r.ACCOUNT_CIRCLE_OUTLINE},{id:"3",label:"Mes objectifs",description:"Suivre votre progression",icon:r.TARGET_ARROW}]};const m=te.bind({});m.args={modelValue:[{id:"1",label:"Ouvrir le portfolio",description:"",icon:r.INFORMATION_OUTLINE},{id:"2",label:"Consulter mes projets",description:"",icon:r.BRIEFCASE_VARIANT_OUTLINE},{id:"3",label:"Voir mes objectifs",description:"",icon:r.TARGET_ARROW}]};const d=b.bind({});d.args={moveUpLabel:"Déplacer vers le haut",moveDownLabel:"Déplacer vers le bas",dragLabel:"Faire glisser",moveUpDisabledTooltip:"Cet élément est déjà en tête de liste",moveDownDisabledTooltip:"Cet élément est déjà en fin de liste"};const c=ne.bind({});c.args={modelValue:[{id:"1",label:"définir les objectifs"},{id:"2",label:"identifier les ressources disponibles"},{id:"3",label:"planifier les actions à réaliser"},{id:"4",label:"suivre l’avancement du projet"},{id:"5",label:"faire le bilan et ajuster la suite"}]};const p=se.bind({});p.args={modelValue:[{id:"1",label:"Analyser la situation",instruction:"<p>Décrivez la situation rencontrée et les enjeux identifiés.</p>",context:"En classe, en stage"},{id:"2",label:"Mettre en œuvre une solution",instruction:"<p>Présentez les actions réalisées et les résultats obtenus.</p>",context:"En entreprise"},{id:"3",label:"Évaluer les résultats",instruction:"<p>Analysez les résultats obtenus et tirez des conclusions.</p>",context:"En classe, en stage"},{id:"4",label:"Clore le projet",instruction:"<p>Rédigez le rapport final et archivez les documents.</p>",context:"En entreprise"},{id:"5",label:"Archiver les documents",instruction:"<p>Organisez et archivez tous les documents relatifs au projet.</p>",context:"En entreprise"}]};const Be=["Default","Disabled","Loading","CustomSlot","ItemsWithIcons","ItemsAsButtons","CustomControlLabels","LongList","SubActivityForms"];var A,S,f;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(f=(S=u.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,C,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var x,h,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(R=(h=o.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var y,E,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList,
    AvListItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :role="null"
          :index="index + 1"
          :title="element.label"
          :description="element.description"
        />
      </template>
    </AvSortableList>
  \`
})`,...(D=(E=l.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var F,j,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList,
    AvListItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :role="null"
          :index="index + 1"
          :title="element.label"
          :description="element.description"
          :icon="element.icon"
        />
      </template>
    </AvSortableList>
  \`
})`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,U,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList,
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <AvButton
          :label="element.label"
          :icon="element.icon"
          :aria-label="element.label"
        />
      </template>
    </AvSortableList>
  \`
})`,...(O=(U=m.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var _,B,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var M,z,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <span class="b2-regular">Étape {{ index + 1 }} : {{ element.label }}</span>
      </template>
    </AvSortableList>
  \`
})`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var W,P,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList,
    SubActivityForm
  },
  setup() {
    function saveSubActivity(updated: SubActivity) {
      const index = args.modelValue.findIndex(subActivity => subActivity.id === updated.id);
      if (index !== -1) {
        args.modelValue[index] = updated;
      }
    }
    return {
      args,
      saveSubActivity
    };
  },
  template: \`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <SubActivityForm
          :sub-activity="element"
          @save="saveSubActivity"
        />
      </template>
    </AvSortableList>
  \`
})`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};export{d as CustomControlLabels,l as CustomSlot,u as Default,s as Disabled,m as ItemsAsButtons,i as ItemsWithIcons,o as Loading,c as LongList,p as SubActivityForms,Be as __namedExportsOrder,_e as default};
