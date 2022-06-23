<template>
  <n-drawer v-model:show="showDrawer" :auto-focus="false">
    <n-drawer-content title="系统设置">
      <n-divider>
        主题
      </n-divider>
      <n-space justify="center">
        <n-switch :value="theme.isDarkTheme" @update:value="theme.switchDarkTheme()">
          <template #checked-icon>
            🌙
          </template>
          <template #unchecked-icon>
            🌞
          </template>
          <template #checked>
            深色
          </template>
          <template #unchecked>
            浅色
          </template>
        </n-switch>
      </n-space>
      <n-divider>
        主题色
      </n-divider>
      <n-color-picker :swatches="[
        '#63e2b7',
        '#18A058',
        '#2080F0',
        '#F0A020',
      ]" :modes="['hex', 'rgb']" :default-value="theme.themeOverrides.primaryColor" @confirm="setColor"
        :actions="['confirm']" />
      <n-divider>
        导航栏风格
      </n-divider>
      <n-radio-group style="width: 100%;" v-model:value="theme.navBarStyle">
        <n-space justify="space-around">
          <n-space vertical align="center">
            <n-tooltip>
              <template v-slot:trigger>
                <n-image :src="dark" preview-disabled></n-image>
              </template>
              暗色侧边栏
            </n-tooltip>
            <n-radio value='dark'></n-radio>
          </n-space>
          <n-space vertical align="center">
            <n-tooltip>
              <template v-slot:trigger>
                <n-image :src="light" preview-disabled></n-image>
              </template>
              白色侧边栏
            </n-tooltip>
            <n-radio value='light'></n-radio>
          </n-space>
        </n-space>
      </n-radio-group>
    </n-drawer-content>
  </n-drawer>
</template>


<script setup lang="ts">
import dark from "@/assets/imgs/nav-theme-dark.svg"
import light from "@/assets/imgs/nav-theme-light.svg"
import { computed } from 'vue';
import { useTheme } from '@/storages/theme';
const theme = useTheme()
const props = defineProps<{ show: boolean }>()
const emits = defineEmits<{ (e: 'update:show', val: boolean): void }>()

const showDrawer = computed({
  get() {
    return props.show
  },
  set(val) {
    emits('update:show', val)
  }
})
const setColor = (val: string) => {
  console.log(val);

  theme.setPrimaryColor(val)
}
</script>


<style scoped lang="scss">
</style>