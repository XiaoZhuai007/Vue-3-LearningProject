<script setup>
import { ref } from 'vue';

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo', children: [1, 2, 3, 4] }, { message: 'Bar', children: [1, 2, 3, 4] }, { message: 'Zero', children: [1, 2, 3, 4] }])

const myObject = ref({
    title: 'How to do lists in Vue',
    author:'XiaoZhuai',
    publishedAt: '2022-01-01'
})
</script>

<template>
    <main>
        <div id="app">
            <h1>v-for</h1>
            <li v-for="(item, index) in items ">
                {{ parentMessage }}-{{ index }}-{{ item }}
            </li>

            <br>
            <br>
            <br>

            <h1>for 嵌套</h1>
            <li v-for="item in items">
                <span v-for="childItem in item.children">
                    {{ item.message }} -- {{ childItem }}
                </span>
            </li>

            <br>
            <br>
            <br>

            <h1>v-for与对象</h1>
            <ul>
                <li v-for="vaule in myObject">
                    {{vaule}}
                </li>

                <br>

                <li v-for="(value,key,index) in myObject">
                {{index}}--{{key}}:{{value}}
                </li>
            </ul>

            <h1>v-for 里使用范围值</h1>
            <span v-for="n in 10">
            {{n}}&nbsp;</span>

            <h1>列表渲染-练习案例</h1>
            <table>
                <tr>
                    <td>
                        1
                    </td>

                    <td>
                        2
                    </td>
                </tr>
            </table>
        </div>
    </main>
</template>

<style scoped>
h1{
    text-align: center;
}
</style>