<template>
  <n-tabs type="card" size="small" :tabs-padding="20" :theme-overrides="tabsThemeOverrides"
    :value="tabStore.active.label" @close="close">
    <n-tab style="min-width: 60px;" v-for="tab in tabStore.list" :key="tab.key" :name="tab.label" @click="click(tab)"
      :closable="tab.closable">
    </n-tab>
    <template v-slot:suffix>
      <div style="padding-right: 16px;">
        <n-button type="primary">更多</n-button>
      </div>
    </template>
  </n-tabs>

</template>


<script setup lang="ts">
import { MenuOption, TabsProps } from 'naive-ui';
import { useTheme } from "@/storages/theme"
import { useTabStore } from "@/storages/tabBar"
import { computed } from 'vue';
import { useRouter } from "vue-router"

type TabsThemeOverrides = NonNullable<TabsProps['themeOverrides']>

const theme = useTheme()
const tabStore = useTabStore()
const router = useRouter()
const tabsThemeOverrides = computed<TabsThemeOverrides>(() => ({
  tabColor: theme.darkTheme ? '#18181c' : '#fff',
}))
const close = (name: string) => {
  tabStore.removeTab(name)
}
const click = (e: MenuOption) => {
  tabStore.setActiveTab(e)
  router.push({ name: e.key as string })
}
</script>


<style scoped lang="scss">
</style>