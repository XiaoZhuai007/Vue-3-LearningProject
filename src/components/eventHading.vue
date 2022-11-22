<script setup>
import { ref } from 'vue';

//内联事件处理器
const count = ref(0)

//方法事件处理器
const name = ref('Vue.js')

function greet(event) {
    alert(`Hello${name.value}!`)
    if (event) {
        alert(event.target.tagName)
    }
}
</script>

<template>
    <main>
        <div id="app">
            <h1>监听事件</h1>

            <h2>内联事件处理器</h2>
            <button @click="count++">{{ count }}</button>

            <h2>方法事件处理器</h2>
            <button @click="greet">Greet</button>
        </div>
    </main>
</template>

<style scoped>

</style>