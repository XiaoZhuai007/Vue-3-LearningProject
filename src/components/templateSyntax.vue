<script setup>
import { ref } from 'vue';
const msg = ref("This is a message");

const rawHtml = ref("<span style='color: red'>This should be red.</span>")

const dynamicId = ref("dynamicId")

const number = ref(0)

const ok = ref(true)

const id = ref('id')

const objectAttrs = {
    id: 'container',
    class: 'wrapper'
}

const url = ref('https://www.baidu.com')

function toTitleDate(date) {
    return new Date
}
</script>

<template>
    <main>
        <div id="app">
            <div id="message">
                <h1>模板语法-文本插值</h1>
                <span>Message: {{ msg }}</span>
            </div>

            <br>
            <br>
            <br>

            <div id="rawHTML">
                <h1>模板语法-原始 HTML</h1>
                <!-- 以文本形式插入 页面 -->
                <p>Using text interpolation: {{ rawHtml }}</p>
                <br>
                <!-- 以HTML标签插入 页面 -->
                <p>Using v-html directive: <span v-html="rawHtml"></span></p>

            </div>

            <br>
            <br>
            <br>

            <div id="attributeBinding">
                <h1>Attribute 绑定</h1>
                <!-- 标准写法 -->
                <div v-bind:id="dynamicId">{{ dynamicId }}</div>
                <!-- 简写 -->
                <div v-bind:id="dynamicId">{{ dynamicId }}</div>
            </div>

            <br>
            <br>
            <br>


            <div id="booleanAttributeBinding">
                <h1>布尔型Attribute 绑定</h1>
                <div v-bind="objectAttrs">{{ objectAttrs }}</div>
            </div>

            <br>
            <br>
            <br>

            <div id="useJavaScript">
                <h1>使用JavaScript 表达式</h1>
                <div>{{ number + 1 }}</div>
                <div>{{ ok ? 'YES' : 'NO' }}</div>
                <div>{{ msg.split('').reverse().join('') }}</div>
                <div :id="`list-${id}`"></div>
            </div>

            <br>
            <br>
            <br>

            <div id="useFunction">
                <h1>调用函数</h1>
                <div :title="toTitleDate(date)">
                    {{ toTitleDate(date) }}</div>
            </div>

            <br>
            <br>
            <br>

            <div id="arguments">
                <h1>参数 Arguments</h1>
                <!-- 标准写法 -->
                <a v-bind:href="url">标准写法《百度》</a>
                <br>
                <!-- 简写 -->
                <a :href="url">简写《百度》</a>
            </div>

        
        </div>
    </main>
</template>


<style scoped>
span {
    font-size: 20px;
}
</style>