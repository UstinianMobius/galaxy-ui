/// <reference types='vitest' />

const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const RollopOptions = {
    external: ['vue'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
        },
    },
    plugins: [
        vue({
            reactivityTransform: true
        }),
        vueJsx(),
        Unocss()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    build: {
        rollupOptions: RollopOptions,
        minify: false,
        // cssCodeSplit 这个选项是为了决定在编译的时候是否要独立输出css
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'GalaxyUI',
            fileName: (format) => `galaxy-ui.${format}.js`,
            formats: ["es", "umd", "iife"]
        },
        outDir: './dist',
    }
})

