<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appBaseURL = runtimeConfig.app?.baseURL || '/';

const withBase = (path: string) => {
  const normalizedBase = appBaseURL.endsWith('/') ? appBaseURL : `${appBaseURL}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
};

const products = [
  {
    id: 1,
    title: "外卖机器人",
    subtitle: "海外餐饮老板自己的外卖平台",
    description: "接入google地图，媲美grab的外卖应用",
    price: "Free",
    monthlyPrice: "$50",
    yearlyPrice: "$600",
    features: ["路径规划", "实时计算营业额", "多种收款方式"],
    image: withBase("image/product/takeaway.png"),
    category: "机器人",
    hot: true,
  },

  {
    id: 2,
    title: "群管机器人",
    subtitle: "大型群组必备",
    description: "精准识别群组内的广告、违禁词，秒清害群之马",
    price: "Free",
    monthlyPrice: "$30",
    yearlyPrice: "$360",
    features: ["精准识别", "灵活配置"],
    image: withBase("image/product/manager.png"),
    category: "机器人",
    hot: true,
  },
  {
    id: 3,
    title: "交易机器人",
    subtitle: "专业交易机器人平台",
    description:
      "提供专业的交易机器人服务，支持多种交易策略，实时市场分析，自动化交易执行。",
    price: "$400起",
    monthlyPrice: "$4000起",
    yearlyPrice: "$40000",
    features: ["专业交易", "策略支持", "自动执行"],
    image: withBase("image/product/crypto.png"),
    category: "机器人",
    hot: false,
  },
  {
    id: 4,
    title: "双向机器人",
    subtitle: "您的私人助理",
    description: "行业最好的双向机器人，聊天对话犹如面对面",
    price: "-",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    features: ["免费", "丝滑聊天"],
    image: withBase("image/product/assistant.png"),
    category: "机器人",
    hot: true,
  },
  {
    id: 5,
    title: "验证机器人",
    subtitle: "公开群组的守门神",
    description: "采用AI算法生成的各种验证手段,把各路混子挡在门外",
    price: "Free",
    monthlyPrice: "$30",
    yearlyPrice: "$360",
    features: ["AI算法", "坚固无比"],
    image: withBase("image/product/verify.png"),
    category: "机器人",
    hot: true,
  },
];

const categories = [
  "全部",
  "外卖",
  "群管",
  "验证",
  "选秀",
  "上门",
  "双向",
  "记账",
];
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 pb-16 transition-colors dark:bg-slate-950"
  >
    <ProductHero />

    <ProductTagBar :categories="categories" />

    <section id="catalog" class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>
