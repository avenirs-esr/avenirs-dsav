import{A as k}from"./AvButton-DmURW43h.js";import{_ as q}from"./AvCancelConfirmButtons-BoSVMzzl.js";import{A as G}from"./AvInput-BVVx4Np_.js";import{A as J}from"./AvRichTextEditor-Bz8qI4oG.js";import{a as M}from"./AvList-eTQUjTyo.js";import{A as t}from"./AvSortableList-DWaxbmZC.js";import{M as r}from"./icons-D5SKHg5c.js";import{d as K,r as L}from"./iframe-CQLQRkCr.js";import"./AvTooltip-BogkXxBE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Dk_QkKPA.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-Cgz2r5XT.js";import"./string--WCOsvs9.js";import"./AvCheckbox-DsoaBxz5.js";import"./AvFieldsetElement-BnXxzVMl.js";import"./utils-BIlgUrNJ.js";import"./AvMessage-CLHcjrup.js";import"./AvIconText-DX_QdVK6.js";import"./AvCheckboxesGroup-uMuDHORV.js";import"./AvFieldset-Dhq6m5eG.js";import"./AvCheckboxListItem-Ecn0dAxc.js";import"./AvRadioButton-smX68xPQ.js";import"./AvRadioButtonSet-B_HOjpeX.js";import"./format-Dv6JKX9m.js";import"./AvPopover-JAc3xoCK.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvDropdown-Du7rgPNA.js";import"./AvCard-DQ1FSFPP.js";import"./preload-helper-ILsKNznc.js";const we={title:"Components/Interaction/Lists/AvSortableList",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},disabledTooltip:{control:"text"},dragLabel:{control:"text"},moveUpLabel:{control:"text"},moveUpDisabledTooltip:{control:"text"},moveDownLabel:{control:"text"},moveDownDisabledTooltip:{control:"text"},announcementFormatter:{control:!1}},args:{moveUpLabel:"Monter",moveDownLabel:"Descendre",dragLabel:"Déplacer",moveUpDisabledTooltip:"Cet élément est déjà en première position",moveDownDisabledTooltip:"Cet élément est déjà en dernière position",modelValue:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvSortableList</code></h1>

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
</p>`}}}},v=e=>({components:{AvSortableList:t},setup(){return{args:e}},template:'<AvSortableList v-bind="args" />'}),Y=e=>({components:{AvSortableList:t,AvListItem:M},setup(){return{args:e}},template:`
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
  `}),Z=e=>({components:{AvSortableList:t,AvListItem:M},setup(){return{args:e}},template:`
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
  `}),Q=e=>({components:{AvSortableList:t,AvButton:k},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <AvButton
          :label="element.label"
          :icon="element.icon"
          :aria-label="element.label"
        />
      </template>
    </AvSortableList>
  `}),X=e=>({components:{AvSortableList:t},setup(){return{args:e}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <span class="b2-regular">Étape {{ index + 1 }} : {{ element.label }}</span>
      </template>
    </AvSortableList>
  `}),$={editorLabel:"Consigne",toolbarLabel:"Barre d’outils de la consigne",undoLabel:"Annuler (CTRL + Z)",redoLabel:"Rétablir (CTRL + Y)",paragraphLabel:"Paragraphe",headingLabel:"Titre",boldLabel:"Gras (CTRL + B)",italicLabel:"Italique (CTRL + I)",underlineLabel:"Souligné (CTRL + U)",linkLabel:"Lien (CTRL + K)",linkNameLabel:"Nom du lien",linkNamePlaceholder:"Exemple de lien",linkUrlLabel:"URL du lien",unsetLinkLabel:"Supprimer le lien (CTRL + SHIFT + K)",imageLabel:"Image (CTRL + SHIFT + I)",imageNameLabel:"Nom de l’image",imageNamePlaceholder:"Exemple d’image",imageUrlLabel:"URL de l’image",removeImageLabel:"Supprimer l’image",insertTableLabel:"Insérer un tableau",tableSettingsLabel:"Paramètres du tableau",deleteTableLabel:"Supprimer le tableau",addColumnBeforeLabel:"Ajouter une colonne avant",addColumnAfterLabel:"Ajouter une colonne après",deleteColumnLabel:"Supprimer la colonne",addRowBeforeLabel:"Ajouter une ligne avant",addRowAfterLabel:"Ajouter une ligne après",deleteRowLabel:"Supprimer la ligne",alignLeftLabel:"Aligner à gauche (CTRL + SHIFT + L)",alignCenterLabel:"Centrer (CTRL + SHIFT + E)",alignRightLabel:"Aligner à droite (CTRL + SHIFT + R)",alignJustifyLabel:"Justifier (CTRL + SHIFT + J)",bulletListLabel:"Liste à puces (CTRL + SHIFT + 8)",orderedListLabel:"Liste numérotée (CTRL + SHIFT + 7)",decreaseIndentLabel:"Diminuer le retrait (CTRL + [)",increaseIndentLabel:"Augmenter le retrait (CTRL + ])",popoversCancelLabel:"Annuler",popoversConfirmLabel:"Confirmer"},ee=K({components:{AvInput:G,AvRichTextEditor:J,AvCancelConfirmButtons:q},props:{subActivity:{type:Object,required:!0}},emits:["save"],setup(e,{emit:u}){const n=L({...e.subActivity}),a=L(!1);function b(){n.value={...e.subActivity}}async function W(){a.value=!0,await new Promise(P=>setTimeout(P,500)),u("save",{...n.value}),a.value=!1}return{draft:n,isSaving:a,cancel:b,save:W,richTextEditorLabels:$}},template:`
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
  `}),te=e=>({components:{AvSortableList:t,SubActivityForm:ee},setup(){function u(n){const a=e.modelValue.findIndex(b=>b.id===n.id);a!==-1&&(e.modelValue[a]=n)}return{args:e,saveSubActivity:u}},template:`
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <SubActivityForm
          :sub-activity="element"
          @save="saveSubActivity"
        />
      </template>
    </AvSortableList>
  `}),p=v.bind({}),s=Y.bind({});s.args={modelValue:[{id:"1",label:"Préparer le dossier",description:"Rassembler les pièces nécessaires"},{id:"2",label:"Envoyer la candidature",description:"Vérifier les informations avant envoi"},{id:"3",label:"Suivre la réponse",description:"Consulter régulièrement les messages reçus"}]};const l=Z.bind({});l.args={modelValue:[{id:"1",label:"Accueil",description:"Retrouver votre espace personnel",icon:r.HOME_VARIANT_OUTLINE},{id:"2",label:"Mon profil",description:"Consulter vos informations",icon:r.ACCOUNT_CIRCLE_OUTLINE},{id:"3",label:"Mes objectifs",description:"Suivre votre progression",icon:r.TARGET_ARROW}]};const o=Q.bind({});o.args={modelValue:[{id:"1",label:"Ouvrir le portfolio",description:"",icon:r.INFORMATION_OUTLINE},{id:"2",label:"Consulter mes projets",description:"",icon:r.BRIEFCASE_VARIANT_OUTLINE},{id:"3",label:"Voir mes objectifs",description:"",icon:r.TARGET_ARROW}]};const i=v.bind({});i.args={moveUpLabel:"Déplacer vers le haut",moveDownLabel:"Déplacer vers le bas",dragLabel:"Faire glisser",moveUpDisabledTooltip:"Cet élément est déjà en tête de liste",moveDownDisabledTooltip:"Cet élément est déjà en fin de liste"};const m=v.bind({});m.args={disabled:!0,disabledTooltip:"Enregistrement en cours"};const d=X.bind({});d.args={modelValue:[{id:"1",label:"définir les objectifs"},{id:"2",label:"identifier les ressources disponibles"},{id:"3",label:"planifier les actions à réaliser"},{id:"4",label:"suivre l’avancement du projet"},{id:"5",label:"faire le bilan et ajuster la suite"}]};const c=te.bind({});c.args={modelValue:[{id:"1",label:"Analyser la situation",instruction:"<p>Décrivez la situation rencontrée et les enjeux identifiés.</p>",context:"En classe, en stage"},{id:"2",label:"Mettre en œuvre une solution",instruction:"<p>Présentez les actions réalisées et les résultats obtenus.</p>",context:"En entreprise"},{id:"3",label:"Évaluer les résultats",instruction:"<p>Analysez les résultats obtenus et tirez des conclusions.</p>",context:"En classe, en stage"},{id:"4",label:"Clore le projet",instruction:"<p>Rédigez le rapport final et archivez les documents.</p>",context:"En entreprise"},{id:"5",label:"Archiver les documents",instruction:"<p>Organisez et archivez tous les documents relatifs au projet.</p>",context:"En entreprise"}]};const Ne=["Default","CustomSlot","ItemsWithIcons","ItemsAsButtons","CustomControlLabels","Disabled","LongList","SubActivityForms"];var g,A,S;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(S=(A=p.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var f,T,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,x,h;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var R,y,E;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var D,F,j;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var w,N,U;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvSortableList
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvSortableList v-bind="args" />'
})`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var O,_,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var V,z,H;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};export{i as CustomControlLabels,s as CustomSlot,p as Default,m as Disabled,o as ItemsAsButtons,l as ItemsWithIcons,d as LongList,c as SubActivityForms,Ne as __namedExportsOrder,we as default};
