<script setup lang="ts">
import { useRoute, computed } from '#imports'
const { open } = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'update:open', v: boolean): void }>()
const close = () => emit('update:open', false)

const route = useRoute()
const activeHash = computed(() => route.hash)
</script>

<template>
  <transition name="fade">
    <div v-if="open" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/40" @click="close" />
      <div
        class="absolute inset-y-0 right-0 w-80 max-w-[85%] bg-transparent p-6 text-slate-900 dark:text-white pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
      >
        <div class="flex items-center justify-end mb-6 pr-1">
          <button
            aria-label="Close"
            class="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 min-w-[44px] min-h-[44px] flex items-center justify-center"
            @click="close"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
          <nav class="text-right pr-3 space-y-2">
            <a
              href="#product"
              class="block text-slate-800 dark:text-white py-2 px-3 transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
              :class="{ 'text-emerald-600 dark:text-emerald-300': activeHash === '#product' }"
              :aria-current="activeHash === '#product' ? 'page' : undefined"
              @click="close"
            >
              产品
            </a>
            <a
              href="#knowledge"
              class="block text-slate-800 dark:text-white py-2 px-3 transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
              :class="{ 'text-emerald-600 dark:text-emerald-300': activeHash === '#knowledge' }"
              :aria-current="activeHash === '#knowledge' ? 'page' : undefined"
              @click="close"
            >
              知识库
            </a>
            <a
              href="#tutorials"
              class="block text-slate-800 dark:text-white py-2 px-3 transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
              :class="{ 'text-emerald-600 dark:text-emerald-300': activeHash === '#tutorials' }"
              :aria-current="activeHash === '#tutorials' ? 'page' : undefined"
              @click="close"
            >
              教程
            </a>
            <a
              href="#tools"
              class="block text-slate-800 dark:text-white py-2 px-3 transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
              :class="{ 'text-emerald-600 dark:text-emerald-300': activeHash === '#tools' }"
              :aria-current="activeHash === '#tools' ? 'page' : undefined"
              @click="close"
            >
              工具
            </a>
          </nav>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
