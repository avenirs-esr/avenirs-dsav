<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { nextTick } from 'vue'

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
   * ARIA label for accessibility.
   */
  label?: string

  /**
   * Icon title (`<title>` tag), used for accessibility and tooltips.
   */
  title?: string

  /**
   * Main color of the icon.
   * @default 'inherit'
   */
  color?: string

  /**
   * Enables server-side rendering.
   * @default true
   */
  ssr?: boolean
}

const {
  size = 1,
  name,
  animation,
  speed,
  flip,
  label,
  title,
  color = 'inherit',
  ssr = true
} = defineProps<AvIconProps>()

const icon = ref<{ $el: SVGElement } | null>(null)
const fontSize = computed(() => `${size}rem`)
const finalFlip = computed(() => flip === 'both' ? 'horizontal,vertical' : flip)

watch(() => title, setTitle)

async function setTitle () {
  if (!(icon.value?.$el)) {
    return
  }
  const titleExists = !!(icon.value?.$el).querySelector('title')
  const titleEl = document.createElement('title')
  if (!title) {
    titleEl.remove()
    return
  }
  titleEl.innerHTML = title
  await nextTick()
  if (!titleExists) {
    (icon.value?.$el as SVGElement).firstChild?.before(titleEl)
  }
}
onMounted(setTitle)
</script>

<template>
  <div class="av-vicon--container">
    <Icon
      ref="icon"
      :icon="name"
      :style="{ fontSize, display: 'inline-block', color }"
      :aria-label="label"
      class="vicon"
      :class="{
        'vicon-spin': animation === 'spin',
        'vicon-wrench': animation === 'wrench',
        'vicon-pulse': animation === 'pulse',
        'vicon-spin-pulse': animation === 'spin-pulse',
        'vicon-flash': animation === 'flash',
        'vicon-float': animation === 'float',
        'vicon-ring': animation === 'ring',
        'vicon-slow': speed === 'slow',
        'vicon-fast': speed === 'fast',
      }"
      :flip="finalFlip"
      :ssr
    />
  </div>
</template>

<style lang="scss" scoped>
.av-vicon--container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind('fontSize');
  height: v-bind('fontSize');
}

/* ---------------- spin ---------------- */
.vicon-spin:not(.vicon-hover),
.vicon-spin.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin {
  animation: vicon-spin 1s linear infinite;
}

.vicon-spin:not(.vicon-hover).vicon-fast,
.vicon-spin.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin.vicon-fast {
  animation: vicon-spin 0.7s linear infinite;
}

.vicon-spin:not(.vicon-hover).vicon-slow,
.vicon-spin.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin.vicon-slow {
  animation: vicon-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */
.vicon-spin-pulse:not(.vicon-hover),
.vicon-spin-pulse.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin-pulse {
  animation: vicon-spin 1s infinite steps(8);
}

.vicon-spin-pulse:not(.vicon-hover).vicon-fast,
.vicon-spin-pulse.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin-pulse.vicon-fast {
  animation: vicon-spin 0.7s infinite steps(8);
}

.vicon-spin-pulse:not(.vicon-hover).vicon-slow,
.vicon-spin-pulse.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-spin-pulse.vicon-slow {
  animation: vicon-spin 2s infinite steps(8);
}

@keyframes vicon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.vicon-wrench:not(.vicon-hover),
.vicon-wrench.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-wrench {
  animation: vicon-wrench 2.5s ease infinite;
}

.vicon-wrench:not(.vicon-hover).vicon-fast,
.vicon-wrench.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-wrench.vicon-fast {
  animation: vicon-wrench 1.2s ease infinite;
}

.vicon-wrench:not(.vicon-hover).vicon-slow,
.vicon-wrench.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-wrench.vicon-slow {
  animation: vicon-wrench 3.7s ease infinite;
}

@keyframes vicon-wrench {
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

/* ---------------- ring ---------------- */
.vicon-ring:not(.vicon-hover),
.vicon-ring.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-ring {
  animation: vicon-ring 2s ease infinite;
}

.vicon-ring:not(.vicon-hover).vicon-fast,
.vicon-ring.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-ring.vicon-fast {
  animation: vicon-ring 1s ease infinite;
}

.vicon-ring:not(.vicon-hover).vicon-slow,
.vicon-ring.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-ring.vicon-slow {
  animation: vicon-ring 3s ease infinite;
}

@keyframes vicon-ring {
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

/* ---------------- pulse ---------------- */
.vicon-pulse:not(.vicon-hover),
.vicon-pulse.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-pulse {
  animation: vicon-pulse 2s linear infinite;
}

.vicon-pulse:not(.vicon-hover).vicon-fast,
.vicon-pulse.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-pulse.vicon-fast {
  animation: vicon-pulse 1s linear infinite;
}

.vicon-pulse:not(.vicon-hover).vicon-slow,
.vicon-pulse.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-pulse.vicon-slow {
  animation: vicon-pulse 3s linear infinite;
}

@keyframes vicon-pulse {
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

/* ---------------- flash ---------------- */
.vicon-flash:not(.vicon-hover),
.vicon-flash.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-flash {
  animation: vicon-flash 2s ease infinite;
}

.vicon-flash:not(.vicon-hover).vicon-fast,
.vicon-flash.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-flash.vicon-fast {
  animation: vicon-flash 1s ease infinite;
}

.vicon-flash:not(.vicon-hover).vicon-slow,
.vicon-flash.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-flash.vicon-slow {
  animation: vicon-flash 3s ease infinite;
}

@keyframes vicon-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.vicon-float:not(.vicon-hover),
.vicon-float.vicon-hover:hover,
.vicon-parent.vicon-hover:hover > .vicon-float {
  animation: vicon-float 2s linear infinite;
}

.vicon-float:not(.vicon-hover).vicon-fast,
.vicon-float.vicon-hover.vicon-fast:hover,
.vicon-parent.vicon-hover:hover > .vicon-float.vicon-fast {
  animation: vicon-float 1s linear infinite;
}

.vicon-float:not(.vicon-hover).vicon-slow,
.vicon-float.vicon-hover.vicon-slow:hover,
.vicon-parent.vicon-hover:hover > .vicon-float.vicon-slow {
  animation: vicon-float 3s linear infinite;
}

@keyframes vicon-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
</style>
