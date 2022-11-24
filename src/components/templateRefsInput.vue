<script setup>
import { ref, onMounted } from 'vue';
const input = ref(null)

const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const itemRefs = ref([])

const templateInport= ref(null)
onMounted(() => {
    input.value.focus()
    alert(itemRefs.value.map(i=>i.textContent))
})
</script>

<template>
    <main>
        <div id="app">
            <h1>访问模板引用</h1>
            <input ref="input" />

            <h1>v-for 中的模板引用<span style="font-size: 1px;">&nbsp;需要 v3.2.25 及以上版本</span></h1>

            <ul>
                <li v-for="(item,index) in list" ref="itemRefs">
                    [{{index}}]{{ item }}
                </li>
            </ul>

            <h1>函数模板引用</h1>
            <input type="text" :ref="(el)=>{templateInport = el}">
        </div>
    </main>
</template>

<style scoped>

</style>