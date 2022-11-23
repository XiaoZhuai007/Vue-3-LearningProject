<script setup>
import { ref, watch } from 'vue'
import App from '../App.vue';

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const mousePosition = ref([0, 0])

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  console.log(newQuestion)
  console.log(oldQuestion)
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

mounted
</script>

<template>
  <main>
    <div id="app">
      <p>
      <h1>基本示例</h1>
      Ask a yes/no question:
      <input v-model="question" />
      </p>
      <p>{{ answer }}</p>

      <br>
      <br>
      <br>

      <h1>鼠标坐标监听</h1>
      <p>当前鼠标坐标{{ mousePosition }}</p>
      <div id="mouseMoveAria" style="height: 100px;border: 1px solid #000;margin-bottom: 10px auto;background-color: #eee; display: flex;justify-content: center; align-items: center;">
        <span>鼠标监听区域</span>
      </div>
    </div>
  </main>
</template>
