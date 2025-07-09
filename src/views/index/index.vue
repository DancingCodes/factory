<template>
    <div class="h-100vh">
        <video class="w-100% h-100% object-cover bg-#102a27" :src="videoAddress" muted autoplay loop></video>
        <div class="absolute w-100% h-100% left-0 top-0 flex flex-col justify-center pl-0.5rem box-border color-#fff">
            <div class="text-0.08rem">
                Be a world-famous biological fermentation enterprise.
                <br>
                fermentation enterprise
            </div>
            <div class="mt-0.16rem text-0.3rem font-bold line-height-0.3rem tracking-0.01rem line-height-0.4rem">
                做<span class="color-#f09616">全球著名</span>的
                <br>
                禅心禅意企业
            </div>
            <div
                class="mt-0.1rem w-0.6rem h-0.2rem text-0.08rem line-height-0.2rem text-center bg-[linear-gradient(to_right,_#00924a,_#f09616)] cursor-pointer rounded-50px">
                See More
            </div>
        </div>
    </div>

    <div class="flex px-0.56rem py-0.4rem box-border gap-0.05rem h-3.6rem">
        <div v-for="(i, x) in categoryList" @mouseenter="hoverIndex = x"
            class="relative flex-1 flex flex-col justify-end color-#fff bg-#102a27 transition-[flex-grow] duration-500 rounded-8px overflow-hidden cursor-pointer bg-cover hover:flex-[4] "
            :style="{
                backgroundImage: `url(${i.bgi})`,
                backgroundSize: '5rem 100%',
            }" :class="{ '!flex-[4] !': hoverIndex === x }">


            <div v-if="hoverIndex !== x" class="flex flex-col items-center gap-0.1rem pb-0.2rem">
                <img :src="i.icon" alt="" class="h-0.46rem">
                <span class="text-0.1rem">{{ i.title }}</span>
            </div>

            <div v-else
                class="absolute w-100% h-100% top-0 left-0 flex flex-col justify-between p-0.2rem box-border bg-[linear-gradient(to_right,_rgba(1,129,65,0.7)_0%,_transparent_30%)]">
                <div>
                    <img :src="i.icon" alt="" class="h-0.46rem w-auto" />
                </div>
                <div>
                    <div class="text-0.16rem font-bold">
                        {{ i.title }}
                    </div>
                    <div class="text-0.1rem mt-0.02rem">
                        {{ i.describe }}
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex items-center bg-#f7f7f7">

        <div class="h-0.8rem bg-#018141 flex items-center justify-end pl-1rem pr-0.2rem box-border color-#fff">
            <div>
                <div class="text-0.14rem font-bold">
                    无极股份
                </div>
                <div class="text-0.12rem mt-0.02rem">
                    HK00000
                </div>
            </div>
        </div>


        <div class="flex items-center px-0.26rem box-border gap-0.2rem text-0.1rem">
            <div>
                <div class="color-#666">现价</div>
                <div class="font-bold mt-0.02rem">9.9999港元</div>
            </div>

            <div>
                <div class="color-#666">今日涨跌幅</div>
                <div class="font-bold mt-0.02rem">0.00 (0.00%)</div>
            </div>
        </div>

    </div>

</template>
<script setup>
const videoAddress = ref('https://filestore.moonc.love/uploadFiles/1747226220892-238510587.mp4')

const categoryList = ref([{
    title: '产品A',
    icon: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_06.png',
    describe: '产品A的描述',
    bgi: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_01.webp'
}, {
    title: '产品B',
    icon: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_07.png',
    describe: '产品B的描述',
    bgi: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_02.webp'
}, {
    title: '产品C',
    icon: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_08.png',
    describe: '产品C的描述',
    bgi: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_03.webp'
}, {
    title: '产品D',
    icon: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_09.png',
    describe: '产品D的描述',
    bgi: 'http://www.fufeng-group.com/statics/web/fer/upimg/in_04.webp'
}])
const hoverIndex = ref(0)
</script>