<script lang="ts" setup>
import type { Slot } from 'vue'
import { useFileUploadContext } from '@/components/interaction/files/AvFileUpload/AvFileUploadContext'
import { MDI_ICONS } from '@/tokens/icons'

interface AvFileUploadDeleteModalProps {
  opened: boolean
  pendingDeleteFiles: (File | { name: string })[]
}

defineProps<AvFileUploadDeleteModalProps>()

defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

defineSlots<{
  default?: Slot<{ files: (File | { name: string })[] }>
}>()

const { props } = useFileUploadContext()
</script>

<template>
  <AvModal
    :opened="opened"
    :close-button-label="props.confirmDeleteModalCancelLabel!"
    :confirm-button-label="props.confirmDeleteModalConfirmLabel"
    :confirm-button-icon="MDI_ICONS.TRASH_CAN_OUTLINE"
    @close="$emit('close')"
    @confirm="$emit('confirm')"
  >
    <template #header>
      <span class="n5">
        {{ props.confirmDeleteModalTitle }}
      </span>
    </template>

    <slot :files="pendingDeleteFiles">
      <div class="av-col b2-regular confirm-delete-modal">
        <ul>
          <li
            v-for="(file, index) in pendingDeleteFiles"
            :key="`${file.name}-${index}`"
          >
            {{ file.name }}
          </li>
        </ul>
      </div>
    </slot>
  </AvModal>
</template>

<style lang="scss" scoped>
.confirm-delete-modal {
  max-height: 50vh;
  overflow-y: auto;
}
</style>
