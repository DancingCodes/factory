<template>
    <div class="Footer">
        <div class="comInfo">
            <div class="company">
                <img src="@/assets/logo.png">
                <span>无极工厂</span>
            </div>

            <div class="OtherInfo">
                <div>公司地址</div>
                <span>西虹市高新区飞跃路极心创意园1号楼</span>
            </div>

            <div class="OtherInfo">
                <div>全国服务电话</div>
                <span>0555-77777777</span>
            </div>

        </div>

        <div class="navList">
            <div class="navItem" v-for="i in navList">
                <div class="navTitle">{{ i.title }}</div>
                <div class="navRows">
                    <div v-for="r in i.rows">{{ r.label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const navList = [{
    title: '关于我们',
    rows: [{
        label: '关于我们'
    }, {
        label: '关于我们'
    }, {
        label: '关于我们'
    }]
}, {
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
}, {
    title: '联系我们',
    rows: [{
        label: '联系我们'
    }, {
        label: '联系我们'
    }, {
        label: '联系我们'
    }, {
        label: '联系我们'
    }]
}]


</script>
<style scoped lang="scss">
.Footer {
    background-color: #3a3a3a;
    padding: 20px 120px;
    box-sizing: border-box;
    display: flex;
    gap: 80px;

    .comInfo {
        .company {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 26px;
            letter-spacing: 2px;
            font-weight: bold;

            img {
                height: 50px;
                display: block;
            }
        }

        .OtherInfo {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            div {
                color: #9d9d9d;
                font-size: 13px;
            }

            span {
                font-size: 15px;
            }
        }

    }

    .navList {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: 80px;

        .navItem {
            .navTitle {
                font-size: 15px;
            }

            .navRows {
                color: #9d9d9d;
                font-size: 13px;
                margin-top: 8px;
                cursor: pointer;

                &>div:not(:first-child) {
                    padding-top: 4px;
                }
            }
        }
    }
}
</style>