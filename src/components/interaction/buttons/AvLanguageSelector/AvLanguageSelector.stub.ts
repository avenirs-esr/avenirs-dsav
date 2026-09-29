import type { PropType } from 'vue'
import type { AvLanguageSelectorElement } from '@/components/interaction/buttons/AvLanguageSelector/AvLanguageSelector.vue'

export const AvLanguageSelectorStub = defineComponent({
  name: 'AvLanguageSelector',
  props: {
    languages: {
      type: Array as PropType<AvLanguageSelectorElement[]>,
    },
    currentLanguage: {
      type: String,
    },
    title: {
      type: String,
    }
  },
  emits: ['select'],
  template: '<div data-testid="av-language-selector-stub" />'
})
