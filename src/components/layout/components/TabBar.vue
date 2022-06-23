<template>
  <n-tabs type="card" size="small" :tabs-padding="20" :value="tabStore.active.label" @close="close">
    <n-tab style="min-width: 60px;" v-for="tab in tabStore.list" :key="tab.key" :name="tab.label" @click="click(tab)"
      :closable="tab.closable">
    </n-tab>
    <template v-slot:suffix>
      <div style="padding-right: 16px;">
        <n-dropdown :options="tabBarOptions" @select="select">
          <n-button type="primary" text>
            <template v-slot:icon>
              <n-icon :component="ArrowCircleDown"></n-icon>
            </template>
          </n-button>
        </n-dropdown>
      </div>
    </template>
  </n-tabs>

</template>


<script setup lang="ts">
import { ArrowCircleDown } from "@icon-park/vue-next"
import { MenuOption, TabsProps } from 'naive-ui';
import { useTabStore } from "@/storages/tabBar"
import { useRouter } from "vue-router"


const tabStore = useTabStore()
const router = useRouter()
// 关闭tab
const close = (name: string) => {
  tabStore.removeTab(name)
}
// tab点击事件
const click = (e: MenuOption) => {
  tabStore.setActiveTab({ label: e.label as string, key: e.key as string })
  router.push({ name: e.key as string })
}
// tabBar下拉菜单
const tabBarOptions = [
  { label: '关闭当前', key: 'current' },
  { label: '关闭其他', key: 'other' },
  { label: '关闭所有', key: 'all' }
]
//
const select = (key: 'current' | 'other' | 'all') => {
  tabStore.closeTab(key)
}
</script>


<style scoped lang="scss">
</style>