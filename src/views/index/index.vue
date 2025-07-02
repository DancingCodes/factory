<template>
    <div class="onePage">
        <video src="https://filestore.moonc.love/uploadFiles/1747226220892-238510587.mp4" muted autoplay loop></video>
        <div class="content">
            <div class="enText" data-aos="fade-left">
                Be a world-famous biological fermentation enterprise.
                <br>
                fermentation enterprise
            </div>
            <div class="title" data-aos="fade-left" data-aos-delay="100">
                做<span>全球著名</span>的
                <br>
                禅心禅意企业
            </div>
            <div class="moreBtn" data-aos="fade-left" data-aos-delay="200">
                See More
            </div>
        </div>
    </div>

    <div class="twoPage">
        <h1 style="text-align: center;">这里可以展示产品</h1>
    </div>

</template>
<script setup>
</script>
<style scoped lang="scss">
.onePage {
    height: 100vh;
    position: relative;
    background-color: #000;

    video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 120px;
        box-sizing: border-box;

        .enText {
            font-size: 14px;
        }

        .title {
            margin-top: 40px;
            font-size: 50px;
            font-weight: bold;
            line-height: 60px;

            span {
                color: #f09616;
            }
        }

        .moreBtn {
            margin-top: 40px;
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            box-sizing: border-box;
            border-radius: 50px;
            background: linear-gradient(to right, #00924a, #f09616);
            cursor: pointer;
        }
    }
}

.twoPage {
    padding: 30px;
    box-sizing: border-box;
}
</style>