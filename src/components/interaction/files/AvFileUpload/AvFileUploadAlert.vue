<script setup lang="ts">
export interface AvFileUploadAlertProps {
  /**
   * Error message to be displayed in case of upload problem.
   *
   * @default undefined
   */
  error?: string

  /**
   * Message indicating that the uploaded file is valid.
   *
   * @default undefined
   */
  validMessage?: string
}

withDefaults(defineProps<AvFileUploadAlertProps>(), {
  error: undefined,
  validMessage: undefined
})
</script>

<template>
  <AvMessage
    :type="error ? 'error' : 'success'"
    :message="error ? error : validMessage"
  />
</template>

<style scoped lang="scss">

</style>
