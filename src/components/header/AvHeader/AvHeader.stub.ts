import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { AvLanguageSelectorProps } from '@/components/interaction'

export const AvHeaderStub = defineComponent({
  name: 'AvHeader',
  props: {
    homeTo: {
      type: [String, Object] as PropType<string | RouteLocationRaw>,
      required: false,
    },
    modelValue: { type: String, required: false },
    placeholder: { type: String, required: false },
    languageSelector: {
      type: Object as PropType<AvLanguageSelectorProps>,
      required: false
    },
    searchLabel: { type: String, required: false },
    showSearch: { type: Boolean, required: false },
    menuOpen: { type: Boolean, required: false },
    showSearchLabel: { type: String, required: false },
    menuLabel: { type: String, required: false },
    closeDrawerLabel: { type: String, required: false },
    homeLabel: { type: String, required: true }
  },
  emits: ['update:modelValue', 'language-select', 'update:menuOpen'],
  template: `
    <div>
      <slot name="quickLinks" />
      <slot name="roleContext" />
      <slot name="mainnav" />
      <slot />
    </div>
  `
})
