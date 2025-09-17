<script setup lang="ts">
const props = withDefaults(
  defineProps<{ categories: string[]; activeIndex?: number }>(),
  {
    activeIndex: 0,
  },
);

const baseClasses =
  "px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors";

const getChipClasses = (index: number) => {
  const isActive = index === props.activeIndex;
  return [
    baseClasses,
    isActive
      ? "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
      : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
  ];
};
</script>

<template>
  <section
    id="product-categories"
    class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
  >
    <div class="flex flex-wrap justify-center gap-2">
      <span
        v-for="(category, index) in props.categories"
        :key="category"
        :class="getChipClasses(index)"
      >
        {{ category }}
      </span>
    </div>
  </section>
</template>
