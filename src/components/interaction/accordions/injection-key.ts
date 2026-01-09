import type { InjectionKey, Ref } from 'vue'

type RegisterTab = (title: Ref<string>) => {
  isActive: Ref<boolean>
  expand: () => void
  onKeydown: (event: KeyboardEvent) => void
  setTriggerRef: (el: HTMLElement | null) => void
}

export const registerAccordionKey: InjectionKey<RegisterTab> = Symbol('accordions')
