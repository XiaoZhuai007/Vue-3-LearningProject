<script setup>
import { ref } from "vue";
import BasicsButton from "./BasicsComponent/BasicsButton.vue"
import BlogPost from "./BasicsComponent/BlogPost.vue"
import alertBox from "./BasicsComponent/AlertBox.vue"
import CustomInput from "./BasicsComponent/CustomInput.vue"

const blogList = ref([
    { id: 1, title: 'My journey with Vue', text: "first blog" },
    { id: 2, title: 'Blogging with Vue', text: "second blog" },
    { id: 3, title: 'Why Vue is so fun', text: "third blog" }
])

const inputText = ref();

const componentList = ref({ BlogPost, alertBox })
const currentTab = ref('')

const posts = ref([])

const postFontSize = ref(1)

const componentModel = ref();
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
            <div :style="{ fontSize: postFontSize + 'em' }">
                <BlogPost v-for="item in blogList" :key="item.id" :title="item.title" :text="item.text"
                    @enlarge-text="postFontSize += 0.1" @narrow-text="postFontSize -= 0.1" />
            </div>

            <br>
            <br>
            <br>

            <h1>通过插槽来分配内容</h1>
            <alertBox>
                This is HTML message!
            </alertBox>

            <br>
            <br>
            <br>

            <h1>动态组件</h1>
            <button v-for="(_, item) in componentList" :key="item" @click="currentTab = item">{{ item }}</button>
            <KeepAlive>
                <component :is="componentList[currentTab]"></component>
            </KeepAlive>

            <br>
            <br>
            <br>

            <h2>v-model 等价代码</h2>
            <textarea name="" id="" cols="30"
                rows="10"> <input type="text" @input="inputText = $event.target.value" :value="inputText"/> </textarea>
            <div>
                <input type="text" @input="inputText = $event.target.value" :value="inputText" />
                <input type="text" @input="inputText = $event.target.value" :value="inputText" />
            </div>
            {{ inputText }}

            <br>
            <br>
            <br>

            <h2>再组件内使用 v-model 的用法  一</h2>
            <CustomInput v-model="componentModel"></CustomInput>
            {{componentModel}}

            <br>
            <h2>再组件内使用 v-model 的用法  二</h2>
            
        </div>
    </main>
</template>

<style scoped>

</style>