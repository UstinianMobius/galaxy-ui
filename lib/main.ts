import { App } from 'vue'
import TemplateButton from '../src/TemplateButton.vue'
import GButton from '../src/button'

/* 导出为单独组件 */
export { TemplateButton, GButton }

/* 插件模式 */
export default {
    install(app: App): void {
        app.component(TemplateButton.__name, TemplateButton)
        app.component(GButton.name, GButton)
    }
}