<script setup>
import { reactive } from 'vue';
import { nextTick } from 'vue';
const state = reactive({ count: 0 })
function increment() {
    state.count++;
    nextTick(() => {
        // 访问更新后的DOM
        console.log(document.getElementById("show").textContent)
    })
}
</script>


<template>
    <main>
        <div id="app">

            <h1>声明响应式状态</h1>
            <button @click="increment">
                count:{{ state.count }}
            </button>&nbsp;<span id="show">{{ state.count }}</span>
            <br>
            <br>
            <br>

            <h1>响应性语法糖</h1>
        </div>
    </main>
</template>


<style scoped>

</style>