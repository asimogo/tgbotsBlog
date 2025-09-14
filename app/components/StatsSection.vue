<script setup lang="ts">
import { computed, reactive, onMounted, watch } from "#imports";

const stats = useStats();
// SSR safety: provide a fallback object if state is not yet initialized
const safeStats = computed(
  () => stats.value ?? { product: 0, articles: 0, tutorials: 0, users: 0 },
);

// Animated count-up display values (client-only animation)
const display = reactive({ product: 0, articles: 0, tutorials: 0, users: 0 });

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function animateTo(key: keyof typeof display, to: number, ms = 1200) {
  const from = display[key] ?? 0;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min((now - start) / ms, 1);
    const v = Math.floor(from + (to - from) * easeOutCubic(t));
    display[key] = v;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

onMounted(() => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    display.product = safeStats.value.product;
    display.articles = safeStats.value.articles;
    display.tutorials = safeStats.value.tutorials;
    display.users = safeStats.value.users;
  } else {
    animateTo("product", safeStats.value.product);
    animateTo("articles", safeStats.value.articles);
    animateTo("tutorials", safeStats.value.tutorials);
    animateTo("users", safeStats.value.users);
  }
});

// If stats change later, animate from current to new
watch(safeStats, (nv) => {
  if (!nv) return;
  animateTo("product", nv.product);
  animateTo("articles", nv.articles);
  animateTo("tutorials", nv.tutorials);
  animateTo("users", nv.users);
});
</script>

<template>
  <section
    class="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50 dark:bg-emerald-900/20"
  >
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-3xl font-bold text-emerald-600 mb-2">
            <ClientOnly fallback="0+">{{ display.product }}+</ClientOnly>
          </div>
          <div class="text-slate-600 dark:text-slate-300">优质产品</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-emerald-600 mb-2">
            <ClientOnly fallback="0+">{{ display.articles }}+</ClientOnly>
          </div>
          <div class="text-slate-600 dark:text-slate-300">技术文章</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-emerald-600 mb-2">
            <ClientOnly fallback="0+">{{ display.tutorials }}+</ClientOnly>
          </div>
          <div class="text-slate-600 dark:text-slate-300">实用教程</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-emerald-600 mb-2">
            <ClientOnly fallback="0+">{{ display.users }}+</ClientOnly>
          </div>
          <div class="text-slate-600 dark:text-slate-300">活跃用户</div>
        </div>
      </div>
    </div>
  </section>
</template>
