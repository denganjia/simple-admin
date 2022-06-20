<template>
  <div class="header">
    <n-space :size="20" justify="space-between" align="center" style="flex:1">
      <div>
        <n-space align="center">
          <n-icon @click="$emit('update:collapsed', !collapsed)" size="24">
            <MenuFold v-show="!collapsed"></MenuFold>
            <MenuUnfold v-show="collapsed"></MenuUnfold>
          </n-icon>
          <n-breadcrumb>
            <n-breadcrumb-item href="#/">
              首页
            </n-breadcrumb-item>
            <n-breadcrumb-item v-for="item in renderBreadcrumb($route.fullPath)" :key="item.path" :clickable="false">
              <n-dropdown :options="item.children" v-if="item.children">
                <span>
                  <n-icon>
                    <icon-park :type="item.icon"></icon-park>
                  </n-icon>
                  {{ item.label }}
                </span>
              </n-dropdown>
              <template v-else>
                <span>
                  <n-icon>
                    <icon-park :type="item.icon"></icon-park>
                  </n-icon>
                  {{ item.label }}
                </span>
              </template>
            </n-breadcrumb-item>
          </n-breadcrumb>
        </n-space>
      </div>
      <div>
        <n-space :size="5" justify="end" align="center">
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button quaternary size="small">
                <template v-slot:icon>
                  <n-icon>
                    <SettingConfig></SettingConfig>
                  </n-icon>
                </template>
              </n-button>
            </template>
            <span>设置</span>
          </n-tooltip>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button @click="changeFullScreen" quaternary size="small">
                <template v-slot:icon>
                  <n-icon>
                    <FullScreen v-if="!isFullScreen"></FullScreen>
                    <OffScreen v-else></OffScreen>
                  </n-icon>
                </template>
              </n-button>
            </template>
            <span>全屏</span>
          </n-tooltip>

          <n-dropdown trigger="hover" :options="option">
            <n-button quaternary>
              <n-space align="center">
                <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <span class="name">池鱼</span>
              </n-space>
            </n-button>
          </n-dropdown>
        </n-space>

      </div>
    </n-space>
  </div>


</template>


<script setup lang="ts" name="Header">
import { MenuFold, MenuUnfold, FullScreen, OffScreen, Logout, SettingConfig } from "@icon-park/vue-next"
import { IconPark } from "@icon-park/vue-next/es/all";
import { renderBreadcrumb } from "@/libs/renderBreadcrumb"
import { renderIcon } from "@/libs/renderIcon"
import { DropdownOption } from "naive-ui";
import { ref } from "vue";

defineProps<{ collapsed: boolean }>()
defineEmits<{ (event: 'update:collapsed', value: boolean): void }>()

// 下拉菜单
const option: DropdownOption[] = [
  { label: '退出登录', key: 'logout', icon: renderIcon(Logout) }
]

// 全屏
const isFullScreen = ref(false)
const changeFullScreen = () => {
  if (!isFullScreen.value) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
document.addEventListener('fullscreenchange', (val) => {
  isFullScreen.value = !isFullScreen.value
});
</script>


<style scoped lang="scss">
.header {
  height: 55px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>