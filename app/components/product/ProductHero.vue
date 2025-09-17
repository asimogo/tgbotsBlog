<script setup lang="ts">
const perks = ["API 接入·认证·收款", "机器人托管与运营", "定制化策略自动化"];

const stats = [
  {
    title: "部署时效",
    value: "48 小时",
    description: "标准套餐 2 天内上线",
  },
  {
    title: "客户覆盖",
    value: "70+ 业务",
    description: "营销、电商、金融、社群多行业验证",
  },
  {
    title: "服务模式",
    value: "SaaS + 定制",
    description: "灵活授权与持续运维，支持集成现有系统",
  },
];
</script>

<template>
  <section
    id="product-hero"
    class="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-24 dark:bg-slate-950 dark:text-white"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-transparent opacity-100 dark:from-slate-950 dark:via-emerald-900/50 dark:to-transparent"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),_transparent_65%)]"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-200/40 to-transparent dark:from-black/30"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-center"
      >
        <div class="space-y-6">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-emerald-50"
          >
            <span
              class="h-2 w-2 animate-pulse rounded-full bg-emerald-200"
            ></span>
            TG 产品矩阵实时更新
          </span>
          <h1
            class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            全品类 TG 机器人
          </h1>
          <p class="text-lg text-slate-600 dark:text-emerald-50/90">
            一站式覆盖认证、账号运营、交易执行等核心场景。选择现成方案或按需定制，我们的团队为您部署、运维并持续优化。
          </p>
          <div
            class="flex flex-col items-center gap-3 sm:flex-row sm:items-start"
          >
            <a
              href="#catalog"
              class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-white dark:text-emerald-700 dark:hover:bg-emerald-50"
            >
              浏览产品目录
            </a>
            <a
              href="https://t.me/tgbotsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-8 py-4 text-base font-semibold text-emerald-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
            >
              咨询定制需求
            </a>
          </div>
          <ul
            class="flex flex-wrap justify-center gap-4 text-sm text-slate-600 sm:justify-start dark:text-emerald-50/90"
          >
            <li
              v-for="perk in perks"
              :key="perk"
              class="flex items-center gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-200"></span>
              {{ perk }}
            </li>
          </ul>
        </div>

        <div class="grid gap-4">
          <div
            v-for="stat in stats"
            :key="stat.title"
            class="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition-colors dark:border-white/25 dark:bg-white/10 dark:shadow-none"
          >
            <p
              class="text-xs uppercase tracking-[0.2em] text-emerald-500/70 dark:text-emerald-100/80"
            >
              {{ stat.title }}
            </p>
            <p
              class="mt-3 text-4xl font-semibold text-emerald-700 dark:text-white"
            >
              {{ stat.value }}
            </p>
            <p class="mt-2 text-sm text-slate-600 dark:text-emerald-50/80">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
