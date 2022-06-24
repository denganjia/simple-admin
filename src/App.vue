<script setup lang="ts">
import { DEFAULT_ICON_CONFIGS, IconProvider } from '@icon-park/vue-next';
import LoadingBar from "@/components/LoadingBar/index.vue"
import { darkTheme, GlobalThemeOverrides, zhCN, dateZhCN } from 'naive-ui'
import { computed, ref } from "vue"
import { useTheme } from "@/storages"

const theme = useTheme()
IconProvider({ ...DEFAULT_ICON_CONFIGS, strokeWidth: 3, strokeLinejoin: 'miter', strokeLinecap: 'square' });


const themeOverrides = computed<GlobalThemeOverrides>(() => ({
  common: {
    primaryColor: theme.primaryColor,
    primaryColorHover: theme.primaryColorHover,
    primaryColorPressed: theme.primaryColorPressed,
    primaryColorSuppl: theme.primaryColorHover
  },
}))
</script>

<template>
  <n-config-provider :theme="theme.darkTheme ? darkTheme : null" :theme-overrides="themeOverrides" :locale="zhCN"
    :date-locale="dateZhCN">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <loading-bar></loading-bar>
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>

</template>

<style>
/* 下面我们会解释这些 class 是做什么的 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
