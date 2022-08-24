import { App } from 'vue'
import TemplateButton from '../src/TemplateButton.vue'
import TsxButton from '../src/TsxButton'

/* 导出为单独组件 */
export { TemplateButton, TsxButton }

/* 插件模式 */
export default {
    install(app: App): void {
        app.component(TemplateButton.__name, TemplateButton)
        app.component(TsxButton.name, TsxButton)
    }
}