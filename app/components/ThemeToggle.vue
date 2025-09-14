<script setup lang="ts">
const { isDark, toggle } = useDarkMode();
</script>

<template>
  <button
    class="p-2 rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    :aria-pressed="isDark"
    title="切换主题"
    @click="toggle()"
  >
    <span v-if="!isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
