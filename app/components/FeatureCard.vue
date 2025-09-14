<script setup lang="ts">
const props = defineProps<{
  id?: string;
  img: string;
  title: string;
  text: string;
  target: string;
  large?: boolean;
}>();

const { scrollTo } = useSectionScroll();
</script>

<template>
  <div
    :id="props.id"
    class="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-8 hover:shadow-lg transition-shadow scroll-mt-24"
  >
    <div class="mb-6">
      <img
        :src="img"
        :alt="title"
        :class="[
          'mx-auto rounded-xl',
          props.large
            ? 'w-32 h-32 md:w-40 md:h-40'
            : 'w-24 h-24 md:w-28 md:h-28'
        ]"
      />
    </div>
    <h3
      class="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center"
    >
      {{ title }}
    </h3>
    <p class="text-slate-600 dark:text-slate-300 mb-6 text-center text-pretty">
      {{ text }}
    </p>
    <div class="text-center">
      <a
        :href="`#${target}`"
        class="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        @click.prevent="scrollTo(target)"
      >
        点击访问
      </a>
    </div>
  </div>
</template>
