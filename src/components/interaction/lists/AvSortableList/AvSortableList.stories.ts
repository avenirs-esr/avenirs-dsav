import type { StoryFn } from '@storybook/vue3'
import type { AvSortableListItem, AvSortableListProps } from '@/components/interaction/lists/AvSortableList/AvSortableList.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import AvCancelConfirmButtons from '@/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.vue'
import AvInput from '@/components/interaction/inputs/AvInput/AvInput.vue'
import AvRichTextEditor from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.vue'
import AvListItem from '@/components/interaction/lists/AvListItem/AvListItem.vue'
import AvSortableList from '@/components/interaction/lists/AvSortableList/AvSortableList.vue'
import { MDI_ICONS } from '@/tokens'

interface StoryArgs extends AvSortableListProps<AvSortableListItem> {
  modelValue: AvSortableListItem[]
}

interface ExtendedStoryArgs extends StoryArgs {
  modelValue: (AvSortableListItem & { description: string })[]
}

interface IconStoryArgs extends StoryArgs {
  modelValue: (AvSortableListItem & { description: string, icon: string })[]
}

/**
 * <h1 class="n1">Lists - <code>AvSortableList</code></h1>
 *
 * <h2 class="n2">✨ Introduction</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     The <code>AvSortableList</code> component displays items that can be reordered by dragging
 *     or with move-up and move-down buttons. It exposes the current order through <code>v-model</code>
 *     and announces reorder operations to assistive technologies.
 *   </span>
 * </p>
 *
 * <h2 class="n2">🏗️ Structure</h2>
 *
 * <p>
 *   <span class="b2-regular">
 *     Each item is wrapped in an <code>AvCard</code> and includes move controls, a drag handle,
 *     and either the default slot content or the item's label. The default slot receives the item
 *     and its zero-based index; the list loop remains inside the component.
 *   </span>
 * </p>
 *
 * <p>
 *   <span class="b2-regular">
 *     Items must have a unique <code>id</code> and a <code>label</code>. Move buttons are disabled
 *     at the list boundaries, and a live region announces the old and new positions after reordering.
 *   </span>
 * </p>
 */
const meta = {
  title: 'Components/Interaction/Lists/AvSortableList',
  component: AvSortableList,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    disabledTooltip: { control: 'text' },
    dragLabel: { control: 'text' },
    moveUpLabel: { control: 'text' },
    moveUpDisabledTooltip: { control: 'text' },
    moveDownLabel: { control: 'text' },
    moveDownDisabledTooltip: { control: 'text' },
    announcementFormatter: { control: false }
  },
  args: {
    moveUpLabel: 'Monter',
    moveDownLabel: 'Descendre',
    dragLabel: 'Déplacer',
    moveUpDisabledTooltip: 'Cet élément est déjà en première position',
    moveDownDisabledTooltip: 'Cet élément est déjà en dernière position',
    modelValue: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' }
    ]
  }
}

export default meta

const Template: StoryFn<StoryArgs> = args => ({
  components: { AvSortableList },
  setup () {
    return { args }
  },
  template: '<AvSortableList v-bind="args" />'
})

const TemplateWithCustomSlot: StoryFn<ExtendedStoryArgs> = args => ({
  components: { AvSortableList, AvListItem },
  setup () {
    return { args }
  },
  template: `
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :index="index + 1"
          :title="element.label"
          :description="element.description"
        />
      </template>
    </AvSortableList>
  `
})

const TemplateWithIcons: StoryFn<IconStoryArgs> = args => ({
  components: { AvSortableList, AvListItem },
  setup () {
    return { args }
  },
  template: `
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <AvListItem
          :index="index + 1"
          :title="element.label"
          :description="element.description"
          :icon="element.icon"
        />
      </template>
    </AvSortableList>
  `
})

const TemplateWithButtons: StoryFn<IconStoryArgs> = args => ({
  components: { AvSortableList, AvButton },
  setup () {
    return { args }
  },
  template: `
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <AvButton
          :label="element.label"
          :icon="element.icon"
          :aria-label="element.label"
        />
      </template>
    </AvSortableList>
  `
})

