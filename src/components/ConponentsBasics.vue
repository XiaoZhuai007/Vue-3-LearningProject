<script setup>
import { ref } from "vue";
import BasicsButton from "./BasicsComponent/BasicsButton.vue"
import BlogPost from "./BasicsComponent/BlogPost.vue";

const blogList = ref([
    { id: 1, title: 'My journey with Vue', text: "first blog" },
    { id: 2, title: 'Blogging with Vue', text: "second blog" },
    { id: 3, title: 'Why Vue is so fun', text: "third blog" }
])

const posts = ref([])

const postFontSize = ref(1)
</script>

<template>
    <main>
        <div id="app">
            <h1>使用组件</h1>
            <BasicsButton />
            <BasicsButton />
            <BasicsButton />

            <br>
            <br>
            <br>

            <h1>传递props</h1>
            <div :style="{ fontSize: postFontSize + 'em'}">
                <BlogPost v-for="item in blogList" :key="item.id" :title="item.title" :text="item.text" @enlarge-text="postFontSize += 0.1" @narrow-text="postFontSize -=0.1"/>
            </div>


            <h1>通过插槽来分配内容</h1>
        </div>
    </main>
</template>

<style scoped>

</style>