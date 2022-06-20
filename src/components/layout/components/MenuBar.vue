<template>
  <div class="menuHeader">Vue-Naive-Admin</div>
  <n-divider />
  <n-menu :options="menu" inverted v-model:value="activeMenu"></n-menu>

</template>


<script setup lang="ts" name="MenuBar">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { menu } from "@/libs/renderMenu"
const route = useRoute()
const router = useRouter()
const activeMenu = computed({
  get: () => {
    return route.name
  },
  set: (val) => {
    router.push({ name: val as string })
  }
})
defineProps<{ collapsed: boolean }>()
</script>


<style scoped lang="scss">
.menuHeader {
  font-size: 24px;
  text-align: center;
  color: #dadada;
  padding-top: 24px;
  // line-height: 50px;
  // height: 50px;
}
</style>