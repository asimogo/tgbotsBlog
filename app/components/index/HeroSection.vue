<script setup lang="ts">
const props = withDefaults(
  defineProps<{ ctaUrl?: string; newTab?: boolean }>(),
  {
    ctaUrl: "https://t.me/tgbotsapp",
    newTab: false,
  },
);
const { ctaUrl, newTab } = toRefs(props);

const featureBadges = ["企业级稳定", "多语言支持", "自动化策略引擎"];

const heroStats = [
  {
    label: "落地项目",
    value: "120+",
    caption: "覆盖东南亚 18 个行业场景",
  },
  {
    label: "平均部署",
    value: "48h",
    caption: "快速上线并持续运维",
  },
  {
    label: "满意度",
    value: "4.9 / 5",
    caption: "来自长期合作团队评分",
  },
];
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-emerald-100/80 to-white py-24 px-4 transition-colors dark:from-slate-950 dark:via-emerald-950/60 dark:to-slate-950 sm:px-6 lg:px-8"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/25"
      ></div>
      <div
        class="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/20"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-emerald-200/60 via-transparent to-transparent dark:from-emerald-900/30"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_45%,rgba(255,255,255,0)_55%,rgba(255,255,255,0.12)_100%)] dark:bg-[linear-gradient(120deg,rgba(94,234,212,0.15)_0%,rgba(94,234,212,0)_45%,rgba(94,234,212,0)_55%,rgba(94,234,212,0.12)_100%)]"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl">
      <div
        class="grid items-center gap-14 text-center lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:text-left"
      >
        <div class="order-2 space-y-8 lg:order-1">
          <div class="flex justify-center lg:justify-start">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-white/80 px-5 py-1.5 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
            >
              <span
                class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
              ></span>
              Telegram 数字业务增长引擎
            </span>
          </div>

          <h1
            class="mx-auto max-w-3xl text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mx-0 dark:text-white"
          >
            开拓全球 TG 业务
            <span
              class="block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent"
            >
              从产品、运营到商业化全链路赋能
            </span>
          </h1>

          <p
            class="mx-auto max-w-3xl text-lg text-slate-600 text-pretty lg:mx-0 lg:text-xl dark:text-slate-300"
          >
            专业团队沉淀 7 年 Telegram 实战经验，提供机器人、API、Mini Apps
            等多形态解决方案，助力品牌与社区迅速启动并实现规模化增长。
          </p>

          <div
            class="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#product"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-300/40 transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl dark:shadow-emerald-900/40"
            >
              <span>开始探索</span>
              <span aria-hidden="true" class="text-xl">→</span>
            </a>
            <a
              href="#knowledge"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/80 bg-white/80 px-8 py-4 text-base font-semibold text-emerald-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-500/40 dark:bg-transparent dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              了解更多
            </a>
          </div>

          <div
            class="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 lg:justify-start dark:text-slate-300"
          >
            <span
              v-for="badge in featureBadges"
              :key="badge"
              class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/90 px-4 py-2 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              {{ badge }}
            </span>
          </div>
        </div>

        <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div
            class="relative isolate w-full max-w-md overflow-hidden rounded-3xl border border-white/30 bg-white/75 p-10 text-left shadow-2xl backdrop-blur dark:border-emerald-500/25 dark:bg-emerald-950/40"
          >
            <div
              class="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/30"
            ></div>
            <a
              :href="ctaUrl"
              :target="newTab ? '_blank' : undefined"
              :rel="newTab ? 'noopener noreferrer' : undefined"
              class="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60 group"
              aria-label="订阅TG大玩家频道"
              title="订阅TG大玩家频道"
            >
              <div
                class="logo-breath flex h-full w-full items-center justify-center rounded-full bg-emerald-500 text-5xl font-bold text-white shadow-emerald-500/40 transition-transform group-hover:scale-105"
                role="img"
                aria-label="TG Logo"
              >
                TG
              </div>
            </a>

            <p class="mt-6 text-sm uppercase tracking-[0.3em] text-emerald-500">
              Growth Metrics
            </p>
            <dl class="mt-6 space-y-6">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="space-y-1"
              >
                <dt
                  class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  {{ stat.label }}
                </dt>
                <dd
                  class="text-3xl font-semibold text-slate-900 dark:text-white"
                >
                  {{ stat.value }}
                </dd>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  {{ stat.caption }}
                </p>
              </div>
            </dl>

            <div
              class="mt-8 inline-flex items-center gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200"
            >
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              全流程专家随行，实时答疑与运营诊断
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-breath {
  position: relative;
  isolation: isolate;
}
.logo-breath::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 9999px;
  box-shadow: 0 0 40px 14px rgba(16, 185, 129, 0.45);
  opacity: 0.9;
  pointer-events: none;
  z-index: -1;
}
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
@media (prefers-reduced-motion: reduce) {
  .logo-breath::after {
    animation: none;
  }
}
</style>
