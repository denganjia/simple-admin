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
    </n-drawer-content>
  </n-drawer>
</template>


<script setup lang="ts">
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