const TemplateWithStepIndex: StoryFn<StoryArgs> = args => ({
  components: { AvSortableList },
  setup () {
    return { args }
  },
  template: `
    <AvSortableList v-bind="args">
      <template #default="{ element, index }">
        <span class="b2-regular">Étape {{ index + 1 }} : {{ element.label }}</span>
      </template>
    </AvSortableList>
  `
})

interface SubActivity extends AvSortableListItem {
  instruction: string
  context: string
}

interface SubActivityStoryArgs extends AvSortableListProps<SubActivity> {
  modelValue: SubActivity[]
}

const richTextEditorLabels = {
  editorLabel: 'Consigne',
  toolbarLabel: 'Barre d’outils de la consigne',
  undoLabel: 'Annuler (CTRL + Z)',
  redoLabel: 'Rétablir (CTRL + Y)',
  paragraphLabel: 'Paragraphe',
  headingLabel: 'Titre',
  boldLabel: 'Gras (CTRL + B)',
  italicLabel: 'Italique (CTRL + I)',
  underlineLabel: 'Souligné (CTRL + U)',
  linkLabel: 'Lien (CTRL + K)',
  linkNameLabel: 'Nom du lien',
  linkNamePlaceholder: 'Exemple de lien',
  linkUrlLabel: 'URL du lien',
  unsetLinkLabel: 'Supprimer le lien (CTRL + SHIFT + K)',
  imageLabel: 'Image (CTRL + SHIFT + I)',
  imageNameLabel: 'Nom de l’image',
  imageNamePlaceholder: 'Exemple d’image',
  imageUrlLabel: 'URL de l’image',
  removeImageLabel: 'Supprimer l’image',
  insertTableLabel: 'Insérer un tableau',
  tableSettingsLabel: 'Paramètres du tableau',
  deleteTableLabel: 'Supprimer le tableau',
  addColumnBeforeLabel: 'Ajouter une colonne avant',
  addColumnAfterLabel: 'Ajouter une colonne après',
  deleteColumnLabel: 'Supprimer la colonne',
  addRowBeforeLabel: 'Ajouter une ligne avant',
  addRowAfterLabel: 'Ajouter une ligne après',
  deleteRowLabel: 'Supprimer la ligne',
  alignLeftLabel: 'Aligner à gauche (CTRL + SHIFT + L)',
  alignCenterLabel: 'Centrer (CTRL + SHIFT + E)',
  alignRightLabel: 'Aligner à droite (CTRL + SHIFT + R)',
  alignJustifyLabel: 'Justifier (CTRL + SHIFT + J)',
  bulletListLabel: 'Liste à puces (CTRL + SHIFT + 8)',
  orderedListLabel: 'Liste numérotée (CTRL + SHIFT + 7)',
  decreaseIndentLabel: 'Diminuer le retrait (CTRL + [)',
  increaseIndentLabel: 'Augmenter le retrait (CTRL + ])',
  popoversCancelLabel: 'Annuler',
  popoversConfirmLabel: 'Confirmer'
}

const SubActivityForm = defineComponent({
  components: { AvInput, AvRichTextEditor, AvCancelConfirmButtons },
  props: {
    subActivity: { type: Object as () => SubActivity, required: true }
  },
  emits: ['save'],
  setup (props, { emit }) {
    const draft = ref({ ...props.subActivity })
    const isSaving = ref(false)

    function cancel () {
      draft.value = { ...props.subActivity }
    }

    async function save () {
      isSaving.value = true
      await new Promise(resolve => setTimeout(resolve, 500))
      emit('save', { ...draft.value })
      isSaving.value = false
    }

    return { draft, isSaving, cancel, save, richTextEditorLabels }
  },
  template: `
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
  `
})

