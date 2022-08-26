import { createApp } from 'vue'
import GalaxyUI from '../lib/main'

const name = '123'

const app = createApp({
    template: `
        <div style="margin-bottom: 20px;">
            <GButton color="blue">主要按钮</GButton>
            <GButton color="green">绿色按钮</GButton>
            <GButton color="gray">灰色按钮</GButton>
            <GButton color="yellow">黄色按钮</GButton>
            <GButton color="red">红色按钮</GButton>
        </div>
        <div style="margin-bottom: 20px;">
            <GButton color="blue" plain>朴素按钮</GButton>
            <GButton color="green" plain>绿色按钮</GButton>
            <GButton color="gray" plain>灰色按钮</GButton>
            <GButton color="yellow" plain>黄色按钮</GButton>
            <GButton color="red" plain>红色按钮</GButton>
        </div>
        <div style="margin-bottom: 20px;">
            <GButton size="small" plain>小按钮</GButton>
            <GButton size="medium" plain>中按钮</GButton>
            <GButton size="large" plain>大按钮</GButton>
        </div>
        <div style="margin-bottom: 20px;">
            <GButton color="blue" round plain icon="search">搜索按钮</GButton>
            <GButton color="green" round plain icon="edit">编辑按钮</GButton>
            <GButton color="gray" round plain icon="check">成功按钮</GButton>
            <GButton color="yellow" round plain icon="message">提示按钮</GButton>
            <GButton color="red" round plain icon="delete">删除按钮</GButton>
        </div>
        <div style="margin-bottom: 20px;">
            <GButton color="blue" round plain icon="search"></GButton>
            <GButton color="green" round plain icon="edit"></GButton>
            <GButton color="gray" round plain icon="check"></GButton>
            <GButton color="yellow" round plain icon="message"></GButton>
            <GButton color="red" round plain icon="delete"></GButton>
        </div>
    `
})

app.use(GalaxyUI).mount('#app')
