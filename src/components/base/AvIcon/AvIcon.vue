<script setup lang="ts">
import { getIconPath } from '@/utils/icon-path/icon-path'

/**
 * AvIcon component props.
 */
export interface AvIconProps {
  /**
   * The size in rem of the icon.
   * @default 1
   */
  size?: number

  /**
   * The name of the icon to display.
   */
  name: string

  /**
   * Animation type applied to the icon.
   * Can be 'spin', 'wrench', 'pulse', 'spin-pulse', 'flash','float' or 'ring'.
   */
  animation?: 'spin' | 'wrench' | 'pulse' | 'spin-pulse' | 'flash' | 'float' | 'ring'

  /**
   * Animation speed, if set.
   * Can be 'fast' or 'slow'.
   */
  speed?: 'fast' | 'slow'

  /**
   * Flips the icon horizontally, vertically, or both.
   */
  flip?: 'horizontal' | 'vertical' | 'both'

  /**
   * Icon title used for accessibility and tooltips.
   */
  title?: string

  /**
   * Main color of the icon.
   * @default 'currentColor'
   */
  color?: string
}

const {
  size = 1,
  name,
  animation,
  speed,
  flip,
  title,
  color = 'currentColor',
} = defineProps<AvIconProps>()

const fontSize = computed(() => `${size}rem`)

const iconPathStyleVars = computed(() => getIconPath(name))

const flipTransform = computed(() => {
  switch (flip) {
    case 'horizontal':
      return 'scaleX(-1)'
    case 'vertical':
      return 'scaleY(-1)'
    case 'both':
      return 'scale(-1, -1)'
    default:
      return undefined
  }
})
</script>

<template>
  <div
    class="av-icon av-col"
    :class="{
      'av-icon--spin': animation === 'spin',
      'av-icon--wrench': animation === 'wrench',
      'av-icon--pulse': animation === 'pulse',
      'av-icon--spin-pulse': animation === 'spin-pulse',
      'av-icon--flash': animation === 'flash',
      'av-icon--float': animation === 'float',
      'av-icon--ring': animation === 'ring',
      'av-icon--slow': speed === 'slow',
      'av-icon--fast': speed === 'fast',
    }"
    :title="title"
    aria-hidden="true"
  >
    <span
      class="av-icon__icon av-w-full av-h-full av-align-center av-justify-center"
      :style="[iconPathStyleVars, { transform: flipTransform }]"
    />
  </div>
</template>

<style lang="scss" scoped>
.av-icon {
  width: v-bind('fontSize');
  height: v-bind('fontSize');
  color: v-bind('color');
  flex-shrink: 0;

  &__icon {
    background-color: v-bind('color');
    -webkit-mask-image: var(--icon-path);
    mask-image: var(--icon-path);
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
  }

  // === spin ===
  &--spin {
    animation: spin 1s linear infinite;

    &.av-icon--fast {
      animation-duration: 0.7s;
    }

    &.av-icon--slow {
      animation-duration: 2s;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  // === spin-pulse ===
  &--spin-pulse {
    animation: spin-pulse 1s steps(8) infinite;

    &.av-icon--fast {
      animation-duration: 0.7s;
    }

    &.av-icon--slow {
      animation-duration: 2s;
    }

    @keyframes spin-pulse {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  // === wrench ===
  &--wrench {
    animation: wrench 2.5s ease infinite;

    &.av-icon--fast {
      animation-duration: 1.2s;
    }

    &.av-icon--slow {
      animation-duration: 3.7s;
    }

    @keyframes wrench {
      0% {
        transform: rotate(-12deg);
      }

      8% {
        transform: rotate(12deg);
      }

      10%, 28%, 30%, 48%, 50%, 68% {
        transform: rotate(24deg);
      }

      18%, 20%, 38%, 40%, 58%, 60% {
        transform: rotate(-24deg);
      }

      75%, 100% {
        transform: rotate(0deg);
      }
    }
  }

  // === ring ===
  &--ring {
    animation: ring 2s ease infinite;

    &.av-icon--fast {
      animation-duration: 1s;
    }

    &.av-icon--slow {
      animation-duration: 3s;
    }

    @keyframes ring {
      0% {
        transform: rotate(-15deg);
      }

      2% {
        transform: rotate(15deg);
      }

      4%, 12% {
        transform: rotate(-18deg);
      }

      6% {
        transform: rotate(18deg);
      }

      8% {
        transform: rotate(-22deg);
      }

      10% {
        transform: rotate(22deg);
      }

      12% {
        transform: rotate(-18deg);
      }

      14% {
        transform: rotate(18deg);
      }

      16% {
        transform: rotate(-12deg);
      }

      18% {
        transform: rotate(12deg);
      }

      20%, 100% {
        transform: rotate(0deg);
      }
    }
  }

  // === pulse ===
  &--pulse {
    animation: pulse 2s linear infinite;

    &.av-icon--fast {
      animation-duration: 1s;
    }

    &.av-icon--slow {
      animation-duration: 3s;
    }

    @keyframes pulse {
      0% {
        transform: scale(1.1);
      }

      50% {
        transform: scale(0.8);
      }

      100% {
        transform: scale(1.1);
      }
    }
  }

  // === flash ===
  &--flash {
    animation: flash 2s ease infinite;

    &.av-icon--fast {
      animation-duration: 1s;
    }

    &.av-icon--slow {
      animation-duration: 3s;
    }

    @keyframes flash {
      0%, 100%, 50% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0;
      }
    }
  }

  // === float ===
  &--float {
    animation: float 2s linear infinite;

    &.av-icon--fast {
      animation-duration: 1s;
    }

    &.av-icon--slow {
      animation-duration: 3s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(-3px);
      }
      50% {
        transform: translateY(3px);
      }
    }
  }

  span {
    color: inherit;
  }
}
</style>
