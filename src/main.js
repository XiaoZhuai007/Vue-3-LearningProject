// 导入创建应用模块
import { createApp } from 'vue'

// 从一个单文件组件中导入根组件
import App from './App.vue'
import templateSyntaxApp from './components/templateSyntax.vue'
import reactivityFundamentalsApp from './components/reactivityFundamentals.vue'
import computedApp from './components/computed.vue'
import classAndStyleApp from './components/classAndStyle.vue'
import conditionalApp from './components/conditional.vue'
import listApp from './components/list.vue'
import eventHadingApp from './components/eventHading.vue'
import fromsApp from './components/forms.vue'

// 导入全局CSS
import './assets/main.css'

// 创建应用实例 一
const app = createApp(App);

// 挂在应用
app.mount('#app');

// 创建应用实例 二
const app1 = createApp({
    data() {
        return {
            count: 0
        }
    }
})

// 挂在应用 二
app1.mount("#app1")

// 异常处理器 二
app1.config.errorHandler = (error) => {
    /* 处理错误 */
    console.log(error)
}

const templateSyntax = createApp(templateSyntaxApp)
templateSyntax.mount("#templateSyntaxApp")

const reactivityFundamentals = createApp(reactivityFundamentalsApp)
reactivityFundamentals.mount("#reactivityFundamentalsApp")

const computedAppMount = createApp(computedApp)
computedAppMount.mount("#computedAppMount")

const classAndStyle = createApp(classAndStyleApp)
classAndStyle.mount("#classAndStyleApp")

const conditional = createApp(conditionalApp)
conditional.mount("#conditionalApp")

const listDemo = createApp(listApp)
listDemo.mount("#listApp")

const eventHading = createApp(eventHadingApp)
eventHading.mount("#eventHadingApp")

const froms = createApp(fromsApp)
froms.mount("#fromsApp")




