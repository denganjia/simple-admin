<template>
  <n-layout has-sider style="height: 100vh;">
    <n-layout-sider width="250" inverted show-trigger="bar" :show-collapsed-content="false" :collapsed-width="0"
      v-model:collapsed="collapsed">
      <MenuBar :collapsed="collapsed"></MenuBar>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header v-model:collapsed="collapsed"></Header>
      </n-layout-header>
      <n-layout-content>
        <TabBar></TabBar>

        <router-view></router-view>
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-layout>

</template>


<script setup lang="ts" name="layout">
import MenuBar from './components/MenuBar.vue';
import Header from "./components/Header.vue";
import TabBar from "./components/TabBar.vue";
import { ref } from "vue"
const collapsed = ref(false)
</script>


<style scoped lang="scss">
</style>