<script setup>
import { ref } from 'vue';
const message = ref('')

const checkedNames = ref([])

const picked = ref('')

const selected = ref('')

const selectedfor = ref('A')

const optionsfor = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])


</script>

<template>
    <main>
        <div id="app">
            <h1>表单输入绑定</h1>

            <br>
            <br>

            <h2>文本绑定</h2>
            <input type="text" placeholder="edit me" v-model="message" />
            <p><b>message:</b>{{ message }}</p>

            <br>
            <br>

            <h2>多行文本</h2>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ message }}</p>

            <br>
            <br>

            <h2>复选框</h2>
            <div>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <br>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <br>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                <br>
                {{ checkedNames }}
            </div>

            <br>
            <br>

            <div>
                <h2>单选按钮</h2>
                <div>Picked: {{ picked }}</div>

                <input type="radio" id="one" value="One" v-model="picked" />
                <label for="one">One</label>

                <input type="radio" id="two" value="Two" v-model="picked" />
                <label for="two">Two</label>
            </div>

            <br>
            <br>

            <div>
                <h2>选择器-单选</h2>
                <div>Selected: {{ selected }}</div>

                <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>

            <div>
                <h2>选择器-多选</h2>
                <div>Selected: {{ selected }}</div>

                <select v-model="selected" multiple style="width: 50px;">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>


        <div>
            <h2>v-for渲染select</h2>
            <div>Selected：{{selectedfor}}</div>
            <select name="test" id="test" v-model="selectedfor">
            <option v-for="option in optionsfor" :value="option.value">{{option.value}}</option>
            </select>
        </div>
        </div>
    </main>
</template>

<style scoped>

</style>
