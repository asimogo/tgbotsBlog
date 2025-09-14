<script setup lang="ts">
// Blog detail page powered by Nuxt Content
</script>

<template>
  <article class="py-8 sm:py-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentDoc v-slot="{ doc }">
        <header class="mb-8">
          <NuxtLink to="/blog" class="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            <Icon name="lucide:arrow-left" class="w-4 h-4 mr-1" /> 返回列表
          </NuxtLink>
          <h1 class="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {{ doc.title || '未命名文章' }}
          </h1>
          <p v-if="doc.description" class="mt-2 text-slate-600 dark:text-slate-300">
            {{ doc.description }}
          </p>
          <div class="mt-3 text-xs text-slate-500 dark:text-slate-400">
            <time v-if="doc.date" :datetime="doc.date">{{ new Date(doc.date).toLocaleDateString('zh-CN') }}</time>
          </div>
        </header>

        <div class="content">
          <ContentRenderer :value="doc" />
        </div>
      </ContentDoc>
    </div>
  </article>
</template>

<style scoped>
.content :deep(img) {
  border-radius: 0.5rem;
}
</style>

