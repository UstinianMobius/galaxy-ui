/// <reference types='vitest' />

const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const RollopOptions = {
  /* external作用是将该模块保留在bundle之外，比如在数组中添加了vue ，就是为了不让vue打包到组件库中 */
  external: ["vue"],
  /* output用于 umd/iffe 包中，意思是全局中的某个模块在组件库中叫什么名字 */
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js", // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    Unocss(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions: RollopOptions,
    minify: "terser", // 指定使用哪种混淆器 boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true, // 在编译时独立输出css
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "GalaxyUI",
      fileName: (format) => `galaxy-ui.${format}.js`,
      formats: ["es", "umd", "iife"], //导出模块类型
    },
    outDir: "./dist",
  },
});
