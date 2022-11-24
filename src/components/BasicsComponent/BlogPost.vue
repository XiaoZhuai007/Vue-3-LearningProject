<script setup>
defineProps(['title', 'text'])
</script>

<template>
    <main>
        <div id="app">
            <h4>{{ title }}</h4>
            <div>{{ text }}</div>

            <button @click="$emit('enlarge-text')">Enlarge text</button>
            <button @click="$emit('narrow-text')">Narrow text</button>
        </div>
    </main>
</template>

<style scoped>

</style>