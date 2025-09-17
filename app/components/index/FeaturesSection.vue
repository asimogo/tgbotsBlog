<script setup lang="ts">
const cards = [
  {
    id: "product",
    img: "/product-introduction.jpg",
    title: "产品简介",
    text: "精选 TG 机器人和 Mini Apps",
    target: "/product",
  },
  {
    id: "knowledge",
    img: "/share-knowledge.jpg",
    title: "知识库",
    text: "分享一些 TG 机器人搭建教程",
    target: "/knowledge",
  },
  {
    id: "tutorials",
    img: "/guide-illustration.jpg",
    title: "教程",
    text: "各种软件/服务/工具的使用教程",
    target: "/tutorials",
  },
];
</script>

<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="c in cards"
          :id="c.id"
          :key="c.id"
          :img="c.img"
          :title="c.title"
          :text="c.text"
          :target="c.target"
          :large="true"
        />
      </div>
    </div>
  </section>
</template>
