<template>
  <div class="menuHeader">Simple Admin</div>
  <!-- <n-divider /> -->
  <n-menu :options="menu" v-model:value="activeMenu" @update:value="updateMenu" accordion
    v-model:expanded-keys="expandKeys" :inverted="theme.navBarStyle === 'dark'"></n-menu>
</template>


<script setup lang="ts" name="MenuBar">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { menu } from "@/libs/renderMenu"
import { MenuOption } from 'naive-ui';
import { useTabStore, useTheme, useBreadcrumbStore } from '@/storages';

// 首次进入时会设置面包屑缓存，避免每次切换路由重新查找面包屑
const breadcrumbStore = useBreadcrumbStore()
breadcrumbStore.init(menu)

const theme = useTheme()
const tabStore = useTabStore()
const route = useRoute()
const router = useRouter()
// 当前激活的menu
const activeMenu = computed({
  get: () => {
    return route.name
  },
  set: (val) => {
    router.push({ name: val as string })
  }
})
// 监听menu更新，将数据添加到tabStore
const updateMenu = (val: string, item: Required<MenuOption>) => {
  tabStore.addTab({ label: item.label as string, key: item.key as string })
}
// 控制展开的menu
const expandKeys = ref<string[]>([])


// 监听路由 控制展开的menu
watch(() => route.fullPath, (n, o) => {
  const pathlist = n.split('/').slice(1)
  if (pathlist.length > 1) {
    expandKeys.value = pathlist.slice(0, -1)
  } else {
    expandKeys.value = []
  }

}, { immediate: true })

defineProps<{ collapsed: boolean }>()
</script>


<style scoped lang="scss">
.menuHeader {
  font-size: 24px;
  text-align: center;
  color: var(--n-text-color);
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--n-border-color);
  box-sizing: border-box;
}
</style>