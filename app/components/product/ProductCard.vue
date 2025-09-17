<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  image: string;
  category: string;
  hot: boolean;
}

const props = defineProps<{ product: Product }>();
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white/90 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl hover:ring-1 hover:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-emerald-400/30 dark:hover:ring-emerald-400/20"
  >
    <div v-if="props.product.hot" class="absolute top-4 right-4 z-10">
      <span
        class="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white"
        >热门</span
      >
    </div>

    <div class="px-6 pb-4 pt-6">
      <div
        class="mb-4 h-32 w-full overflow-hidden rounded-xl bg-slate-100 transition-all duration-300 group-hover:ring-2 group-hover:ring-emerald-500/30 dark:bg-slate-800 dark:group-hover:ring-emerald-400/30"
      >
        <img
          :src="props.product.image || '/placeholder.svg'"
          :alt="props.product.title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
        {{ props.product.title }}
      </h3>
      <p
        class="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400"
      >
        {{ props.product.subtitle }}
      </p>
    </div>

    <div class="px-6 pb-4 text-sm text-slate-600 dark:text-slate-300">
      <p class="mb-4 line-clamp-3">{{ props.product.description }}</p>

      <div class="space-y-2">
        <div class="flex justify-between">
          <span>试用7天</span>
          <span class="font-semibold text-emerald-600 dark:text-emerald-400">
            {{ props.product.price }}
          </span>
        </div>
        <div class="flex justify-between">
          <span>月租</span>
          <span class="font-semibold text-emerald-600 dark:text-emerald-400">
            {{ props.product.monthlyPrice }}
          </span>
        </div>
        <div class="flex justify-between">
          <span>年租</span>
          <span class="font-semibold text-emerald-600 dark:text-emerald-400">
            {{ props.product.yearlyPrice }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex gap-2 border-t border-slate-100 px-6 py-4 dark:border-slate-800"
    >
      <button
        type="button"
        class="flex-1 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      >
        立即购买
      </button>
      <button
        type="button"
        class="flex-1 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        查看详情
      </button>
    </div>
  </article>
</template>
