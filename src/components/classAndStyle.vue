<script setup>
import { ref } from 'vue';

const isActive = ref(true)
const hasError = ref(false)


function changeStatus() {
    hasError.value = !hasError.value;
}
</script>

<template>
    <main>
        <div id="app">
            <div id="bindingHtmlClass">
                <h1>绑定 HTML 属性</h1>
                <button @click="changeStatus">点击切换</button>
                <div class="static" :class="{ 'active': isActive, 'text-danger': hasError }"> 动态Class</div>
            </div>
        </div>
    </main>
</template>


<style scoped>
.active {
    font-weight: bolder;
    color: blue;
}

.text-danger {
    font-style: italic;
    font-size: 30px;
}
</style>