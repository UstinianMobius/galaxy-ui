import { createApp } from 'vue'
import GalaxyUI from '../lib/main'

const app = createApp({
    template: `
        <div style="margin-bottom: 20px;">
            <TsxButton color="blue">主要按钮</TsxButton>
            <TsxButton color="green">绿色按钮</TsxButton>
            <TsxButton color="gray">灰色按钮</TsxButton>
            <TsxButton color="yellow">黄色按钮</TsxButton>
            <TsxButton color="red">红色按钮</TsxButton>
        </div>
        <div style="margin-bottom: 20px;">
            <TsxButton color="blue" plain>朴素按钮</TsxButton>
            <TsxButton color="green" plain>绿色按钮</TsxButton>
            <TsxButton color="gray" plain>灰色按钮</TsxButton>
            <TsxButton color="yellow" plain>黄色按钮</TsxButton>
            <TsxButton color="red" plain>红色按钮</TsxButton>
        </div>
        <div style="margin-bottom: 20px;">
            <TsxButton size="small" plain>小按钮</TsxButton>
            <TsxButton size="medium" plain>中按钮</TsxButton>
            <TsxButton size="large" plain>大按钮</TsxButton>
        </div>
        <div style="margin-bottom: 20px;">
            <TsxButton color="blue" round plain icon="search">搜索按钮</TsxButton>
            <TsxButton color="green" round plain icon="edit">编辑按钮</TsxButton>
            <TsxButton color="gray" round plain icon="check">成功按钮</TsxButton>
            <TsxButton color="yellow" round plain icon="message">提示按钮</TsxButton>
            <TsxButton color="red" round plain icon="delete">删除按钮</TsxButton>
        </div>
        <div style="margin-bottom: 20px;">
            <TsxButton color="blue" round plain icon="search"></TsxButton>
            <TsxButton color="green" round plain icon="edit"></TsxButton>
            <TsxButton color="gray" round plain icon="check"></TsxButton>
            <TsxButton color="yellow" round plain icon="message"></TsxButton>
            <TsxButton color="red" round plain icon="delete"></TsxButton>
        </div>
    `
})

app.use(GalaxyUI).mount('#app')
