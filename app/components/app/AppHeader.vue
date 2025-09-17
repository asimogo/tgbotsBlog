<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);
</script>

<template>
  <header
    class="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50 dark:bg-slate-900/80 dark:border-slate-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 cursor-pointer">
          <div
            class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-lg">TG</span>
          </div>
          <div>
            <p class="text-xl font-bold text-slate-900 dark:text-white">
              TG元宝
            </p>
            <p class="text-xs text-slate-600 dark:text-slate-300">
              专业开发TG机器人
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-6">
          <a
            href="#product"
            class="text-slate-700 hover:text-emerald-600 font-medium transition-colors dark:text-slate-200"
            >产品</a
          >
          <a
            href="#knowledge"
            class="text-slate-700 hover:text-emerald-600 font-medium transition-colors dark:text-slate-200"
            >知识库</a
          >
          <a
            href="#tutorials"
            class="text-slate-700 hover:text-emerald-600 font-medium transition-colors dark:text-slate-200"
            >教程</a
          >
          <a
            href="#tools"
            class="text-slate-700 hover:text-emerald-600 font-medium transition-colors dark:text-slate-200"
            >TG免费在线工具</a
          >
          <ThemeToggle />
        </nav>

        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            class="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            @click="open = true"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <MobileNavDrawer v-model:open="open" />
  </header>
</template>
