<script setup lang="ts">
import AvIcon from '@/components/base/AvIcon/AvIcon.vue'
import AvButton from '@/components/interaction/buttons/AvButton/AvButton.vue'
import { MDI_ICONS } from '@/tokens'
import { formatFileSize } from '@/utils'

/**
 * AvFilePill component props.
 */
export interface AvFilePillProps {
  /**
   * Name of the file.
   */
  name: string

  /**
   * Size of the file in bytes. Only used when `showDetails` is enabled.
   *
   * @default undefined
   */
  size?: number

  /**
   * Extension of the file. Only used when `showDetails` is enabled.
   *
   * @default undefined
   */
  type?: string

  /**
   * Unique identifier returned in the `download` and `delete` payloads.
   *
   * @default `file-pill-${crypto.randomUUID()}`
   */
  id?: string

  /**
   * Display a download button which emits `download` when clicked.
   *
   * @default false
   */
  downloadable?: boolean

  /**
   * Display a delete button which emits `delete` when clicked.
   *
   * @default true
   */
  deletable?: boolean

  /**
   * Display the file extension and size below the file name.
   * Ignored when neither of them is provided.
   *
   * @default false
   */
  showDetails?: boolean

  /**
   * Prefix for the download button label. If not provided, the default label will be "Download {name}".
   * @default 'Download'
   */
  downloadPrefixLabel?: string

  /**
   * Prefix for the delete button label. If not provided, the default label will be "Delete {name}".
   * @default 'Delete'
   */
  deletePrefixLabel?: string
}

const {
  name,
  size,
  type,
  id,
  downloadable = false,
  deletable = true,
  showDetails = false,
  downloadPrefixLabel = 'Download',
  deletePrefixLabel = 'Delete',
} = defineProps<AvFilePillProps>()

/**
 * Events emitted by AvFilePill.
 */
const emit = defineEmits<{
  /**
   * Emitted when the download button is clicked.
   * @event download
   * @param id The identifier of the pill.
   */
  (e: 'download', id: string): void

  /**
   * Emitted when the delete button is clicked.
   * @event delete
   * @param id The identifier of the pill.
   */
  (e: 'delete', id: string): void
}>()

const realId = id ?? `file-pill-${crypto.randomUUID()}`

const details = computed(() => [type?.toUpperCase(), size ? formatFileSize(size) : undefined].filter(Boolean).join(' · '))

const hasDetails = computed(() => showDetails && details.value.length > 0)
</script>

<template>
  <div
    class="av-file-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-solid av-border-stroke av-background-card"
  >
    <AvIcon
      :size="1.5"
      :name="MDI_ICONS.ATTACH_FILE"
      color="var(--icon)"
    />
    <div class="av-file-pill__content av-col">
      <span class="b2-regular av-ellipsis">{{ name }}</span>
      <span
        v-if="hasDetails"
        class="caption-light av-ellipsis"
      >{{ details }}</span>
    </div>
    <AvButton
      v-if="downloadable"
      :label="`${downloadPrefixLabel} ${name}`"
      :icon="MDI_ICONS.DOWNLOAD_OUTLINE"
      icon-only
      small
      @click="emit('download', realId)"
    />
    <AvButton
      v-if="deletable"
      :label="`${deletePrefixLabel} ${name}`"
      :icon="MDI_ICONS.TRASH_CAN_OUTLINE"
      icon-only
      small
      @click="emit('delete', realId)"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-file-pill {
  position: relative;
}

.av-file-pill__content {
  flex: 1 1 auto;
  min-width: 0;
}
</style>
