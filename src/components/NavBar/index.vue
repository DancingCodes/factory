<template>
    <div class="fixed z-999 top-0 left-0 w-100% flex items-center py-0.1rem px-0.5rem box-border transition-500 color-#fff hover:bg-#fff hover:color-#000"
        :class="{ 'bg-#fff !color-#000': scrollY >= 100 }">
        <div class="flex items-center gap-0.05rem">
            <img src="@/assets/images/logo.png" class="h-0.4rem">
            <span class="text-0.16rem font-bold tracking-0.01rem">无极工厂</span>
        </div>
        <div class="flex-1 flex gap-0.2rem justify-end text-0.12rem">
            <div class="cursor-pointer">关于我们</div>
            <div class="cursor-pointer">产品中心</div>
            <div class="cursor-pointer">新闻动态</div>
            <div class="cursor-pointer">联系我们</div>
        </div>
    </div>
</template>
<script setup>
import { useScroll } from '@/hooks/useScroll'
const { scrollY } = useScroll()
</script>