<script setup lang="ts">
import { nextTick } from 'vue'
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import { DEFAULT_ICON_SIZE_REM, MAX_ICON_SIZE_REM, MIN_ICON_SIZE_REM } from '@/components/base/AvIconText/utils'
import AvTooltip from '@/components/overlay/tooltips/AvTooltip/AvTooltip.vue'

/**
 * AvIconText component props.
 */
export interface AvIconTextProps {
  /**
   * The text color.
   * @default 'var(--text1)'
   */
  textColor?: string

  /**
   * The icon color.
   * @default 'var(--text1)'
   */
  iconColor?: string

  /**
   * The icon name according to the naming convention of Iconify-vue.
   */
  icon: string

  /**
   * The text to display.
   */
  text: string

  /**
   * The typography class to use for the text.
   * @default 'b2-regular'
   */
  typographyClass?: string

  /**
   * The space between the icon and the text.
   * @default '0.25rem'
   */
  gap?: string

  /**
   * If `false`, text that is too long will be truncated.
   * @default false
   */
  inline?: boolean

  /**
   * If `true`, text can break anywhere to avoid layout overflow on long unbroken strings.
   * Takes precedence over ellipsis behavior.
   * @default false
   */
  wrapAnywhere?: boolean
}

const {
  textColor = 'var(--text1)',
  iconColor = 'var(--text1)',
  icon,
  text,
  typographyClass = 'b2-regular',
  gap = 'var(--spacing-xs)',
  inline = false,
  wrapAnywhere = false
} = defineProps<AvIconTextProps>()

const textElementRef = ref<HTMLElement | null>(null)
const iconSize = ref(DEFAULT_ICON_SIZE_REM)

function updateIconSize () {
  if (!textElementRef.value) {
    iconSize.value = DEFAULT_ICON_SIZE_REM
    return
  }

  const textStyle = window.getComputedStyle(textElementRef.value)
  const rootStyle = window.getComputedStyle(document.documentElement)

  const rootFontSizePx = Number.parseFloat(rootStyle.fontSize)
  const fontSizePx = Number.parseFloat(textStyle.fontSize)
  const lineHeightPx = Number.parseFloat(textStyle.lineHeight)

  const baseSizePx = Number.isFinite(lineHeightPx)
    ? lineHeightPx
    : fontSizePx

  if (!Number.isFinite(rootFontSizePx) || rootFontSizePx <= 0 || !Number.isFinite(baseSizePx) || baseSizePx <= 0) {
    iconSize.value = DEFAULT_ICON_SIZE_REM
    return
  }

  const computedSizeRem = baseSizePx / rootFontSizePx
  iconSize.value = Math.min(MAX_ICON_SIZE_REM, Math.max(MIN_ICON_SIZE_REM, computedSizeRem))
}

watch(
  () => [typographyClass, text],
  async () => {
    await nextTick()
    updateIconSize()
  },
  { immediate: true }
)

onMounted(() => {
  updateIconSize()
  window.addEventListener('resize', updateIconSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIconSize)
})

const ellipsisContainerClass = computed(() => !inline && !wrapAnywhere ? 'ellipsis-container' : undefined)
const ellipsisClass = computed(() => !inline && !wrapAnywhere ? 'av-max-lines' : undefined)
const wrapAnywhereClass = computed(() => wrapAnywhere ? 'av-wrap-anywhere' : undefined)
</script>

<template>
  <AvTooltip
    :content="text"
    :disabled="inline || wrapAnywhere"
    :force-focusable="!inline && !wrapAnywhere"
  >
    <div
      class="icon-text--container av-row av-align-start"
      :class="[ellipsisContainerClass]"
      data-testid="av-icon-text-container"
    >
      <AvIcon
        class="icon-text--icon"
        :name="icon"
        :color="iconColor"
        :size="iconSize"
      />
      <span
        ref="textElementRef"
        class="icon-text--text"
        :class="[ellipsisClass, wrapAnywhereClass, typographyClass]"
        data-testid="av-icon-text-text"
      >
        {{ text }}
      </span>
    </div>
  </AvTooltip>
</template>

<style lang="scss" scoped>
.icon-text--container {
  --max-lines: 1;
  gap: v-bind('gap');
  max-height: fit-content;
}

.icon-text--text {
  color: v-bind('textColor')
}
</style>
