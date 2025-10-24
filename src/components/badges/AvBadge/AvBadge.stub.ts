export const AvBadgeStub = defineComponent({
  name: 'AvBadge',
  template: `<div class="av-badge-stub"> {{ label }} </div>`,
  props: {
    label: String,
    small: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    color: String,
    backgroundColor: String,
    borderColor: String,
    iconPath: String
  }
})
