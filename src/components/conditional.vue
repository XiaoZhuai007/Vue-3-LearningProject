<script setup>
import { ref } from 'vue';

const awesome = ref(true)

const isTure = ref(true)

const ok = ref(true)

</script>

<template>
<main>
    <div id="app" class="div">
        <h1>条件渲染</h1>
        <h2>v-if</h2>
        <h3 v-if="awesome">Vue is awesome!</h3>

        <br>
        <br>
        <br>

        <h2>v-else</h2>
        <button @click="isTure = !isTure">Change</button>
        <h3 v-if="isTure">Yes,It's good !</h3>
        <h3 v-else>Oh no X.X</h3>

        <br>
        <br>
        <br>

        <h2>v-show</h2>
        <h3 v-show = "ok">Hello!</h3>


    </div>
</main>
</template>    

<style scoped>
h2{
    text-align: center;
}
</style>