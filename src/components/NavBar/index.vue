<template>
    <div class="NavBar"
        :class="{ Fixed: usePageStore().isFixedHead, Scrolled: usePageStore().isFixedHead && scrollY >= 100 }">
        <div class="company">
            <img src="@/assets/logo.png">
            <span>无极工厂</span>
        </div>
        <div class="navList">
            <div class="navItem">关于我们</div>
            <div class="navItem">产品中心</div>
            <div class="navItem">新闻动态</div>
            <div class="navItem">联系我们</div>
        </div>
    </div>
</template>
<script setup>
import { usePageStore } from '@/store';
import { useScroll } from '@/hook/useScroll'
const { scrollY } = useScroll()
</script>
<style scoped lang="scss">
.NavBar {
    position: relative;
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px 120px;
    box-sizing: border-box;
    transition: all 0.3s;

    .company {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 24px;
        letter-spacing: 2px;
        font-weight: bold;

        img {
            height: 50px;
            display: block;
        }
    }

    .navList {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        .navItem {
            padding: 0 16px;
            box-sizing: border-box;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }
    }
}

.Fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.Scrolled {
    background-color: #ffffff;
    color: #000;
    .company {
        color: #0171d0;
    }
}
</style>