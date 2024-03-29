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
            <n-breadcrumb-item :clickable="false">
              <n-dropdown :options="menu" @select="onBreadcrumbSelect" trigger="click">
                首页
              </n-dropdown>
            </n-breadcrumb-item>
            <n-breadcrumb-item v-for="item in breadcrumbStore.get($route.name as string)" :key="item.key"
              :clickable="false">
              <n-dropdown :options="item.children" v-if="item.children" @select="onBreadcrumbSelect" trigger="click">
                <span>
                  <RenderIcon :icon="item.icon"></RenderIcon>
                  {{ item.label }}
                </span>
              </n-dropdown>
              <template v-else>
                <span>
                  <RenderIcon :icon="item.icon"></RenderIcon>
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
              <n-button quaternary size="small" @click="showSetting = true">
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

          <n-dropdown trigger="hover" :options="option" @select="userSelect">
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
  <Setting v-model:show="showSetting"></Setting>
</template>


<script setup lang="ts" name="Header">
import { MenuFold, MenuUnfold, FullScreen, OffScreen, Logout, SettingConfig } from "@icon-park/vue-next"
import { menu } from "@/libs/renderMenu";
import { renderIcon } from "@/libs/renderIcon"
import { DropdownOption } from "naive-ui";
import RenderIcon from "@/components/RenderIcon/index.vue"
import { ref } from "vue";
import { useRouter } from "vue-router"
import { useTabStore, useBreadcrumbStore } from "@/storages"
import Setting from "@/components/Setting/index.vue"

const router = useRouter()
const tabStore = useTabStore()
const breadcrumbStore = useBreadcrumbStore()

defineProps<{ collapsed: boolean }>()
defineEmits<{ (event: 'update:collapsed', value: boolean): void }>()
//显示设置
const showSetting = ref(false)

// 下拉菜单
const option: DropdownOption[] = [
  { label: '退出登录', key: 'logout', icon: renderIcon(Logout) }
]
// 用户下拉菜单选择
const userSelect = (key: string) => {
  if (key === 'logout') {
    router.push('/login')
  }
}

//面包屑下拉菜单选择
const onBreadcrumbSelect = (val: string, option: any) => {
  tabStore.addTab(option)
  router.push({ name: val })
}

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