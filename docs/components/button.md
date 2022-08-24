# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue
<template>
  <div style="margin-bottom: 20px">
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
</template>
```

:::
