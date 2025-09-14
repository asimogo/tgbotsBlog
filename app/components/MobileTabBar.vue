<template>
  <nav
    class="fixed bottom-0 inset-x-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-t border-slate-200 dark:border-slate-800"
  >
    <ul class="grid grid-flow-col auto-cols-fr text-center">
      <li>
        <a
          href="#product"
          class="block p-3 text-sm text-slate-700 dark:text-slate-200"
        >
          <div class="flex flex-col items-center leading-none">
            <Icon name="lucide:home" class="w-5 h-5 mb-0.5" />
            <span>产品</span>
          </div>
        </a>
      </li>
      <li>
        <a
          href="#knowledge"
          class="block p-3 text-sm text-slate-700 dark:text-slate-200"
        >
          <div class="flex flex-col items-center leading-none">
            <Icon name="lucide:book-open" class="w-5 h-5 mb-0.5" />
            <span>知识库</span>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://t.me/tgbotsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="打开 TG 频道 @tgbotsapp"
          class="block p-2 text-sm"
        >
          <div class="flex flex-col items-center leading-none -translate-y-1">
            <div
              class="fab-breath w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-medium shadow ring-1 ring-emerald-400/30 dark:ring-emerald-300/30"
            >
              <span class="text-sm">TG</span>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a
          href="#tutorials"
          class="block p-3 text-sm text-slate-700 dark:text-slate-200"
        >
          <div class="flex flex-col items-center leading-none">
            <Icon name="lucide:graduation-cap" class="w-5 h-5 mb-0.5" />
            <span>教程</span>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://t.me/tgBotsAppBot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="联系咨询 @tgBotsAppBot"
          class="block p-3 text-sm text-slate-700 dark:text-slate-200"
        >
          <div class="flex flex-col items-center leading-none">
            <Icon name="lucide:message-square" class="w-5 h-5 mb-0.5" />
            <span>咨询</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.fab-breath {
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;
}
.fab-breath:hover {
  transform: translateY(-1px);
}
@media (prefers-reduced-motion: reduce) {
  .fab-breath {
    transition: none;
  }
}
</style>
