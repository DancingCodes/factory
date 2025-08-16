<template>
    <div class="flex gap-0.1rem bg-#3a3a3a py-0.16rem px-0.5rem box-border color-#fff">
        <div>
            <div class="flex items-center gap-0.05rem">
                <img src="@/assets/images/logo.png" class="h-0.4rem">
                <span class="text-0.16rem font-bold tracking-0.01rem">无极工厂</span>
            </div>
            <div class="mt-0.2rem flex flex-col gap-0.01rem text-0.09rem">
                <div class="color-#9d9d9d">公司地址</div>
                <span class="color-#fff">西虹市高新区飞跃路极心创意园1号楼</span>
            </div>
            <div class="mt-0.14rem flex flex-col gap-0.01rem text-0.09rem">
                <div class="color-#9d9d9d">全国服务电话</div>
                <span class="color-#fff">0555-77777777</span>
            </div>
        </div>

        <div class="flex-1 flex justify-end gap-0.4rem">
            <div v-for="i in navList">
                <div class="text-0.1rem">{{ i.title }}</div>
                <div class="color-#9d9d9d text-0.09rem">
                    <div v-for="r in i.rows" class="mt-0.08rem cursor-pointer">{{ r.label }}</div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="flex items-center justify-between color-#9d9d9d text-0.09rem bg-#353535 py-0.09rem px-0.5rem box-border">
        <div>鲁ICP备00000001号-2 无极集团版权所有 鲁公网安备 55555777779999号</div>
        <div class="flex gap-0.01re,">人才专区<span>·</span>联系我们<span>·</span>法律申明<span>·</span>友情链接</div>
    </div>
</template>
<script setup>
const navList = [{
    title: '产品中心',
    rows: [{
        label: '产品中心'
    }, {
        label: '产品中心'
    }, {
        label: '产品中心'
    }]
}, {
    title: '新闻动态',
    rows: [{
        label: '新闻动态'
    }, {
        label: '新闻动态'
    }, {
        label: '新闻动态'
    }, {
        label: '新闻动态'
    }]
}]


</script>
