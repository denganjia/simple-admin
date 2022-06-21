<template>
  <div class="menuHeader">Vue-Naive-Admin</div>
  <n-divider />
  <n-menu :options="menu" inverted v-model:value="activeMenu" accordion v-model:expanded-keys="expandKeys"></n-menu>

</template>


<script setup lang="ts" name="MenuBar">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { menu } from "@/libs/renderMenu"
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
  color: #dadada;
  padding-top: 41px;
  // line-height: 50px;
  // height: 50px;
}
</style>