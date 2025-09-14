<script setup lang="ts">
const props = withDefaults(
  defineProps<{ ctaUrl?: string; newTab?: boolean }>(),
  {
    ctaUrl: "https://t.me/tgbotsapp",
    newTab: false,
  },
);
const { ctaUrl, newTab } = toRefs(props);
</script>

<template>
  <section id="hero" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <div class="mb-8">
        <a
          :href="ctaUrl"
          :target="newTab ? '_blank' : undefined"
          :rel="newTab ? 'noopener noreferrer' : undefined"
          class="inline-block focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/50 rounded-full group"
          aria-label="订阅TG元宝频道"
          title="订阅TG元宝频道"
        >
          <div
            class="logo-breath mx-auto w-28 h-28 md:w-36 md:h-36 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-105"
            role="img"
            aria-label="TG Logo"
          >
            <span class="text-white font-bold text-4xl md:text-5xl">TG</span>
          </div>
        </a>
      </div>
      <h1
        class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 text-balance"
      >
        海外掘金
        <span class="text-emerald-600 whitespace-nowrap">一站式</span>
        TG应用平台
      </h1>
      <p
        class="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto text-pretty"
      >
        专注开发优质的 TG 机器人和 Mini App 应用，助力海外掘金
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#product"
          class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
        >
          开始探索
        </a>
        <a
          href="#knowledge"
          class="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors dark:text-slate-200 dark:border-slate-600"
        >
          了解更多
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-breath {
  position: relative;
  isolation: isolate; /* keep pseudo-elements behind content */
}
/* Static subtle glow */
.logo-breath::before {
  content: "";
  position: absolute;
  inset: -8px; /* extend slightly outside */
  border-radius: 9999px;
  box-shadow: 0 0 40px 14px rgba(16, 185, 129, 0.45);
  opacity: 0.9;
  pointer-events: none;
  z-index: -1;
}
/* Breathing ring */
.logo-breath::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.75);
  animation: hero-breath 2.2s ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
}
@keyframes hero-breath {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.75);
  }
  60% {
    box-shadow: 0 0 0 30px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}
/* Stronger breathing on hover */
@keyframes hero-breath-strong {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.85);
  }
  55% {
    box-shadow: 0 0 0 40px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}
/* Speed up breathing and intensify glow on hover/focus */
.group:hover .logo-breath::after,
.group:focus-visible .logo-breath::after {
  animation-name: hero-breath-strong;
  animation-duration: 0.8s;
}
.group:hover .logo-breath::before,
.group:focus-visible .logo-breath::before {
  box-shadow: 0 0 72px 24px rgba(16, 185, 129, 0.6);
  opacity: 1;
}

/* Respect users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .logo-breath::after {
    animation: none;
  }
}
</style>
