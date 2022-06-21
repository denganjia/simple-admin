<template>
  <n-layout has-sider style="height: 100vh;">
    <n-layout-sider width="250" inverted show-trigger="bar" :show-collapsed-content="false" :collapsed-width="0"
      v-model:collapsed="collapsed" bordered >
      <MenuBar :collapsed="collapsed"></MenuBar>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header v-model:collapsed="collapsed"></Header>
        <!-- <TabBar></TabBar> -->
        <div>
          <n-tabs type="card" size="small" :tabs-padding="20">
            <n-tab style="min-width: 60px;" v-for="panel in 30" :key="panel" :tab="panel.toString()" :name="panel">
            </n-tab>
            <template v-slot:suffix>
              <div style="padding-right: 16px;">
                <n-button type="primary" >更多</n-button>
              </div>
            </template>
          </n-tabs>
        </div>

      </n-layout-header>
      <n-layout-content embedded :content-style="contentStyle">
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
import { ref, CSSProperties } from "vue"

const panelsRef = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
const collapsed = ref(false)

const contentStyle: CSSProperties = {
  boxSizing: 'border-box',
  padding: '20px'
}
</script>


<style scoped lang="scss">
</style>