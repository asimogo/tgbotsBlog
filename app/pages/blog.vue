<script setup lang="ts">
// Blog list page powered by Nuxt Content
</script>

<template>
  <section class="py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mb-8 sm:mb-10">
        <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">博客</h1>
        <p class="mt-2 text-slate-600 dark:text-slate-300">最新文章与教程汇总</p>
      </header>

      <ContentList path="/blog" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
        <div v-if="list?.length" class="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="post in list"
            :key="post._id || post._path"
            class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-sm transition-shadow"
          >
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
              <NuxtLink class="hover:text-emerald-600 dark:hover:text-emerald-300" :to="post._path">
                {{ post.title || post._path }}
              </NuxtLink>
            </h2>
            <p v-if="post.description" class="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
              {{ post.description }}
            </p>
            <div class="mt-3 text-xs text-slate-500 dark:text-slate-400">
              <time v-if="post.date" :datetime="post.date">{{ new Date(post.date).toLocaleDateString('zh-CN') }}</time>
            </div>
            <div class="mt-4">
              <NuxtLink :to="post._path" class="inline-flex items-center text-emerald-700 hover:text-emerald-600 dark:text-emerald-300">
                阅读全文
                <Icon name="lucide:arrow-right" class="w-4 h-4 ml-1" />
              </NuxtLink>
            </div>
          </article>
        </div>
        <div v-else class="text-slate-600 dark:text-slate-300">暂无文章，稍后再来～</div>
      </ContentList>
    </div>
  </section>
</template>
