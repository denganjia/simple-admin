<template>
  <div class="menuHeader">Vue-Naive-Admin</div>
  <n-divider />
  <n-menu :options="menu" v-model:value="activeMenu" @update:value="updateMenu" accordion
    v-model:expanded-keys="expandKeys"></n-menu>

</template>


<script setup lang="ts" name="MenuBar">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { menu } from "@/libs/renderMenu"
import { MenuOption } from 'naive-ui';
import { useTabStore } from '@/storages/tabBar';

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
const updateMenu = (val: string, item: MenuOption) => {
  tabStore.addTab(item)
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
  padding-top: 41px;
}
</style>