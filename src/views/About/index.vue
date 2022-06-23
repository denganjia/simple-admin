<template>
  <div>
    <n-h1>关于</n-h1>
    <n-p>Simple Admin 是一个基于 vue3、vite2、TypeScript、NaiveUI的中后台管理系统模板，功能完善，性能可靠，不管出于什么目的，它都能帮到你。</n-p>
    <n-h1>开发环境依赖</n-h1>
    <n-descriptions title="" bordered label-placement="left">
      <n-descriptions-item :label="pack[0]" v-for="pack in entries(packages.devDependencies)">
        {{ pack[1] }}
      </n-descriptions-item>
    </n-descriptions>
    <n-h1>生成环境依赖</n-h1>
    <n-descriptions title="" bordered label-placement="left">
      <n-descriptions-item :label="pack[0]" v-for="pack in entries(packages.dependencies)">
        {{ pack[1] }}
      </n-descriptions-item>
    </n-descriptions>
  </div>
</template>


<script setup lang="ts">
import packages from "../../../package.json"
const entries = (packs: {}) => {
  return Object.entries(packs)
}
</script>


<style scoped lang="scss">
</style>