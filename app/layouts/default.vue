<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
  >
    <AppHeader />
    <main class="pb-20 md:pb-0">
      <slot />
    </main>
    <AppFooter />
    <!-- 移动端底部 Tab -->
    <MobileTabBar class="md:hidden" />
  </div>
</template>