const TemplateWithForms: StoryFn<SubActivityStoryArgs> = args => ({
  components: { AvSortableList, SubActivityForm },
  setup () {
    function saveSubActivity (updated: SubActivity) {
      const index = args.modelValue.findIndex(subActivity => subActivity.id === updated.id)

      if (index !== -1) {
        args.modelValue[index] = updated
      }
    }

    return { args, saveSubActivity }
  },
  template: `
    <AvSortableList v-bind="args">
      <template #default="{ element }">
        <SubActivityForm
          :sub-activity="element"
          @save="saveSubActivity"
        />
      </template>
    </AvSortableList>
  `
})

export const Default = Template.bind({})

export const CustomSlot = TemplateWithCustomSlot.bind({})
CustomSlot.args = {
  modelValue: [
    { id: '1', label: 'Préparer le dossier', description: 'Rassembler les pièces nécessaires' },
    { id: '2', label: 'Envoyer la candidature', description: 'Vérifier les informations avant envoi' },
    { id: '3', label: 'Suivre la réponse', description: 'Consulter régulièrement les messages reçus' }
  ]
}

export const ItemsWithIcons = TemplateWithIcons.bind({})
ItemsWithIcons.args = {
  modelValue: [
    { id: '1', label: 'Accueil', description: 'Retrouver votre espace personnel', icon: MDI_ICONS.HOME_VARIANT_OUTLINE },
    { id: '2', label: 'Mon profil', description: 'Consulter vos informations', icon: MDI_ICONS.ACCOUNT_CIRCLE_OUTLINE },
    { id: '3', label: 'Mes objectifs', description: 'Suivre votre progression', icon: MDI_ICONS.TARGET_ARROW }
  ]
}

export const ItemsAsButtons = TemplateWithButtons.bind({})
ItemsAsButtons.args = {
  modelValue: [
    { id: '1', label: 'Ouvrir le portfolio', description: '', icon: MDI_ICONS.INFORMATION_OUTLINE },
    { id: '2', label: 'Consulter mes projets', description: '', icon: MDI_ICONS.BRIEFCASE_VARIANT_OUTLINE },
    { id: '3', label: 'Voir mes objectifs', description: '', icon: MDI_ICONS.TARGET_ARROW }
  ]
}

export const CustomControlLabels = Template.bind({})
CustomControlLabels.args = {
  moveUpLabel: 'Déplacer vers le haut',
  moveDownLabel: 'Déplacer vers le bas',
  dragLabel: 'Faire glisser',
  moveUpDisabledTooltip: 'Cet élément est déjà en tête de liste',
  moveDownDisabledTooltip: 'Cet élément est déjà en fin de liste'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  disabledTooltip: 'Enregistrement en cours'
}

export const LongList = TemplateWithStepIndex.bind({})
LongList.args = {
  modelValue: [
    { id: '1', label: 'définir les objectifs' },
    { id: '2', label: 'identifier les ressources disponibles' },
    { id: '3', label: 'planifier les actions à réaliser' },
    { id: '4', label: 'suivre l’avancement du projet' },
    { id: '5', label: 'faire le bilan et ajuster la suite' }
  ]
}

export const SubActivityForms = TemplateWithForms.bind({})
SubActivityForms.args = {
  modelValue: [
    {
      id: '1',
      label: 'Analyser la situation',
      instruction: '<p>Décrivez la situation rencontrée et les enjeux identifiés.</p>',
      context: 'En classe, en stage'
    },
    {
      id: '2',
      label: 'Mettre en œuvre une solution',
      instruction: '<p>Présentez les actions réalisées et les résultats obtenus.</p>',
      context: 'En entreprise'
    },
    {
      id: '3',
      label: 'Évaluer les résultats',
      instruction: '<p>Analysez les résultats obtenus et tirez des conclusions.</p>',
      context: 'En classe, en stage'
    },
    {
      id: '4',
      label: 'Clore le projet',
      instruction: '<p>Rédigez le rapport final et archivez les documents.</p>',
      context: 'En entreprise'
    },
    {
      id: '5',
      label: 'Archiver les documents',
      instruction: '<p>Organisez et archivez tous les documents relatifs au projet.</p>',
      context: 'En entreprise'
    }
  ]
}
